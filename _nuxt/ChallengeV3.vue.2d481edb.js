import{w as c}from"./index.847bce45.js";import{at as l,ao as i,r as p,d as m,a5 as d,b as f,X as x,w as y,a8 as h,ak as v,al as C,J as V,am as _}from"./entry.93faa443.js";function w(s){const o=l(),a=i(),e=p();return{response:e,async execute(){return e.value=await a.execute(o,{action:s})}}}const P=m({__name:"ChallengeV3",props:{action:{},as:{default:"div"},autoExecute:{type:Boolean,default:!0},modelValue:{}},emits:["update:modelValue"],setup(s,{emit:o}){const a=s,{response:e,execute:n}=w(a.action),r=d({response:e,execute:n});c(e,t=>{o("update:modelValue",t)});function u(){a.autoExecute&&n()}return(t,k)=>(f(),x(_(t.as),{onClick:u},{default:y(()=>[h(t.$slots,"default",v(C(V(r))))]),_:3}))}});export{P as _};