webpackJsonp([4],{HCqZ:function(t,e){},mi6V:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{activeNewest:!0,activeHottest:!1,newest:"newest",hottest:"hottest",hotArtical:[{pubName:"银月",pubTime:"2018年7月7日",pubType:"测试类型",pubTitle:"就是测试一下"},{pubName:"银月",pubTime:"2018年7月7日",pubType:"测试类型",pubTitle:"就是测试一下"},{pubName:"银月",pubTime:"2018年7月7日",pubType:"测试类型",pubTitle:"就是测试一下"},{pubName:"银月",pubTime:"2018年7月7日",pubType:"测试类型",pubTitle:"就是测试一下"},{pubName:"银月",pubTime:"2018年7月7日",pubType:"测试类型",pubTitle:"就是测试一下"}]}},methods:{goToArtical:function(t){console.log("点击了"+t)},toggleNewest:function(){this.activeNewest=!0,this.activeHottest=!1},toggleHottest:function(){this.activeNewest=!1,this.activeHottest=!0}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hot-artical-container"},[s("div",{staticClass:"toggle-btn"},[s("div",{class:[t.newest,{active:t.activeNewest}],on:{click:t.toggleNewest}},[t._v("最新")]),t._v(" "),s("div",{class:[t.hottest,{active:t.activeHottest}],on:{click:t.toggleHottest}},[t._v("最热")])]),t._v(" "),s("ul",t._l(t.hotArtical,function(e,i){return s("li",{key:i,on:{click:function(e){t.goToArtical(i)}}},[s("div",{staticClass:"first-content"},[s("span",{staticClass:"item-pubname"},[t._v(t._s(e.pubName))]),t._v(" "),s("span",{staticClass:"dot"},[t._v("·")]),t._v(" "),s("span",{staticClass:"item-pubtime"},[t._v(t._s(e.pubTime))]),t._v(" "),s("span",{staticClass:"dot"},[t._v("·")]),t._v(" "),s("span",{staticClass:"item-pubtype"},[t._v(t._s(e.pubType))])]),t._v(" "),s("div",{staticClass:"second-content"},[s("div",{staticClass:"item-pubtitle"},[t._v(t._s(e.pubTitle))]),t._v(" "),t._m(0,!0)]),t._v(" "),s("div",{staticClass:"underline"})])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item-icon"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v(" "),e("span",{staticClass:"iconfont"},[this._v("")]),this._v(" "),e("span",{staticClass:"iconfont"},[this._v("")])])}]};var n=s("VU/8")(i,a,!1,function(t){s("HCqZ")},"data-v-a30e04ba",null);e.default=n.exports}});
//# sourceMappingURL=4.a61e8dc91a94c96fca06.js.map