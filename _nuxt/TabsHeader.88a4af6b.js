import{d as m,r as l,U as b,b as a,c as s,F as v,au as g,e as u,f as x,a0 as y,n as I,t as k,p as T,j as S,N as C,l as $}from"./entry.3fc300cb.js";const N=t=>(T("data-v-ad7417d7"),t=t(),S(),t),U={class:"tabs-header"},w=["onClick"],B=N(()=>u("span",{class:"tab"},null,-1)),H=[B],q=m({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:_}){const p=t,n=l(),r=l(),d=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},h=(e,i)=>{_("update:activeTabIndex",i),C(()=>d(e.target))};return b(n,e=>{e&&setTimeout(()=>{d(n.value.children[p.activeTabIndex])},50)},{immediate:!0}),(e,i)=>(a(),s("div",U,[t.tabs?(a(),s("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(a(!0),s(v,null,g(t.tabs,({label:c},o)=>(a(),s("button",{key:`${o}${c}`,class:I([t.activeTabIndex===o?"active":"not-active"]),onClick:f=>h(f,o)},k(c),11,w))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},H,512)],512)):x("",!0),y(e.$slots,"footer",{},void 0,!0)]))}});const L=$(q,[["__scopeId","data-v-ad7417d7"]]);export{L as default};