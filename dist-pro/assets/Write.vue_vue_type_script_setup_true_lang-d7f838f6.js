import{F as e}from"./Form-8ec9c562.js";import{u as t}from"./useForm-2bc0283e.js";import{d as o,q as a,a1 as l,o as m,h as r,a as s,k as n}from"./index-ab69a018.js";import{u as p}from"./useValidator-a63ee246.js";const i=o({__name:"Write",props:{currentRow:{type:Object,default:()=>null}},setup(o,{expose:i}){const u=o,{required:c}=p(),{t:d}=n(),f=a([{field:"title",label:d("exampleDemo.title"),component:"Input",formItemProps:{rules:[c()]},colProps:{span:24}},{field:"author",label:d("exampleDemo.author"),component:"Input",formItemProps:{rules:[c()]}},{field:"display_time",label:d("exampleDemo.displayTime"),component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"},formItemProps:{rules:[c()]}},{field:"importance",label:d("exampleDemo.importance"),component:"Select",formItemProps:{rules:[c()]},componentProps:{options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}},{field:"pageviews",label:d("exampleDemo.pageviews"),component:"InputNumber",value:0,formItemProps:{rules:[c()]}},{field:"content",component:"Editor",colProps:{span:24},componentProps:{defaultHtml:"",onChange:e=>{const{setValues:t}=D;t({content:e.getHtml()})}},label:d("exampleDemo.content")}]),b=a({title:[c()],author:[c()],importance:[c()],pageviews:[c()],display_time:[c()],content:[c()]}),{register:P,methods:D,elFormRef:g}=t({schema:f});return l((()=>u.currentRow),(e=>{if(!e)return;const{setValues:t,setSchema:o}=D;t(e),o([{field:"content",path:"componentProps.defaultHtml",value:e.content}])}),{deep:!0,immediate:!0}),i({elFormRef:g,getFormData:D.getFormData}),(t,o)=>(m(),r(s(e),{rules:b,onRegister:s(P)},null,8,["rules","onRegister"]))}});export{i as _};
