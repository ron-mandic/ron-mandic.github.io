import"./modulepreload-polyfill-3cfb730f.js";const r=document.querySelectorAll(".tile"),d=document.querySelector("h1");document.querySelector("a");let o=0;const t=[],c={};function a(l,e=!1){let i=e?l.sort((s,n)=>s-n):l;for(let s=0;s<i.length-1;s++)if(i[s+1]-i[s]!==1)return!1;return!0}r.forEach(l=>{l.addEventListener("click",function(){const e=this.dataset.id;this.classList.toggle("selected"),this.querySelector(".modal").classList.toggle("off"),c[e]===void 0?(c[e]=!0,t.includes(+e)||t.push(+e),o++):(delete c[e],t.splice(t.indexOf(e),1),o--),console.log(t),d.style.filter=`blur(${9*.2-o*.2}vmax)`,t.length===9&&a(t)}),l.addEventListener("dblclick",()=>{l.classList.toggle("visited")})});
