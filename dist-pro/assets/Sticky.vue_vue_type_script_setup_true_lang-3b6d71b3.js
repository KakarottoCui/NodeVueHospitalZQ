import{d as e,ai as t,r as o,a0 as n,at as a,N as i,af as u,an as l,a$ as s,o as r,c as d,e as v,C as f,n as c,a3 as p}from"./index-ab69a018.js";const g=v("div",null,"sticky",-1),m=e({__name:"Sticky",props:{offset:t.number.def(0),zIndex:t.number.def(999),className:t.string.def(""),position:{type:String,validator:function(e){return-1!==["top","bottom"].indexOf(e)},default:"top"}},setup(e){const t=e,m=o("auto"),x=o("auto"),y=o(!1),h=n(),w=n(),{height:C}=a();i((()=>{var e;x.value=(null==(e=h.value)?void 0:e.getBoundingClientRect().height)+"px",w.value=b(h.value,!0),u(w,"scroll",B),u("resize",I),B()})),l((()=>{B()}));const z=(e,t)=>{if(!s)return!1;const o=((e,t)=>{var o;if(!s||!e||!t)return"";t.replace(/-(\w)/g,((e,t)=>t?t.toUpperCase():""));try{const n=e.style[t];if(n)return n;const a=null==(o=document.defaultView)?void 0:o.getComputedStyle(e,"");return a?a[t]:""}catch{return e.style[t]}})(e,{undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(t)]);return["scroll","auto","overlay"].some((e=>o.includes(e)))},b=(e,t)=>{if(!s)return;let o=e;for(;o;){if([window,document,document.documentElement].includes(o))return window;if(z(o,t))return o;o=o.parentNode}return o},B=()=>{var e,o;if(m.value=h.value.getBoundingClientRect().width+"px","top"===t.position){const o=null==(e=h.value)?void 0:e.getBoundingClientRect().top;if(void 0!==o&&o<t.offset)return void R();S()}else{const e=null==(o=h.value)?void 0:o.getBoundingClientRect().bottom;if(void 0!==e&&e>C.value-t.offset)return void R();S()}},I=()=>{y.value&&h.value&&(m.value=h.value.getBoundingClientRect().width+"px")},R=()=>{y.value||(y.value=!0)},S=()=>{y.value&&(m.value="auto",y.value=!1)};return(t,o)=>(r(),d("div",{style:p({height:x.value,zIndex:e.zIndex}),ref_key:"refSticky",ref:h},[v("div",{class:c(e.className),style:p({top:"top"===e.position?e.offset+"px":"",bottom:"top"!==e.position?e.offset+"px":"",zIndex:e.zIndex,position:y.value?"fixed":"static",width:m.value,height:x.value})},[f(t.$slots,"default",{},(()=>[g]))],6)],4))}});export{m as _};
