import k from"./ProseH4.68a10521.js";import B from"./ProseCodeInline.2436fa56.js";import b from"./Badge.bed68522.js";import q from"./ProseP.3f281da2.js";import{d as D,a0 as N,J as j,b as o,c as r,F as w,aB as E,K as d,e as m,g as l,w as s,E as _,t as u,Y as i,f as p,l as F}from"./entry.b3859e81.js";const I={class:"component-playground-data-section"},O=["id"],H=["value","onChange"],J=D({__name:"ComponentPlaygroundProps",props:{modelValue:{type:Object,required:!0},componentData:{type:Object,required:!0}},emits:["update:modelValue"],setup(f,{emit:g}){const a=f,c=N(a,"modelValue",g),y=(t,n)=>{c.value={...c.value,[n]:t.target.value}},v=j(()=>{var t,n;return(n=(t=a==null?void 0:a.componentData)==null?void 0:t.meta)==null?void 0:n.props});return(t,n)=>{const x=k,C=B,P=b,h=q;return o(),r("div",I,[(o(!0),r(w,null,E(d(v),e=>(o(),r("div",{key:e.name},[m("div",{id:e.name,class:"prop-title"},[l(x,{id:e.name},{default:s(()=>[_(u(e.name),1)]),_:2},1032,["id"]),m("span",null,[l(C,null,{default:s(()=>[_(u(e.type),1)]),_:2},1024),e.required?p("",!0):(o(),i(P,{key:0},{default:s(()=>[_(" Required ")]),_:1}))])],8,O),e.description?(o(),i(h,{key:0},{default:s(()=>[_(u(e.description),1)]),_:2},1024)):p("",!0),m("input",{value:d(c)[e.name],onChange:V=>y(V,e.name)},null,40,H)]))),128))])}}});const T=F(J,[["__scopeId","data-v-382fbe32"]]);export{T as default};