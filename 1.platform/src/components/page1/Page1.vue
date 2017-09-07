<template>
  <div class="page1">
    <div class="leftArea">
      <!--accordionArea start-->
      <marvel-accordion isFolder="false" hasShadow="true"
                        title="使用说明" titleIcon="icon-evil2"
                        :defaultSelectLabel="defaultSelectLabel"
                        :items="accordionItems"
                        v-on:accordionItemClick="accordionItemClick"
                        v-on:afterShowOrHide="afterShowOrHide"
                        v-on:accordionSubItemClick="accordionSubItemClick"></marvel-accordion>
      <!--accordionArea end-->
    </div>
    <div class="rightArea">
      <component v-bind:is="rightModuleName"></component>
    </div>
  </div>
</template>

<script>
  import MarvelAccordion from "@/walle/widget/accordion/MarvelAccordion";
  import Page4QuickStart from '@/components/page3/Page4QuickStart'
  import Page4Color from '@/components/page3/Page4Color'
  import Page4Font from '@/components/page3/Page4Font'
  import Page4Icon from '@/components/page3/Page4Icon'
  import Page4VueBasic from '@/components/page3/Page4VueBasic'
  import ModuleCenter from '@/components/page3/vue_bus/ModuleCenter'
  import ModuleLeft from '@/components/page3/vue_bus/ModuleLeft'
  import ModuleLeftConfig from '@/components/page3/vue_bus/ModuleLeftConfig'
  import ModuleRight from '@/components/page3/vue_bus/ModuleRight'
  import ModuleRight1 from '@/components/page3/vue_bus/ModuleRight1'
  import ModuleRight2 from '@/components/page3/vue_bus/ModuleRight2'
  import ModuleUp from '@/components/page3/vue_bus/ModuleUp'
  import Page4VueBus from '@/components/page3/vue_bus/Page4VueBus'
  import Page4Frame from '@/components/page3/Page4Frame'
  import Page4Layout1 from '@/components/page3/Page4Layout1'
  import Page4Layout2 from '@/components/page3/Page4Layout2'
  import Page4Loading1 from '@/components/page3/Page4Loading1'
  import Page4Loading2 from '@/components/page3/Page4Loading2'
  import Page4Menu from '@/components/page3/Page4Menu'
  import Page4MenuContext from '@/components/page3/Page4MenuContext'
  import Page4Accordion from '@/components/page3/Page4Accordion'
  import Page4Wizard from '@/components/page3/Page4Wizard'
  import Page4Crumb from '@/components/page3/Page4Crumb'
  import Page4Button from '@/components/page3/Page4Button'
  import Page4Link from '@/components/page3/Page4Link'
  import Page4Select from '@/components/page3/Page4Select'
  import Page4Warning from '@/components/page3/Page4Warning'
  import Page4Input from '@/components/page3/Page4Input'
  import Page4DashBoard from '@/components/page3/Page4DashBoard'
  import Page4Tab from '@/components/page3/Page4Tab'
  import Page4Date from '@/components/page3/Page4Date'
  import Page4Leaflet from '@/components/page3/Page4Leaflet'
  import Page4Chart from '@/components/page3/Page4Chart'
  import Page4Grid from '@/components/page3/Page4Grid'
  import Page4Location from '@/components/page3/Page4Location'
  import Page4Legend from '@/components/page3/Page4Legend'
  import Page4List1 from '@/components/page3/Page4List1'

  export default {
    components: {
      MarvelAccordion,
      Page4QuickStart,
      Page4Color,
      Page4Font,
      Page4Icon,
      Page4VueBasic,
      Page4VueBus,
      Page4Frame,
      Page4Layout1,
      Page4Layout2,
      Page4Loading1,
      Page4Loading2,
      Page4Menu,
      Page4MenuContext,
      Page4Accordion,
      Page4Wizard,
      Page4Crumb,
      Page4Button,
      Page4Link,
      Page4Select,
      Page4Warning,
      Page4Input,
      Page4DashBoard,
      Page4Tab,
      Page4Date,
      Page4Leaflet,
      Page4Chart,
      Page4Grid,
      Page4Location,
      Page4Legend,
      Page4List1,
    },
    name: 'page1',
    data: function () {
      return {
        //#region accordion
        defaultSelectLabel: "快速入门",
        accordionItems: [{
          id: "Page4QuickStart",
          label: "快速入门",
          icon: "icon-paint-format"
        }, {
          label: "风格",
          icon: "icon-headphones",
          expand: false,
          subItems: [{
            id: "Page4Frame",
            label: "栅格"
          }, {
            id: "Page4Layout1",
            label: "布局1"
          }, {
            id: "Page4Layout2",
            label: "布局2"
          }, {
            id: "Page4Color",
            label: "色彩"
          }, {
            id: "Page4Font",
            label: "字体"
          }, {
            id: "Page4Icon",
            label: "图标"
          }, {
            id: "",
            label: "页面"
          }, {
            id: "Page4Loading1",
            label: "页面加载"
          }, {
            id: "Page4Loading2",
            label: "页面加载_2"
          }]
        }, {
          label: "组件",
          icon: "icon-pacman",
          expand: false,
          subItems: [{
            id: "Page4VueBasic",
            label: "Vue基础"
          },{
            id: "Page4VueBus",
            label: "Vue消息"
          },{
            id: "",
            label: "表单"
          }, {
            id: "Page4Grid",
            label: "表格"
          }, {
            id: "Page4Leaflet",
            label: "GIS"
          }, {
            id: "",
            label: "Topo"
          }, {
            id: "Page4Chart",
            label: "图表"
          }, {
            id: "Page4Menu",
            label: "导航(顶部菜单)"
          }, {
            id: "Page4MenuContext",
            label: "导航(右键菜单)"
          }, {
            id: "Page4Accordion",
            label: "导航(手风琴)"
          }, {
            id: "Page4Wizard",
            label: "导航(向导)"
          }, {
            id: "Page4Crumb",
            label: "导航(面包屑)"
          }, {
            id: "Page4Button",
            label: "控件(按钮)"
          }, {
            id: "Page4Link",
            label: "控件(链接)"
          }, {
            id: "Page4Select",
            label: "控件(选择)"
          }, {
            id: "Page4Input",
            label: "控件(文本输入)"
          }, {
            id: "Page4Date",
            label: "控件(时间日期)"
          }, {
            id: "",
            label: "控件(文件上传)"
          }, {
            id: "",
            label: "控件(搜索框)"
          }, {
            id: "Page4Warning",
            label: "控件(告警板)"
          }, {
            id: "",
            label: "控件(时间选择器)"
          }, {
            id: "",
            label: "控件(时间线)"
          }, {
            id: "Page4List1",
            label: "控件(悬浮List)"
          }, {
            id: "Page4Legend",
            label: "控件(图例)"
          }, {
            id: "",
            label: "容器(窗口)"
          }, {
            id: "Page4Tab",
            label: "容器(页签)"
          }, {
            id: "",
            label: "容器(扩展面板)"
          }, {
            id: "",
            label: "消息(局部)"
          }, {
            id: "",
            label: "容器(全局)"
          }, {
            id: "",
            label: "容器(系统消息)"
          }]
        }, {
          label: "典型页面",
          icon: "icon-book",
          expand: false,
          subItems: [{
            id: "Page4DashBoard",
            label: "Dashboard"
          }, {
            id: "",
            label: "列表类"
          }, {
            id: "",
            label: "二级管理页面"
          }, {
            id: "",
            label: "对象管理器"
          }, {
            id: "",
            label: "设计配置类工具"
          }, {
            id: "",
            label: "表单配置类"
          }]
        }, {
          id: "",
          label: "更新日志",
          icon: "icon-clock2"
        }],
        isContainerFold: "",
        //#endregion
        //#region right
        rightModuleName: "Page4QuickStart"
        //#endregion
      }
    },
    methods: {
      accordionItemClick: function (oItem) {
        this.rightModuleName = oItem.id;
      },
      afterShowOrHide: function (bIsFolder) {
        if (bIsFolder) {
          this.isContainerFold = "fold";
        }
        else {
          this.isContainerFold = "";
        }
      },
      accordionSubItemClick: function (oSubItem) {
        this.rightModuleName = oSubItem.id;
      }
    }
  }
</script>

<style>
  .page1 {
    position: absolute;
    width: 100%;
    height: calc(100% - 50px);
    top: 50px;
  }

  .page1 .leftArea {
    float: left;
    height: 100%;
  }

  .page1 .rightArea {
    width: calc(100% - 234px);
    float: left;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
