(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{448:function(t,o,r){var content=r(473);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("66d7a82a",content,!0,{sourceMap:!1})},472:function(t,o,r){"use strict";r(448)},473:function(t,o,r){(o=r(14)(!1)).push([t.i,"[data-v-423b3aaa]:root{--color-header-bg:rgba(40,40,70,0.7);--color-body-bg:#282846;--color-neumorphism-light:#24243f;--color-neumorphism-dark:#202039;--color-text-primary:#c9c9c9;--color-text-secondary:#ff69b4;--color-text-shadow:#22223c;--color-logo-shadow:#24243f;--color-card-bg:rgba(26,26,50,0.7);--color-card-border:rgba(29,29,56,0.73);--color-card-shadow:rgba(24,24,46,0.76);--color-card-shadow-hover:rgba(18,18,34,0.805);--color-card-preview-bg:#666;--color-link:#c9c9c9;--color-link-hover:rgba(32,32,61,0.715);--color-tag-icon:light(#c9c9c9,40%);--color-btn:#525252;--color-btn-grad:#424242;--color-btn-hover:#ff69b4;--color-trix-editor:rgba(247,247,246,0.829)}.light[data-v-423b3aaa]{--color-header-bg:rgba(245,244,243,0.7);--color-body-bg:#f5f4f3;--color-neumorphism-light:#d0cfcf;--color-neumorphism-dark:#fff;--color-text-primary:#2a2a2b;--color-text-secondary:#ff69b4;--color-text-shadow:#c4c3c2;--color-logo-shadow:#dddcdb;--color-card-bg:#f7f7f6;--color-card-border:#dededd;--color-card-shadow:#d2d2d1;--color-card-shadow-hover:#adadac;--color-card-preview-bg:#ebebea;--color-link:#2a2a2b;--color-link-hover:#ebebea;--color-tag-icon:#8f8f92;--color-btn:#d3d1d1;--color-btn-hover:#ff69b4;--color-trix-editor:#f7f7f6}article[data-v-423b3aaa]{width:100%;margin:2rem auto 3rem}p[data-v-423b3aaa]{margin-top:2rem!important}figure[data-v-423b3aaa]{margin:0;width:100%}img[data-v-423b3aaa]{width:60%;margin:0 auto}",""]),t.exports=o},501:function(t,o,r){"use strict";r.r(o);r(23);var e=r(2),c={layout:"admin",middleware:"auth",data:function(){return{title:"Single page",postID:null,postData:{}}},head:function(){return{title:this.postData.title}},mounted:function(){this.postID=$nuxt.$route.params.id,this.getPost(this.postID)},methods:{getPost:function(t){var o=this;return Object(e.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.$axios.$get("posts/".concat(t));case 2:o.postData=r.sent;case 3:case"end":return r.stop()}}),r)})))()},deletePost:function(t){var o=this;return Object(e.a)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.$axios.$delete("posts/".concat(t));case 2:e=r.sent,console.log(e),o.$router.go(-1);case 5:case"end":return r.stop()}}),r)})))()}}},n=(r(472),r(7)),component=Object(n.a)(c,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"content__container"},[r("NuxtLink",{attrs:{to:"/admin/dashboard"}},[t._v(" Back")]),t._v(" "),r("h3",[t._v("post | "+t._s(t.postData.title))]),t._v(" "),r("article",{domProps:{innerHTML:t._s(t.postData.content)}}),t._v(" "),r("div",{staticClass:"button-group"},[r("NuxtLink",{staticClass:"btn",attrs:{to:{name:"admin-post-create"}}},[t._v("Create")]),t._v(" "),r("NuxtLink",{staticClass:"btn",attrs:{to:{name:"admin-post-id-edit",params:{id:t.postID}}}},[t._v("Edit\n    ")]),t._v(" "),r("a",{staticClass:"btn",on:{click:function(o){return t.deletePost(t.postData.id)}}},[t._v("Delete")])],1)],1)}),[],!1,null,"423b3aaa",null);o.default=component.exports}}]);