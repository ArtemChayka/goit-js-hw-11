import{a as u,S as f,i}from"./assets/vendor-CrlV4O_2.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="50832143-3e18ca1c7d3ff8d3379931b93",m="https://pixabay.com/api/";async function p(s){return(await u(m,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let g=new f(".gallery a");function y(s){const n=s.map(r=>`
        <li class="gallery-item">
            <a href="${r.largeImageURL}">
                <img src="${r.webformatURL}" alt="${r.tags}" />
                <div class="info">
                    <p><b>Likes</b> ${r.likes}</p>
                    <p><b>Views</b> ${r.views}</p>
                    <p><b>Comments</b> ${r.comments}</p>
                    <p><b>Downloads</b> ${r.downloads}</p>
                </div>
            </a>
        </li>
    `).join("");c.innerHTML=n,g.refresh()}function h(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",s=>{s.preventDefault();const r=new FormData(s.target).get("search-text").trim();if(!r){i.warning({title:"Warning",message:"Please enter a search term!"});return}h(),b(),p(r).then(o=>{console.log(o),o.hits.length===0?i.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(o.hits)}).catch(o=>{console.error("Error:",o),i.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
