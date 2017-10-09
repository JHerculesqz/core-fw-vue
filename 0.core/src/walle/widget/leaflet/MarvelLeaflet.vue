<template>
  <div class="gisMap" v-bind:id="id" v-bind:style="{ display: isShow }"></div>
</template>

<script>
//  import "leaflet/dist/leaflet.css"
//  import "leaflet"
//  import "leaflet.heat"

  const URL_GIS_MAP = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

  export default {
    name: 'MarvelLeaflet',
    props: ["id"],
    data: function() {
        return {
          mapObj: undefined,
          LeafIcon: undefined,
          iconObjs: [],
          isShow: "block"
        }
    },
    methods: {
      init: function(iX, iY, iZoom4Init, iZoom4Max, strUrlWater){
        var self = this;

        //1.
        this.mapObj = L.map(this.id, {
          attributionControl: false
        }).setView([iX, iY], iZoom4Init);

        //2.
        L.tileLayer(URL_GIS_MAP, {
          maxZoom: iZoom4Max,
          id: 'mapbox.streets'
        }).addTo(this.mapObj);

        //3.
        this.mapObj.on('click', function(e){
          self.$emit("onClick", e.latlng);
        });

        //4.
        this.LeafIcon = L.Icon.extend({
          options: {
//          shadowUrl: '/static/leaflet/images/leaf-shadow.png',
//            iconSize:     [92, 95],
//          shadowSize:   [50, 64],
//            iconAnchor:   [22, 94],
//          shadowAnchor: [4, 62],
//            popupAnchor:  [-3, -76]
          }
        });

        //5.
        L.Control.Watermark = L.Control.extend({
          onAdd: function(map) {
            var img = L.DomUtil.create('img');

            img.src = strUrlWater;
            img.style.width = '50px';

            return img;
          },
          onRemove: function(map) {
            // Nothing to do here
          }
        });
        L.control.watermark = function(opts) {
          return new L.Control.Watermark(opts);
        };
      },
      setCenter: function(iX, iY, iZoom4Init){
        this.mapObj.setView([iX, iY], iZoom4Init);
      },
      addMarker: function(iX, iY, strTips){
        L.marker([iX, iY]).addTo(this.mapObj).bindPopup(strTips);
      },
      addCircle: function(iX, iY, iR, strColor, strFillColor, iOpacity, strTips){
        L.circle([iX, iY], {
          color: strColor,
          fillColor: strFillColor,
          fillOpacity: iOpacity,
          radius: iR
        }).addTo(this.mapObj).bindPopup(strTips);
      },
      addPolygon: function(arrPoints, strTips){
        L.polygon(arrPoints).addTo(this.mapObj).bindPopup(strTips);
      },
      addIcon: function(strId, iX, iY, strImgUrl, strTips, oBuObj,
                        oDBClickCallback, oDragCallback, oContextMenuCallback){
        var oIcon = new this.LeafIcon({iconUrl: strImgUrl});
        var bCanDrag = oDragCallback == undefined ? false : true;
        var oMarker = new L.marker([iX, iY], {icon: oIcon, draggable:bCanDrag}).addTo(this.mapObj);
        oMarker.bindPopup(strTips);
        oMarker.id = strId;
        oMarker.buObj = oBuObj;
        oMarker.on("dblclick", function () {
          if(oDBClickCallback){
            oDBClickCallback(strId);
          }
        });
        oMarker.on("dragend", function (event) {
          if(oDragCallback){
            oDragCallback(event.target);
          }
        });
        oMarker.on("contextmenu", function(event){
          if(oContextMenuCallback){
            oContextMenuCallback(event,
              event.originalEvent.x,
              event.originalEvent.y,
              event.target.buObj);
          }
        });
        this.iconObjs.push(oMarker);
      },
      updateIcon: function(strId, iX, iY, strImgUrl, strTips, bIsHide, oBuObj){
        for(var i=0;i<this.iconObjs.length;i++){
          var oMarker = this.iconObjs[i];
          if(oMarker.id == strId){
            oMarker.setLatLng([iX, iY]);
            var oIcon = new this.LeafIcon({iconUrl: strImgUrl});
            oMarker.setIcon(oIcon);
            oMarker.setPopupContent(strTips);

            if(bIsHide){
              oMarker.setOpacity(0);
              oMarker.closePopup();
            }
            else{
              oMarker.setOpacity(1);
            }

            oMarker.buObj = oBuObj;
            break;
          }
        }
      },
      delIcon: function(strId){
        var iDelIndex = undefined;
        for(var i=0;i<this.iconObjs.length;i++){
          var oMarker = this.iconObjs[i];
          if(oMarker.id == strId) {
            this.mapObj.removeLayer(oMarker);
            iDelIndex = i;
            break;
          }
        }

        if(undefined != iDelIndex){
          this.iconObjs.splice(iDelIndex, iDelIndex);
        }
      },
      getNeedDiffIconLst: function(lstDevId){
        var oRes = {
          delDevIdLst: [],
          addDevIdLst: [],
          updateDevIdLst: []
        };

        //1.get delDevIdLst/updateDevIdLst
        for(var i=0;i<this.iconObjs.length;i++){
          var oMarker = this.iconObjs[i];

          var bIsExists = false;
          for(var j=0;j<lstDevId.length;j++){
            var strId = lstDevId[j];
            if(oMarker.id == strId) {
              bIsExists = true;
              break;
            }
          }

          if(!bIsExists){
            oRes.delDevIdLst.push(oMarker.id);
          }
          else{
            oRes.updateDevIdLst.push(strId);
          }
        }

        //2.get addDevIdLst
        for(var j=0;j<lstDevId.length;j++){
          var strId = lstDevId[j];

          var bIsExists = false;
          for(var i=0;i<this.iconObjs.length;i++){
            var oMarker = this.iconObjs[i];

            if(oMarker.id == strId) {
              bIsExists = true;
              break;
            }
          }

          if(!bIsExists){
            oRes.addDevIdLst.push(strId);
          }
        }

        return oRes;
      },
      addWater: function(){
        L.control.watermark({ position: 'bottomleft' }).addTo(this.mapObj);
      },
      addHeatMap: function(arrHeatData){
        L.heatLayer(arrHeatData, {radius: 10}).addTo(this.mapObj);
      },
      showOrHide: function(bIsShow){
        this.isShow = bIsShow ? "block":"none";
      }
    }
  }
</script>

<style scoped>
  .gisMap {
    width: 100%; height: 100%;
  }
  .dpn {
    display: none;
  }
</style>
