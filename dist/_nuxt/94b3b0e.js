(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{293:function(o,r,t){var content=t(433);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(15).default)("6117718b",content,!0,{sourceMap:!1})},294:function(o,r,t){var content=t(435);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(15).default)("65135a4e",content,!0,{sourceMap:!1})},432:function(o,r,t){"use strict";t(293)},433:function(o,r,t){(r=t(14)(!1)).push([o.i,"[data-v-945ddcfc]:root{--color-header-bg:rgba(40,40,70,0.7);--color-body-bg:#282846;--color-neumorphism-light:#24243f;--color-neumorphism-dark:#202039;--color-text-primary:#c9c9c9;--color-text-secondary:#ff69b4;--color-text-shadow:#22223c;--color-logo-shadow:#24243f;--color-card-bg:rgba(26,26,50,0.7);--color-card-border:rgba(29,29,56,0.73);--color-card-shadow:rgba(24,24,46,0.76);--color-card-shadow-hover:rgba(18,18,34,0.805);--color-card-preview-bg:#666;--color-link:#c9c9c9;--color-link-hover:rgba(32,32,61,0.715);--color-tag-icon:light(#c9c9c9,40%);--color-btn:#525252;--color-btn-grad:#424242;--color-btn-hover:#ff69b4;--color-trix-editor:rgba(247,247,246,0.829)}.light[data-v-945ddcfc]{--color-header-bg:rgba(245,244,243,0.7);--color-body-bg:#f5f4f3;--color-neumorphism-light:#d0cfcf;--color-neumorphism-dark:#fff;--color-text-primary:#2a2a2b;--color-text-secondary:#ff69b4;--color-text-shadow:#c4c3c2;--color-logo-shadow:#dddcdb;--color-card-bg:#f7f7f6;--color-card-border:#dededd;--color-card-shadow:#d2d2d1;--color-card-shadow-hover:#adadac;--color-card-preview-bg:#ebebea;--color-link:#2a2a2b;--color-link-hover:#ebebea;--color-tag-icon:#8f8f92;--color-btn:#d3d1d1;--color-btn-hover:#ff69b4;--color-trix-editor:#f7f7f6}.card[data-v-945ddcfc]{text-align:center;margin:0 auto;border:2px solid grey;padding:1rem;width:20%}",""]),o.exports=r},434:function(o,r,t){"use strict";t(294)},435:function(o,r,t){(r=t(14)(!1)).push([o.i,"[data-v-4e465b66]:root{--color-header-bg:rgba(40,40,70,0.7);--color-body-bg:#282846;--color-neumorphism-light:#24243f;--color-neumorphism-dark:#202039;--color-text-primary:#c9c9c9;--color-text-secondary:#ff69b4;--color-text-shadow:#22223c;--color-logo-shadow:#24243f;--color-card-bg:rgba(26,26,50,0.7);--color-card-border:rgba(29,29,56,0.73);--color-card-shadow:rgba(24,24,46,0.76);--color-card-shadow-hover:rgba(18,18,34,0.805);--color-card-preview-bg:#666;--color-link:#c9c9c9;--color-link-hover:rgba(32,32,61,0.715);--color-tag-icon:light(#c9c9c9,40%);--color-btn:#525252;--color-btn-grad:#424242;--color-btn-hover:#ff69b4;--color-trix-editor:rgba(247,247,246,0.829)}.light[data-v-4e465b66]{--color-header-bg:rgba(245,244,243,0.7);--color-body-bg:#f5f4f3;--color-neumorphism-light:#d0cfcf;--color-neumorphism-dark:#fff;--color-text-primary:#2a2a2b;--color-text-secondary:#ff69b4;--color-text-shadow:#c4c3c2;--color-logo-shadow:#dddcdb;--color-card-bg:#f7f7f6;--color-card-border:#dededd;--color-card-shadow:#d2d2d1;--color-card-shadow-hover:#adadac;--color-card-preview-bg:#ebebea;--color-link:#2a2a2b;--color-link-hover:#ebebea;--color-tag-icon:#8f8f92;--color-btn:#d3d1d1;--color-btn-hover:#ff69b4;--color-trix-editor:#f7f7f6}.table-wrapper[data-v-4e465b66]{width:100%;margin:5rem auto}.table-wrapper table[data-v-4e465b66]{text-align:left;width:100%}.table-wrapper thead[data-v-4e465b66]{border:2px solid #fff}",""]),o.exports=r},437:function(o,r,t){"use strict";t.r(r);var e={},c=(t(432),t(7)),component=Object(c.a)(e,(function(){var o=this.$createElement;return(this._self._c||o)("div",{staticClass:"card"},[this._v("\n  1,5K\n")])}),[],!1,null,"945ddcfc",null);r.default=component.exports},438:function(o,r,t){"use strict";t.r(r);var e=t(288),c=t.n(e),l={props:{postList:{type:Array,default:{}}},methods:{dateFormat:function(o){return c()(o).fromNow()}}},d=(t(434),t(7)),component=Object(d.a)(l,(function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"table-wrapper"},[t("table",[o._m(0),o._v(" "),t("tbody",o._l(o.postList,(function(r){return t("tr",{key:r.id},[t("td",[t("NuxtLink",{attrs:{to:{name:"admin-post-id",params:{id:r.id}}}},[o._v(o._s(r.title))])],1),o._v(" "),t("td",[o._v(o._s(r.slug))]),o._v(" "),t("td",[o._v(o._s(o.dateFormat(r.createdAt)))]),o._v(" "),t("td",[t("span",{staticClass:"material-icons",on:{click:function(t){return o.$emit("editPost",r.id)}}},[o._v("edit")]),o._v(" "),t("span",{staticClass:"material-icons",on:{click:function(t){return o.$emit("deletePost",r.id)}}},[o._v("archive")])])])})),0)])])}),[function(){var o=this.$createElement,r=this._self._c||o;return r("thead",[r("th",[this._v("Title")]),this._v(" "),r("th",[this._v("SLug")]),this._v(" "),r("th",[this._v("Ceated at")]),this._v(" "),r("th",[this._v("Link")])])}],!1,null,"4e465b66",null);r.default=component.exports},445:function(o,r,t){var map={"./af":296,"./af.js":296,"./ar":297,"./ar-dz":298,"./ar-dz.js":298,"./ar-kw":299,"./ar-kw.js":299,"./ar-ly":300,"./ar-ly.js":300,"./ar-ma":301,"./ar-ma.js":301,"./ar-sa":302,"./ar-sa.js":302,"./ar-tn":303,"./ar-tn.js":303,"./ar.js":297,"./az":304,"./az.js":304,"./be":305,"./be.js":305,"./bg":306,"./bg.js":306,"./bm":307,"./bm.js":307,"./bn":308,"./bn-bd":309,"./bn-bd.js":309,"./bn.js":308,"./bo":310,"./bo.js":310,"./br":311,"./br.js":311,"./bs":312,"./bs.js":312,"./ca":313,"./ca.js":313,"./cs":314,"./cs.js":314,"./cv":315,"./cv.js":315,"./cy":316,"./cy.js":316,"./da":317,"./da.js":317,"./de":318,"./de-at":319,"./de-at.js":319,"./de-ch":320,"./de-ch.js":320,"./de.js":318,"./dv":321,"./dv.js":321,"./el":322,"./el.js":322,"./en-au":323,"./en-au.js":323,"./en-ca":324,"./en-ca.js":324,"./en-gb":325,"./en-gb.js":325,"./en-ie":326,"./en-ie.js":326,"./en-il":327,"./en-il.js":327,"./en-in":328,"./en-in.js":328,"./en-nz":329,"./en-nz.js":329,"./en-sg":330,"./en-sg.js":330,"./eo":331,"./eo.js":331,"./es":332,"./es-do":333,"./es-do.js":333,"./es-mx":334,"./es-mx.js":334,"./es-us":335,"./es-us.js":335,"./es.js":332,"./et":336,"./et.js":336,"./eu":337,"./eu.js":337,"./fa":338,"./fa.js":338,"./fi":339,"./fi.js":339,"./fil":340,"./fil.js":340,"./fo":341,"./fo.js":341,"./fr":342,"./fr-ca":343,"./fr-ca.js":343,"./fr-ch":344,"./fr-ch.js":344,"./fr.js":342,"./fy":345,"./fy.js":345,"./ga":346,"./ga.js":346,"./gd":347,"./gd.js":347,"./gl":348,"./gl.js":348,"./gom-deva":349,"./gom-deva.js":349,"./gom-latn":350,"./gom-latn.js":350,"./gu":351,"./gu.js":351,"./he":352,"./he.js":352,"./hi":353,"./hi.js":353,"./hr":354,"./hr.js":354,"./hu":355,"./hu.js":355,"./hy-am":356,"./hy-am.js":356,"./id":357,"./id.js":357,"./is":358,"./is.js":358,"./it":359,"./it-ch":360,"./it-ch.js":360,"./it.js":359,"./ja":361,"./ja.js":361,"./jv":362,"./jv.js":362,"./ka":363,"./ka.js":363,"./kk":364,"./kk.js":364,"./km":365,"./km.js":365,"./kn":366,"./kn.js":366,"./ko":367,"./ko.js":367,"./ku":368,"./ku.js":368,"./ky":369,"./ky.js":369,"./lb":370,"./lb.js":370,"./lo":371,"./lo.js":371,"./lt":372,"./lt.js":372,"./lv":373,"./lv.js":373,"./me":374,"./me.js":374,"./mi":375,"./mi.js":375,"./mk":376,"./mk.js":376,"./ml":377,"./ml.js":377,"./mn":378,"./mn.js":378,"./mr":379,"./mr.js":379,"./ms":380,"./ms-my":381,"./ms-my.js":381,"./ms.js":380,"./mt":382,"./mt.js":382,"./my":383,"./my.js":383,"./nb":384,"./nb.js":384,"./ne":385,"./ne.js":385,"./nl":386,"./nl-be":387,"./nl-be.js":387,"./nl.js":386,"./nn":388,"./nn.js":388,"./oc-lnc":389,"./oc-lnc.js":389,"./pa-in":390,"./pa-in.js":390,"./pl":391,"./pl.js":391,"./pt":392,"./pt-br":393,"./pt-br.js":393,"./pt.js":392,"./ro":394,"./ro.js":394,"./ru":395,"./ru.js":395,"./sd":396,"./sd.js":396,"./se":397,"./se.js":397,"./si":398,"./si.js":398,"./sk":399,"./sk.js":399,"./sl":400,"./sl.js":400,"./sq":401,"./sq.js":401,"./sr":402,"./sr-cyrl":403,"./sr-cyrl.js":403,"./sr.js":402,"./ss":404,"./ss.js":404,"./sv":405,"./sv.js":405,"./sw":406,"./sw.js":406,"./ta":407,"./ta.js":407,"./te":408,"./te.js":408,"./tet":409,"./tet.js":409,"./tg":410,"./tg.js":410,"./th":411,"./th.js":411,"./tk":412,"./tk.js":412,"./tl-ph":413,"./tl-ph.js":413,"./tlh":414,"./tlh.js":414,"./tr":415,"./tr.js":415,"./tzl":416,"./tzl.js":416,"./tzm":417,"./tzm-latn":418,"./tzm-latn.js":418,"./tzm.js":417,"./ug-cn":419,"./ug-cn.js":419,"./uk":420,"./uk.js":420,"./ur":421,"./ur.js":421,"./uz":422,"./uz-latn":423,"./uz-latn.js":423,"./uz.js":422,"./vi":424,"./vi.js":424,"./x-pseudo":425,"./x-pseudo.js":425,"./yo":426,"./yo.js":426,"./zh-cn":427,"./zh-cn.js":427,"./zh-hk":428,"./zh-hk.js":428,"./zh-mo":429,"./zh-mo.js":429,"./zh-tw":430,"./zh-tw.js":430};function e(o){var r=c(o);return t(r)}function c(o){if(!t.o(map,o)){var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}return map[o]}e.keys=function(){return Object.keys(map)},e.resolve=c,o.exports=e,e.id=445},446:function(o,r,t){var content=t(465);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(15).default)("dd35a8a8",content,!0,{sourceMap:!1})},464:function(o,r,t){"use strict";t(446)},465:function(o,r,t){(r=t(14)(!1)).push([o.i,"[data-v-4813b0dc]:root{--color-header-bg:rgba(40,40,70,0.7);--color-body-bg:#282846;--color-neumorphism-light:#24243f;--color-neumorphism-dark:#202039;--color-text-primary:#c9c9c9;--color-text-secondary:#ff69b4;--color-text-shadow:#22223c;--color-logo-shadow:#24243f;--color-card-bg:rgba(26,26,50,0.7);--color-card-border:rgba(29,29,56,0.73);--color-card-shadow:rgba(24,24,46,0.76);--color-card-shadow-hover:rgba(18,18,34,0.805);--color-card-preview-bg:#666;--color-link:#c9c9c9;--color-link-hover:rgba(32,32,61,0.715);--color-tag-icon:light(#c9c9c9,40%);--color-btn:#525252;--color-btn-grad:#424242;--color-btn-hover:#ff69b4;--color-trix-editor:rgba(247,247,246,0.829)}.light[data-v-4813b0dc]{--color-header-bg:rgba(245,244,243,0.7);--color-body-bg:#f5f4f3;--color-neumorphism-light:#d0cfcf;--color-neumorphism-dark:#fff;--color-text-primary:#2a2a2b;--color-text-secondary:#ff69b4;--color-text-shadow:#c4c3c2;--color-logo-shadow:#dddcdb;--color-card-bg:#f7f7f6;--color-card-border:#dededd;--color-card-shadow:#d2d2d1;--color-card-shadow-hover:#adadac;--color-card-preview-bg:#ebebea;--color-link:#2a2a2b;--color-link-hover:#ebebea;--color-tag-icon:#8f8f92;--color-btn:#d3d1d1;--color-btn-hover:#ff69b4;--color-trix-editor:#f7f7f6}.card-list[data-v-4813b0dc]{display:flex}figure[data-v-4813b0dc]{width:90%}",""]),o.exports=r},499:function(o,r,t){"use strict";t.r(r);t(64);var e={middleware:"auth",layout:"admin",data:function(){return{title:"Postts",postList:[]}},head:function(){return{title:this.title}},mounted:function(){this.getAllPosts()},methods:{getAllPosts:function(){var o=this;this.$axios.$get("/posts").then((function(data){o.postList=data})).catch(console.error())},editPost:function(o){this.$router.push({name:"admin-post-create",params:{id:o}})},deletePost:function(o){var r=this;this.$axios.$delete("posts/".concat(o)).then((function(o){r.getAllPosts()})).catch((function(o){$nuxt.error({statusCode:"403"})}))}}},c=(t(464),t(7)),component=Object(c.a)(e,(function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"content__container"},[t("div",{staticClass:"card-list"},[t("Card"),o._v(" "),t("Card"),o._v(" "),t("Card"),o._v(" "),t("Card")],1),o._v(" "),t("PostsTab",{attrs:{postList:o.postList},on:{deletePost:o.deletePost,editPost:o.editPost}}),o._v(" "),t("NuxtLink",{staticClass:"btn",attrs:{to:{name:"admin-post-create"}}},[o._v("Create TipTap")])],1)}),[],!1,null,"4813b0dc",null);r.default=component.exports;installComponents(component,{Card:t(437).default,PostsTab:t(438).default})}}]);