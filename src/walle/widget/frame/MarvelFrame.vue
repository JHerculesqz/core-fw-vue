<template>
  <div v-bind:class="{ hasMargin: hasMargin }">
    <div v-bind:class="[classLarge,classMiddle,classSmall,classMini,classCustom]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import StrUtils from "@/walle/component/str";

  export default {
    name: 'MarvelFrame',
    props: ["media", "hasMargin", "classCustom"],
    data: function() {
        return {
          classLarge: "large-24",
          classMiddle: "middle-12",
          classSmall: "small-8",
          classMini: "mini-4"
        }
    },
    mounted: function () {
      var strMedia = this.media;
      var arrMedia = StrUtils.split(strMedia, ",");
      if(arrMedia[0] != undefined){
        this.classLarge = "large-" + arrMedia[0];
      }
      if(arrMedia[1] != undefined){
        this.classMiddle = "middle-" + arrMedia[1];
      }
      if(arrMedia[2] != undefined){
        this.classSmall = "small-" + arrMedia[2];
      }
      if(arrMedia[3] != undefined){
        this.classMini = "mini-" + arrMedia[3];
      }
    }
  }
</script>

<style>
  .hasMargin>div {
    margin: 0 10px;
    box-sizing: border-box;
  }


  .mini-1,.mini-2,.mini-3,.mini-4,.mini-5,.mini-6,.mini-7,.mini-8,.mini-9,.mini-10,.mini-11,.mini-12,
  .mini-13,.mini-14,.mini-15,.mini-16,.mini-17,.mini-18,.mini-19,.mini-20,.mini-21,.mini-22,.mini-23,.mini-24,
  .small-1,.small-2,.small-3,.small-4,.small-5,.small-6,.small-7,.small-8,.small-9,.small-10,.small-11,.small-12,
  .small-13,.small-14,.small-15,.small-16,.small-17,.small-18,.small-19,.small-20,.small-21,.small-22,.small-23,.small-24,
  .middle-1,.middle-2,.middle-3,.middle-4,.middle-5,.middle-6,.middle-7,.middle-8,.middle-9,.middle-10,.middle-11,.middle-12,
  .middle-13,.middle-14,.middle-15,.middle-16,.middle-17,.middle-18,.middle-19,.middle-20,.middle-21,.middle-22,.middle-23,.middle-24,
  .large-1,.large-2,.large-3,.large-4,.large-5,.large-6,.large-7,.large-8,.large-9,.large-10,.large-11,.large-12,
  .large-13,.large-14,.large-15,.large-16,.large-17,.large-18,.large-19,.large-20,.large-21,.large-22,.large-23,.large-24{
    position: relative;
    min-height: 1px;
    float: left;
  }

  /*设备宽度小于768*/
  .mini-1{width: 4.16666666%}
  .mini-2{width: 8.33333333%}
  .mini-3{width: 12.5%}
  .mini-4{width: 16.66666667%}
  .mini-5{width: 20.83333333%}
  .mini-6{width: 25%}
  .mini-7{width: 29.16666666%}
  .mini-8{width: 33.33333333%}
  .mini-9{width: 37.49999999%}
  .mini-10{width: 41.66666667%}
  .mini-11{width: 45.83333333%}
  .mini-12{width: 50%}
  .mini-13{width: 54.16666666%}
  .mini-14{width: 58.33333333%}
  .mini-15{width: 62.49999999%}
  .mini-16{width: 66.66666667%}
  .mini-17{width: 70.83333333%}
  .mini-18{width: 75%}
  .mini-19{width: 79.16666666%}
  .mini-20{width: 83.33333333%}
  .mini-21{width: 87.49999999%}
  .mini-22{width: 91.66666667%}
  .mini-23{width: 95.8333332%}
  .mini-24{width: 100%}

  .hasMargin>.mini-1{width: calc(4.16666666% - 20px)}
  .hasMargin>.mini-2{width: calc(8.33333333% - 20px)}
  .hasMargin>.mini-3{width: calc(12.5% - 20px)}
  .hasMargin>.mini-4{width: calc(16.66666667% - 20px)}
  .hasMargin>.mini-5{width: calc(20.83333333% - 20px)}
  .hasMargin>.mini-6{width: calc(25% - 20px)}
  .hasMargin>.mini-7{width: calc(29.16666666% - 20px)}
  .hasMargin>.mini-8{width: calc(33.33333333% - 20px)}
  .hasMargin>.mini-9{width: calc(37.49999999% - 20px)}
  .hasMargin>.mini-10{width: calc(41.66666667% - 20px)}
  .hasMargin>.mini-11{width: calc(45.83333333% - 20px)}
  .hasMargin>.mini-12{width: calc(50% - 20px)}
  .hasMargin>.mini-13{width: calc(54.16666666% - 20px)}
  .hasMargin>.mini-14{width: calc(58.33333333% - 20px)}
  .hasMargin>.mini-15{width: calc(62.49999999% - 20px)}
  .hasMargin>.mini-16{width: calc(66.66666667% - 20px)}
  .hasMargin>.mini-17{width: calc(70.83333333% - 20px)}
  .hasMargin>.mini-18{width: calc(75% - 20px)}
  .hasMargin>.mini-19{width: calc(79.16666666% - 20px)}
  .hasMargin>.mini-20{width: calc(83.33333333% - 20px)}
  .hasMargin>.mini-21{width: calc(87.49999999% - 20px)}
  .hasMargin>.mini-22{width: calc(91.66666667% - 20px)}
  .hasMargin>.mini-23{width: calc(95.8333332% - 20px)}
  .hasMargin>.mini-24{width: calc(100% - 20px)}

  /*设备宽度大于768*/
  @media (min-width: 768px) {
    .small-1{width: 4.16666666%}
    .small-2{width: 8.33333333%}
    .small-3{width: 12.5%}
    .small-4{width: 16.66666667%}
    .small-5{width: 20.83333333%}
    .small-6{width: 25%}
    .small-7{width: 29.16666666%}
    .small-8{width: 33.33333333%}
    .small-9{width: 37.49999999%}
    .small-10{width: 41.66666667%}
    .small-11{width: 45.83333333%}
    .small-12{width: 50%}
    .small-13{width: 54.16666666%}
    .small-14{width: 58.33333333%}
    .small-15{width: 62.49999999%}
    .small-16{width: 66.66666667%}
    .small-17{width: 70.83333333%}
    .small-18{width: 75%}
    .small-19{width: 79.16666666%}
    .small-20{width: 83.33333333%}
    .small-21{width: 87.49999999%}
    .small-22{width: 91.66666667%}
    .small-23{width: 95.8333332%}
    .small-24{width: 100%}

    .hasMargin>.small-1{width: calc(4.16666666% - 20px)}
    .hasMargin>.small-2{width: calc(8.33333333% - 20px)}
    .hasMargin>.small-3{width: calc(12.5% - 20px)}
    .hasMargin>.small-4{width: calc(16.66666667% - 20px)}
    .hasMargin>.small-5{width: calc(20.83333333% - 20px)}
    .hasMargin>.small-6{width: calc(25% - 20px)}
    .hasMargin>.small-7{width: calc(29.16666666% - 20px)}
    .hasMargin>.small-8{width: calc(33.33333333% - 20px)}
    .hasMargin>.small-9{width: calc(37.49999999% - 20px)}
    .hasMargin>.small-10{width: calc(41.66666667% - 20px)}
    .hasMargin>.small-11{width: calc(45.83333333% - 20px)}
    .hasMargin>.small-12{width: calc(50% - 20px)}
    .hasMargin>.small-13{width: calc(54.16666666% - 20px)}
    .hasMargin>.small-14{width: calc(58.33333333% - 20px)}
    .hasMargin>.small-15{width: calc(62.49999999% - 20px)}
    .hasMargin>.small-16{width: calc(66.66666667% - 20px)}
    .hasMargin>.small-17{width: calc(70.83333333% - 20px)}
    .hasMargin>.small-18{width: calc(75% - 20px)}
    .hasMargin>.small-19{width: calc(79.16666666% - 20px)}
    .hasMargin>.small-20{width: calc(83.33333333% - 20px)}
    .hasMargin>.small-21{width: calc(87.49999999% - 20px)}
    .hasMargin>.small-22{width: calc(91.66666667% - 20px)}
    .hasMargin>.small-23{width: calc(95.8333332% - 20px)}
    .hasMargin>.small-24{width: calc(100% - 20px)}
  }


  /*设备宽度大于992*/
  @media (min-width: 992px) {
    .middle-1{width: 4.16666666%}
    .middle-2{width: 8.33333333%}
    .middle-3{width: 12.5%}
    .middle-4{width: 16.66666667%}
    .middle-5{width: 20.83333333%}
    .middle-6{width: 25%}
    .middle-7{width: 29.16666666%}
    .middle-8{width: 33.33333333%}
    .middle-9{width: 37.49999999%}
    .middle-10{width: 41.66666667%}
    .middle-11{width: 45.83333333%}
    .middle-12{width: 50%}
    .middle-13{width: 54.16666666%}
    .middle-14{width: 58.33333333%}
    .middle-15{width: 62.49999999%}
    .middle-16{width: 66.66666667%}
    .middle-17{width: 70.83333333%}
    .middle-18{width: 75%}
    .middle-19{width: 79.16666666%}
    .middle-20{width: 83.33333333%}
    .middle-21{width: 87.49999999%}
    .middle-22{width: 91.66666667%}
    .middle-23{width: 95.8333332%}
    .middle-24{width: 100%}

    .hasMargin>.middle-1{width: calc(4.16666666% - 20px)}
    .hasMargin>.middle-2{width: calc(8.33333333% - 20px)}
    .hasMargin>.middle-3{width: calc(12.5% - 20px)}
    .hasMargin>.middle-4{width: calc(16.66666667% - 20px)}
    .hasMargin>.middle-5{width: calc(20.83333333% - 20px)}
    .hasMargin>.middle-6{width: calc(25% - 20px)}
    .hasMargin>.middle-7{width: calc(29.16666666% - 20px)}
    .hasMargin>.middle-8{width: calc(33.33333333% - 20px)}
    .hasMargin>.middle-9{width: calc(37.49999999% - 20px)}
    .hasMargin>.middle-10{width: calc(41.66666667% - 20px)}
    .hasMargin>.middle-11{width: calc(45.83333333% - 20px)}
    .hasMargin>.middle-12{width: calc(50% - 20px)}
    .hasMargin>.middle-13{width: calc(54.16666666% - 20px)}
    .hasMargin>.middle-14{width: calc(58.33333333% - 20px)}
    .hasMargin>.middle-15{width: calc(62.49999999% - 20px)}
    .hasMargin>.middle-16{width: calc(66.66666667% - 20px)}
    .hasMargin>.middle-17{width: calc(70.83333333% - 20px)}
    .hasMargin>.middle-18{width: calc(75% - 20px)}
    .hasMargin>.middle-19{width: calc(79.16666666% - 20px)}
    .hasMargin>.middle-20{width: calc(83.33333333% - 20px)}
    .hasMargin>.middle-21{width: calc(87.49999999% - 20px)}
    .hasMargin>.middle-22{width: calc(91.66666667% - 20px)}
    .hasMargin>.middle-23{width: calc(95.8333332% - 20px)}
    .hasMargin>.middle-24{width: calc(100% - 20px)}
  }

  /*设备宽度大于1200*/
  @media (min-width: 1200px) {
    .large-1{width: 4.16666666%}
    .large-2{width: 8.33333333%}
    .large-3{width: 12.5%}
    .large-4{width: 16.66666667%}
    .large-5{width: 20.83333333%}
    .large-6{width: 25%}
    .large-7{width: 29.16666666%}
    .large-8{width: 33.33333333%}
    .large-9{width: 37.49999999%}
    .large-10{width: 41.66666667%}
    .large-11{width: 45.83333333%}
    .large-12{width: 50%}
    .large-13{width: 54.16666666%}
    .large-14{width: 58.33333333%}
    .large-15{width: 62.49999999%}
    .large-16{width: 66.66666667%}
    .large-17{width: 70.83333333%}
    .large-18{width: 75%}
    .large-19{width: 79.16666666%}
    .large-20{width: 83.33333333%}
    .large-21{width: 87.49999999%}
    .large-22{width: 91.66666667%}
    .large-23{width: 95.8333332%}
    .large-24{width: 100%}

    .hasMargin>.large-1{width: calc(4.16666666% - 20px)}
    .hasMargin>.large-2{width: calc(8.33333333% - 20px)}
    .hasMargin>.large-3{width: calc(12.5% - 20px)}
    .hasMargin>.large-4{width: calc(16.66666667% - 20px)}
    .hasMargin>.large-5{width: calc(20.83333333% - 20px)}
    .hasMargin>.large-6{width: calc(25% - 20px)}
    .hasMargin>.large-7{width: calc(29.16666666% - 20px)}
    .hasMargin>.large-8{width: calc(33.33333333% - 20px)}
    .hasMargin>.large-9{width: calc(37.49999999% - 20px)}
    .hasMargin>.large-10{width: calc(41.66666667% - 20px)}
    .hasMargin>.large-11{width: calc(45.83333333% - 20px)}
    .hasMargin>.large-12{width: calc(50% - 20px)}
    .hasMargin>.large-13{width: calc(54.16666666% - 20px)}
    .hasMargin>.large-14{width: calc(58.33333333% - 20px)}
    .hasMargin>.large-15{width: calc(62.49999999% - 20px)}
    .hasMargin>.large-16{width: calc(66.66666667% - 20px)}
    .hasMargin>.large-17{width: calc(70.83333333% - 20px)}
    .hasMargin>.large-18{width: calc(75% - 20px)}
    .hasMargin>.large-19{width: calc(79.16666666% - 20px)}
    .hasMargin>.large-20{width: calc(83.33333333% - 20px)}
    .hasMargin>.large-21{width: calc(87.49999999% - 20px)}
    .hasMargin>.large-22{width: calc(91.66666667% - 20px)}
    .hasMargin>.large-23{width: calc(95.8333332% - 20px)}
    .hasMargin>.large-24{width: calc(100% - 20px)}
  }
</style>
