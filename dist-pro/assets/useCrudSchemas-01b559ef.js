import{e,t as o,f as l}from"./tree-b59d36bb.js";import{cW as n,q as a,bJ as t,k as i}from"./index-ab69a018.js";const s=n(),{t:c}=i(),d=e=>{const o=a({searchSchema:[],tableColumns:[],formSchema:[],detailSchema:[]}),l=r(e,o);o.searchSchema=l||[];const n=m(e);o.tableColumns=n||[];const t=p(e,o);o.formSchema=t;const i=h(e);return o.detailSchema=i,{allSchemas:o}},r=(o,l)=>{const n=[],a=[];e(o,(e=>{var o,i,c;if(null==(o=null==e?void 0:e.search)?void 0:o.show){const o={component:e.search.component||"Input",componentProps:{},...e.search,field:(null==(i=null==e?void 0:e.search)?void 0:i.field)||e.field,label:(null==(c=e.search)?void 0:c.label)||e.label};if(o.dictName){const e=s.getDictObj[o.dictName];o.componentProps.options=f(e)}else o.api&&a.push((async()=>{var e;const n=await o.api();if(n){const a=t(l.searchSchema,(e=>e.field===o.field));-1!==a&&(l.searchSchema[a].componentProps.options=f(n,null==(e=o.componentProps.optionsAlias)?void 0:e.labelField))}}));delete o.show,delete o.dictName,n.push(o)}}));for(const e of a)e();return n},m=e=>{const n=o(e,{conversion:e=>{var o;if(!1!==(null==(o=null==e?void 0:e.table)?void 0:o.show))return{...e.table,...e}}});return l(n,(e=>(void 0===e.children&&delete e.children,!!e.field)))},p=(o,l)=>{const n=[],a=[];e(o,(e=>{var o,i,c;if(!1!==(null==(o=null==e?void 0:e.form)?void 0:o.show)){const o={component:(null==(i=null==e?void 0:e.form)?void 0:i.component)||"Input",componentProps:{},...e.form,field:e.field,label:(null==(c=e.search)?void 0:c.label)||e.label};if(o.dictName){const e=s.getDictObj[o.dictName];o.componentProps.options=f(e)}else o.api&&a.push((async()=>{var e;const n=await o.api();if(n){const a=t(l.formSchema,(e=>e.field===o.field));-1!==a&&(l.formSchema[a].componentProps.options=f(n,null==(e=o.componentProps.optionsAlias)?void 0:e.labelField))}}));delete o.show,delete o.dictName,n.push(o)}}));for(const e of a)e();return n},h=o=>{const l=[];return e(o,(e=>{var o,n;if(!1!==(null==(o=null==e?void 0:e.detail)?void 0:o.show)){const o={...e.detail,field:e.field,label:(null==(n=e.detail)?void 0:n.label)||e.label};delete o.show,l.push(o)}})),l},f=(e,o)=>null==e?void 0:e.map((e=>(o?e.labelField=c(e.labelField):e.label=c(e.label),e)));export{d as u};