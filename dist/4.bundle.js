(window.webpackJsonp=window.webpackJsonp||[]).push([[4],[,,function(e,t,r){"use strict";var n={parseActiveUrlWithCombiner:function(){var e=window.location.hash.slice(1).toLowerCase(),t=this._urlSplitter(e);return this._urlCombiner(t)},parseActiveUrlWithoutCombiner:function(){var e=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(e)},_urlSplitter:function(e){var t=e.split("/");return{resource:t[1]||null,id:t[2]||null,verb:t[3]||null}},_urlCombiner:function(e){return(e.resource?"/".concat(e.resource):"/")+(e.id?"/:id":"")+(e.verb?"/".concat(e.verb):"")}};t.a=n},function(e,t,r){"use strict";var n=r(0),a={LIST_RESTAURANTS:"".concat(n.a.API_BASE_URL,"list"),DETAIL_RESTAURANT:"".concat(n.a.API_BASE_URL,"detail/"),POST_REVIEW_ON_RESTAURANT:"".concat(n.a.API_BASE_URL,"review")};function i(e,t,r,n,a,i,o){try{var s=e[i](o),d=s.value}catch(e){return void r(e)}s.done?t(d):Promise.resolve(d).then(n,a)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,s,d,_;return t=e,r=null,s=[{key:"listRestaurants",value:function(){return fetch(a.LIST_RESTAURANTS)}},{key:"restaurantDetail",value:function(e){return fetch("".concat(a.DETAIL_RESTAURANT).concat(e))}},{key:"postReviewOnRestaurant",value:(d=regeneratorRuntime.mark((function e(t){var r,i,o,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,i=t.name,o=t.review,e.next=3,fetch("".concat(a.POST_REVIEW_ON_RESTAURANT),{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":n.a.API_KEY},body:JSON.stringify({id:r,name:i,review:o})});case 3:return s=e.sent,e.abrupt("return",s.json());case 5:case"end":return e.stop()}}),e)})),_=function(){var e=this,t=arguments;return new Promise((function(r,n){var a=d.apply(e,t);function o(e){i(a,r,n,o,s,"next",e)}function s(e){i(a,r,n,o,s,"throw",e)}o(void 0)}))},function(e){return _.apply(this,arguments)})}],r&&o(t.prototype,r),s&&o(t,s),e}();t.a=s},,,,,,function(e,t,r){"use strict";var n=r(10),a=r.n(n);function i(e,t,r,n,a,i,o){try{var s=e[i](o),d=s.value}catch(e){return void r(e)}s.done?t(d):Promise.resolve(d).then(n,a)}var o=function(){var e,t=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=4;break}return e.next=3,a.a.register();case 3:return e.abrupt("return");case 4:console.log("Service worker no supported in this browser");case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){i(o,n,a,s,d,"next",e)}function d(e){i(o,n,a,s,d,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();t.a=o},,function(e,t,r){"use strict";var n=r(3),a=r(8);function i(e,t,r,n,a,i,o){try{var s=e[i](o),d=s.value}catch(e){return void r(e)}s.done?t(d):Promise.resolve(d).then(n,a)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){i(o,n,a,s,d,"next",e)}function d(e){i(o,n,a,s,d,"throw",e)}s(void 0)}))}}var s={render:function(){return o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n    <div class="content">\n      <div id="home__title" class="home__title">\n          <h2 tabindex="0">Explore Restaurant</h2>\n      </div>\n      <div id="restaurants" class="restaurants">\n        <h2 class="loading">Loading...</h2>\n      </div>\n      <div class="reviews__container" id="reviews__container">\n        <div class="review__title">\n          <h2 tabIndex="0">RestoPlace Reviews</h2>\n        </div>\n        <div class="reviews">\n\n        <div>\n      </div>\n    </div>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){var e=this;return o(regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=document.querySelector("#restaurants"),i=document.querySelector(".reviews"),n.a.listRestaurants().then((function(e){return e.json()})).then((function(e){r.innerHTML="",e.restaurants.forEach((function(e,t){var n=document.createElement("restaurant-card");n.classList.add("restaurant__card__".concat(t+1)),r.appendChild(n),document.querySelector(".restaurant__card__".concat(t+1)).restaurant=e})),a.reviews.map((function(e,t){var r=document.createElement("restoplace-review-card");r.classList.add("restoplace__review__".concat(t+1)),r.classList.add("review"),r.classList.add("card"),i.appendChild(r),document.querySelector(".restoplace__review__".concat(t+1)).review=e}))})).catch((function(t){e._renderError(t.message,r)}));case 3:case"end":return t.stop()}}),t)})))()},_renderError:function(e,t){return o(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.innerHTML="",n=document.createElement("error-message"),t.appendChild(n),document.querySelector("error-message").message=e;case 4:case"end":return r.stop()}}),r)})))()}},d=r(2),_=r(4),u=r(1);function c(e,t,r,n,a,i,o){try{var s=e[i](o),d=s.value}catch(e){return void r(e)}s.done?t(d):Promise.resolve(d).then(n,a)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){c(i,n,a,o,s,"next",e)}function s(e){c(i,n,a,o,s,"throw",e)}o(void 0)}))}}function p(e,t,r,n,a,i,o){try{var s=e[i](o),d=s.value}catch(e){return void r(e)}s.done?t(d):Promise.resolve(d).then(n,a)}function f(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){p(i,n,a,o,s,"next",e)}function s(e){p(i,n,a,o,s,"throw",e)}o(void 0)}))}}var x={"/":s,"/restaurant/:id":{render:function(){return l(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n    <div class="content">\n      <div id="title" class="title">\n        <h2 tabindex="0">Restaurant Detail</h2>  \n      </div>\n      <div id="restaurant__detail" class="restaurant__detail">\n        <h2 class="loading">Loading...</h2>\n      </div>\n    </div>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){var e=this;return l(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=d.a.parseActiveUrlWithoutCombiner(),a=document.querySelector("#restaurant__detail"),n.a.restaurantDetail(r.id).then((function(e){return e.json()})).then((function(t){var r=t.restaurant;a.innerHTML="";var n=document.createElement("restaurant-detail");a.appendChild(n),document.querySelector("restaurant-detail").restaurant=r;var i=document.querySelector("#like__button__container"),o=document.querySelector("#restaurant__rating__star"),s=document.querySelector(".add__review__button"),d=document.querySelector("#user__name__input"),_=document.querySelector("#user__review__input"),u=document.querySelector("#restaurant__reviews__container");o.innerHTML="";var c=document.createElement("rating-star");o.appendChild(c),document.querySelector("rating-star").rating=r.rating,e._events(r,i,s,d,_,u)})).catch((function(t){window.scrollTo(0,0),e._renderError(t.message,a)}));case 3:case"end":return t.stop()}}),t)})))()},_events:function(e,t,r,n,a,i){return l(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:window.scrollTo(0,0),u.d.init({likeButtonContainer:t,favoriteRestaurants:_.a,restaurant:e}),u.a.init({addReviewButton:r,restaurantId:e.id,userNameInput:n,userReviewInput:a,restaurantReviewsContainer:i});case 3:case"end":return o.stop()}}),o)})))()},_renderError:function(e,t){return l(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.innerHTML="",n=document.createElement("error-message"),t.appendChild(n),document.querySelector("error-message").message=e;case 4:case"end":return r.stop()}}),r)})))()}},"/favorite":{render:function(){return f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",'\n    <div class="content">\n      <div id="favorite__restaurants" class="favorite__restaurants">\n          <div id="title" class="title">\n            <h2 tabindex="0">Favorite</h2>  \n          </div>\n          <div id="favorite__restaurants__content">\n\n          </div>\n      </div>\n    </div>\n    ');case 1:case"end":return e.stop()}}),e)})))()},afterRender:function(){var e=this;return f(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.querySelector("#favorite__restaurants__content"),t.next=3,_.a.getAllRestaurants();case 3:0===(n=t.sent).length?e._renderNotFoundMessage(r):n.forEach((function(e,t){var n=document.createElement("restaurant-card");n.classList.add("restaurant__card__".concat(t+1)),r.appendChild(n),document.querySelector(".restaurant__card__".concat(t+1)).restaurant=e})),e._events();case 6:case"end":return t.stop()}}),t)})))()},_renderNotFoundMessage:function(e){var t=this;return f(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.innerHTML="",n=document.createElement("data-not-found-message"),e.appendChild(n),document.querySelector("data-not-found-message").message="You don't have any favorite restaurant",t._events();case 5:case"end":return r.stop()}}),r)})))()},_events:function(){return f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.scrollTo(0,0);case 1:case"end":return e.stop()}}),e)})))()}}};t.a=x},,,,function(e,t,r){var n=r(16),a=r(17);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1};n(a,i);e.exports=a.locals||{}},,function(e,t,r){(t=r(18)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);"]),t.push([e.i,'.navbar{z-index:999;background-color:#2d4059;position:fixed;top:0;width:100%}.navbar #logo{margin-left:20px;margin-top:12px;margin-right:10px}.navbar .links{display:flex;justify-content:unset;align-items:unset;flex-direction:row}.navbar .links a{display:block;color:#f2f2f2;text-align:center;padding:14px 16px;text-decoration:none;font-size:17px;font-weight:bold}.navbar .links a:hover{background:#f07b3f;color:#fff}.navbar__inherit{background-color:inherit}#humberger{padding:7px 5px;cursor:pointer;width:max-content;transition:.5s;margin-right:20px;background-color:inherit;border:unset}#humberger .line{width:25px;height:2px;background-color:#fff;margin:6px 0;margin-left:10px}.humberger__drawer__clicked{margin-left:160px}@media only screen and (max-width: 600px){.navbar{display:flex}.navbar #logo{margin-top:8px}.navbar .links a{display:none}.navbar #humberger{position:absolute;top:0;right:20px}}@media only screen and (min-width: 601px){#humberger{display:none}}#drawer__title{text-align:center;color:#fff;font-weight:bold}#drawer{position:fixed;z-index:99999;background-color:#2d4059;height:100%;padding:10px;width:150px;top:0}#drawer .link{text-align:center;margin:10px;margin-top:20px;background-color:#f07b3f;font-weight:bold;padding:15px;border-radius:25px;color:#fff}#drawer a{cursor:pointer;text-decoration:unset}.drawer{visibility:hidden;opacity:0;transition:visibility 0s,opacity .1s linear}.drawer__open{visibility:visible;opacity:1}@media only screen and (min-width: 601px){#drawer{left:-200px;display:none}}.remove__hero{display:none}#hero{position:relative;height:650px}#hero img{width:100%;height:650px}.hero__image{background-image:url("/images/heros/hero-image_2.jpg");width:100%;height:650px;background-position:center;background-repeat:no-repeat;background-size:cover}.hero__paper{background-color:#000;width:100%;height:100%;opacity:.7;color:#fff}.hero__text{background-color:#f07b3f;opacity:unset;text-align:center;width:100%;border-radius:50px;top:45%;font-size:55px;position:absolute;color:#fff}.hero__text button{opacity:1;border:none;outline:0;display:inline-block;padding:10px 25px;color:#fff;background-color:#f07b3f;text-align:center;height:45px;cursor:pointer;font-size:18px;font-weight:bold;transition:.5s;border-radius:28px}.hero__text button:focus{border:2px solid #fff}@media only screen and (max-width: 600px){#hero{height:unset}#hero img{height:unset}.hero__text{font-size:25px}}.home__title,.title{text-align:center}#home__title{margin-top:30px}#title{margin-top:80px}.content{width:90%;margin:auto;min-height:505px}@media only screen and (max-width: 600px){.content{width:95%;min-height:700PX}}.restaurants{padding:10px;display:grid;background:#fff;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr))}.restaurant{border-radius:8px;margin:10px;position:relative}.restaurant__city{padding:5px;border-radius:8px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);background-color:#fff;font-size:12px;color:#2d4059;font-weight:bold;position:absolute;left:-9px;top:-2px}.restaurant__information{position:relative;display:flex;justify-content:unset;align-items:unset;flex-direction:row;margin-top:5px}.restaurant__information .restaurant__name{padding:5px;border-radius:8px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);width:max-content;background-color:#f07b3f;position:absolute;padding:5px;font-size:16px;color:#fff;font-weight:bold;left:-9px;top:-20px}.restaurant__information .restaurant__rating{padding:5px;border-radius:8px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);width:max-content;background-color:#fff;font-size:12px;font-weight:bold;color:#2d4059;position:absolute;top:-20px;right:0px}.restaurant__desc{padding:5px;border-radius:8px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);margin-top:0;padding:10px;font-size:14px}.restaurant__desc p{margin:14px 0 0 0;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;line-height:1.8em}.resto__detail__link{text-decoration:unset}.resto__detail__link .link{background-color:#2d4059;text-align:center;padding:14px;border-radius:8px;font-size:18px;color:#fff;font-weight:bold}.resto__detail__link .link:hover{background-color:gray}.restaurant__picture__container{width:100%;height:220px;overflow:hidden;background-color:#dcdcdc}.review__picture__container{width:100%;height:220px;overflow:hidden;background-color:#dcdcdc}.restaurant__picture{width:100%;border-radius:8px}@media only screen and (max-width: 600px){.restaurants{grid-template-columns:none}.restaurant{margin:5px}.restaurant__name{font-size:12px}.restaurant__rating{font-size:10px}.restaurant__desc,.resto__detail__link{font-size:12px}}#restaurant__detail{margin-top:20px}#restaurant__detail__1{display:flex;justify-content:unset;align-items:unset;flex-direction:row}#restaurant__detail__1 .restaurant__picture{flex-basis:50%;position:relative;height:max-content}#restaurant__detail__1 .restaurant__picture .name{padding:5px;border-radius:8px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);position:absolute;font-size:18px;color:#fff;font-weight:bold;background-color:#f07b3f;left:50%;transform:translate(-50%, 0);top:-12px;width:max-content}#restaurant__detail__1 .restaurant__picture img{border-radius:8px;width:100%}#restaurant__detail__1 .restaurant__picture .restaurant__like{width:max-content;position:absolute;left:50%;transform:translate(-50%, 0);bottom:-8px}#restaurant__detail__1 .restaurant__detail__information{flex-basis:50%;padding:10px 20px;font-size:14px;font-weight:bold;position:relative}#restaurant__detail__1 .restaurant__detail__information .city{padding:5px;border-radius:8px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);position:absolute;color:#2d4059;font-weight:bold;background-color:#fff;left:50%;transform:translate(-50%, 0);top:-12px;width:max-content}#restaurant__detail__1 .restaurant__detail__information #restaurant__rating__star{text-align:center;color:#2d4059;margin-top:20px}#restaurant__detail__1 .restaurant__detail__information #restaurant__rating__star h4{color:gray;margin-top:5px}#restaurant__detail__1 .restaurant__detail__information table{width:100%;margin-top:10px}#restaurant__detail__1 .restaurant__detail__information table tr td{padding:10px 5px}#restaurant__detail__1 .restaurant__detail__information .category,#restaurant__detail__1 .restaurant__detail__information .food,#restaurant__detail__1 .restaurant__detail__information .drink{box-sizing:border-box;padding:5px;border-radius:8px;color:#2d4059;border:unset;width:max-content;border:1px solid #2d4059;cursor:pointer;transition:.2s}#restaurant__detail__1 .restaurant__detail__information .food,#restaurant__detail__1 .restaurant__detail__information .drink{display:inline-block;border:1px solid #f07b3f;color:#fff;margin-top:5px;color:#2d4059}#restaurant__detail__1 .restaurant__detail__information .food:hover,#restaurant__detail__1 .restaurant__detail__information .drink:hover,#restaurant__detail__1 .restaurant__detail__information .food:focus,#restaurant__detail__1 .restaurant__detail__information .drink:focus{background-color:#f07b3f;border:unset;color:#fff}#restaurant__detail__2{display:flex;justify-content:unset;align-items:unset;flex-direction:row;margin-top:20px}#restaurant__detail__2 .description{flex-basis:60%;padding:10px;line-height:1.8em;height:max-content;margin-right:10px}#restaurant__detail__2 .description p{font-size:14px;margin-top:5px}#restaurant__detail__2 .restaurant__reviews{flex-basis:40%;padding:10px}#restaurant__detail__2 .restaurant__reviews #add__review{margin-top:10px}#restaurant__detail__2 .restaurant__reviews #add__review #user__name__input,#restaurant__detail__2 .restaurant__reviews #add__review #user__name__input:focus{outline-color:#dcdcdc;border-color:#dcdcdc;border-style:solid;box-shadow:unset;padding:5px;margin-top:5px;border-radius:8px}#restaurant__detail__2 .restaurant__reviews #add__review #user__review__input,#restaurant__detail__2 .restaurant__reviews #add__review #user__review__input:focus{margin-top:5px;outline:none !important;border-color:#dcdcdc;padding:5px;border-radius:8px;line-height:1.8rem}#restaurant__detail__2 .restaurant__reviews #add__review .add__review__button{margin-top:5px;background-color:#2d4059;width:46px;height:46px;color:#fff;font-weight:bold;border-radius:8px;border:unset;padding:5px;font-size:14px;cursor:pointer}#restaurant__detail__2 .restaurant__reviews #add__review .disable__button{background-color:#dcdcdc;color:#fff;cursor:unset}#restaurant__detail__2 .restaurant__reviews .restaurant__reviews__container{max-height:300px;overflow:scroll}#restaurant__detail__2 .restaurant__reviews .restaurant__reviews__container .success__add__review,#restaurant__detail__2 .restaurant__reviews .restaurant__reviews__container .failed__add__review{color:#2d4059;font-size:12px;margin-top:10px}#restaurant__detail__2 .restaurant__reviews .restaurant__reviews__container .failed__add__review{color:#fb3640}#restaurant__detail__2 .restaurant__reviews #restaurant__reviews__container::-webkit-scrollbar-thumb{background-color:green}#restaurant__detail__2 .restaurant__reviews #restaurant__reviews__container::-webkit-scrollbar{width:10px}#restaurant__detail__2 .restaurant__reviews #restaurant__reviews__container::-webkit-scrollbar-thumb{background-color:#dcdcdc}#restaurant__detail__2 .restaurant__reviews hr{border-top:1px solid #dcdcdc;margin-top:10px}#restaurant__detail__2 .restaurant__reviews .restaurant__review{margin-top:10px;border-bottom:1px solid #dcdcdc;padding:5px 9px}#restaurant__detail__2 .restaurant__reviews .restaurant__review .user__name{font-size:14px;color:#f07b3f;font-weight:bold}#restaurant__detail__2 .restaurant__reviews .restaurant__review .user__review{margin:10px 0;font-size:12px;line-height:1.8em}#restaurant__detail__2 .restaurant__reviews .restaurant__review .review__date{color:gray;font-size:11px;text-align:right}@media only screen and (max-width: 768px){#restaurant__detail__1{display:flex;justify-content:unset;align-items:unset;flex-direction:column}#restaurant__detail__1 .restaurant__picture .city{font-size:12px}#restaurant__detail__1 .restaurant__picture .restaurant__like{bottom:-4px}#restaurant__detail__1 .restaurant__detail__information{margin-top:20px;padding:10px 0;font-size:12px}#restaurant__detail__2{display:flex;justify-content:unset;align-items:unset;flex-direction:column;margin-top:5px}#restaurant__detail__2 .description{margin:0}#restaurant__detail__2 .description p{font-size:12px}#restaurant__detail__2 .restaurant__reviews{margin-top:10px}#restaurant__detail__2 .restaurant__reviews .restaurant__review .user__name,#restaurant__detail__2 .restaurant__reviews .restaurant__review .user__review{font-size:12px}#restaurant__detail__2 .restaurant__reviews .restaurant__review .review__date{font-size:10px}}#favorite__restaurants{margin-top:80px}#favorite__restaurants__content{padding:10px;display:grid;background:#fff;min-height:460px;margin:auto;width:45%}@media only screen and (max-width: 768px){#favorite__restaurants__content{width:95%}.restaurant{margin:5px}.restaurant__name{font-size:12px}.restaurant__rating{font-size:10px}}.reviews__container{background-color:#2d4059;padding:5px;border-radius:8px}.review__title{text-align:center;color:#fff;margin-top:10px}.reviews{display:flex;justify-content:space-around;align-items:flex-start;flex-direction:row}.review{width:95%;margin:10px;padding:20px;font-size:14px}.review img{width:100%;border-radius:8px}.review .information{display:flex;justify-content:unset;align-items:unset;flex-direction:column;width:100%}.review .information .user__name{font-weight:bold;color:#f07b3f;margin-left:8px}.review .information .user__rating{position:relative;font-size:10px;font-weight:bold;margin-top:7px;margin-left:8px}.review .user__review{padding:0 8px 8px 8px}.review hr{border:none;height:1px;color:#dcdcdc;background-color:#dcdcdc;margin:5px 0px}@media only screen and (max-width: 600px){.reviews{display:flex;justify-content:space-around;align-items:center;flex-direction:column}.reviews .user__review{font-size:14px}}@media only screen and (max-width: 768px){.reviews{display:flex;justify-content:space-around;align-items:center;flex-direction:column}.reviews .user__review{font-size:12px}}@media only screen and (max-width: 1024px){.review{width:90%}.review .user__review{font-size:12px}}footer{padding:5px;border-radius:8px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);margin-top:20px;text-align:center;padding:20px;font-size:16px;font-weight:bold;color:#2d4059}*{font-family:"Montserrat",sans-serif;margin:0}html{scroll-behavior:smooth}.loader{position:fixed;z-index:999999;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:flex-start;background-color:#2d4059}.loader.hidden{animation:fadeOut .3s;animation-fill-mode:forwards}.loader>img{margin-top:20%;width:300px}.loading{text-align:center;margin-top:20%;display:block;animation:animate .5s infinite alternate;color:#f07b3f;font-weight:bold}.error{margin:auto;margin-top:20%;width:max-content}.error .message{font-size:18px;background-color:#fb3640;color:#fff;padding:5px;border-radius:8px}.error .reload{text-align:center}.error .reload a{color:#f07b3f;font-size:18px}@keyframes animate{0%{opacity:1}100%{opacity:.2}}.line{color:#dcdcdc}.like__button,.liked__button{padding:5px;border-radius:8px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);width:max-content;background-color:#fff;border:unset;cursor:pointer;color:gray}.like__button .fas,.liked__button .fas{font-size:50px;transition:.2s}.liked__button{color:#fb3640}.like__button:hover,.liked__button:hover{background-color:inherit;padding:5px;border-radius:0;box-shadow:0 0 0 0 rgba(0,0,0,.2)}.like__button:hover .fas,.liked__button:hover .fas{transition:.2s;font-size:60px}.like__button:active,.liked__button:active{color:#fb3640;background-color:inherit}.like__button:active .fas,.liked__button:active .fas{transition:.2s;font-size:70px}@keyframes fadeOut{100%{opacity:0;visibility:hidden}}@media only screen and (max-width: 700px){.loader>img{margin-top:50%}.error{width:100%}.error .message{font-size:14px;text-align:center}.error .reload a{font-size:14px}}.skip__to__content{background-color:#ff9a00;color:#fff;font-weight:bold;text-decoration:unset;position:absolute;align-items:center;top:-65px;left:0;padding:8px;height:33px;z-index:9999}.skip__to__content:focus{top:0px}.card{padding:5px;border-radius:8px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);background-color:#fff}.nav-card{padding:5px;border-radius:0px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2)}.data__not__found{text-align:center;color:gray;margin-top:100px}',""]),e.exports=t}]]);