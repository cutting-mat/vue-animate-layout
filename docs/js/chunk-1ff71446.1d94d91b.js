(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ff71446"],{"080f":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"flex-col"},[e("div",{staticClass:"flex-1 flex-row"},[e("div",{staticClass:"left"},[e("animated-group",{staticClass:"group flex-col",attrs:{enterClass:"animate__fadeInLeft",leaveClass:"animate__fadeOutLeft"},model:{value:a.groupVisible,callback:function(t){a.groupVisible=t},expression:"groupVisible"}},[e("animated",{staticClass:"flex-1 visual-block"},[a._v(" left 1 ")]),e("animated",{staticClass:"flex-1 visual-block"},[a._v(" left 2 ")]),e("animated",{staticClass:"flex-1 visual-block"},[a._v(" left 3 ")])],1)],1),e("div",{staticClass:"flex-1 center"},[e("el-button",{on:{click:function(t){a.groupVisible=!a.groupVisible}}},[a._v(" 进场/退场 ")]),e("el-button",{on:{click:function(t){a.windowVisible=!a.windowVisible}}},[a._v(" 弹窗打开/关闭 ")]),e("animated",{staticClass:"zoom-box",attrs:{enterClass:"animate__zoomIn",leaveClass:"animate__zoomOut"},model:{value:a.windowVisible,callback:function(t){a.windowVisible=t},expression:"windowVisible"}},[a._v(" window ")])],1),e("div",{staticClass:"right"},[e("animated-group",{staticClass:"group flex-col",attrs:{enterClass:"animate__fadeInRight",leaveClass:"animate__fadeOutRight"},model:{value:a.groupVisible,callback:function(t){a.groupVisible=t},expression:"groupVisible"}},[e("animated",{staticClass:"flex-1 visual-block"},[a._v(" right 1 ")]),e("animated",{staticClass:"flex-1 visual-block"},[a._v(" right 2 ")]),e("animated",{staticClass:"flex-1 visual-block"},[a._v(" right 3 ")])],1)],1)])])},l=[],s={data(){return{groupVisible:!0,windowVisible:!1}},methods:{callEnter(){this.$AnimatedGroup.enter("group1").then(a=>{console.log("callEnter then:",a)}).catch(a=>{console.warn(a)})}},created(){}},o=s,n=(e("9175"),e("2877")),c=Object(n["a"])(o,i,l,!1,null,"e91caa46",null);t["default"]=c.exports},1253:function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,".left[data-v-e91caa46],.right[data-v-e91caa46]{position:relative;width:500px;max-width:40%}.left[data-v-e91caa46]{margin-right:20px}.right[data-v-e91caa46]{margin-left:20px}.group[data-v-e91caa46]{position:absolute;left:0;top:0;width:100%;height:100%}.zoom-box[data-v-e91caa46]{position:fixed;top:0;left:0;right:0;bottom:0;margin:auto;width:300px;height:300px;background-color:pink}",""]),a.exports=t},"333e":function(a,t,e){var i=e("1253");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var l=e("499e").default;l("b6955b2e",i,!0,{sourceMap:!1,shadowMode:!1})},9175:function(a,t,e){"use strict";e("333e")}}]);
//# sourceMappingURL=chunk-1ff71446.1d94d91b.js.map