(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{439:function(o,t,r){var content=r(462);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,r(18).default)("29cf7b9c",content,!0,{sourceMap:!1})},461:function(o,t,r){"use strict";r(439)},462:function(o,t,r){(t=r(17)(!1)).push([o.i,"[data-v-748aa401]:root{--color-header-bg:rgba(39,43,56,0.7);--color-body-bg:#282c39;--color-neumorphism-light:#222530;--color-neumorphism-dark:#2e3342;--color-text-primary:#c9c9c9;--color-text-secondary:#ff69b4;--color-text-shadow:#222530;--color-logo-shadow:#242833;--color-card-bg:#343844;--color-card-border:#2f323d;--color-card-shadow:#2a2d36;--color-card-shadow-hover:#22242c;--color-card-preview-bg:#c2c2c2;--color-link:#c9c9c9;--color-link-hover:#313541;--color-tag-icon:light(#c9c9c9,40%);--color-btn:#525252;--color-btn-grad:#424242;--color-btn-hover:#ff69b4;--color-trix-editor:rgba(247,247,246,0.829)}.light[data-v-748aa401]{--color-header-bg:rgba(245,244,243,0.7);--color-body-bg:#f5f4f3;--color-neumorphism-light:#d0cfcf;--color-neumorphism-dark:#fff;--color-text-primary:#2a2a2b;--color-text-secondary:#ff69b4;--color-text-shadow:#c4c3c2;--color-logo-shadow:#dddcdb;--color-card-bg:#f7f7f6;--color-card-border:#dededd;--color-card-shadow:#c6c6c5;--color-card-shadow-hover:#adadac;--color-card-preview-bg:#ebebea;--color-link:#2a2a2b;--color-link-hover:#ebebea;--color-tag-icon:#8f8f92;--color-btn:#d3d1d1;--color-btn-hover:#ff69b4;--color-trix-editor:#f7f7f6}.trix[data-v-748aa401]{color:#000}.trix[data-v-748aa401],button[data-v-748aa401]{background-color:rgba(247,247,246,.829);background-color:var(--color-trix-editor)}button[data-v-748aa401]{box-shadow:none;border:none}",""]),o.exports=t},498:function(o,t,r){"use strict";r.r(t);r(43);var e={name:"TrixCreatePage",components:{VueTrix:r(457).a},layout:"admin",data:function(){return{editorContent:"<h1>Editor contents</h1>",title:"Posts Crete",postName:null}},head:function(){return{title:this.title}},methods:{checkForm:function(o){var data={title:this.postName,content:this.editorContent,slug:this.postName+"5"};this.$axios.$post("/posts",data);o.preventDefault()},handleAttachmentChanges:function(o){var t=o.attachment.file,r=new FormData;r.append("file",t),this.$axios.$post("/attachments/upload",r).then((function(data){console.log(data);var t={url:data.result.secure_url,href:data.result.secure_url};o.attachment.setAttributes(t)}))}}},c=(r(461),r(7)),component=Object(c.a)(e,(function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("div",[r("form",{attrs:{action:"#",id:"postForm",method:"post"},on:{submit:function(t){return t.preventDefault(),o.checkForm(t)}}},[r("div",{staticClass:"input-box"},[r("label",{attrs:{for:"name"}},[o._v("Nazev postu")]),o._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:o.postName,expression:"postName"}],attrs:{type:"text",id:"name"},domProps:{value:o.postName},on:{input:function(t){t.target.composing||(o.postName=t.target.value)}}})]),o._v(" "),r("div",{staticClass:"trix"},[r("VueTrix",{attrs:{inputId:"editor1",placeholder:"enter your content..."},on:{"trix-attachment-add":o.handleAttachmentChanges},model:{value:o.editorContent,callback:function(t){o.editorContent=t},expression:"editorContent"}})],1),o._v(" "),o._m(0)])])}),[function(){var o=this.$createElement,t=this._self._c||o;return t("p",[t("button",{staticClass:"btn",attrs:{type:"submit"}},[this._v("Odeslat")])])}],!1,null,"748aa401",null);t.default=component.exports}}]);