(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();async function p(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).menu.map(a=>`
        <li>
          <img src="${a.img}" alt="" />
          <a href="${a.href}">${a.title}</a>
        </li>
      `),document.querySelector("#menu>nav>.right>ul").insertAdjacentHTML("afterbegin",e.join(""))}async function v(){let n=await(await fetch("http://localhost:3000/logo")).json(),r=`
      <img src="${n.src}" alt="${n.alt}" id="logo-img" />
    `;document.querySelector("#logo").insertAdjacentHTML("afterbegin",r)}async function h(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).menuboton.map(a=>`
           <div class="sub">
              <button>
                <img src=${a.img} alt="" />

                ${a.title} 
              </button>
            </div>
      `),document.querySelector("#menu>nav>.left>.sub").insertAdjacentHTML("afterbegin",e.join(""))}async function f(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).menuboton1.map(a=>`
          <button>${a.title}</button>
      `),document.querySelector("#menu>nav>.left>.login").insertAdjacentHTML("afterbegin",e.join(""))}async function w(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).slaider.map(a=>`
             <div class="swiper-slide">
                <img src=${a.src} alt=${a.alt}>
              </div>

      `),document.querySelector(".swiper-wrapper").insertAdjacentHTML("afterbegin",e.join(""))}async function b(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).parent.map(t=>`

      
             <div class="${t.class}">
                   ${t.title}</div>
                     

      `);let a=document.querySelector(".parent");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function m(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).divch3.map(t=>`
      <div class="${t.class}">
           <img src="${t.img}" alt="">
           <div class="mtn">    
              ${t.title}</div>
            </div>
      `);let a=document.querySelector(".divch3");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function y(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).parent2.map(t=>`
      <div class="${t.class}">
           <img src="${t.img}" alt="">
           <div class="mtn">    
              ${t.title}</div>
            </div>
      `);let a=document.querySelector(".parent2");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function L(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).mahboob.map(t=>`
   <div class="${t.class}">
      ${t.title}

        </div>
      `);let a=document.querySelector(".mahboob");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function $(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).docme.map(t=>`
        <button class="${t.class}" data-target="${t.data}" >
          ${t.title} </button> 
      `);let a=document.querySelector(".docme");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function M(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).tasvir.map((t,i)=>{if(i<=5)return`
      <img src=${t.src} id=${i} onclick="helper(this)" class="tasvirimg"  alt="">
      `});let a=document.querySelector(".tasvir");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}function H(){const e=document.querySelectorAll(".docme button");e.forEach(n=>n.classList.remove("active")),e[0].classList.add("active"),e.forEach(n=>{n.addEventListener("click",async()=>{n.getAttribute("data-target")=="filims"?(n.classList.add("active"),e[0].classList.remove("active")):(n.classList.add("active"),e[1].classList.remove("active"));const r=n.dataset.target,s=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).tasvir.filter(c=>c.type===r).map((c,d)=>`<img src="${c.src}" class="tasvirimg"  id=${c.id-1} onclick="helper(this)"  alt="">`).join(""),o=document.querySelector(".tasvir");o.innerHTML=s})})}async function T(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).forimg.map(t=>`
        <img src="${t.src}" alt="">

      `);let a=document.querySelector(".divt");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function S(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).mtnfilm.map(t=>`
        <div class="${t.class}">${t.title}</div>

      `);let a=document.querySelector(".fort");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function q(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).hp.map(t=>`
          <div class="${t.class}">${t.title}</div>

      `);let a=document.querySelector(".hp");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function A(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).logofilim.map(t=>`
                           ${t.title}
      `);let a=document.querySelector(".stori");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function E(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).logofilim.map(t=>`
        <img src="${t.src}" alt="">

      `);let a=document.querySelector(".logofilim");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function C(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).v1.map(t=>`
        <img src="${t.src}" alt="">

      `);let a=document.querySelector(".v1");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function k(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover2.map(t=>`
      <div class="${t.class}">${t.title}</div>
                    <div class="${t.class}">${t.title}</div>
      `);let a=document.querySelector(".cover2");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function x(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).part1.map(t=>`
                    ${t.title}

      `);let a=document.querySelector(".part1");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function z(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).v.map(t=>`
        <img src="${t.src}" alt="">

      `);let a=document.querySelector(".v");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function O(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover3.map(t=>`
        <img src="${t.src}" alt="">

      `);let a=document.querySelector(".cover3");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function P(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).part.map(t=>`
                    ${t.title}

      `);let a=document.querySelector(".part");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function D(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).v2.map(t=>`
        <img src="${t.src}" alt="">

      `);let a=document.querySelector(".v2");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function N(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover4.map(t=>`
        <img src="${t.src}" alt="">

      `);let a=document.querySelector(".cover4");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function I(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).part4.map(t=>`
                    ${t.title}

      `);let a=document.querySelector(".part4");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function V(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover5.map(t=>`
        <img src="${t.src}" alt="">

      `);let a=document.querySelector(".v5");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function W(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover5.map(t=>`
        <img src="${t.src}" alt="">

      `);let a=document.querySelector(".cover5");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function B(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).part5.map(t=>`
                    ${t.title}

      `);let a=document.querySelector(".part5");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function F(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).v6.map(t=>`
        <img src="${t.src}" alt="">

      `);let a=document.querySelector(".v6");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function K(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover6.map(t=>`
        <img src="${t.src}" alt="">

      `);let a=document.querySelector(".cover6");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function g(){g=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).part6.map(a=>`
                    ${a.title}

      `);let r=document.querySelector(".part6");r.innerHTML="",r.insertAdjacentHTML("afterbegin",g.join(""))}async function Q(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).v7.map(t=>`
        <img src="${t.src}" alt="">

      `);let a=document.querySelector(".v7");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function G(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover7.map(t=>`
        <img src="${t.src}" alt="">

      `);let a=document.querySelector(".cover7");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function J(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).part7.map(t=>`
                    ${t.title}

      `);let a=document.querySelector(".part7");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function R(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).v8.map(t=>`
        <img src="${t.src}" alt="">

      `);let a=document.querySelector(".v8");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function U(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover8.map(t=>`
        <img src="${t.src}" alt="">

      `);let a=document.querySelector(".cover8");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function X(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).part8.map(t=>`
                    ${t.title}

      `);let a=document.querySelector(".part8");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function Y(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).v9.map(t=>(console.log(`  <img src="${t.src}" alt=""></img>`),`
        <img src="${t.src}" alt="">

      `));let a=document.querySelector(".v9");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join("")),document.querySelector(".hv3").innerHTML='<img src="./imags/tasianp4.webp" alt="">'}async function Z(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cover9.map(t=>`
        <img src="${t.src}" alt="">

      `);let a=document.querySelector(".cover9");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function _(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).part9.map(t=>`
                    ${t.title}

      `);let a=document.querySelector(".part9");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function tt(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).one.map(t=>`
                   <div class="${t.class}"> 
            ${t.title}
              
            </div>
      `);let a=document.querySelector(".one");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function et(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).photo.map(t=>`
                            <img src=${t.src} alt="">

      `);let a=document.querySelector(".photo");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function at(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).laptop.map(t=>`
                <img src=${t.src} alt="">

                <p>
            ${t.title}
                
                </p> 
              
            </div>
      `);let a=document.querySelector(".laptop");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function nt(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).ti.map(t=>`
               ${t.title}
      `);let a=document.querySelector(".ti");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function rt(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).mobile.map(t=>`
                <img src=${t.src} alt="">

                <p>
            ${t.title}
                
                </p> 
              
            </div>
      `);let a=document.querySelector(".mobile");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function it(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).ti1.map(t=>`
               ${t.title}
      `);let a=document.querySelector(".ti1");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function st(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).consol.map(t=>`
                <img src=${t.src} alt="">

                <p>
            ${t.title}
                
                </p> 
              
            </div>
      `);let a=document.querySelector(".consol");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function ot(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).ti3.map(t=>`
               ${t.title}
      `);let a=document.querySelector(".ti3");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function ct(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).buy1.map(t=>`
                   <img src=${t.src} alt="">
                <div class="${t.class}">    
                  ${t.title}
                </div>
      `);let a=document.querySelector(".buy1");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function lt(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).tamasha2.map(t=>`
               ${t.title}
      `);let a=document.querySelector(".tamasha2");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function dt(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).theree.map(t=>`
               ${t.title}
      `);let a=document.querySelector(".theree");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function ut(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).laptopp.map(t=>`
              <img src=${t.src} alt="">
                <p>
                 ${t.title}
                </p>
      `);let a=document.querySelector(".laptopp");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function jt(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).tii.map(t=>`
                 ${t.title}
      `);let a=document.querySelector(".tii");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function gt(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).mobilee.map(t=>`
              <img src=${t.src} alt="">
                <p>
                 ${t.title}
                </p>
      `);let a=document.querySelector(".mobilee");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function pt(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).buuy1.map(t=>`
                      <div class=${t.class}>    
                   ${t.title}
                </div>
      `);let a=document.querySelector(".buuy1");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function vt(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).tii1.map(t=>`
                 ${t.title}
      `);let a=document.querySelector(".tii1");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function ht(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).tasvirtamasha.map(t=>`
                 <img src=${t.src} alt="">
      `);let a=document.querySelector(".tasvirtamasha");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function ft(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).frees22.map(t=>`
               ${t.title}
      `);let a=document.querySelector(".frees22");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function wt(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).wra.map(t=>`
                 <div class="${t.class}">
                  <img src=${t.src} alt="">
                  <div class="namefree">${t.title}</div>
                </div>
      `);let a=document.querySelector(".wra");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function bt(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).girl.map(t=>`
                      <img src=${t.src} alt="">

      `);let a=document.querySelector(".girl");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function mt(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).donia.map(t=>`
                    <div class="${t.class}"> 
                    ${t.title}
           </div>

      `);let a=document.querySelector(".donia");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function yt(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).koodak.map(t=>`
                    <div class="${t.class}">
              <div class="mtnn2"> 
                ${t.title}
              </div>
              </div>

      `);let a=document.querySelector(".koodak");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function Lt(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).red.map(t=>`
                          <img src= ${t.src} alt="" >


      `);let a=document.querySelector(".red");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function $t(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).cinama.map(t=>`
                           <div class="cinama">
            ${t.title}
          </div>


      `);let a=document.querySelector(".cinama");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function Mt(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).ekran.map(t=>`  
       <div class="${t.class}">
              <img src=${t.src} alt="">
              <div class="mtnekran">
                ${t.title}
              </div>
            </div>

      `);let a=document.querySelector(".ekran");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function Ht(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).twos.map(t=>`  
      <div class="${t.class}">
              <div class="${t.newclass1}">

              <img src=${t.src} alt="">
              <div class="${t.newclass2}">
              <div class="${t.newclass3}"> ${t.title}</div>
              <div class=${t.newclass3}> 
                <div class="${t.newclass4}">
                  ${t.newtitle1}
                </div>
             <div class="${t.newclass5}">
          <p>${t.p1}</p>
              <p>${t.p2}</p>
             </div>
             <div class="${t.newclass6}">
               ${t.newtitle2}
             </div>
              </div>
         
            </div>
            <div class="${t.newclass7}">
              <div class="${t.newclass8}">
                 ${t.newtitle3}
              </div>
            </div>
          </div>
            </div>

      `);let a=document.querySelector(".twos");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function Tt(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).zood.map(t=>`    <div class="${t.newclass1}">

              <img src=${t.src} alt="">
              <div class="${t.newclass2}">
              <div class=${t.newclass3}>${t.title}</div>
              <div class="${t.newclass3}"> 
                <div class="${t.newclass4}">${t.newtitle1}</div>
             <div class="${t.newclass5}">
            <p>${t.p1}</p>
              <p>${t.p2}</p>
             </div>
             <div class="${t.newclass6}">${t.newtitle2} </div>
              </div>
         
            </div>
            <div class="${t.newclass7}">
              <div class="${t.newclass8}"> ${t.newtitle3} </div>
            </div>
          </div>

      `);let a=document.querySelector(".zood");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function St(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).member.map(t=>`  
            <div class="member">
            ${t.title}
          </div>

      `);let a=document.querySelector(".member");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function qt(){let e="";e=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).all.map(t=>`  
         <div class=${t.class}>
                <div class=${t.class1}>
                  <div class=${t.class3}>
                    <img src=${t.src} alt="">
                  <div class=${t.class4}>             
                  ${t.title}

                  </div>
                    </div>
                  <div class=${t.class5}>
                    <img src=${t.src1} alt="">
                  </div>
               
                </div>
                <div class=${t.class6}>
                  عالیه خیلی فیلم و سریال های قشنگی داره 
                  ${t.title1}
                </div>
              </div>

      `);let a=document.querySelector(".all");a.innerHTML="",a.insertAdjacentHTML("afterbegin",e.join(""))}async function At(e){try{const r=await(await fetch("https://negar1919.github.io/json-server/db.json")).json(),a=document.getElementById(e);a.innerHTML="";let t=null;r.accordionItems.forEach(i=>{const s=document.createElement("div");s.className="accordion-question",s.textContent=i.question;const o=document.createElement("div");o.className="accordion-answer",o.textContent=i.answer,s.addEventListener("click",()=>{t&&t!==s&&(t.classList.remove("active"),t.nextElementSibling.style.display="none");const c=s.classList.contains("active");s.classList.toggle("active"),o.style.display=c?"none":"block",t=s.classList.contains("active")?s:null}),a.appendChild(s),a.appendChild(o)})}catch(n){console.error("خطا در دریافت آکاردئون:",n)}}async function Et(){try{const r=(await(await fetch("https://negar1919.github.io/json-server/db.json")).json()).footerMenu[0],a=document.createElement("ul");a.classList.add("footer-menu"),r.items.forEach(t=>{const i=document.createElement("li"),s=document.createElement("a");if(s.href="#",s.textContent=t.title,i.appendChild(s),t.submenu){const o=document.createElement("div");o.classList.add("submenu");const c=document.createElement("ul");t.submenu.forEach(d=>{const u=document.createElement("li");if(typeof d=="string"){const l=document.createElement("a");l.href="#",l.textContent=d,u.appendChild(l)}else{const l=document.createElement("img");l.src="./imags/"+d.icon,l.alt=d.label;const j=document.createElement("a");j.href="#",j.textContent=d.label,u.appendChild(l),u.appendChild(j)}c.appendChild(u)}),o.appendChild(c),i.appendChild(o)}a.appendChild(i)}),document.querySelector(".menufooter .rfooter nav").appendChild(a)}catch(e){console.error("Error loading footer menu:",e)}}At("accordion-container");function Ct(){kt()}Ct();async function kt(){await p(),await v(),await h(),await f(),await w(),await b(),await m(),await y(),await L(),await $(),await H(),await M(),await T(),await S(),await q(),await A(),await E(),await C(),await k(),await x(),await z(),await O(),await P(),await D(),await N(),await I(),await V(),await W(),await B(),await F(),await K(),await g(),await Q(),await G(),await J(),await R(),await U(),await X(),await Y(),await Z(),await _(),await tt(),await et(),await at(),await nt(),await rt(),await it(),await st(),await ot(),await ct(),await lt(),await dt(),await ut(),await jt(),await gt(),await vt(),await pt(),await ht(),await ft(),await wt(),await bt(),await mt(),await yt(),await Lt(),await $t(),await Mt(),await Ht(),await Tt(),await St(),await qt(),await Et();var e=new Swiper(".mySwiper",{spaceBetween:0,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new Swiper(".sinfo",{slidesPerView:4,navigation:{nextEl:".sinfo-next",prevEl:".sinfo-prev"},direction:"horizontal"}),new Swiper(".smohtava",{slidesPerView:6,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},direction:"horizontal"}),new Swiper(".commentswiper",{slidesPerView:3,direction:n(),navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{resize:function(){e.changeDirection(n())}}});function n(){var r=window.innerWidth<=760?"vertical":"horizontal";return r}}
