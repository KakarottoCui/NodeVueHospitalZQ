import{b4 as e,v as a,bk as t,U as n,d as l,Y as r,y as u,r as s,q as o,z as i,bo as m,a1 as d,N as c,b5 as p,o as b,c as v,ac as f,a as N,n as y,bf as I,g as h,w as g,h as V,aH as x,co as S,E,B as w,bn as k,cp as A,a4 as F,_,b1 as B,b2 as j,D as K}from"./index-ab69a018.js";import{E as T}from"./el-input-5d13ef5f.js";import{C as M,I as O,U as z}from"./event-5568c9d8.js";import{i as C}from"./el-popper-2ba03ef0.js";import{u as Y}from"./use-form-item-da890dc1.js";import{u as P,a as $}from"./use-form-common-props-5bbac68f.js";const D=100,L=600,U={beforeMount(a,t){const n=t.value,{interval:l=D,delay:r=L}=e(n)?{}:n;let u,s;const o=()=>e(n)?n():n.handler(),i=()=>{s&&(clearTimeout(s),s=void 0),u&&(clearInterval(u),u=void 0)};a.addEventListener("mousedown",(e=>{0===e.button&&(i(),o(),document.addEventListener("mouseup",(()=>i()),{once:!0}),s=setTimeout((()=>{u=setInterval((()=>{o()}),l)}),r))}))}},q=a({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:t,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||n(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),G={[M]:(e,a)=>a!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[O]:e=>n(e)||C(e),[z]:e=>n(e)||C(e)},H=["aria-label","onKeydown"],W=["aria-label","onKeydown"],X=l({name:"ElInputNumber"});const Z=K(_(l({...X,props:q,emits:G,setup(e,{expose:a,emit:t}){const l=e,{t:_}=r(),K=u("input-number"),D=s(),L=o({currentValue:l.modelValue,userInput:null}),{formItem:q}=Y(),G=i((()=>n(l.modelValue)&&l.modelValue<=l.min)),X=i((()=>n(l.modelValue)&&l.modelValue>=l.max)),Z=i((()=>{const e=te(l.step);return m(l.precision)?Math.max(te(l.modelValue),e):(l.precision,l.precision)})),J=i((()=>l.controls&&"right"===l.controlsPosition)),Q=P(),R=$(),ee=i((()=>{if(null!==L.userInput)return L.userInput;let e=L.currentValue;if(C(e))return"";if(n(e)){if(Number.isNaN(e))return"";m(l.precision)||(e=e.toFixed(l.precision))}return e})),ae=(e,a)=>{if(m(a)&&(a=Z.value),0===a)return Math.round(e);let t=String(e);const n=t.indexOf(".");if(-1===n)return e;if(!t.replace(".","").split("")[n+a])return e;const l=t.length;return"5"===t.charAt(l-1)&&(t=`${t.slice(0,Math.max(0,l-1))}6`),Number.parseFloat(Number(t).toFixed(a))},te=e=>{if(C(e))return 0;const a=e.toString(),t=a.indexOf(".");let n=0;return-1!==t&&(n=a.length-t-1),n},ne=(e,a=1)=>n(e)?ae(e+l.step*a):L.currentValue,le=()=>{if(l.readonly||R.value||X.value)return;const e=Number(ee.value)||0,a=ne(e);se(a),t(O,L.currentValue)},re=()=>{if(l.readonly||R.value||G.value)return;const e=Number(ee.value)||0,a=ne(e,-1);se(a),t(O,L.currentValue)},ue=(e,a)=>{const{max:n,min:r,step:u,precision:s,stepStrictly:o,valueOnClear:i}=l;let d=Number(e);if(C(e)||Number.isNaN(d))return null;if(""===e){if(null===i)return null;d=B(i)?{min:r,max:n}[i]:i}return o&&(d=ae(Math.round(d/u)*u,s)),m(s)||(d=ae(d,s)),(d>n||d<r)&&(d=d>n?n:r,a&&t(z,d)),d},se=(e,a=!0)=>{var n;const r=L.currentValue,u=ue(e);a?r!==u&&(L.userInput=null,t(z,u),t(M,u,r),l.validateEvent&&(null==(n=null==q?void 0:q.validate)||n.call(q,"change").catch((e=>j()))),L.currentValue=u):t(z,u)},oe=e=>{L.userInput=e;const a=""===e?null:Number(e);t(O,a),se(a,!1)},ie=e=>{const a=""!==e?Number(e):"";(n(a)&&!Number.isNaN(a)||""===e)&&se(a),L.userInput=null},me=e=>{t("focus",e)},de=e=>{var a;t("blur",e),l.validateEvent&&(null==(a=null==q?void 0:q.validate)||a.call(q,"blur").catch((e=>j())))};return d((()=>l.modelValue),(e=>{const a=ue(L.userInput),t=ue(e,!0);n(a)||a&&a===t||(L.currentValue=t,L.userInput=null)}),{immediate:!0}),c((()=>{var e;const{min:a,max:r,modelValue:u}=l,s=null==(e=D.value)?void 0:e.input;if(s.setAttribute("role","spinbutton"),Number.isFinite(r)?s.setAttribute("aria-valuemax",String(r)):s.removeAttribute("aria-valuemax"),Number.isFinite(a)?s.setAttribute("aria-valuemin",String(a)):s.removeAttribute("aria-valuemin"),s.setAttribute("aria-valuenow",String(L.currentValue)),s.setAttribute("aria-disabled",String(R.value)),!n(u)&&null!=u){let e=Number(u);Number.isNaN(e)&&(e=null),t(z,e)}})),p((()=>{var e;const a=null==(e=D.value)?void 0:e.input;null==a||a.setAttribute("aria-valuenow",`${L.currentValue}`)})),a({focus:()=>{var e,a;null==(a=null==(e=D.value)?void 0:e.focus)||a.call(e)},blur:()=>{var e,a;null==(a=null==(e=D.value)?void 0:e.blur)||a.call(e)}}),(e,a)=>(b(),v("div",{class:y([N(K).b(),N(K).m(N(Q)),N(K).is("disabled",N(R)),N(K).is("without-controls",!e.controls),N(K).is("controls-right",N(J))]),onDragstart:a[1]||(a[1]=F((()=>{}),["prevent"]))},[e.controls?f((b(),v("span",{key:0,role:"button","aria-label":N(_)("el.inputNumber.decrease"),class:y([N(K).e("decrease"),N(K).is("disabled",N(G))]),onKeydown:I(re,["enter"])},[h(N(E),null,{default:g((()=>[N(J)?(b(),V(N(x),{key:0})):(b(),V(N(S),{key:1}))])),_:1})],42,H)),[[N(U),re]]):w("v-if",!0),e.controls?f((b(),v("span",{key:1,role:"button","aria-label":N(_)("el.inputNumber.increase"),class:y([N(K).e("increase"),N(K).is("disabled",N(X))]),onKeydown:I(le,["enter"])},[h(N(E),null,{default:g((()=>[N(J)?(b(),V(N(k),{key:0})):(b(),V(N(A),{key:1}))])),_:1})],42,W)),[[N(U),le]]):w("v-if",!0),h(N(T),{id:e.id,ref_key:"input",ref:D,type:"number",step:e.step,"model-value":N(ee),placeholder:e.placeholder,readonly:e.readonly,disabled:N(R),size:N(Q),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:a[0]||(a[0]=F((()=>{}),["prevent"])),onKeydown:[I(F(le,["prevent"]),["up"]),I(F(re,["prevent"]),["down"])],onBlur:de,onFocus:me,onInput:oe,onChange:ie},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]));export{Z as E,U as v};