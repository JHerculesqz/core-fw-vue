<template>
  <marvel-dialog theme="dark" :showDialog="showDialog"
                 title="新建割接方案" width="850" height="500"
                 v-on:onClickDialogClose="onClickDialogClose">
    <div slot="dialogCont" class="dialogContArea">
      <div class="session">
        <div class="sessionName">方案名称:</div>
        <div class="sessionCont">
          <marvel-input ref="ref4SolutionName" placeHolder="请输入方案名称..."
                        errMsg="输入错误..." theme="dark" size=""></marvel-input>
        </div>
      </div>
      <div class="session">
        <div class="sessionName">方案责任人:</div>
        <div class="sessionCont">
          <div class="firstDrop">
            <marvel-drop-down-button ref="ref4UserName" width="100%"></marvel-drop-down-button>
          </div>
        </div>
      </div>
      <div class="session">
        <div class="sessionName">方案类型:</div>
        <div class="sessionCont">
          <div class="secondDrop">
            <marvel-drop-down-button ref="ref4SolutionType" width="100%"></marvel-drop-down-button>
          </div>
        </div>
      </div>
      <div class="session2">
        <div class="sessionName2">方案范围:</div>
        <div class="neSelectArea">
          <div class="neSelectLeft">
            <marvel-grid :titles="titles4Nodes"
                         :rows="rows4Nodes"
                         :limit="limit4Nodes"
                         theme="dark"></marvel-grid>
          </div>
          <div class="neSelectCenter">
            <div class="selectBtn icon-marvelIcon-06" v-on:click="onClickAddNode"></div>
            <div class="selectBtn icon-marvelIcon-08" v-on:click="onClickDelNode"></div>
          </div>
          <div class="neSelectRight">
            <marvel-grid :titles="titles4SelectNodes"
                         :rows="rows4SelectNodes"
                         :limit="limit4SelectNodes"
                         theme="dark"></marvel-grid>
          </div>
        </div>
      </div>
      <div  class="session2">
        <div class="sessionName2">描述:</div>
        <div class="describeArea">
          <marvel-multi-input ref="ref4Description" placeHolder="请输入描述信息..."
                              theme="dark" size="">
          </marvel-multi-input>
        </div>
      </div>
    </div>
    <div slot="dialogFoot">
      <marvel-primary-button classCustom="classCustom1" label="确定"
                             v-on:onClick="onClickOk"></marvel-primary-button>
      <marvel-primary-button classCustom="classCustom1" label="取消"
                             v-on:onClick="onClickCancel"></marvel-primary-button>
    </div>
  </marvel-dialog>
</template>

<script>

  import MarvelDialog from "@/walle/widget/dialog/MarvelDialog.vue";
  import MarvelPrimaryButton from "@/walle/widget/button/MarvelPrimaryButton";
  import MarvelGrid from "@/walle/widget/grid/MarvelGrid.vue";
  import MarvelInput from "@/walle/widget/input/MarvelInput";
  import MarvelMultiInput from "@/walle/widget/input/MarvelMultiInput";
  import MarvelDropDownButton from "@/walle/widget/button/MarvelDropDownButton";

  export default {
    components: {
      MarvelDropDownButton,
      MarvelMultiInput,
      MarvelInput,
      MarvelGrid,
      MarvelDialog,
      MarvelPrimaryButton
    },
    name: "CreateSolution",
    props: ["showDialog"],
    data: function () {
      return {
        //#region const
        debug: true,
        //#endregion
        //#region createSolution
        solutionName: '',
        solutionUserName: '',
        solutionType: '',
        solutionDescription: '',
        //#endregion
        //#region Nodes
        titles4Nodes: [{
          label: "",
          width: "5%"
        }, {
          label: "网元名称",
          width: "13%"
        }],
        skip4Nodes: 0,
        limit4Nodes: 20,
        rows4Nodes: [],
        //#endregion
        //#region selectNodes
        titles4SelectNodes: [{
          label: "",
          width: "5%"
        }, {
          label: "网元名称",
          width: "13%"
        }],
        skip4SelectNodes: 0,
        limit4SelectNodes: 20,
        rows4SelectNodes: [],
        //#endregion
      };
    },
    mounted: function () {
      if (this.debug) {
        var self = this;
        this._getUserNamesMock(function (arrUserNames, strSelectLabel) {
          self.$refs.ref4UserName.init(arrUserNames, strSelectLabel);
        });
        this._getNodesMock();
      }
      else {

      }
      this._initSolutionType();
    },
    methods: {
      _initSolutionType: function () {
        var arrSolutionType = [];
        arrSolutionType.push({
          label: '单站',
          icon: 'icon-marvelIcon-47'
        });
        arrSolutionType.push({
          label: '节点式环插',
          icon: 'icon-marvelIcon-47'
        });
        arrSolutionType.push({
          label: '链路式环插',
          icon: 'icon-marvelIcon-47'
        });
        arrSolutionType.push({
          label: '端到端搬迁',
          icon: 'icon-marvelIcon-47'
        });
        this.$refs.ref4SolutionType.init(arrSolutionType, arrSolutionType[0].label);
      },
      onClickDialogClose: function () {
        this.$emit("onClickDialogClose");
      },
      onClickOk: function () {
        this.solutionName = this.$refs.ref4SolutionName.getInputMsg();
        this.solutionUserName = this.$refs.ref4UserName.getSelectItem();
        this.solutionType = this.$refs.ref4SolutionType.getSelectItem();
        this.solutionDescription = this.$refs.ref4Description.getInputMsg();
        this.$emit("onClickOk", this.solutionName, this.solutionUserName, this.solutionType, this.solutionDescription, this.rows4SelectNodes);
      },
      onClickCancel: function () {
        this.$emit("onClickCancel");
      },
      _getUserNamesMock: function (oAfterCallBack) {
        var arrUserNames = [];
        arrUserNames.push({
          label: "习主席",
          icon: "icon-user"
        });
        arrUserNames.push({
          label: "李克强总理",
          icon: "icon-user"
        });
        oAfterCallBack(arrUserNames, arrUserNames[0].label);

      },
      _getNodesMock: function () {
        this.rows4Nodes = [];

        for (var i = 0; i < 100; i++) {
          var oRow = [];
          for (var j = 0; j < 2; j++) {
            var oCell = {
              value: "value" + i,//Math.random() * 100
              type: "text"
            };
            oRow.push(oCell);
          }
          this.rows4Nodes.push(oRow);
        }
      },
      onClickAddNode: function () {
        if (this.debug) {
          var oRow = [];
          for (var j = 0; j < 2; j++) {
            var oCell = {
              value: "value" + Math.round(Math.random() * 100),
              type: "text"
            };
            oRow.push(oCell);
          }
          this.rows4SelectNodes.push(oRow);
        }
        else {

        }
      },
      onClickDelNode: function () {
        if (this.debug) {
          if (this.rows4SelectNodes.length) {
            this.rows4SelectNodes.splice(0, 1);
          }
        }
        else {

        }
      }
    }

  }

</script>

<style scoped>
.dialogContArea{
  width:100%;
  height:100%;
  padding-top: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
  .session{
    margin-bottom: 20px;
    clear: both;
    height: 32px;
    font-size: 14px;
    overflow: visible;
  }
  .sessionCont{
    float: left;
    height:100%;
    width: 240px;
    max-width: calc(100% - 100px);
    position: relative;
    overflow: visible;
  }
  .firstDrop{
    width: 100%;
    height:100%;
    position: absolute;
    z-index: 2;
  }
  .secondDrop{
    width: 100%;
    height:100%;
    position: absolute;
    z-index: 1;
  }
  .session2{
    margin-bottom: 20px;
    clear: both;
    font-size: 14px;
    overflow: visible;
  }
  .sessionName{
    height:32px;
    line-height: 32px;
    float: left;
    color: #FFFFFF;
    width: 100px;
  }
  .sessionName2{
    height:14px;
    line-height: 14px;
    color: #FFFFFF;
    margin-bottom: 10px;
  }
  .neSelectArea{
    height:200px;
  }
  .neSelectLeft{
    float: left;
    width:45%;
    height: 100%;
  }
  .neSelectCenter{
    float: left;
    width:10%;
    height: 100%;
    padding: 30px 0;
    box-sizing: border-box;
  }
  .selectBtn{
    width: 30px;
    height:30px;
    border-radius: 100%;
    background-color: #36365b;
    margin: 20px auto;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #8b90b3;
    cursor: pointer;
  }
  .selectBtn:hover{
    color: #ffffff;
  }
  .neSelectRight{
    float: left;
    width:45%;
    height: 100%;
  }
  .describeArea{
    height:100px;
  }
</style>
