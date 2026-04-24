"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=s(function(g,n){
function z(e,r,i,y){var t,a;if(e<=0)return r;for(t=y,a=0;a<e;a++)r[t]=a,t+=i;return r}n.exports=z
});var q=s(function(h,v){
var T=require('@stdlib/strided-base-stride2offset/dist'),j=o();function m(e,r,i){return j(e,r,i,T(e,i))}v.exports=m
});var d=s(function(k,c){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=q(),l=o();x(f,"ndarray",l);c.exports=f
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=d(),u,p=_(R(__dirname,"./native.js"));E(p)?u=O:u=p;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
