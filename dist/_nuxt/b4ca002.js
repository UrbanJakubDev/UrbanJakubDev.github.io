(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{441:function(o,r,t){var content=t(456);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(15).default)("09545ab8",content,!0,{sourceMap:!1})},455:function(o,r,t){"use strict";t(441)},456:function(o,r,t){(r=t(14)(!1)).push([o.i,"[data-v-c7d56dd6]:root{--color-header-bg:rgba(40,40,70,0.7);--color-body-bg:#282846;--color-neumorphism-light:#222530;--color-neumorphism-dark:#2e3342;--color-text-primary:#c9c9c9;--color-text-secondary:#ff69b4;--color-text-shadow:#22223c;--color-logo-shadow:#24243f;--color-card-bg:rgba(26,26,50,0.7);--color-card-border:rgba(29,29,56,0.73);--color-card-shadow:rgba(24,24,46,0.76);--color-card-shadow-hover:rgba(18,18,34,0.805);--color-card-preview-bg:#666;--color-link:#c9c9c9;--color-link-hover:rgba(32,32,61,0.715);--color-tag-icon:light(#c9c9c9,40%);--color-btn:#525252;--color-btn-grad:#424242;--color-btn-hover:#ff69b4;--color-trix-editor:rgba(247,247,246,0.829)}.light[data-v-c7d56dd6]{--color-header-bg:rgba(245,244,243,0.7);--color-body-bg:#f5f4f3;--color-neumorphism-light:#d0cfcf;--color-neumorphism-dark:#fff;--color-text-primary:#2a2a2b;--color-text-secondary:#ff69b4;--color-text-shadow:#c4c3c2;--color-logo-shadow:#dddcdb;--color-card-bg:#f7f7f6;--color-card-border:#dededd;--color-card-shadow:#d2d2d1;--color-card-shadow-hover:#adadac;--color-card-preview-bg:#ebebea;--color-link:#2a2a2b;--color-link-hover:#ebebea;--color-tag-icon:#8f8f92;--color-btn:#d3d1d1;--color-btn-hover:#ff69b4;--color-trix-editor:#f7f7f6}.login_container[data-v-c7d56dd6]{text-align:center;font-size:1.5rem;width:25rem;height:25rem;padding:2rem;border-radius:1rem}.fas[data-v-c7d56dd6]{color:#ff69b4}.login_form[data-v-c7d56dd6]{display:flex;flex-direction:column;justify-content:center;align-items:center}.input-box[data-v-c7d56dd6]{text-align:center;margin-bottom:2rem;border-bottom:2px solid #ff69b4;border-bottom:2px solid var(--color-text-secondary)}button[data-v-c7d56dd6]{width:169px;font-size:1.2em;font-weight:700;margin-top:1rem;padding:1.2rem;color:#c9c9c9;color:var(--color-text-primary);transition:all .1s ease-in-out;background:transparent;border:2px solid #ff69b4;border:2px solid var(--color-text-secondary)}button[data-v-c7d56dd6]:focus,button[data-v-c7d56dd6]:hover{box-shadow:0 .5em .5em -.4em #ff69b4;box-shadow:0 .5em .5em -.4em var(--color-text-secondary);transform:translateY(-.25em)}input[data-v-c7d56dd6]{text-align:left;background-color:transparent;border:none}input[data-v-c7d56dd6],input[data-v-c7d56dd6]:focus{color:#ff69b4;color:var(--color-text-secondary)}input[data-v-c7d56dd6]:focus{outline:none}",""]),o.exports=r},496:function(o,r,t){"use strict";t.r(r);var e={layout:"login",data:function(){return{email:"",password:"",error:null}},methods:{loginNew:function(){var o=this;this.$auth.loginWith("local",{data:{email:this.email,password:this.password}}).then((function(r){console.log(r.data);var t=r.data.accessToken,e=r.data.userData;o.$auth.setUserToken(t),o.$axios.setToken(t),o.$auth.setUser(e)})).catch((function(r){o.error=r.response.data.message}))}}},d=(t(455),t(7)),component=Object(d.a)(e,(function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("div",{staticClass:"login_container box-shadow neumorphism"},[t("h3",[o._v("Please login")]),o._v(" "),t("form",{staticClass:"login_form",attrs:{method:"post"},on:{submit:function(r){return r.preventDefault(),o.loginNew(r)}}},[t("div",{staticClass:"input-box"},[t("i",{staticClass:"fas fa-user"}),o._v(" "),t("label",{attrs:{for:"email"}}),o._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:o.email,expression:"email"}],attrs:{id:"email",placeholder:"Email",type:"text"},domProps:{value:o.email},on:{input:function(r){r.target.composing||(o.email=r.target.value)}}})]),o._v(" "),t("div",{staticClass:"input-box"},[t("i",{staticClass:"fas fa-unlock"}),o._v(" "),t("label",{attrs:{for:"pass"}}),o._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:o.password,expression:"password"}],attrs:{id:"pass",placeholder:"Password",type:"password"},domProps:{value:o.password},on:{input:function(r){r.target.composing||(o.password=r.target.value)}}})]),o._v(" "),t("button",{attrs:{type:"submit"}},[o._v("Login")])])])}),[],!1,null,"c7d56dd6",null);r.default=component.exports}}]);