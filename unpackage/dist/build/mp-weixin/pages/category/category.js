(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{"0606":function(t,n,e){},"0f27":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return r})},"3eb5":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,i,r,a,c){try{var o=t[a](c),u=o.value}catch(s){return void e(s)}o.done?n(u):Promise.resolve(u).then(i,r)}function c(t){return function(){var n=this,e=arguments;return new Promise(function(i,r){var c=t.apply(n,e);function o(t){a(c,i,r,o,u,"next",t)}function u(t){a(c,i,r,o,u,"throw",t)}o(void 0)})}}var o={data:function(){return{sizeCalcState:!1,tabScrollTop:0,currentId:1,flist:[],slist:[],tlist:[]}},onLoad:function(){this.loadData()},methods:{loadData:function(){var t=c(i.default.mark(function t(){var n,e=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.json("cateList");case 2:n=t.sent,n.forEach(function(t){t.pid?t.picture?e.tlist.push(t):e.slist.push(t):e.flist.push(t)});case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),tabtap:function(t){this.sizeCalcState||this.calcSize(),this.currentId=t.id;var n=this.slist.findIndex(function(n){return n.pid===t.id});this.tabScrollTop=this.slist[n].top},asideScroll:function(t){this.sizeCalcState||this.calcSize();var n=t.detail.scrollTop,e=this.slist.filter(function(t){return t.top<=n}).reverse();e.length>0&&(this.currentId=e[0].pid)},calcSize:function(){var n=0;this.slist.forEach(function(e){var i=t.createSelectorQuery().select("#main-"+e.id);i.fields({size:!0},function(t){e.top=n,n+=t.height,e.bottom=n}).exec()}),this.sizeCalcState=!0},navToList:function(n,e){t.navigateTo({url:"/pages/product/list?fid=".concat(this.currentId,"&sid=").concat(n,"&tid=").concat(e)})}}};n.default=o}).call(this,e("543d")["default"])},"8a88":function(t,n,e){"use strict";e.r(n);var i=e("0f27"),r=e("bce5");for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);e("95e6");var c=e("2877"),o=Object(c["a"])(r["default"],i["a"],i["b"],!1,null,null,null);n["default"]=o.exports},"95e6":function(t,n,e){"use strict";var i=e("0606"),r=e.n(i);r.a},bce5:function(t,n,e){"use strict";e.r(n);var i=e("3eb5"),r=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=r.a}},[["947e","common/runtime","common/vendor"]]]);