webpackJsonp([3],{ZaNq:function(t,e){},bXeF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={data:function(){return{nav:[{title:"全部",path:"/knowledge/knowledgeAll",BgColor:"#e7171e"},{title:"html",path:"/knowledge/knowledgeHtml",BgColor:"#259a25"},{title:"css",path:"/knowledge/knowledgeCss",BgColor:"#259d94"},{title:"javaScript",path:"/knowledge/knowledgeJavascript",BgColor:"#26719b"},{title:"webpack",path:"/knowledge/knowledgeWebpack",BgColor:"#9c2698"}],navIndex:0}},methods:{routerLink:function(t,e){this.navIndex=t},checkRouterPrevious:function(t){this.navIndex=this.nav.findIndex(function(e){return e.path===t}),console.log(this.navIndex)}},mounted:function(){console.log(this.$route.path),console.log(this.$route.path.length),console.log(this.$route.path.substr(0,5)),console.log(this.navIndex)},watch:{$route:function(){var t=this.$route.path;this.checkRouterPrevious(t)}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav-container"}},[n("div",{staticClass:"title"},t._l(t.nav,function(e,o){return n("li",{key:o,staticClass:"title-list",on:{click:function(n){t.routerLink(o,e.path)}}},[n("div",{staticClass:"retangle",style:{backgroundColor:e.BgColor}}),t._v(" "),n("router-link",{attrs:{to:e.path}},[n("span",{class:t.navIndex===o?"item-class item-class-active":"item-class"},[t._v("\n\t\t\t\t\t "+t._s(e.title)+"\n\t\t\t     ")])])],1)})),t._v(" "),n("div",{staticClass:"title-line"}),t._v(" "),n("router-view")],1)},staticRenderFns:[]};var l=n("VU/8")(o,a,!1,function(t){n("ZaNq")},"data-v-c9798cf8",null);e.default=l.exports}});
//# sourceMappingURL=3.78f985574aac6b0a27e1.js.map