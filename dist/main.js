(()=>{var e={281:()=>{!function(){const e=document.querySelectorAll(".scroll-enter");if(e){const t=(e,t=1)=>e.getBoundingClientRect().top<=(window.innerHeight||document.documentElement.clientHeight)/t,n=e=>e.getBoundingClientRect().top>(window.innerHeight||document.documentElement.clientHeight),r=e=>{e.classList.add("motion_view")},i=e=>{e.classList.remove("motion_view")},o=()=>{e.forEach((e=>{t(e,1.25)?r(e):n(e)&&i(e)}))};window.addEventListener("scroll",(()=>{o()}))}}()}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";n(281);const e=n.p+"ae87c274410fedb53073692ec2d631a3.jpg";document.getElementById("root").appendChild(function({userList:t}){const n=document.createElement("ul");return t.forEach((t=>{n.appendChild(function({name:t}){const n=document.createElement("li");return n.classList.add("user"),n.addEventListener("click",(()=>{alert(t)})),n.innerHTML=`\n\t\t<img src="${e}" alt="${t}" />\n\t\t${t}\n\t`,n}({name:t.name}))})),n}({userList:[{id:1,name:"블랙 위도우"},{id:2,name:"아이언맨"},{id:3,name:"헐크"},{id:4,name:"스파이더맨"},{id:5,name:"캡틴 아메리카"}]}))})()})();