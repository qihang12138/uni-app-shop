(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"584f":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return i})},"713a":function(t,n,e){"use strict";var r=e("b1b6"),i=e.n(r);i.a},"82bf":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,r,i,a,u){try{var o=t[a](u),s=o.value}catch(c){return void e(c)}o.done?n(s):Promise.resolve(s).then(r,i)}function u(t){return function(){var n=this,e=arguments;return new Promise(function(r,i){var u=t.apply(n,e);function o(t){a(u,r,i,o,s,"next",t)}function s(t){a(u,r,i,o,s,"throw",t)}o(void 0)})}}var o={data:function(){return{titleNViewBackground:"",swiperCurrent:0,swiperLength:0,carouselList:[],goodsList:[]}},onLoad:function(){this.loadData()},methods:{loadData:function(){var t=u(r.default.mark(function t(){var n,e;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("carouselList");case 2:return n=t.sent,this.titleNViewBackground=n[0].background,this.swiperLength=n.length,this.carouselList=n,t.next=8,this.$api.json("goodsList");case 8:e=t.sent,this.goodsList=e||[];case 10:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),swiperChange:function(t){var n=t.detail.current;this.swiperCurrent=n,this.titleNViewBackground=this.carouselList[n].background},navToDetailPage:function(n){var e=n.title;t.navigateTo({url:"/pages/product/product?id=".concat(e)})}}};n.default=o}).call(this,e("543d")["default"])},b1b6:function(t,n,e){},b966:function(t,n,e){"use strict";e.r(n);var r=e("584f"),i=e("f423");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("713a");var u=e("2877"),o=Object(u["a"])(i["default"],r["a"],r["b"],!1,null,null,null);n["default"]=o.exports},f423:function(t,n,e){"use strict";e.r(n);var r=e("82bf"),i=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);n["default"]=i.a}},[["59b1","common/runtime","common/vendor"]]]);