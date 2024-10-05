import{a as b,S as w,i as c}from"./assets/vendor-D73Uttp0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();let d=15;async function y(t,o=1){const a="https://pixabay.com/api/",s="46332021-f156325159d295bd8ceb1a335",e=new URLSearchParams({key:s,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:o});try{const r=await b.get(`${a}?${e.toString()}`),{hits:n,totalHits:m}=r.data;return{hits:n,totalHits:m}}catch(r){throw console.error("Error fetching images:",r),new Error("Failed to fetch images")}}function h(t){return t.map(({largeImageURL:o,webformatURL:a,tags:s,likes:e,views:r,comments:n,downloads:m})=>`<li class="gallery-item">
        <article class="card">
    <a class="card-link" href="${o}"><img class="card-image" src="${a}" alt="${s}" loading="lazy"/></a>        <div class="card-container">
          <div class="card-item">
            <p class="card-title">Likes</p>
            <p class="card-count">${e}</p>
          </div>
          <div class="card-item">
            <p class="card-title">Views</p>
            <p class="card-count">${r}</p>
          </div>
          <div class="card-item">
            <p class="card-title">Comments</p>
            <p class="card-count">${n}</p>
          </div>
          <div class="card-item">
            <p class="card-title">Downloads</p>
            <p class="card-count">${m}</p>
          </div>
        </div>
        </article>
          </li>`).join("")}function L(t){t.classList.remove("hidden"),t.style.display="block"}function u(t){t.classList.add("hidden"),t.style.display="none"}const S=document.querySelector(".form"),f=document.querySelector(".gallery"),i=document.getElementById("loader-indicator"),p=document.querySelector(".gallery-button");let v=new w(".gallery a",{captionsData:"alt",captionDelay:250}),l=1,g="";S.addEventListener("submit",E);p.addEventListener("click",$);async function E(t){t.preventDefault();const a=t.currentTarget.elements.state.value.trim();if(a===""){c.error({message:"Enter a search query",position:"center"});return}f.innerHTML="",l=1,g=a,L(i);try{const{hits:s,totalHits:e}=await y(g,l);if(u(i),s.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});return}f.insertAdjacentHTML("beforeend",h(s)),v.refresh(),s.length===d&&e>d?p.style.display="block":p.style.display="none"}catch{u(i),c.error({message:"Error! Something went wrong.",position:"center"})}}async function $(){l+=1,L(i);try{const{hits:t,totalHits:o}=await y(g,l);if(u(i),t.length===0){c.error({message:"No more images to load!",position:"center"});return}f.insertAdjacentHTML("beforeend",h(t)),v.refresh(),l*d>=o&&(p.style.display="none")}catch{u(i),c.error({message:"Error! Something went wrong.",position:"center"})}}
//# sourceMappingURL=index.js.map
