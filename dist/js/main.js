(()=>{"use strict";const e=e=>{e.style.display="block",setTimeout((()=>{e.classList.add("show")}),200)},t=e=>{setTimeout((()=>{e.style.display="none"}),300),e.classList.remove("show")};(()=>{const o=document.getElementById("open-auth-btn"),l=document.getElementById("auth-modal"),s=l.querySelectorAll(".close-btn"),n=l.querySelector(".login-btn"),c=document.querySelector("#logout-btn"),a=document.querySelector("#open-cart-btn"),d=document.getElementById("cart-modal"),r=()=>{o.style.display="none",c.classList.remove("d-none"),a.classList.remove("d-none"),t(l)};o.addEventListener("click",(()=>{e(l)})),s.forEach((e=>{e.addEventListener("click",(()=>{t(l)}))})),n.addEventListener("click",(()=>{const e=l.querySelector("#login-control"),t=l.querySelector("#password-control"),o={login:e.value,password:t.value};localStorage.setItem("auth",JSON.stringify(o)),r()})),c.addEventListener("click",(()=>{localStorage.removeItem("auth"),o.style.display="block",c.classList.add("d-none"),a.classList.add("d-none")})),a.addEventListener("click",(()=>{e(d)})),JSON.parse(localStorage.getItem("auth"))&&r()})()})();