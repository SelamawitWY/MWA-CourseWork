"use strict";(self.webpackChunkfoodBooking_frontend=self.webpackChunkfoodBooking_frontend||[]).push([[592],{8888:(h,u,a)=>{a.d(u,{c:()=>s});var i=a(2340),d=a(4650),_=a(529);let s=(()=>{class n{constructor(e){this.http=e}registration(e){return this.http.post(i.N.urls.api+"api/users",e)}signUpRestaurant(e){return this.http.post(i.N.urls.api+"api/restaurants",e)}}return n.\u0275fac=function(e){return new(e||n)(d.LFG(_.eN))},n.\u0275prov=d.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},1816:(h,u,a)=>{function i(e){this.message=e}a.d(u,{Z:()=>f}),(i.prototype=new Error).name="InvalidCharacterError";var d=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new i("'atob' failed: The string to be decoded is not correctly encoded.");for(var o,r,p=0,c=0,l="";r=t.charAt(c++);~r&&(o=p%4?64*o+r:r,p++%4)?l+=String.fromCharCode(255&o>>(-2*p&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return l};function s(e){this.message=e}(s.prototype=new Error).name="InvalidTokenError";const f=function n(e,t){if("string"!=typeof e)throw new s("Invalid token specified");var o=!0===(t=t||{}).header?0:1;try{return JSON.parse(function _(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return decodeURIComponent(d(t).replace(/(.)/g,function(r,p){var c=p.charCodeAt(0).toString(16).toUpperCase();return c.length<2&&(c="0"+c),"%"+c}))}catch{return d(t)}}(e.split(".")[o]))}catch(r){throw new s("Invalid token specified: "+r.message)}}}}]);