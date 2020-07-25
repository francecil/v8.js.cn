// @license © 2019 Google LLC. Licensed under the Apache License, Version 2.0.
const e=document;const i=localStorage;const t="prefers-color-scheme";const s="media";const o="light";const a="dark";const n=`(${t}:${a})`;const r=`(${t}:${o})`;const h="link[rel=stylesheet]";const l="remember";const c="legend";const d="toggle";const b="switch";const m="appearance";const u="permanent";const g="mode";const p="colorschemechange";const k="permanentcolorscheme";const f="all";const v="not all";const $="dark-mode-toggle";const L="https://googlechromelabs.github.io/dark-mode-toggle/demo/";const x=(e,i,t=i)=>{Object.defineProperty(e,t,{enumerable:true,get(){const e=this.getAttribute(i);return e===null?"":e},set(e){this.setAttribute(i,e)}})};const y=(e,i,t=i)=>{Object.defineProperty(e,t,{enumerable:true,get(){return this.hasAttribute(i)},set(e){if(e){this.setAttribute(i,"")}else{this.removeAttribute(i)}}})};const w=e.createElement("template");w.innerHTML=`<style>*,::after,::before{box-sizing:border-box}:host{contain:content;display:block}:host([hidden]){display:none}form{background-color:var(--${$}-background-color,transparent);color:var(--${$}-color,inherit);padding:0}fieldset{border:none;margin:0;padding-block:.25rem;padding-inline:.25rem}legend{font:var(--${$}-legend-font,inherit);padding:0}input,label{cursor:pointer}label{padding:.15rem;white-space:nowrap}input{opacity:0;position:absolute;pointer-events:none}input:focus+label{outline:#e59700 auto 2px;outline:-webkit-focus-ring-color auto 5px}label::before{content:"";display:inline-block;background-size:var(--${$}-icon-size,1rem);background-repeat:no-repeat;height:var(--${$}-icon-size,1rem);width:var(--${$}-icon-size,1rem);vertical-align:middle;margin-inline-end:.5rem}#lightLabel::before{background-image:var(--${$}-light-icon, url("${L}sun.png"))}#darkLabel::before{filter:var(--${$}-icon-filter, none);background-image:var(--${$}-dark-icon, url("${L}moon.png"))}#checkboxLabel::before{background-image:var(--${$}-checkbox-icon,none)}#permanentLabel::before{background-image:var(--${$}-remember-icon-unchecked, url("${L}unchecked.svg"))}#checkboxLabel,#darkLabel,#lightLabel{font:var(--${$}-label-font,inherit)}#checkboxLabel:empty,#darkLabel:empty,#lightLabel:empty{font-size:0;padding:0}#permanentLabel{font:var(--${$}-remember-font,inherit)}input:checked+#permanentLabel::before{background-image:var(--${$}-remember-icon-checked, url("${L}checked.svg"))}input:checked+#darkLabel,input:checked+#lightLabel{background-color:var(--${$}-active-mode-background-color,transparent)}input:checked+#darkLabel::before,input:checked+#lightLabel::before{background-color:var(--${$}-active-mode-background-color,transparent)}input:checked+#checkboxLabel::before{filter:var(--${$}-icon-filter, none)}input:checked+#checkboxLabel+aside #permanentLabel::before{filter:var(--${$}-remember-filter, invert(100%))}aside{visibility:hidden;margin-block-start:.15rem}#checkboxLabel:focus-visible~aside,#darkLabel:focus-visible~aside,#lightLabel:focus-visible~aside{visibility:visible;transition:visibility 0s}aside #permanentLabel:empty{display:none}@media (hover:hover){aside{transition:visibility 3s}aside:hover{visibility:visible}#checkboxLabel:hover~aside,#darkLabel:hover~aside,#lightLabel:hover~aside{visibility:visible;transition:visibility 0s}}</style><form><fieldset><legend></legend><input id=lightRadio type=radio name=mode><label for=lightRadio id=lightLabel></label><input id=darkRadio type=radio name=mode><label for=darkRadio id=darkLabel></label><input id=darkCheckbox type=checkbox><label for=darkCheckbox id=checkboxLabel></label><aside><input id=permanentCheckbox type=checkbox><label for=permanentCheckbox id=permanentLabel></label></aside></fieldset></form>`;export class DarkModeToggle extends HTMLElement{static get observedAttributes(){return[g,m,u,c,o,a,l]}constructor(){super();x(this,g);x(this,m);x(this,c);x(this,o);x(this,a);x(this,l);y(this,u);this.i=null;this.t=null;e.addEventListener(p,e=>{this.mode=e.detail.colorScheme;this.s();this.o()});e.addEventListener(k,e=>{this.permanent=e.detail.permanent;this.h.checked=this.permanent});this.l()}l(){const l=this.attachShadow({mode:"closed"});l.appendChild(w.content.cloneNode(true));this.i=e.querySelectorAll(`${h}[${s}*=${t}][${s}*="${a}"]`);this.t=e.querySelectorAll(`${h}[${s}*=${t}][${s}*="${o}"]`);this.m=l.querySelector("#lightRadio");this.u=l.querySelector("#lightLabel");this.g=l.querySelector("#darkRadio");this.p=l.querySelector("#darkLabel");this.k=l.querySelector("#darkCheckbox");this.v=l.querySelector("#checkboxLabel");this.$=l.querySelector("legend");this.L=l.querySelector("aside");this.h=l.querySelector("#permanentCheckbox");this.C=l.querySelector("#permanentLabel");const c=matchMedia(n).media!==v;if(c){matchMedia(n).addListener(({matches:e})=>{this.mode=e?a:o;this.M(p,{colorScheme:this.mode})})}const b=i.getItem($);if(b&&[a,o].includes(b)){this.mode=b;this.h.checked=true;this.permanent=true}else if(c){this.mode=matchMedia(r).matches?o:a}if(!this.mode){this.mode=o}if(this.permanent&&!b){i.setItem($,this.mode)}if(!this.appearance){this.appearance=d}this.R();this.s();this.o();[this.m,this.g].forEach(e=>{e.addEventListener("change",()=>{this.mode=this.m.checked?o:a;this.o();this.M(p,{colorScheme:this.mode})})});this.k.addEventListener("change",()=>{this.mode=this.k.checked?a:o;this.s();this.M(p,{colorScheme:this.mode})});this.h.addEventListener("change",()=>{this.permanent=this.h.checked;this.M(k,{permanent:this.permanent})});this._();this.M(p,{colorScheme:this.mode});this.M(k,{permanent:this.permanent})}attributeChangedCallback(e,t,s){if(e===g){if(![o,a].includes(s)){throw new RangeError(`Allowed values: "${o}" and "${a}".`)}if(matchMedia("(hover:none)").matches&&this.remember){this.A()}if(this.permanent){i.setItem($,this.mode)}this.s();this.o();this._()}else if(e===m){if(![d,b].includes(s)){throw new RangeError(`Allowed values: "${d}" and "${b}".`)}this.R()}else if(e===u){if(this.permanent){i.setItem($,this.mode)}else{i.removeItem($)}this.h.checked=this.permanent}else if(e===c){this.$.textContent=s}else if(e===l){this.C.textContent=s}else if(e===o){this.u.textContent=s;if(this.mode===o){this.v.textContent=s}}else if(e===a){this.p.textContent=s;if(this.mode===a){this.v.textContent=s}}}M(e,i){this.dispatchEvent(new CustomEvent(e,{bubbles:true,composed:true,detail:i}))}R(){const e=this.appearance===d;this.m.hidden=e;this.u.hidden=e;this.g.hidden=e;this.p.hidden=e;this.k.hidden=!e;this.v.hidden=!e}s(){if(this.mode===o){this.m.checked=true}else{this.g.checked=true}}o(){if(this.mode===o){this.v.style.setProperty(`--${$}-checkbox-icon`,`var(--${$}-light-icon,url("${L}moon.png"))`);this.v.textContent=this.light;this.k.checked=false}else{this.v.style.setProperty(`--${$}-checkbox-icon`,`var(--${$}-dark-icon,url("${L}sun.png"))`);this.v.textContent=this.dark;this.k.checked=true}}_(){if(this.mode===o){this.t.forEach(e=>{e.media=f;e.disabled=false});this.i.forEach(e=>{e.media=v;e.disabled=true})}else{this.i.forEach(e=>{e.media=f;e.disabled=false});this.t.forEach(e=>{e.media=v;e.disabled=true})}}A(){this.L.style.visibility="visible";setTimeout(()=>{this.L.style.visibility="hidden"},3e3)}}customElements.define($,DarkModeToggle);