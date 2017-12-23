(function ($) {
    $.MarvelTopoResource = function () {
        //region const

        //endregion

        //region Fields

        var self = this;
        this.m_oOptions = [{
            uiImgKey: "default",
            uiImgW: 32,
            uiImgH: 32,
            uiImgPath: "image/default.svg"
        }];

        this.m_mapImage = {

        };

        //endregion

        //region init

        this.init = function (arrImgMap, oAfterInitCallback) {
            $.extend(self.m_oOptions, arrImgMap);

            var iCount = self.m_oOptions.length;
            $.each(self.m_oOptions, function (iIndex, oItem) {
                _initItem(oItem.uiImgKey, oItem.uiImgW, oItem.uiImgH, oItem.uiImgPath, function () {
                    if (iIndex === iCount - 1) {
                        oAfterInitCallback();
                    }
                });
            });
        };

        var _initItem = function (strKey, iUiImgW, iUiImgH, strImageUrl, oCallbackFinish4Item) {
            var oImage = new Image();
            oImage.onload = function () {
                self.m_mapImage[strKey] = {
                    img: oImage,
                    imgW: iUiImgW,
                    imgH: iUiImgH
                };
                oCallbackFinish4Item();
            };
            oImage.src = strImageUrl;
        };

        //endregino
    }
})(jQuery);