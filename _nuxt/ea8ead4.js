(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{442:function(o,r,e){var content=e(460);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(15).default)("2ee9c376",content,!0,{sourceMap:!1})},459:function(o,r,e){"use strict";e(442)},460:function(o,r,e){(r=e(14)(!1)).push([o.i,"[data-v-895bfea8]:root{--color-header-bg:rgba(40,40,70,0.7);--color-body-bg:#282846;--color-neumorphism-light:#24243f;--color-neumorphism-dark:#202039;--color-text-primary:#c9c9c9;--color-text-secondary:#ff69b4;--color-text-shadow:#22223c;--color-logo-shadow:#24243f;--color-card-bg:rgba(26,26,50,0.7);--color-card-border:rgba(29,29,56,0.73);--color-card-shadow:rgba(24,24,46,0.76);--color-card-shadow-hover:rgba(18,18,34,0.805);--color-card-preview-bg:#666;--color-link:#c9c9c9;--color-link-hover:rgba(32,32,61,0.715);--color-tag-icon:light(#c9c9c9,40%);--color-btn:#525252;--color-btn-grad:#424242;--color-btn-hover:#ff69b4;--color-trix-editor:rgba(247,247,246,0.829)}.light[data-v-895bfea8]{--color-header-bg:rgba(245,244,243,0.7);--color-body-bg:#f5f4f3;--color-neumorphism-light:#d0cfcf;--color-neumorphism-dark:#fff;--color-text-primary:#2a2a2b;--color-text-secondary:#ff69b4;--color-text-shadow:#c4c3c2;--color-logo-shadow:#dddcdb;--color-card-bg:#f7f7f6;--color-card-border:#dededd;--color-card-shadow:#d2d2d1;--color-card-shadow-hover:#adadac;--color-card-preview-bg:#ebebea;--color-link:#2a2a2b;--color-link-hover:#ebebea;--color-tag-icon:#8f8f92;--color-btn:#d3d1d1;--color-btn-hover:#ff69b4;--color-trix-editor:#f7f7f6}.login-container[data-v-895bfea8]{text-align:center;font-size:1.5rem;width:32rem;height:30rem;padding:2.5rem;border-radius:1rem}.fas[data-v-895bfea8]{color:#ff69b4}.login-form[data-v-895bfea8]{display:flex;flex-direction:column;justify-content:center;align-items:center}.input-box[data-v-895bfea8]{text-align:center;margin-bottom:2rem;border-bottom:.1rem dotted #ff69b4;border-bottom:.1rem dotted var(--color-text-secondary)}.label-box[data-v-895bfea8]{text-align:left}.popup[data-v-895bfea8]{padding:.5rem;border:.1rem solid red;position:relative;bottom:-15rem}.popup ul[data-v-895bfea8]{font-size:.9em;text-align:left;list-style:none;list-style-position:outside}button[data-v-895bfea8]{width:16.9rem;font-size:1.2em;font-weight:700;margin-top:1rem;padding:1.2rem;color:#c9c9c9;color:var(--color-text-primary);transition:all .1s ease-in-out;background:transparent;border:.2rem solid #ff69b4;border:.2rem solid var(--color-text-secondary)}button[data-v-895bfea8]:focus,button[data-v-895bfea8]:hover{box-shadow:0 .5em .5em -.4em #ff69b4;box-shadow:0 .5em .5em -.4em var(--color-text-secondary);transform:translateY(-.25em)}input[data-v-895bfea8]{text-align:left;background-color:transparent;border:none}input[data-v-895bfea8],input[data-v-895bfea8]:focus{color:#ff69b4;color:var(--color-text-secondary)}input[data-v-895bfea8]:focus{outline:none}@media(min-width:550px){h1[data-v-895bfea8]{font-size:2rem}}",""]),o.exports=r},502:function(o,r,e){"use strict";e.r(r);var t={layout:"login",data:function(){return{email:"",password:"",error:null,errors:[]}},methods:{checkForm:function(){this.errors=[],this.error=null,this.email?this.validEmail(this.email)||this.errors.push("Valid email required."):this.errors.push("Email required."),this.password||this.errors.push("Password required."),this.errors.length||this.loginUser()},validEmail:function(o){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o)},loginUser:function(){var o=this;this.$auth.loginWith("local",{data:{email:this.email,password:this.password}}).then((function(r){var e=r.data.accessToken,t=r.data.userData;o.$auth.setUserToken(e),o.$axios.setToken(e),o.$auth.setUser(t),o.$router.push("admin/Dashboard")})).catch((function(r){o.error=r.response.data.message}))}}},l=(e(459),e(7)),component=Object(l.a)(t,(function(){var o=this,r=o.$createElement,e=o._self._c||r;return e("div",{staticClass:"login-container box-shadow"},[e("h1",[o._v("Please login")]),o._v(" "),e("form",{staticClass:"login-form",attrs:{method:"post"},on:{submit:function(r){return r.preventDefault(),o.checkForm(r)}}},[e("div",{staticClass:"input-box"},[o._m(0),o._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:o.email,expression:"email"}],attrs:{id:"email",placeholder:"email@example.com",type:"text"},domProps:{value:o.email},on:{input:function(r){r.target.composing||(o.email=r.target.value)}}})]),o._v(" "),e("div",{staticClass:"input-box"},[o._m(1),o._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:o.password,expression:"password"}],attrs:{id:"pass",placeholder:"Password",type:"password"},domProps:{value:o.password},on:{input:function(r){r.target.composing||(o.password=r.target.value)}}})]),o._v(" "),e("button",{attrs:{type:"submit"}},[o._v("Login")])]),o._v(" "),o.errors.length?e("div",{staticClass:"popup"},[e("small",[o._v("Please correct the following error(s):")]),o._v(" "),e("ul",o._l(o.errors,(function(r){return e("li",[o._v(o._s(r))])})),0)]):o._e(),o._v(" "),o.error?e("div",{staticClass:"popup"},[e("p",[o._v(" "+o._s(o.error))])]):o._e()])}),[function(){var o=this.$createElement,r=this._self._c||o;return r("div",{staticClass:"label-box"},[r("i",{staticClass:"fas fa-user"}),this._v(" "),r("label",{attrs:{for:"email"}},[this._v("E-mail")])])},function(){var o=this.$createElement,r=this._self._c||o;return r("div",{staticClass:"label-box"},[r("i",{staticClass:"fas fa-unlock"}),this._v(" "),r("label",{attrs:{for:"pass"}},[this._v("Password")])])}],!1,null,"895bfea8",null);r.default=component.exports}}]);