<template>
  <div class="gisMap" v-bind:id="id" v-bind:style="{ display: isShow }"></div>
</template>

<script>
  import L from "leaflet"
  import "leaflet.heat"

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
        this.mapObj = L.map(this.id).setView([iX, iY], iZoom4Init);

        //2.
        L.tileLayer(URL_GIS_MAP, {
          maxZoom: iZoom4Max,
          attribution: '&copy; <a href="http://www.huawei.com">Marvel</a>',
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
      addIcon: function(strId, iX, iY, strImgUrl, strTips, oBuObj, oDBClickCallback){
        var oIcon = new this.LeafIcon({iconUrl: strImgUrl});
        var oMarker = L.marker([iX, iY], {icon: oIcon}).addTo(this.mapObj);
        oMarker.bindPopup(strTips);
        oMarker.id = strId;
        oMarker.buObj = oBuObj;
        oMarker.on("dblclick", function () {
          if(oDBClickCallback){
            oDBClickCallback(strId);
          }
        });
        this.iconObjs.push(oMarker);
      },
      updateIcon: function(strId, iX, iY, strImgUrl, strTips, oBuObj){
        for(var i=0;i<this.iconObjs.length;i++){
          var oMarker = this.iconObjs[i];
          if(oMarker.id == strId){
            oMarker.setLatLng([iX, iY]);
            var oIcon = new this.LeafIcon({iconUrl: strImgUrl});
            oMarker.setIcon(oIcon);
            oMarker.setPopupContent(strTips);
            oMarker.buObj = oBuObj;
            break;
          }
        }
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
