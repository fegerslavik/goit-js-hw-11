import{a as u,S as p,i}from"./assets/vendor-Do60_h77.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const f="https://pixabay.com/api/",d="55683815-3d76e1aff0ba46e1ff3d0a45f";async function m(n){return(await u.get(f,{params:{key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(n){return n.map(e=>`
			<li class="gallery-item">
				<a class="gallery-link" href="${e.largeImageURL}">
					<img
						class="gallery-image"
						src="${e.webformatURL}"
						alt="${e.tags}"
						loading="lazy"
					/>
				</a>
				<div class="gallery-meta">
					<p><span>Likes</span>${e.likes}</p>
					<p><span>Views</span>${e.views}</p>
					<p><span>Comments</span>${e.comments}</p>
					<p><span>Downloads</span>${e.downloads}</p>
				</div>
			</li>`).join("")}function h(n){const e=g(n);l.insertAdjacentHTML("beforeend",e),y.refresh()}function L(){l.innerHTML=""}function w(){c.classList.remove("is-hidden")}function b(){c.classList.add("is-hidden")}const S=document.querySelector(".form");S.addEventListener("submit",E);function E(n){n.preventDefault();const e=n.currentTarget,o=e.elements["search-text"].value.trim();if(!o){i.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}L(),w(),m(o).then(s=>{if(!s.hits.length){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(s.hits)}).catch(s=>{var r,a;const t=((a=(r=s==null?void 0:s.response)==null?void 0:r.data)==null?void 0:a.error)||(s==null?void 0:s.message)||"Something went wrong. Please try again later.";i.error({title:"Error",message:t,position:"topRight"})}).finally(()=>{b(),e.reset()})}
//# sourceMappingURL=index.js.map
