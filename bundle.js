(()=>{"use strict";var e={11:(e,t,n)=>{n.d(t,{A:()=>m});var i=n(601),o=n.n(i),r=n(314),a=n.n(r),s=n(417),c=n.n(s),l=new URL(n(21),n.b),d=a()(o()),p=c()(l);d.push([e.id,`*{scroll-behavior:smooth}body{font-family:"Roboto","Arial",sans-serif;font-weight:500}::-webkit-scrollbar,::-webkit-scrollbar-track{scrollbar-width:thin;scrollbar-color:rgba(29,24,14,.7058823529) rgba(29,24,14,.7058823529);border-radius:10px}.modal-body::-webkit-scrollbar-thumb{background:#df3232;border-radius:10px}body::-webkit-scrollbar-thumb:hover,.modal-content::-webkit-scrollbar-thumb:hover{background:#555}a:hover,a:focus{color:var(--text-accent);transition:color 300ms linear;transition:color 300ms linear}p{font-weight:500;font-size:12px}@media(min-width: 1024px){p{font-size:20px}}button{font-weight:600;border-radius:5px;width:100px;background-color:var(--accent);color:var(--btn-color);border:0px;padding:10px 15px;cursor:pointer}button:hover{background-color:var(--accent-focus);color:var(--text-accent);transition:background-color 300ms linear;transition:color 300ms linear}button.disabled{background-color:#f7b263;color:#292929}button.disabled :hover,button.disabled :focus{background-color:#f7b263;color:#292929}body{font-family:"Roboto",sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;margin:0}p,h1,h2,h3,h4,h5,h6{margin:0}img{display:block}a{text-decoration:none;color:#000}ul{padding:0;margin:0}li{list-style:none}p,h1,h2,h3,h4,h5,h6{font-family:"Roboto",sans-serif}:root{--main:rgb(0, 0, 0);--header:rgb(255, 255, 255);--second:rgb(140, 140, 140);--accent:rgb(255, 107, 8);--accent-focus:rgb(255, 127, 8);--warning:rgb(255, 0, 27);--btn-color:rgb(255, 255, 255);--background-color: #fff}[data-theme=dark]{--main:rgb(255, 255, 255);--header:rgb(255, 255, 255);--second:rgb(140, 140, 140);background-color:#5f5f5f}.container{max-width:320px;box-sizing:border-box;margin:0 auto;padding:40px 20px}@media(min-width: 321px)and (max-width: 767px){.container{max-width:320px}}@media(min-width: 768px){.container{max-width:704px}}@media(min-width: 1024px){.container{max-width:1250px}}.container--bg{background-image:url(${p});background-repeat:no-repeat;background-size:cover}.container--section{padding:20px}p,h1,h2,h3,h4,h5,h6{font-family:"Roboto",sans-serif}.nav{display:flex;margin-bottom:60px}.logo{display:flex;align-items:center}.logo__svg{width:24px;height:24px}.menu{display:flex;align-items:center;margin:0 auto}.menu-list{display:flex}.menu-list__item:nth-child(n+2){margin-left:40px}.menu-list__item--link{position:relative;text-transform:uppercase;color:var(--header)}.menu-list__item--link.accent{color:var(--header)}.menu-list__item--link.accent::after{content:"";display:block;position:absolute;top:20px;width:100%;height:2px;border-radius:5px;background-color:var(--accent)}.menu-list__item--link:hover{color:var(--accent)}.search{box-sizing:border-box;width:100%}.search-form{display:flex;justify-content:center;padding-bottom:5px}.search-input{width:230px;margin-right:5px;padding:5px;background-color:rgba(0,0,0,0);border:0px;border:1px solid rgba(128,128,128,.536);position:relative;color:#a09e9e}@media(min-width: 767px){.search-input{width:280px}}.search-input:hover,.search-input:focus{outline:none;border-color:gray}.search-input::placeholder{color:rgba(128,128,128,.536);font-style:italic;font-size:14px}.search-input:focus::placeholder,.search-input:hover::placeholder{color:gray}.search-input--svg{fill:red;position:relative;width:10px;height:10px;top:-14px;left:270px}.search-button{width:70px;text-transform:capitalize;background-color:rgba(128,128,128,.536);border:0px;cursor:pointer;color:#b6b4b4;outline:none}.search-button:hover{background-color:gray;color:#efefef}.warning{color:red}.movies-section{display:flex;position:relative}.genres{position:fixed}.open-genres{text-transform:uppercase;padding:20px;transform:rotate(-90deg);font-weight:400;letter-spacing:1px;position:absolute;top:40px;left:-80px}@media(min-width: 768px){.open-genres{left:-32px}}.genre-list{position:absolute;top:-100px;left:-250px;background:aqua;padding:20px 40px;overflow-y:scroll;transition:transform 100ms linear;opacity:0}.genre-list.open{opacity:1;transform:translateX(250px)}.genre-list__item{padding:4px 0px}.genre-list__item--genre{cursor:pointer}.genre-list__item--genre:hover,.genre-list__item--genre:focus{background-color:red}.movies{padding:20px 0px}@media(min-width: 768px){.movies{display:flex;flex-wrap:wrap}}.warning{width:100%;height:30px}.movie-card{position:relative;cursor:pointer;max-width:280px;margin:0 auto;margin-bottom:20px}@media(max-width: 320px){.movie-card{max-width:250px}}@media(min-width: 768px){.movie-card{max-width:336px}}@media(min-width: 1024px){.movie-card{max-width:395px;margin-bottom:35px;transition:transform linear 300ms}.movie-card:hover,.movie-card:focus{transform:scale(1.03);box-shadow:0px 4px 15px rgba(0,0,0,.4)}}.movie-img{max-width:280px;border-radius:5px}@media(max-width: 320px){.movie-img{max-width:250px}}@media(min-width: 767px){.movie-img{max-width:336px;min-height:574px}}@media(min-width: 1024px){.movie-img{max-width:395px;max-height:592px}}.movie-description{margin-top:10px}@media(min-width: 768px){.movie-description{padding:0 10px;padding-bottom:20px}}.movie-name{text-transform:uppercase}.movie-genre{text-transform:capitalize;color:var(--accent)}.selected-movie{position:absolute;top:0;right:0;padding:10px 15px;font-weight:400;color:var(--btn-color);background-color:var(--accent);border:0px;border-bottom-left-radius:10px}.modal{display:none;position:fixed;top:0%;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);justify-content:center;align-items:center;z-index:1000;overflow:hidden}.modal--background{position:absolute;top:0;left:0;z-index:-1;background-size:cover;filter:blur(10px);width:100%;height:100%;background-position:50% 50%}.modal.is-open{display:flex}.modal-content{position:absolute;height:80%;padding:40px 20px;border-radius:10px;background-color:#fff;z-index:1001;overflow-y:auto;max-height:80%;flex-grow:1;box-shadow:0px 0px 20px 20px rgba(0,0,0,.9)}@media(max-width: 319px){.modal-content{width:280px;padding:35px 5px}}@media(min-width: 320px){.modal-content{width:320px}}@media(min-width: 768px){.modal-content{width:704px;display:flex;justify-content:center}}@media(min-width: 1024px){.modal-content{width:806px}}.modal-close-button{padding:0;position:absolute;top:1%;left:90%;border:0px;border-radius:100%;width:30px;height:30px;color:var(--main)}@media(min-width: 768px){.modal-close-button{top:2%;left:95%}}.modal-poster{width:100%;border-radius:5px;margin:0 auto}@media(min-width: 320px){.modal-poster{width:280px}}@media(min-width: 768px){.modal-poster{width:264px;height:373px;margin:0}}@media(min-width: 1024px){.modal-poster{width:375px;height:478px}}@media(min-width: 768px){.modal-description{width:264px;margin-left:68px}}@media(min-width: 1024px){.modal-description{width:391px;margin-left:16px}}.modal-title{margin:20px 0;font-size:20px;font-weight:500}.metric-list{margin-bottom:20px}.metric-list__item{font-size:12px;margin:8px 0;display:flex;justify-content:space-between}.metric-list__item--name{color:#8c8c8c;text-transform:capitalize}.metric-list__item--value{width:200px;text-align:right}.metric-list__item--value--accent{background-color:#ff6b01;border-radius:5px;padding:2px 5px;margin-right:5px}.article{margin-bottom:20px}.article__title{margin-bottom:8px;text-transform:uppercase}.pagination{display:flex;justify-content:center;padding-bottom:30px}.page-info{margin:12px}.page{display:none}.page.active{display:block}.page.hidden{display:none}`,""]);const m=d},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},a=[],s=0;s<e.length;s++){var c=e[s],l=i.base?c[0]+i.base:c[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var m=n(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=o(u,i);i.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=i(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var s=n(r[a]);t[s].references--}for(var c=i(e,o),l=0;l<r.length;l++){var d=n(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},659:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,o&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},21:(e,t,n)=>{e.exports=n.p+"assets/images/background-with-red-lines-320-1x.jpeg"}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/",n.b=document.baseURI||self.location.href,n.nc=void 0;var i=n(72),o=n.n(i),r=n(825),a=n.n(r),s=n(659),c=n.n(s),l=n(56),d=n.n(l),p=n(540),m=n.n(p),u=n(113),h=n.n(u),g=n(11),f={};f.styleTagTransform=h(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=m(),o()(g.A,f),g.A&&g.A.locals&&g.A.locals;const x={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjkyZGNhNjAxMmQzNjYwYTMzNjMwMDg3MmJkNjY0YyIsIm5iZiI6MTY1NzgwMTc3Ni4xMjQsInN1YiI6IjYyZDAwYzMwZDVmZmNiMDA0YzEyNDg1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HGMfaAikgHYhSiMqYuSvkAmCngKACueL-bCBj8drZOo"}},b=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function v(e){return JSON.parse(localStorage.getItem(e))||[]}function w(e,t){localStorage.setItem(e,JSON.stringify(t))}function y(e){return v("selectedMovies").some((t=>t[0]?.id===e[0]?.id))?"REMOVE":"ADD"}function _(e){return!(!e||0===e.length)||(console.error(`${e} not found`),!1)}function k(e){const t=document.querySelector(`${e}`);return _(t),t}function E(e=1,t=1,n){k(".pagination").innerHTML=`<button class="prev" type="button">Prev</button>\n\t<span class="page-info">${e} / ${t>100?"100+":t}<span id="current-page"></span></span>\n\t<button class="next">Next</button>`;const i=k(".prev"),o=k(".next");var r;r=i,1===e?(r.setAttribute("disabled","true"),r.classList.add("disabled")):(r.removeAttribute("disabled"),r.classList.remove("disabled")),e==t&&(o.setAttribute("disabled","false"),o.classList.add("disabled")),o.removeEventListener("click",(()=>L(e,n))),o.addEventListener("click",(()=>L(e,n))),i.removeEventListener("click",M),i.addEventListener("click",(()=>M(e,n)))}function L(e,t){$(),t(e+1)}function M(e,t){$();const n=k(".prev");e>1&&(n.removeAttribute("disabled"),n.classList.remove("disabled")),t(e-1)}function $(){window.scrollTo({top:0,behavior:"smooth"})}function j(e=1){(async function(e=1){try{const t=await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${e}`,x);return await t.json()}catch(e){console.error("Error:",e)}})(e).then((e=>{if(e){const{page:t,total_pages:n}=e;O(e),w("movies",e),w("query",""),w("scrollPosition",0),E(t,n,j)}}))}j();const A=k(".library"),C=k(".home");function T(){const e=v("selectedMovies");_(e),O({results:e.flat()}),E()}function z(e){w("scrollPosition",window.scrollY),_(e),document.body.style.overflow="hidden";const t=k(".modal");t.classList.add("is-open"),window.addEventListener("click",S),window.addEventListener("keydown",N),function(e){if(_(e)){const t=k(".modal-content"),{title:n="Unknown Title",original_title:i="Unknown Original Title",popularity:o=0,vote_average:r=0,vote_count:a=0,overview:s="No description available",genre_ids:c=[],backdrop_path:l,poster_path:d,id:p}=e[0];k(".modal--background").style.backgroundImage=`url('https://image.tmdb.org/t/p/w500${l}')`;const m=function(e){const t=e.map((e=>{const t=b.find((({id:t})=>t===e));return t?t.name:"Unknown"}));return t}(c);_(t),t.innerHTML=`\n  <button class="modal-close-button" type="button">x</button>\n  <img\n      class="modal-poster"\n      src="https://image.tmdb.org/t/p/w500${d}"\n      alt="movie poster"\n    />\n    <div class="modal-description">\n      <h2 class="modal-title">${n}</h2>\n\n      ${function(e,t,n,i,o){return`\n  <ul class="metric-list">\n        <li class="metric-list__item">\n          <p class="metric-list__item--name">Vote / Votes</p>\n          <p class="metric-list__item--value"><span class="metric-list__item--value--accent">${e.toFixed(1)}</span>${t}</p>\n        </li>\n        <li class="metric-list__item">\n          <p class="metric-list__item--name">Popularity</p>\n          <p class="metric-list__item--value">${n.toFixed(0)}</p>\n        </li>\n        <li class="metric-list__item">\n          <p class="metric-list__item--name">original title</p>\n          <p class="metric-list__item--value">${i}</p>\n        </li>\n        <li class="metric-list__item">\n          <p class="metric-list__item--name">genre</p>\n          <p class="metric-list__item--value">${o}</p>\n        </li>\n      </ul>\n  `}(r,a,o,i,m)}\n      ${function(e){return`\n  <article class="article">\n\t\t<h3 class="article__title">about</h3>\n\t\t<p class="article__description">${e}</p>\n\t  </article>\n  `}(s)}\n      ${function(e){return`<button class="save-movie-btn ${y(e)}" type="button">${y(e)}</button>\n`}(e)}\n\t  \n\t  \n    </div>\n  `;const u=k(".save-movie-btn");u.addEventListener("click",(()=>{!function(e,t){e&&t?e.classList.contains("REMOVE")?(function(e){w("selectedMovies",v("selectedMovies").filter((t=>t[0]?.id!==e[0]?.id)))}(t),e.classList.remove("REMOVE"),e.classList.add("ADD"),e.textContent="ADD"):(e.classList.add("REMOVE"),function(e){if(!e[0]||!e[0].id)return void console.error("invalid movie obj");const t=v("selectedMovies");t.some((t=>t[0]?.id===e[0]?.id))||(t.push(e),w("selectedMovies",t))}(t),e.classList.remove("ADD"),e.classList.add("REMOVE"),e.textContent="REMOVE"):console.error("invalid btn or movie obj")}(u,e)}))}}(e.movie_results);const n=k(".modal-close-button");t._outsideClickHandler=S,t._handleEscClose=N,n._handleCloseBtnClick=D,n.addEventListener("click",D)}function I(){document.body.style.overflow="";const e=k(".modal-close-button"),t=k(".modal");t.classList.remove("is-open"),window.removeEventListener("click",t._outsideClick),window.removeEventListener("keydown",t._handleEscClose),e.removeEventListener("click",t._handleCloseBtnClick);const n=v("movies");v("page"),v("query"),O(n),function(){if(k(".library").classList.contains("accent")){const e=v("scrollPosition");T(),setTimeout((()=>{window.scrollTo(0,e)}),400)}}()}function S(e){const t=k(".modal--background");e.target===t&&I()}function N(e){"Escape"!==e.key&&"Esc"!==e.key||I()}function D(){I()}function O({results:e}){const t=k(".movies");t.innerHTML="",e.forEach((({poster_path:e,title:n="Unknown Title",genre_ids:i=[],release_date:o="Unknown date",id:r=""})=>{const a=function(e){const t=e.map((e=>{const t=b.find((({id:t})=>t===e));return t?t.name:"Unknown"}));return t.length<3?t.join(", "):t[0]+", "+t[1]+", "+t[2]+" ..."}(i),s=o?.slice(0,4),c=document.createElement("div");c.classList.add("movie-card"),c.innerHTML=`\n      ${function(e){return v("selectedMovies").some((t=>t[0]?.id===e))?"<p class='selected-movie' disabled>Saved</p>":""}(r)}\n      <img class="movie-img" src="https://image.tmdb.org/t/p/w500${e}" alt="${n}" />\n      <div class="movie-description">\n        <p class="movie-name">${n}</p>\n        <p class="movie-genre">${a} | ${s}</p>\n      </div>\n    `,c.addEventListener("click",(()=>{!async function(e){try{z(await Y(e))}catch(e){console.error("Error1:",e)}}(r)})),t.appendChild(c)}))}A.addEventListener("click",(e=>{e.preventDefault();const t=k(".library");k(".home").classList.remove("accent"),t.classList.add("accent"),T()})),C.addEventListener("click",(e=>{e.preventDefault();const t=k(".library"),n=k(".home");t.classList.remove("accent"),n.classList.add("accent"),j()}));const R=k(".search-form"),H=k(".search-input");function U(e,t=1){_(e),J(e,t).then((t=>{if(t){const{page:n,total_pages:i,results:o}=t;w("query",e),w("movies",t),_(o);const r=k(".warning");r.textContent="",0===o.length&&(r.textContent="Search result not successful. Enter the correct movie name or watch popular",j()),O(t),E(n,i,(t=>U(e,t)))}}))}const J=async function(e,t=1){if(e.trim())try{const n=await fetch(`https://api.themoviedb.org/3/search/movie?query=${e}&include_adult=false&language=en-US&page=${t}`,x);if(!n.ok)throw new Error(`HTTP error, status ${n.status}`);return await n.json()}catch(e){console.error("Error:",e)}};R.addEventListener("submit",(e=>{e.preventDefault(),U(H.value.trim())}));const Y=async function(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}/external_ids`,x),n=await t.json(),i=await fetch(`https://api.themoviedb.org/3/find/${n.imdb_id}?external_source=imdb_id`,x);return await i.json()}catch(e){console.error("Error:",e)}},P=k(".genre-list"),V=k(".open-genres");P.addEventListener("click",(e=>{!function(e){Z(e.target.id);k(".genre-list").classList.toggle("open")}(e)})),V.addEventListener("click",(function(){!function(){const e=k(".genre-list");e.innerHTML="",b.forEach((({name:t,id:n})=>{const i=document.createElement("li");i.classList.add("genre-list__item"),i.innerHTML=`<a class=genre-list__item--genre id=${n}>${t}</a>`,e.appendChild(i)}))}();k(".genre-list").classList.toggle("open")}));const q=async function(e=12,t=1){try{const n=await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${t}&sort_by=popularity.desc&with_genres=${e}`,x);return await n.json()}catch(e){console.error("Error:",e)}};function Z(e=12,t){q(e,t).then((t=>{if(t){const{page:n,total_pages:i}=t;O(t),w("movies",t),w("query",""),w("scrollPosition",0),w("genre",e),E(n,i,(t=>Z(e,t)))}}))}})();