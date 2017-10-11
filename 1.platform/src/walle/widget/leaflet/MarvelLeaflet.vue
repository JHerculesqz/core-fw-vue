<template>
  <div class="gisMap" v-bind:id="id"
       v-bind:style="{ display: isShow }"></div>
</template>

<script>
//  import "leaflet/dist/leaflet.css"
//  import "leaflet"
//  import "leaflet.heat"
  export default {
    name: 'MarvelLeaflet',
    props: ["id"],
    data: function() {
      return {
        gisObj: undefined,
        isShow: "block"
      }
    },
    mounted: function(){
      this.gisObj = new window.$.MarvelGis();
    },
    methods: {
      //#region inner

      //#endregion
      //#region callback
      _onZoom: function(e){
        this.$emit("onZoom", e);
      },
      _onClick: function(e){
        this.$emit("onClick", e);
      },
      _onContextMenu: function (e) {
        this.$emit("onContextMenu", e);
      },
      _onMarkerDBClick: function(e){
        this.$emit("onMarkerDBClick", e);
      },
      _onMarkerDrag: function(e){
        this.$emit("onMarkerDrag", e);
      },
      _onCircleDBClick: function(e){
        this.$emit("onCircleDBClick", e);
      },
      //#endregion
      //#region 3rd

      //#region Map
      init: function(iX, iY, iZoom4Init, oOptions){
        var self = this;

        this.gisObj.Stage.init(this.id, iX, iY, iZoom4Init,
          oOptions,
          function (e) {
            self._onZoom(e);
          }, function (e) {
            self._onClick(e);
          }, function (e) {
            self._onContextMenu(e);
          });
      },
      setCenter: function(iX, iY, iZoom4Init){
        this.gisObj.Stage.setCenter(iX, iY, iZoom4Init);
      },
      showOrHide: function(bIsShow){
        this.isShow = bIsShow ? "block":"none";
      },
      //#endregion

      //#region Layer
      findById: function(strId){
        var oRes = this.gisObj.Layer.findById(strId);
        return oRes;
      },
      getDiffLst: function(lstItemId, arrItemUiType){
        var oRes = this.gisObj.Layer.getDiffLst(lstItemId,
          arrItemUiType, this.gisObj);
        return oRes;
      },
      //#endregion

      //#region Marker/Icon/DivIcon
      addMarker: function(strId, iX, iY, strImgClass, iImgWidth,
                          oBuObj){
        var self = this;

        this.gisObj.Sprite.Node.addMarker(strId, iX, iY,
          strImgClass, iImgWidth, oBuObj,
          this.gisObj,
          function (e) {
            self._onMarkerDBClick(e);
          },
          function (e) {
            self._onMarkerDrag(e);
          });
        //#region event



        //#endregion
      },
      delMarker: function (strId) {
        this.gisObj.Sprite.Node.delMarker(strId, this.gisObj);
      },
      setImgClass: function (strId, strImgClass, iImgWidth) {
        this.gisObj.Sprite.Node.setImgClass(strId,
          strImgClass, iImgWidth, this.gisObj);
      },
      setOpacity4Marker: function (strId, iOpacity) {
        this.gisObj.Sprite.Node.setOpacity4Marker(strId, iOpacity,
          this.gisObj);
      },
      setPos4Marker: function (strId, iX, iY) {
        this.gisObj.Sprite.Node.setPos4Marker(strId, iX, iY,
          this.gisObj);
      },
      setTips4Marker: function (strId, strTips) {
        this.gisObj.Sprite.Node.setTips4Marker(strId, strTips,
          this.gisObj);
      },
      setBuObj4Marker: function (strId, oBuObj) {
        this.gisObj.Sprite.Node.setBuObj4Marker(strId, oBuObj, this.gisObj);
      },
      setHide4Marker: function (strId, bIsHide) {
        this.gisObj.Sprite.Node.setHide4Marker(strId, bIsHide, this.gisObj);
      },
      //#endregion

      //#region Circle
      addCircle: function(strId, iX, iY, iR,
                          oBuObj){
        var self = this;

        this.gisObj.Sprite.Node.addCircle(strId, iX, iY, iR,
          oBuObj,
          this.gisObj,
          function (e) {
            self._onCircleDBClick(e);
          });
      },
      delCircle: function (strId) {
        this.gisObj.Sprite.Node.delCircle(strId, this.gisObj);
      },
      //#endregion

      //#region Polygon
      addPolygon: function(strId, arrPoints, oBuObj){
        this.gisObj.Sprite.Node.addPolygon(strId, arrPoints, oBuObj,
          this.gisObj);
      },
      //#endregion

      //#region Group
      addGroup: function(oBuObj4Group){
        this.gisObj.Sprite.NodeGroup.addGroup(oBuObj4Group, this.gisObj);
      },
      expandAllGroup: function (strUiType) {
        this.gisObj.Sprite.NodeGroup.expandAllGroup(strUiType, this.gisObj);
      },
      collapseAllGroup: function (strUiType) {
        this.gisObj.Sprite.NodeGroup.collapseAllGroup(strUiType, this.gisObj);
      },
      delGroup: function(strId){
        this.gisObj.Sprite.NodeGroup.delGroup(strId, this.gisObj);
      },
      //#endregion

      //#region Polyline
      drawLines: function (arrBuObj4Lines) {
        this.gisObj.Sprite.LinkGroup.drawLines(arrBuObj4Lines, this.gisObj);
      },
      //#endregion

      //#endregion
//
//      addHeatMap: function(arrHeatData){
//        L.heatLayer(arrHeatData, {radius: 10}).addTo(this.mapObj);
//      },
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
