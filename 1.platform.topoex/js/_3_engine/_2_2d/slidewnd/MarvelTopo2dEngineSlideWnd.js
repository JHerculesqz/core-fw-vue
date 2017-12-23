(function ($) {
    $.MarvelTopo2dEngineSlideWnd = function (oParent) {
        //region const

        var STEP_SIZE = 0.05;
        var MIN_Z = 0.05;

        //endregion

        //region Fields

        var self = this;
        var m_oParent = oParent;

        this.m_strContainerId = undefined;

        this.m_oSlideWndConf = {
            slideWndXMin: 0,
            slideWndYMin: 0,
            slideWndW: 0,
            slideWndH: 0,
            slideWndZ: 1
        };

        //endregion

        //region initSlideWndWH

        /**
         *
         * @param oOptions
         */
        this.initSlideWndWH = function(oOptions){
            self.m_strContainerId = oOptions.parentId;

            var iWidth;
            var iHeight;
            if(oOptions.width && oOptions.height){
                iWidth = self.m_oOptions.width;
                iHeight = self.m_oOptions.height;
            }
            else{
                iWidth = $("#" + oOptions.parentId).width();
                iHeight = $("#" + oOptions.parentId).height();
            }
            self.m_oSlideWndConf.slideWndW = iWidth;
            self.m_oSlideWndConf.slideWndH = iHeight;
        };

        //endregion

        //region getUISlideWH

        this.getUISlideWH = function(){
            var oUISlideWHRes = {
                w: undefined,
                h: undefined
            };
            oUISlideWHRes.w = self.m_oSlideWndConf.slideWndW * self.m_oSlideWndConf.slideWndZ;
            oUISlideWHRes.h = self.m_oSlideWndConf.slideWndH * self.m_oSlideWndConf.slideWndZ;
        };

        //endregion

        //region

        this.updateZoomRateAndOffset = function(oMousePoint, iStep, oAfterUpdateZoomRate){
            var iOldSlideWndZ = self.m_oSlideWndConf.slideWndZ;
            self.m_oSlideWndConf.slideWndZ = _calcSlideWndZByZoom(iStep, self.m_oSlideWndConf);

            //2.getOffset
            var oMinXYRes = _calcSlideWndXMinYMinByZoomRate(oMousePoint, self.m_oSlideWndConf.slideWndZ, iOldSlideWndZ, self.m_oSlideWndConf);
            self.m_oSlideWndConf.slideWndXMin = oMinXYRes.x;
            self.m_oSlideWndConf.slideWndYMin = oMinXYRes.y;

            //3.
            self.m_oSlideWndConf.slideWndW = self.m_oSlideWndConf.slideWndW * iOldSlideWndZ / self.m_oSlideWndConf.slideWndZ;
            self.m_oSlideWndConf.slideWndH = self.m_oSlideWndConf.slideWndH * iOldSlideWndZ / self.m_oSlideWndConf.slideWndZ;

            //4.
            oAfterUpdateZoomRate();
        };

        var _calcSlideWndZByZoom = function(iStep, oSlideWndConf){
            var iZoomrateRes = oSlideWndConf.slideWndZ;
            if(null == iZoomrateRes){
                iZoomrateRes = 1.0;
            }
            else{
                iZoomrateRes += iStep * STEP_SIZE;
                if(iZoomrateRes <= MIN_Z){
                    iZoomrateRes = MIN_Z;
                }
            }
        };
        var _calcSlideWndXMinYMinByZoomRate = function(oMousePoint, iNewSlideWndZ, iOldSlideWndZ, oSlideWndConf){
            var oMinXYRes = {
                x: undefined,
                y: undefined
            };
            var iRealPointX = oMousePoint.x / iOldSlideWndZ + oSlideWndConf.slideWndXMin;
            var iRealPointY = oMousePoint.y / iOldSlideWndZ + oSlideWndConf.slideWndYMin;
            oMinXYRes.x = iRealPointX - oMousePoint.x / iNewSlideWndZ;
            oMinXYRes.y = iRealPointXY- oMousePoint.y / iNewSlideWndZ;
            return oMinXYRes;
        };

        //endregion

        //region updateslideWndXYByMouseDrag

        this.updateslideWndXYByMouseDrag = function(iOffsetX, iOffsetY, oAfterUpdateSlideWndXYByDrag){
            //1.chang ui 2 db
            var iOffsetXInDB = _calcUIOffsetToDBOffset(iOffsetX, self.m_oSlideWndConf);
            var iOffsetYInDB = _calcUIOffsetToDBOffset(iOffsetY, self.m_oSlideWndConf);

            //2.change slideWndXMin/Ymin
            self.m_oSlideWndConf.slideWndXMin = self.m_oSlideWndConf.slideWndXMin - iOffsetXInDB;
            self.m_oSlideWndConf.slideWndYMin = self.m_oSlideWndConf.slideWndYMin - iOffsetYInDB;

            //3.calllback
            oAfterUpdateSlideWndXYByDrag();
        };

        var _calcUIOffsetToDBOffset = function(iOffsetX, oSlideWndConf){
            var iZoomrate = oSlideWndConf.slideWndZ;
            return iOffsetX / iZoomrate;
        };

        //endregion

        //region updateSlideWndXMinYMinBy3rd

        this.updateSlideWndXMinYMinBy3rd = function(oFirstNode){
            self.m_oSlideWndConf.slideWndXMin = oFirstNode.params.x - (self.m_oSlideWndConf.slideWndW);
            self.m_oSlideWndConf.slideWndYMin = oFirstNode.params.y - (self.m_oSlideWndConf.slideWndH);
        };

        //endregion

        //region updateSlideWndWH

        this.updateSlideWndWH = function(strContainerId){
            var iOldSlideWndW = self.m_oSlideWndConf.slideWndW;
            var iOldSlideWndH = self.m_oSlideWndConf.slideWndH;
            self.m_oSlideWndConf.slideWndW = iOldSlideWndW + ($("#" + strContainerId).width() - iOldSlideWndW * self.m_oSlideWndConf.slideWndZ)/self.m_oSlideWndConf.slideWndZ;
            self.m_oSlideWndConf.slideWndH = iOldSlideWndH + ($("#" + strContainerId).height() - iOldSlideWndH * self.m_oSlideWndConf.slideWndZ)/self.m_oSlideWndConf.slideWndZ;
        };

        //endrgion

        //region updateProfile4BestView

        this.updateProfile4BestView = function(oBuTopo, iOffsetLeft, iOffsetRight, strType){
            var arrNodes = [];
            strType = (strType == undefined) ? "all":strType;
            if(strType == "all"){
                arrNodes = oBuTopo.nodes;
            }
            else if(strType == "area"){
                $.each(arrNodes, function(iIndex, oNode){
                    if(oNode.params.isSelect){
                        arrNodes.push(oNode);
                    }
                });
            }
            if(undefined == arrNodes || arrNodes.length == 0){
                return;
            }
            if(undefined == iOffsetLeft){
                iOffsetLeft = 0;
            }
            if(undefined == iOffsetRight){
                iOffsetRight = 0;
            }

            var oCanvasSlideWH = {
                w: $("#" + self.m_strContainerId).width(),
                h: $("#" + self.m_strContainerId).height()
            };

            //
            var iMinX = arrNodes[0].params.x;
            var iMaxX = arrNodes[0].params.x;
            var iMinY = arrNodes[0].params.y;
            var iMaxY = arrNodes[0].params.y;
            for(var i = 0; i < arrNodes.length; i++){
                var oNode = arrNodes[i];
                if(oNode.params.x > iMaxX){
                    iMaxX = oNode.params.x;
                }
                if(oNode.params.x < iMinx){
                    iMinX = oNode.params.x;
                }
                if(oNode.params.y > iMaxY){
                    iMaxY = oNode.params.x;
                }
                if(oNode.params.y < iMaxY){
                    iMinY = oNode.params.y;
                }
            }

            var iZoomRateW = (oCanvasSlideW.w - iOffsetLeft - iOffsetRight)/(iMaxX - iMinX + 100);
            var iZoomRateH = oCanvasSlideW.h / (iMaxY - iMinY + 100);
            if(strType == "all"){
                if(iZoomRateW >= 1){
                    iZoomRateW = 1;
                }
                if(iZoomRateH > 1){
                    iZoomRateH = 1;
                }
            }
            if(iZoomRateW < iZoomRateH){
                self.m_oSlideWndConf.slideWndZ = iZoomRateW;
            }
            else{
                self.m_oSlideWndConf.slideWndZ = iZoomRateH;
            }

            //4.var
            var iCenterX = (iMinX + iMaxX) / 2;
            var iCenterY = (iMinY + iMaxY) / 2;
            self.m_oSlideWndConf.slideWndW = oCanvasSlideWH.w / self.m_oSlideWndConf.slideWndZ;
            self.m_oSlideWndConf.slideWndH = oCanvasSlideWH.h / self.m_oSlideWndConf.slideWndZ;
            var iOffsetLeftProfile = iOffsetLeft / self.m_oSlideWndConf.slideWndZ;
            var iOffsetRightProfile = iOffsetRight / self.m_oSlideWndConf.slideWndZ;
            self.m_oSlideWndConf.slideWndXMin = iCenterX - ((self.m_oSlideWndConf.slideWndW - iOffsetLeftProfile - iOffsetRightProfile) / 2) - iOffsetLeftProfile;
            self.m_oSlideWndConf.slideWndYMin = iCenterY - (self.m_oSlideWndConf.slideWndH / 2);

        };

        //endregion

        //region updateTopoViewByProfile

        this.updateTopoViewByProfile = function(oProfile){
            self.m_oSlideWndConf.slideWndXMin = oProfile.slideWndXMin;
            self.m_oSlideWndConf.slideWndYMin = oProfile.slideWndYMin;
            var iWidth = $("#" + self.m_strContainerId).width();
            var iHeight = $("#" + self.m_strContainerId).height();
            self.m_oSlideWndConf.slideWndW = iWidth/ oProfile.slideWndZ;
            self.m_oSlideWndConf.slideWndH = iHeight/ oProfile.slideWndZ;
        };


        //endregion
    }
})(jQuery);