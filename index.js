import{a as b,S as q,i as c}from"./assets/vendor-D73Uttp0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const E="46332021-f156325159d295bd8ceb1a335";async function f(e){const r=new URLSearchParams({key:E,q:`${e}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page,per_page:15});try{return(await b.get(`https://pixabay.com/api/?${r}`)).data}catch(s){throw console.error("Error fetching data:",s),s}}function h(e){const r=e.map(({largeImageURL:l,webformatURL:t,tags:o,likes:i,views:L,comments:w,downloads:S})=>`<li class="gallery-item">
            <article class="card">
                <a class="card-link" href="${l}">
                    <img class="card-image" src="${t}" alt="${o}" loading="lazy"/>
                </a>
                <div class="card-container">
                    <div class="card-item">
                        <p class="card-title">Likes</p>
                        <p class="card-count">${i}</p>
                    </div>
                    <div class="card-item">
                        <p class="card-title">Views</p>
                        <p class="card-count">${L}</p>
                    </div>
                    <div class="card-item">
                        <p class="card-title">Comments</p>
                        <p class="card-count">${w}</p>
                    </div>
                    <div class="card-item">
                        <p class="card-title">Downloads</p>
                        <p class="card-count">${S}</p>
                    </div>
                </div>
            </article>
            </li>`).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",r)}function $(){const e=document.querySelector(".gallery");e.innerHTML=""}function g(e){e.classList.remove("hidden")}function u(e){e.classList.add("hidden")}function P(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const y=document.querySelector(".form");document.querySelector(".gallery");const a=document.getElementById("loader-indicator"),m=document.querySelector(".load-more");let v=new q(".gallery a",{captionsData:"alt",captionDelay:250}),d="",n=1,p=0;y.addEventListener("submit",O);m.addEventListener("click",D);async function O(e){if(e.preventDefault(),d=y.elements.state.value.trim(),!d){c.error({message:"Enter a search query",position:"center"});return}$(),n=1,m.classList.add("hidden"),g(a);try{const r=await f(d,n);if(u(a),p=r.totalHits,r.hits.length===0){c.error({message:"Sorry, no images found. Try again!",position:"center"});return}h(r.hits),v.refresh(),r.hits.length<p&&m.classList.remove("hidden")}catch{u(a),c.error({message:"Error! Something went wrong.",position:"center"})}}async function D(){n+=1,g(a);try{const e=await f(d,n);u(a),h(e.hits),v.refresh(),P(),n*15>=p&&(m.classList.add("hidden"),c.info({message:"We're sorry, but you've reached the end of search results.",position:"center"}))}catch{u(a),c.error({message:"Error! Something went wrong.",position:"center"})}}
//# sourceMappingURL=index.js.map
