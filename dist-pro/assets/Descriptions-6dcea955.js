import{d as e,aB as l,av as t,y as s,P as a,v as r,a as o,o as n,c as i,e as c,F as d,L as p,h as u,g as m,_ as b,bk as f,b7 as v,aA as y,z as g,n as h,C as x,K as w,t as k,B as _,D as S,aL as $,ai as j,b as D,bc as E,r as N,J as A,w as C,j as z,ac as I,ad as O,aj as B,aK as W}from"./index-ab69a018.js";import{i as K,E as L}from"./el-popper-2ba03ef0.js";import{g as P,f as F}from"./vnode-d7131a6b.js";import{u as J}from"./use-form-common-props-5bbac68f.js";import{E as M}from"./index-7d2f3f9b.js";import{_ as R}from"./_plugin-vue_export-helper-1b428a4d.js";const V=Symbol("elDescriptions");var q=e({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String},type:{type:String}},setup:()=>({descriptions:l(V,{})}),render(){var e,l,r,o,n,i;const c=P(this.cell),{border:d,direction:p}=this.descriptions,u="vertical"===p,m=(null==(r=null==(l=null==(e=this.cell)?void 0:e.children)?void 0:l.label)?void 0:r.call(l))||c.label,b=null==(i=null==(n=null==(o=this.cell)?void 0:o.children)?void 0:n.default)?void 0:i.call(n),f=c.span,v=c.align?`is-${c.align}`:"",y=c.labelAlign?`is-${c.labelAlign}`:v,g=c.className,h=c.labelClassName,x={width:t(c.width),minWidth:t(c.minWidth)},w=s("descriptions");switch(this.type){case"label":return a(this.tag,{style:x,class:[w.e("cell"),w.e("label"),w.is("bordered-label",d),w.is("vertical-label",u),y,h],colSpan:u?f:1},m);case"content":return a(this.tag,{style:x,class:[w.e("cell"),w.e("content"),w.is("bordered-content",d),w.is("vertical-content",u),v,g],colSpan:u?f:2*f-1},b);default:return a("td",{style:x,class:[w.e("cell"),v],colSpan:f},[K(m)?void 0:a("span",{class:[w.e("label"),h]},m),a("span",{class:[w.e("content"),g]},b)])}}});const G=r({row:{type:Array,default:()=>[]}}),H={key:1},Q=e({name:"ElDescriptionsRow"});var T=b(e({...Q,props:G,setup(e){const t=l(V,{});return(e,l)=>"vertical"===o(t).direction?(n(),i(d,{key:0},[c("tr",null,[(n(!0),i(d,null,p(e.row,((e,l)=>(n(),u(o(q),{key:`tr1-${l}`,cell:e,tag:"th",type:"label"},null,8,["cell"])))),128))]),c("tr",null,[(n(!0),i(d,null,p(e.row,((e,l)=>(n(),u(o(q),{key:`tr2-${l}`,cell:e,tag:"td",type:"content"},null,8,["cell"])))),128))])],64)):(n(),i("tr",H,[(n(!0),i(d,null,p(e.row,((e,l)=>(n(),i(d,{key:`tr3-${l}`},[o(t).border?(n(),i(d,{key:0},[m(o(q),{cell:e,tag:"td",type:"label"},null,8,["cell"]),m(o(q),{cell:e,tag:"td",type:"content"},null,8,["cell"])],64)):(n(),u(o(q),{key:1,cell:e,tag:"td",type:"both"},null,8,["cell"]))],64)))),128))]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const U=r({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:f,title:{type:String,default:""},extra:{type:String,default:""}}),X=e({name:"ElDescriptions"});var Y=b(e({...X,props:U,setup(e){const l=e,t=s("descriptions"),a=J(),r=v();y(V,l);const m=g((()=>[t.b(),t.m(a.value)])),b=(e,l,t,s=!1)=>(e.props||(e.props={}),l>t&&(e.props.span=t),s&&(e.props.span=l),e),f=()=>{var e;const t=F(null==(e=r.default)?void 0:e.call(r)).filter((e=>{var l;return"ElDescriptionsItem"===(null==(l=null==e?void 0:e.type)?void 0:l.name)})),s=[];let a=[],o=l.column,n=0;return t.forEach(((e,r)=>{var i;const c=(null==(i=e.props)?void 0:i.span)||1;if(r<t.length-1&&(n+=c>o?o:c),r===t.length-1){const t=l.column-n%l.column;return a.push(b(e,t,o,!0)),void s.push(a)}c<o?(o-=c,a.push(e)):(a.push(b(e,c,o)),s.push(a),o=l.column,a=[])})),s};return(e,l)=>(n(),i("div",{class:h(o(m))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(n(),i("div",{key:0,class:h(o(t).e("header"))},[c("div",{class:h(o(t).e("title"))},[x(e.$slots,"title",{},(()=>[w(k(e.title),1)]))],2),c("div",{class:h(o(t).e("extra"))},[x(e.$slots,"extra",{},(()=>[w(k(e.extra),1)]))],2)],2)):_("v-if",!0),c("div",{class:h(o(t).e("body"))},[c("table",{class:h([o(t).e("table"),o(t).is("bordered",e.border)])},[c("tbody",null,[(n(!0),i(d,null,p(f(),((e,l)=>(n(),u(T,{key:l,row:e},null,8,["row"])))),128))])],2)],2)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]),Z=e({name:"ElDescriptionsItem",props:{label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}});const ee=S(Y,{DescriptionsItem:Z}),le=$(Z),te={class:"flex items-center"},se=R(e({__name:"Descriptions",props:{title:j.string.def(""),message:j.string.def(""),collapse:j.bool.def(!0),schema:{type:Array,default:()=>[]},data:{type:Object,default:()=>({})}},setup(e){const l=e,t=D(),s=g((()=>t.getMobile)),a=E(),r=v(),{getPrefixCls:b}=z(),f=b("descriptions"),y=g((()=>{const e=["title","message","collapse","schema","data","class"],t={...a,...l};for(const l in t)-1!==e.indexOf(l)&&delete t[l];return t})),S=N(!0),$=()=>{l.collapse&&(S.value=!o(S))};return(l,t)=>{const a=A("Icon");return n(),i("div",{class:h([o(f),"bg-[var(--el-color-white)] dark:bg-[var(--el-bg-color)] dark:border-[var(--el-border-color)] dark:border-1px"])},[e.title?(n(),i("div",{key:0,class:h([`${o(f)}-header`,"h-50px flex justify-between items-center border-bottom-1 border-solid border-[var(--tags-view-border-color)] px-10px cursor-pointer dark:border-[var(--el-border-color)]"]),onClick:$},[c("div",{class:h([`${o(f)}-header__title`,"relative font-18px font-bold ml-10px"])},[c("div",te,[w(k(e.title)+" ",1),e.message?(n(),u(o(L),{key:0,content:e.message,placement:"right"},{default:C((()=>[m(a,{icon:"ep:warning",class:"ml-5px"})])),_:1},8,["content"])):_("",!0)])],2),e.collapse?(n(),u(a,{key:0,icon:S.value?"ep:arrow-down":"ep:arrow-up"},null,8,["icon"])):_("",!0)],2)):_("",!0),m(o(M),null,{default:C((()=>[I(c("div",{class:h([`${o(f)}-content`,"p-10px"])},[m(o(ee),B({column:2,border:"",direction:o(s)?"vertical":"horizontal"},o(y)),W({default:C((()=>[(n(!0),i(d,null,p(e.schema,(t=>(n(),u(o(le),B({key:t.field},(e=>{const l=["field"],t={...e};for(const s in t)-1!==l.indexOf(s)&&delete t[s];return t})(t)),{label:C((()=>[x(l.$slots,`${t.field}-label`,{row:{label:t.label}},(()=>[w(k(t.label),1)]),!0)])),default:C((()=>[x(l.$slots,t.field,{row:e.data},(()=>[w(k(e.data[t.field]),1)]),!0)])),_:2},1040)))),128))])),_:2},[o(r).extra?{name:"extra",fn:C((()=>[x(l.$slots,"extra",{},void 0,!0)])),key:"0"}:void 0]),1040,["direction"])],2),[[O,S.value]])])),_:3})],2)}}}),[["__scopeId","data-v-129eed4f"]]);export{se as D};