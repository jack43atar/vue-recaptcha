import{d as s,a7 as y,aD as g,i as D,a6 as o,H as p}from"./entry.132f2315.js";import v from"./ContentRenderer.8587fea3.js";import w from"./ContentQuery.d05b46d5.js";import"./ContentRendererMarkdown.f935a882.js";import"./asyncData.03706d29.js";const x=s({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(f){const e=y(),{tag:d,excerpt:a,path:m,query:r,head:i}=f,c={...r||{},path:m||(r==null?void 0:r.path)||g(D().path),find:"one"},l=(t,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:t,data:n},null,2));return o(w,c,{default:e!=null&&e.default?({data:t,refresh:n,isPartial:h})=>{var u;return i&&p(t),(u=e.default)==null?void 0:u.call(e,{doc:t,refresh:n,isPartial:h,excerpt:a,...this.$attrs})}:({data:t})=>(i&&p(t),o(v,{value:t,excerpt:a,tag:d,...this.$attrs},{empty:n=>e!=null&&e.empty?e.empty(n):l("default",t)})),empty:t=>{var n;return((n=e==null?void 0:e.empty)==null?void 0:n.call(e,t))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":t=>{var n;return((n=e==null?void 0:e["not-found"])==null?void 0:n.call(e,t))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{x as default};
