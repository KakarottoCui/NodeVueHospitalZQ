import{a$ as e,z as a,aI as t,bO as o,r as n,U as l,v as s,bk as i,R as r,x as u,S as p,b1 as d,d as c,bc as v,b7 as f,y as m,a0 as y,bH as b,bP as x,bQ as g,b6 as h,a1 as w,a2 as S,b2 as k,N as z,aD as C,ac as I,ad as E,o as $,c as P,B as j,F,n as V,a as _,C as B,e as M,h as N,w as A,A as R,E as H,aj as O,g as T,bj as K,a4 as W,ba as D,t as L,a3 as U,_ as Y,bb as Z,D as Q}from"./index-ab69a018.js";import{U as q}from"./event-5568c9d8.js";import{u as G,a as J}from"./use-form-item-da890dc1.js";import{u as X,a as ee}from"./use-form-common-props-5bbac68f.js";import{i as ae}from"./el-popper-2ba03ef0.js";const te=()=>e&&/firefox/i.test(window.navigator.userAgent),oe=e=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e),ne=["class","style"],le=/^on[A-Z]/,se=(e={})=>{const{excludeListeners:n=!1,excludeKeys:l}=e,s=a((()=>((null==l?void 0:l.value)||[]).concat(ne))),i=t();return a(i?()=>{var e;return o(Object.entries(null==(e=i.proxy)?void 0:e.$attrs).filter((([e])=>!(s.value.includes(e)||n&&le.test(e)))))}:()=>({}))};let ie;const re=`\n  height:0 !important;\n  visibility:hidden !important;\n  ${te()?"":"overflow:hidden !important;"}\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n`,ue=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function pe(e,a=1,t){var o;ie||(ie=document.createElement("textarea"),document.body.appendChild(ie));const{paddingSize:n,borderSize:s,boxSizing:i,contextStyle:r}=function(e){const a=window.getComputedStyle(e),t=a.getPropertyValue("box-sizing"),o=Number.parseFloat(a.getPropertyValue("padding-bottom"))+Number.parseFloat(a.getPropertyValue("padding-top")),n=Number.parseFloat(a.getPropertyValue("border-bottom-width"))+Number.parseFloat(a.getPropertyValue("border-top-width"));return{contextStyle:ue.map((e=>`${e}:${a.getPropertyValue(e)}`)).join(";"),paddingSize:o,borderSize:n,boxSizing:t}}(e);ie.setAttribute("style",`${r};${re}`),ie.value=e.value||e.placeholder||"";let u=ie.scrollHeight;const p={};"border-box"===i?u+=s:"content-box"===i&&(u-=n),ie.value="";const d=ie.scrollHeight-n;if(l(a)){let e=d*a;"border-box"===i&&(e=e+n+s),u=Math.max(e,u),p.minHeight=`${e}px`}if(l(t)){let e=d*t;"border-box"===i&&(e=e+n+s),u=Math.min(e,u)}return p.height=`${u}px`,null==(o=ie.parentNode)||o.removeChild(ie),ie=void 0,p}const de=s({id:{type:String,default:void 0},size:i,disabled:Boolean,modelValue:{type:r([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:r([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:u},prefixIcon:{type:u},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:r([Object,Array,String]),default:()=>p({})}}),ce={[q]:e=>d(e),input:e=>d(e),change:e=>d(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},ve=["role"],fe=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],me=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],ye=c({name:"ElInput",inheritAttrs:!1});const be=Q(Y(c({...ye,props:de,emits:ce,setup(t,{expose:o,emit:l}){const s=t,i=v(),r=f(),u=a((()=>{const e={};return"combobox"===s.containerRole&&(e["aria-haspopup"]=i["aria-haspopup"],e["aria-owns"]=i["aria-owns"],e["aria-expanded"]=i["aria-expanded"]),e})),p=a((()=>["textarea"===s.type?re.b():ie.b(),ie.m(ne.value),ie.is("disabled",le.value),ie.is("exceed",_e.value),{[ie.b("group")]:r.prepend||r.append,[ie.bm("group","append")]:r.append,[ie.bm("group","prepend")]:r.prepend,[ie.m("prefix")]:r.prefix||s.prefixIcon,[ie.m("suffix")]:r.suffix||s.suffixIcon||s.clearable||s.showPassword,[ie.bm("suffix","password-clear")]:Pe.value&&je.value},i.class])),d=a((()=>[ie.e("wrapper"),ie.is("focus",ce.value)])),c=se({excludeKeys:a((()=>Object.keys(u.value)))}),{form:Y,formItem:Q}=G(),{inputId:te}=J(s,{formItemContext:Q}),ne=X(),le=ee(),ie=m("input"),re=m("textarea"),ue=y(),de=y(),ce=n(!1),ye=n(!1),be=n(!1),xe=n(!1),ge=n(),he=y(s.inputStyle),we=a((()=>ue.value||de.value)),Se=a((()=>{var e;return null!=(e=null==Y?void 0:Y.statusIcon)&&e})),ke=a((()=>(null==Q?void 0:Q.validateState)||"")),ze=a((()=>ke.value&&b[ke.value])),Ce=a((()=>xe.value?x:g)),Ie=a((()=>[i.style,s.inputStyle])),Ee=a((()=>[s.inputStyle,he.value,{resize:s.resize}])),$e=a((()=>ae(s.modelValue)?"":String(s.modelValue))),Pe=a((()=>s.clearable&&!le.value&&!s.readonly&&!!$e.value&&(ce.value||ye.value))),je=a((()=>s.showPassword&&!le.value&&!s.readonly&&!!$e.value&&(!!$e.value||ce.value))),Fe=a((()=>s.showWordLimit&&!!c.value.maxlength&&("text"===s.type||"textarea"===s.type)&&!le.value&&!s.readonly&&!s.showPassword)),Ve=a((()=>$e.value.length)),_e=a((()=>!!Fe.value&&Ve.value>Number(c.value.maxlength))),Be=a((()=>!!r.suffix||!!s.suffixIcon||Pe.value||s.showPassword||Fe.value||!!ke.value&&Se.value)),[Me,Ne]=function(e){const a=n();return[function(){if(null==e.value)return;const{selectionStart:t,selectionEnd:o,value:n}=e.value;if(null==t||null==o)return;const l=n.slice(0,Math.max(0,t)),s=n.slice(Math.max(0,o));a.value={selectionStart:t,selectionEnd:o,value:n,beforeTxt:l,afterTxt:s}},function(){if(null==e.value||null==a.value)return;const{value:t}=e.value,{beforeTxt:o,afterTxt:n,selectionStart:l}=a.value;if(null==o||null==n||null==l)return;let s=t.length;if(t.endsWith(n))s=t.length-n.length;else if(t.startsWith(o))s=o.length;else{const e=o[l-1],a=t.indexOf(e,l-1);-1!==a&&(s=a+1)}e.value.setSelectionRange(s,s)}]}(ue);h(de,(e=>{if(Re(),!Fe.value||"both"!==s.resize)return;const a=e[0],{width:t}=a.contentRect;ge.value={right:`calc(100% - ${t+15+6}px)`}}));const Ae=()=>{const{type:a,autosize:t}=s;if(e&&"textarea"===a&&de.value)if(t){const e=Z(t)?t.minRows:void 0,a=Z(t)?t.maxRows:void 0,o=pe(de.value,e,a);he.value={overflowY:"hidden",...o},S((()=>{de.value.offsetHeight,he.value=o}))}else he.value={minHeight:pe(de.value).minHeight}},Re=(e=>{let a=!1;return()=>{var t;if(a||!s.autosize)return;null===(null==(t=de.value)?void 0:t.offsetParent)||(e(),a=!0)}})(Ae),He=()=>{const e=we.value;e&&e.value!==$e.value&&(e.value=$e.value)},Oe=async e=>{Me();let{value:a}=e.target;s.formatter&&(a=s.parser?s.parser(a):a,a=s.formatter(a)),be.value||(a!==$e.value?(l(q,a),l("input",a),await S(),He(),Ne()):He())},Te=e=>{l("change",e.target.value)},Ke=e=>{l("compositionstart",e),be.value=!0},We=e=>{var a;l("compositionupdate",e);const t=null==(a=e.target)?void 0:a.value,o=t[t.length-1]||"";be.value=!oe(o)},De=e=>{l("compositionend",e),be.value&&(be.value=!1,Oe(e))},Le=()=>{xe.value=!xe.value,Ue()},Ue=async()=>{var e;await S(),null==(e=we.value)||e.focus()},Ye=e=>{ce.value=!0,l("focus",e)},Ze=e=>{var a;ce.value=!1,l("blur",e),s.validateEvent&&(null==(a=null==Q?void 0:Q.validate)||a.call(Q,"blur").catch((e=>k())))},Qe=e=>{ye.value=!1,l("mouseleave",e)},qe=e=>{ye.value=!0,l("mouseenter",e)},Ge=e=>{l("keydown",e)},Je=()=>{l(q,""),l("change",""),l("clear"),l("input","")};return w((()=>s.modelValue),(()=>{var e;S((()=>Ae())),s.validateEvent&&(null==(e=null==Q?void 0:Q.validate)||e.call(Q,"change").catch((e=>k())))})),w($e,(()=>He())),w((()=>s.type),(async()=>{await S(),He(),Ae()})),z((()=>{!s.formatter&&s.parser,He(),S(Ae)})),o({input:ue,textarea:de,ref:we,textareaStyle:Ee,autosize:C(s,"autosize"),focus:Ue,blur:()=>{var e;return null==(e=we.value)?void 0:e.blur()},select:()=>{var e;null==(e=we.value)||e.select()},clear:Je,resizeTextarea:Ae}),(e,a)=>I(($(),P("div",O(_(u),{class:_(p),style:_(Ie),role:e.containerRole,onMouseenter:qe,onMouseleave:Qe}),[j(" input "),"textarea"!==e.type?($(),P(F,{key:0},[j(" prepend slot "),e.$slots.prepend?($(),P("div",{key:0,class:V(_(ie).be("group","prepend"))},[B(e.$slots,"prepend")],2)):j("v-if",!0),M("div",{class:V(_(d))},[j(" prefix slot "),e.$slots.prefix||e.prefixIcon?($(),P("span",{key:0,class:V(_(ie).e("prefix"))},[M("span",{class:V(_(ie).e("prefix-inner")),onClick:Ue},[B(e.$slots,"prefix"),e.prefixIcon?($(),N(_(H),{key:0,class:V(_(ie).e("icon"))},{default:A((()=>[($(),N(R(e.prefixIcon)))])),_:1},8,["class"])):j("v-if",!0)],2)],2)):j("v-if",!0),M("input",O({id:_(te),ref_key:"input",ref:ue,class:_(ie).e("inner")},_(c),{type:e.showPassword?xe.value?"text":"password":e.type,disabled:_(le),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:s.form,onCompositionstart:Ke,onCompositionupdate:We,onCompositionend:De,onInput:Oe,onFocus:Ye,onBlur:Ze,onChange:Te,onKeydown:Ge}),null,16,fe),j(" suffix slot "),_(Be)?($(),P("span",{key:1,class:V(_(ie).e("suffix"))},[M("span",{class:V(_(ie).e("suffix-inner")),onClick:Ue},[_(Pe)&&_(je)&&_(Fe)?j("v-if",!0):($(),P(F,{key:0},[B(e.$slots,"suffix"),e.suffixIcon?($(),N(_(H),{key:0,class:V(_(ie).e("icon"))},{default:A((()=>[($(),N(R(e.suffixIcon)))])),_:1},8,["class"])):j("v-if",!0)],64)),_(Pe)?($(),N(_(H),{key:1,class:V([_(ie).e("icon"),_(ie).e("clear")]),onMousedown:W(_(D),["prevent"]),onClick:Je},{default:A((()=>[T(_(K))])),_:1},8,["class","onMousedown"])):j("v-if",!0),_(je)?($(),N(_(H),{key:2,class:V([_(ie).e("icon"),_(ie).e("password")]),onClick:Le},{default:A((()=>[($(),N(R(_(Ce))))])),_:1},8,["class"])):j("v-if",!0),_(Fe)?($(),P("span",{key:3,class:V(_(ie).e("count"))},[M("span",{class:V(_(ie).e("count-inner"))},L(_(Ve))+" / "+L(_(c).maxlength),3)],2)):j("v-if",!0),_(ke)&&_(ze)&&_(Se)?($(),N(_(H),{key:4,class:V([_(ie).e("icon"),_(ie).e("validateIcon"),_(ie).is("loading","validating"===_(ke))])},{default:A((()=>[($(),N(R(_(ze))))])),_:1},8,["class"])):j("v-if",!0)],2)],2)):j("v-if",!0)],2),j(" append slot "),e.$slots.append?($(),P("div",{key:1,class:V(_(ie).be("group","append"))},[B(e.$slots,"append")],2)):j("v-if",!0)],64)):($(),P(F,{key:1},[j(" textarea "),M("textarea",O({id:_(te),ref_key:"textarea",ref:de,class:_(re).e("inner")},_(c),{tabindex:e.tabindex,disabled:_(le),readonly:e.readonly,autocomplete:e.autocomplete,style:_(Ee),"aria-label":e.label,placeholder:e.placeholder,form:s.form,onCompositionstart:Ke,onCompositionupdate:We,onCompositionend:De,onInput:Oe,onFocus:Ye,onBlur:Ze,onChange:Te,onKeydown:Ge}),null,16,me),_(Fe)?($(),P("span",{key:0,style:U(ge.value),class:V(_(ie).e("count"))},L(_(Ve))+" / "+L(_(c).maxlength),7)):j("v-if",!0)],64))],16,ve)),[[E,"hidden"!==e.type]])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]));export{be as E,te as a,oe as i,se as u};