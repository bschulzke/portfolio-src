"use strict";(self["webpackChunkportfolio_src"]=self["webpackChunkportfolio_src"]||[]).push([[631],{2816:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var s=a(6252),r=a(9963);const i=e=>((0,s.dD)("data-v-57dfa4cb"),e=e(),(0,s.Cn)(),e),n={class:"contact"},d={class:"container py-4"},o=(0,s.uE)('<div class="mb-3" data-v-57dfa4cb><label class="form-label" for="name" data-v-57dfa4cb>Name</label><input class="form-control" id="name" type="text" placeholder="Name" name="user_name" data-v-57dfa4cb></div><div class="mb-3" data-v-57dfa4cb><label class="form-label" for="emailAddress" data-v-57dfa4cb>Email Address</label><input class="form-control" id="emailAddress" type="email" placeholder="Email Address" name="user_email" data-v-57dfa4cb></div><div class="mb-3" data-v-57dfa4cb><label class="form-label" for="message" data-v-57dfa4cb>Message</label><textarea name="message" class="form-control" id="message" type="text" placeholder="Message" style="height:10rem;" data-v-57dfa4cb></textarea></div><div class="d-grid" data-v-57dfa4cb><button class="btn btn-primary btn-lg" type="submit" data-v-57dfa4cb>Send</button></div>',4),l=[o],c=i((()=>(0,s._)("div",null,[(0,s._)("a",{href:"https://www.linkedin.com/in/ben-schulzke-2a4086283",target:"_blank"},"LinkedIn"),(0,s._)("br"),(0,s._)("a",{href:"mailto:benschulzke@gmail.com",target:"_blank"},"benschulzke@gmail.com"),(0,s._)("br"),(0,s._)("a",{href:"https://github.com/bschulzke",target:"_blank"},"GitHub")],-1)));function m(e,t,a,i,o,m){return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",d,[(0,s._)("form",{ref:"form",id:"contactForm",onSubmit:t[0]||(t[0]=(0,r.iM)(((...e)=>m.sendEmail&&m.sendEmail(...e)),["prevent"]))},l,544)]),c])}const b={_origin:"https://api.emailjs.com"},p=(e,t="https://api.emailjs.com")=>{b._userID=e,b._origin=t},f=(e,t,a)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class u{constructor(e){this.status=e.status,this.text=e.responseText}}const h=(e,t,a={})=>new Promise(((s,r)=>{const i=new XMLHttpRequest;i.addEventListener("load",(({target:e})=>{const t=new u(e);200===t.status||"OK"===t.text?s(t):r(t)})),i.addEventListener("error",(({target:e})=>{r(new u(e))})),i.open("POST",b._origin+e,!0),Object.keys(a).forEach((e=>{i.setRequestHeader(e,a[e])})),i.send(t)})),v=(e,t,a,s)=>{const r=s||b._userID;f(r,e,t);const i={lib_version:"3.2.0",user_id:r,service_id:e,template_id:t,template_params:a};return h("/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})},_=e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},g=(e,t,a,s)=>{const r=s||b._userID,i=_(a);f(r,e,t);const n=new FormData(i);return n.append("lib_version","3.2.0"),n.append("service_id",e),n.append("template_id",t),n.append("user_id",r),h("/api/v1.0/email/send-form",n)};var w={init:p,send:v,sendForm:g},k={name:"ContactMe",data(){return{name:"",email:"",message:""}},methods:{sendEmail(){w.sendForm("service_8ttm8yk","template_3sti73b",this.$refs.form,"99wZUEga7zsJwe-6X").then((e=>{console.log("SUCCESS!",e.text),this.$refs.form.reset()}),(e=>{console.log("FAILED...",e.text)}))}}},y=a(3744);const E=(0,y.Z)(k,[["render",m],["__scopeId","data-v-57dfa4cb"]]);var x=E}}]);
//# sourceMappingURL=contact.15a7a878.js.map