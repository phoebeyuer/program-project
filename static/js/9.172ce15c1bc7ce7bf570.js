webpackJsonp([9],{LImY:function(t,e){},cuzF:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{nav:[{title:"所有分类",path:"/blog/blogAllType",BgColor:"#9c2698"},{title:"入门学习",path:"/blog/blogPrimary",BgColor:"#259a25"},{title:"经验分享",path:"/blog/blogShareExperience",BgColor:"#259d94"},{title:"开源项目",path:"/blog/blogShareProject",BgColor:"#26719b"}],navIndex:0}},methods:{routerLink:function(t,e){this.navIndex=t},checkRouterPrevious:function(t){this.navIndex=this.nav.findIndex(function(e){return e.path===t}),console.log(this.navIndex)}},mounted:function(){console.log(this.$route.path),console.log(this.$route.path.length),console.log(this.$route.path.substr(0,5)),console.log(this.navIndex)},watch:{$route:function(){var t=this.$route.path;this.checkRouterPrevious(t)}}},i={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"nav-container"}},[o("div",{staticClass:"title"},[t._l(t.nav,function(e,n){return o("li",{key:n,staticClass:"title-list",on:{click:function(o){t.routerLink(n,e.path)}}},[o("div",{staticClass:"retangle",style:{backgroundColor:e.BgColor}}),t._v(" "),o("router-link",{attrs:{to:e.path}},[o("span",{class:t.navIndex===n?"item-class item-class-active":"item-class"},[t._v("\n\t\t\t\t\t "+t._s(e.title)+"\n\t\t\t     ")])])],1)}),t._v(" "),o("router-link",{attrs:{to:"/blogWrite"}},[o("div",{staticClass:"write-blog"},[t._v("写博客")])])],2),t._v(" "),o("div",{staticClass:"title-line"}),t._v(" "),o("router-view")],1)},staticRenderFns:[]};var l=o("VU/8")(n,i,!1,function(t){o("LImY")},"data-v-4cb435c2",null);e.default=l.exports}});
//# sourceMappingURL=9.172ce15c1bc7ce7bf570.js.map