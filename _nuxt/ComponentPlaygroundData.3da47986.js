import y from"./TabsHeader.3828048a.js";import g from"./ComponentPlaygroundProps.9b5de22c.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.faf28c5e.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.59720dc5.js";import{d as D,a0 as V,r as k,b as a,c as C,g as P,K as o,Y as m,Z as T,f as l,l as B}from"./entry.9376bc05.js";import"./ProseH4.5b31d46d.js";import"./ProseCodeInline.e2f6e73d.js";import"./Badge.b5ef0643.js";import"./ProseP.5fb17ec9.js";const I={class:"component-playground-data"},j=D({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const n=V(t,"modelValue",p),e=k(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=s=>e.value=s;return(s,c)=>{const u=y,_=g,i=v,f=x;return a(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(a(),m(_,{key:0,modelValue:o(n),"onUpdate:modelValue":c[0]||(c[0]=b=>T(n)?n.value=b:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):l("",!0),o(e)===1?(a(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):l("",!0),o(e)===2?(a(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):l("",!0)])}}});const R=B(j,[["__scopeId","data-v-8b4ea980"]]);export{R as default};