<template>
  <div class="gridWrapper">
    <div class="grid" v-bind:class="{ empty: 0 == rows.length }">
      <table class="gridCont">
        <thead>
        <tr>
          <!--<th>-->
            <!--<marvel-check-box ref="ref8" id="id9"-->
                              <!--label="selectAll" showLabel="false"></marvel-check-box>-->
          <!--</th>-->
          <th v-for="title in titles" v-bind:style="{ width: title.width }">{{ title.label }}</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows">
            <td v-for="cell in row">{{ cell.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="footArea">
      <div class="foot">
        <div class="pageSwitch">
          <div class="item icon-marvelIcon-04"></div>
          <div class="item" v-for="item in pagination"
               v-bind:class="{ current: curPageIndex == item }">{{ item }}</div>
          <div class="item icon-marvelIcon-02"></div>
        </div>
        <div class="text">跳转</div><input class="pageDrop"><div class="text">页</div>
        <div class="text">共{{ rows.length}}条</div>
      </div>
    </div>
  </div>
</template>

<script>
  import MarvelCheckBox from "../select/MarvelCheckBox";
  export default {
    components: {MarvelCheckBox},
    name: 'MarvelGrid',
    props: ["titles", "rows"],
    data: function() {
        return {
          skip: 0,
          limit: 5,
          curPageIndex: 1
        }
    },
    computed: {
      pagination: function(){
        //TODO:有点sb了，先实现一个再说
        var arrRes = [];

        //1.if rows is null
        if(0 == this.rows.length){
          arrRes=[1];
        }

        //2.calculate this.curPageIndex/iPageCount
        var iPageCount = Math.ceil(this.rows.length / this.limit);
        this.curPageIndex = parseInt(this.skip / this.limit) + 1;

        var iPageDistance = iPageCount - this.curPageIndex + 1;
        //3.iPageCount <= 5
        if(iPageCount <= 5){
          for(var i=1;i<=iPageCount;i++){
            arrRes.push(i);
          }
        }
        else{
          //4.1.if iPageDistance <=5
          if(iPageDistance <= 5){
            for(var i=this.curPageIndex;i<=iPageCount;i++){
              arrRes.push(i);
            }
          }
          //4.2.if iPageDistance >5
          else{
            for(var i=this.curPageIndex;i<this.curPageIndex+5;i++){
              arrRes.push(i);
            }
            if(iPageCount - (this.curPageIndex + 4) > 1){
              arrRes.push("...");
            }
            arrRes.push(iPageCount);
          }
        }

        return arrRes;
      }
    }
  }
</script>

<style scoped>
  .gridWrapper{
    width: 100%;
    height: 100%;
  }
  .gridWrapper .grid{
    height: calc(100% - 32px);
  }
  .gridWrapper .empty{
    background: url("/static/walle/grid_empty.png") no-repeat center;
  }
  .gridWrapper .grid .gridCont{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;
  }
  table thead, tbody tr{
    display: table;
    width: 100%;
    table-layout: fixed;
  }
  .gridWrapper .grid .gridCont thead{
    padding-right: 16px;
    position: relative;
  }
  .gridWrapper .grid .gridCont thead tr th{
    height: 40px;
    background-color: #e1e4e5;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #333;
    text-align: left;
    padding: 0 8px;
    position: relative;
  }
  .gridWrapper .grid .gridCont thead tr th:last-child:after{
    content: "";
    height: 40px;
    background-color: #e1e4e5;
    width: 16px;
    display: inline-block;
    position: absolute;
    top: 0;
    right: -16px;
  }
  .gridWrapper .grid .gridCont thead tr .titleIcon{
    float: right;
  }
  .gridWrapper .grid .gridCont tbody{
    width: 100%;
    height: calc(100% - 42px);
    display: block;
    overflow-x: auto;
    overflow-y: scroll;
  }
  .gridWrapper .grid .gridCont tbody tr td{
    color: #666;
    height: 60px;
    padding: 0 10px;
  }
  .gridWrapper .grid .gridCont tbody tr .icon{
    margin-right: 8px;
  }
  .gridWrapper .grid .gridCont tbody tr .iconOnly{
    float: right;
    cursor: pointer;
    margin-left: 10px;
  }
  .gridWrapper .grid .gridCont tbody tr .iconOnly:hover{
    color: #3399ff;
  }
  .gridWrapper .grid .gridCont tbody tr:nth-child(odd){
    background-color: #f7f7f7;
  }
  .gridWrapper .grid .gridCont tbody tr:hover{
    background-color: #eaf6f9;
  }

  .gridWrapper .footArea{
    height: 32px;
    padding: 4px;
    text-align: center;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  .gridWrapper .footArea .foot{
    display: inline-block;
    overflow: hidden;
    height: 100%;
  }
  .gridWrapper .footArea .foot .pageSwitch{
    float: left;
  }
  .gridWrapper .footArea .foot .pageSwitch .item{
    height: 100%;
    float: left;
    line-height: 26px;
    color: #666;
    padding: 0 4px;
    maring: 0 4px;
    font-size: 12px;
    cursor: pointer;
  }
  .gridWrapper .footArea .foot .pageSwitch .item:hover{
    color: #fff;
    background-color: #60b0ff;
  }
  .gridWrapper .footArea .foot .pageSwitch .current{
    color: #fff;
    background-color: #3399ff !important;
  }
  .gridWrapper .footArea .foot .pageDrop{
    float: left;
    padding: 0 10px;
    height: 22px;
    width: 40px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 2px;
    line-height: 22px;
    font-size: 14px;
    color: #333;
    outline: none;
  }
  .gridWrapper .footArea .foot .text{
    height: 100%;
    float: left;
    line-height: 26px;
    color: #666;
    margin: 0 4px;
    padding: 0 4px;
    font-size: 12px;
  }
</style>
