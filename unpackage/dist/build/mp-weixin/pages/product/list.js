(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/list"],{"38a2":function(t,e,n){"use strict";n.r(e);var i=n("9848"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=o.a},6662:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"863f":function(t,e,n){},9827:function(t,e,n){"use strict";var i=n("863f"),o=n.n(i);o.a},9848:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,i,o,r,a){try{var s=t[r](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(i,o)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,u,"next",t)}function u(t){r(a,i,o,s,u,"throw",t)}s(void 0)})}}var s=function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"8f13"))},u={components:{uniLoadMore:s},data:function(){return{cateMaskState:0,headerPosition:"fixed",headerTop:"0px",loadingType:"more",filterIndex:0,cateId:0,priceOrder:0,cateList:[],goodsList:[]}},onLoad:function(t){this.cateId=t.tid,this.loadCateList(t.fid,t.sid),this.loadData()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.loadData("refresh")},onReachBottom:function(){this.loadData()},methods:{loadCateList:function(){var t=a(i.default.mark(function t(e,n){var o,r;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("cateList");case 2:o=t.sent,r=o.filter(function(t){return t.pid==e}),r.forEach(function(t){var e=o.filter(function(e){return e.pid==t.id});t.child=e}),this.cateList=r;case 6:case"end":return t.stop()}},t,this)}));function e(e,n){return t.apply(this,arguments)}return e}(),loadData:function(){var e=a(i.default.mark(function e(){var n,o,r,a=this,s=arguments;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=s.length>0&&void 0!==s[0]?s[0]:"add",o=s.length>1?s[1]:void 0,"add"!==n){e.next=8;break}if("nomore"!==this.loadingType){e.next=5;break}return e.abrupt("return");case 5:this.loadingType="loading",e.next=9;break;case 8:this.loadingType="more";case 9:return e.next=11,this.$api.json("goodsList");case 11:r=e.sent,"refresh"===n&&(this.goodsList=[]),1===this.filterIndex&&r.sort(function(t,e){return e.sales-t.sales}),2===this.filterIndex&&r.sort(function(t,e){return 1==a.priceOrder?t.price-e.price:e.price-t.price}),this.goodsList=this.goodsList.concat(r),this.loadingType=this.goodsList.length>20?"nomore":"more","refresh"===n&&(1==o?t.hideLoading():t.stopPullDownRefresh());case 18:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),tabClick:function(e){this.filterIndex===e&&2!==e||(this.filterIndex=e,this.priceOrder=2===e?1===this.priceOrder?2:1:0,t.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),t.showLoading({title:"正在加载"}))},toggleCateMask:function(t){var e=this,n="show"===t?10:300,i="show"===t?1:0;this.cateMaskState=2,setTimeout(function(){e.cateMaskState=i},n)},changeCate:function(e){this.cateId=e.id,this.toggleCateMask(),t.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),t.showLoading({title:"正在加载"})},navToDetailPage:function(e){var n=e.title;t.navigateTo({url:"/pages/product/product?id=".concat(n)})},stopPrevent:function(){}}};e.default=u}).call(this,n("543d")["default"])},f1ea:function(t,e,n){"use strict";n.r(e);var i=n("6662"),o=n("38a2");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("9827");var a=n("2877"),s=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports}},[["c2d5","common/runtime","common/vendor"]]]);