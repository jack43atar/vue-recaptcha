import E from"./DocsAside.40295647.js";import G from"./ProseCodeInline.4a528917.js";import{d as K,G as U,an as J,i as Q,R as m,r as $,q as W,o as X,V as Y,b as i,K as A,w as h,I as t,c as g,g as r,f as y,e as p,a0 as Z,D as x,t as ee,F as oe,n as k,aq as te,O as ne,ar as se,p as ae,j as ce,l as le}from"./entry.132f2315.js";import re from"./DocsPageBottom.dd17c7e0.js";import _e from"./DocsPrevNext.b938f95f.js";import ue from"./DocsToc.96bae6a8.js";import"./ProseA.228ff429.js";import"./EditOnLink.vue.1f18af38.js";import"./DocsTocLinks.29878a42.js";const ie=d=>(ae("data-v-331382a7"),d=d(),ce(),d),pe={class:"page-body"},de={key:1,class:"toc"},me={class:"toc-wrapper"},fe=ie(()=>p("span",{class:"title"},"Table of Contents",-1)),ve=K({__name:"DocsPageLayout",setup(d){const{page:s}=U(),{config:f,tree:T}=J(),j=Q(),q=(e,o=!0)=>{var n;return typeof((n=s.value)==null?void 0:n[e])<"u"?s.value[e]:o},P=m(()=>{var e,o,n;return!s.value||((n=(o=(e=s.value)==null?void 0:e.body)==null?void 0:o.children)==null?void 0:n.length)>0}),S=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.toc)!==!1&&((l=(c=(n=(o=s.value)==null?void 0:o.body)==null?void 0:n.toc)==null?void 0:c.links)==null?void 0:l.length)>=2}),b=m(()=>{var e,o,n,c,l;return((e=s.value)==null?void 0:e.aside)!==!1&&(((o=T.value)==null?void 0:o.length)>1||((l=(c=(n=T.value)==null?void 0:n[0])==null?void 0:c.children)==null?void 0:l.length))}),F=m(()=>q("bottom",!0)),_=$(!1),a=$(null),v=()=>j.path.split("/").slice(0,2).join("/"),u=W("asideScroll",()=>{var e;return{parentPath:v(),scrollTop:((e=a.value)==null?void 0:e.scrollTop)||0}});function C(){a.value&&(a.value.scrollHeight===0&&setTimeout(C,0),a.value.scrollTop=u.value.scrollTop)}return X(()=>{u.value.parentPath!==v()?(u.value.parentPath=v(),u.value.scrollTop=0):C()}),Y(()=>{a.value&&(u.value.scrollTop=a.value.scrollTop)}),(e,o)=>{var D,w,B,I,N,V;const n=E,c=G,l=te,H=re,L=_e,M=ne,O=ue,R=se;return i(),A(R,{fluid:(w=(D=t(f))==null?void 0:D.main)==null?void 0:w.fluid,padded:(I=(B=t(f))==null?void 0:B.main)==null?void 0:I.padded,class:k(["docs-page-content",{fluid:(V=(N=t(f))==null?void 0:N.main)==null?void 0:V.fluid,"has-toc":t(S),"has-aside":t(b)}])},{default:h(()=>[t(b)?(i(),g("aside",{key:0,ref_key:"asideNav",ref:a,class:"aside-nav"},[r(n,{class:"app-aside"})],512)):y("",!0),p("article",pe,[t(P)?Z(e.$slots,"default",{key:0},void 0,!0):(i(),A(l,{key:1,type:"info"},{default:h(()=>[x(" Start writing in "),r(c,null,{default:h(()=>[x("content/"+ee(t(s)._file),1)]),_:1}),x(" to see this page taking shape. ")]),_:1})),t(P)&&t(s)&&t(F)?(i(),g(oe,{key:2},[r(H),r(L)],64)):y("",!0)]),t(S)?(i(),g("div",de,[p("div",me,[p("button",{onClick:o[0]||(o[0]=z=>_.value=!t(_))},[fe,r(M,{name:"heroicons-outline:chevron-right",class:k(["icon",[t(_)&&"rotate"]])},null,8,["class"])]),p("div",{class:k(["docs-toc-wrapper",[t(_)&&"opened"]])},[r(O,{onMove:o[1]||(o[1]=z=>_.value=!1)})],2)])])):y("",!0)]),_:3},8,["fluid","padded","class"])}}});const Ce=le(ve,[["__scopeId","data-v-331382a7"]]);export{Ce as default};
