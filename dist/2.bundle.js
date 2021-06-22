(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(e,t,n){"use strict";t.a={API_BASE_URL:"https://restaurant-api.dicoding.dev/",API_KEY:"12345",BASE_IMAGE_URL:{SMALL:"https://restaurant-api.dicoding.dev/images/small/",MEDIUM:"https://restaurant-api.dicoding.dev/images/medium/",LARGE:"https://restaurant-api.dicoding.dev/images/large/"},DATABASE_NAME:"restoplace-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants",CACHE_NAME:"RestoPlace-V1"}},1:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"g",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return v}));var r={init:function(e){var t=this;window.addEventListener("load",(function(){t._loader=e,t._onLoad(e)}))},_onLoad:function(){var e=this;setTimeout((function(){e._loader.className+=" hidden"}),2e3)}},a={init:function(e,t){var n=this;e.addEventListener("click",(function(e){n._content=t,e.preventDefault(),n._gotToContent()}))},_gotToContent:function(){window.scrollTo(0,this._content.offsetTop-90)}},i=n(2),o={init:function(e){this._onPage(e)},_onPage:function(e){"/"===i.a.parseActiveUrlWithCombiner()?this._addHero(e):this._removeHero(e)},_addHero:function(e){e.classList.remove("remove__hero")},_removeHero:function(e){e.classList.add("remove__hero")}},s={init:function(e){this._navbar=e,this._onPage()},_onPage:function(){"/"===i.a.parseActiveUrlWithCombiner()?this._onScrollOnHomePage(this._navbar):this._onScroll(this._navbar)},_onScrollOnHomePage:function(){var e=this;this._navbar.classList.add("navbar__inherit"),this._navbar.classList.remove("nav-card"),document.addEventListener("scroll",(function(){return e._offsetRule(e._navbar)}))},_onScroll:function(){var e=this;this._coloredNavbar(this._navbar),document.addEventListener("scroll",(function(){e._coloredNavbar(e._navbar)}))},_offsetRule:function(){window.scrollY>1?this._coloredNavbar(this._navbar):window.scrollY<1&&this._inheritColorNavbar(this._navbar)},_coloredNavbar:function(){this._navbar.classList.remove("navbar__inherit"),this._navbar.classList.add("nav-card")},_inheritColorNavbar:function(){this._navbar.classList.add("navbar__inherit"),this._navbar.classList.remove("nav-card")}},u={init:function(e){var t=this,n=e.drawerButton,r=e.drawer,a=e.content;this._drawerButton=n,this._drawer=r,this._drawerButton.addEventListener("click",(function(e){t._toggleDrawer(e)})),a.addEventListener("click",(function(e){t._closeDrawer(e,n,r)}))},_toggleDrawer:function(e){e.stopPropagation(),this._drawerButton.classList.toggle("humberger__drawer__clicked"),this._drawer.classList.toggle("drawer__open")},_closeDrawer:function(e){e.stopPropagation(),this._drawerButton.classList.remove("humberger__drawer__clicked"),this._drawer.classList.remove("drawer__open")}};function c(e,t,n,r,a,i,o){try{var s=e[i](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,a)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){c(i,r,a,o,s,"next",e)}function s(e){c(i,r,a,o,s,"throw",e)}o(void 0)}))}}var l={init:function(e){var t=this;return d(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.likeButtonContainer,a=e.favoriteRestaurants,i=e.restaurant,t._likeButtonContainer=r,t._favoriteRestaurants=a,t._restaurant=i,n.next=6,t._renderButton();case 6:case"end":return n.stop()}}),n)})))()},_renderButton:function(){var e=this;return d(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e._restaurant.id,t.next=3,e._isRestaurantExist(n);case 3:if(!t.sent){t.next=7;break}e._renderLiked(),t.next=8;break;case 7:e._renderLike();case 8:case"end":return t.stop()}}),t)})))()},_isRestaurantExist:function(e){var t=this;return d(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t._favoriteRestaurants.getRestaurant(e);case 2:return r=n.sent,n.abrupt("return",!!r);case 4:case"end":return n.stop()}}),n)})))()},_renderLike:function(){var e=this;this._likeButtonContainer.innerHTML="";var t=document.createElement("like-button");t.innerHTML='<button aria-label="like this restaurant" id="like__button" class="like__button"> <i class="fas fa-heart" aria-hidden="true"></i></button>',this._likeButtonContainer.appendChild(t),document.querySelector("#like__button").addEventListener("click",d(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._favoriteRestaurants.putRestaurant(e._restaurant);case 2:e._renderButton();case 3:case"end":return t.stop()}}),t)}))))},_renderLiked:function(){var e=this;this._likeButtonContainer.innerHTML="";var t=document.createElement("liked-button");t.innerHTML=' <button aria-label="unlike this restaurant" id="liked__button" class="liked__button">\n    <i class="fas fa-heart" aria-hidden="true"></i>\n  </button>',this._likeButtonContainer.appendChild(t),document.querySelector("#liked__button").addEventListener("click",d(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._favoriteRestaurants.deleteRestaurant(e._restaurant.id);case 2:e._renderButton();case 3:case"end":return t.stop()}}),t)}))))}},_=n(3),v={init:function(e){var t=this,n=e.addReviewButton,r=e.restaurantId,a=e.userNameInput,i=e.userReviewInput,o=e.restaurantReviewsContainer;this._restaurantId=r,this._userNameInput=a,this._userReviewInput=i,this._restaurantReviewsContainer=o,n.addEventListener("click",(function(){t._postReview()}))},_postReview:function(){var e=this;if(0===this._userNameInput.value.length||0===this._userReviewInput.value.length)return this._resetInformation(),void(this._restaurantReviewsContainer.innerHTML='<div class="failed__add__review">Please Fill Name and Review Column</div>'.concat(this._restaurantReviewsContainer.innerHTML));_.a.postReviewOnRestaurant({id:this._restaurantId,name:this._userNameInput.value,review:this._userReviewInput.value}).then((function(t){e._resetInformation(),e._updateRestaurantReviewsContainer(t.customerReviews)})).catch((function(t){console.log(t),e._resetInformation(),e._restaurantReviewsContainer.innerHTML='<div class="failed__add__review">Failed to add review</div>'.concat(e._restaurantReviewsContainer.innerHTML)}))},_updateRestaurantReviewsContainer:function(e){var t=this;this._restaurantReviewsContainer.innerHTML='<div class="success__add__review">Successfully add review</div>',this._userNameInput.value="",this._userReviewInput.value="",e.reverse().map((function(e){t._restaurantReviewsContainer.innerHTML+='<div class="restaurant__review">\n        <div tabIndex="0" class="user__name">'.concat(e.name,'</div>\n        <div tabIndex="0" class="user__review"><p>').concat(e.review.replace(/</g,"&lt;").replace(/>/g,"&gt;"),'</p></div>\n        <div tabIndex="0" class="review__date">').concat(e.date,"</div></div>")})).join(" ")},_resetInformation:function(){var e=document.querySelector(".failed__add__review");null!==e&&this._restaurantReviewsContainer.removeChild(e);var t=document.querySelector(".success__add__review");null!==t&&this._restaurantReviewsContainer.removeChild(t)}}},34:function(e,t,n){"use strict";n.r(t);n(13),n(6),n(14),n(15),n(19),n(20),n(21),n(22),n(23),n(24),n(25),n(26),n(27),n(28),n(29),n(30),n(31),n(32),n(33);var r=n(7),a=n(9),i=new r.a({loader:document.querySelector(".loader"),skipToContentButton:document.getElementById("skip__to__content"),navbar:document.getElementById("navbar"),hero:document.getElementById("hero"),content:document.querySelector("#main__content"),drawer:document.querySelector("#drawer"),drawerButton:document.querySelector("#humberger")});window.addEventListener("hashchange",(function(){i.renderPage()})),window.addEventListener("load",(function(){i.renderPage(),Object(a.a)()}))},4:function(e,t,n){"use strict";var r=n(12),a=n(0);function i(e,t,n,r,a,i,o){try{var s=e[i](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,a)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function s(e){i(o,r,a,s,u,"next",e)}function u(e){i(o,r,a,s,u,"throw",e)}s(void 0)}))}}var s=a.a.DATABASE_NAME,u=a.a.DATABASE_VERSION,c=a.a.OBJECT_STORE_NAME,d=Object(r.a)(s,u,{upgrade:function(e){e.createObjectStore(c,{keyPath:"id"})}}),l={getRestaurant:function(e){return o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,d;case 4:return t.abrupt("return",t.sent.get(c,e));case 5:case"end":return t.stop()}}),t)})))()},getAllRestaurants:function(){return o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d;case 2:return e.abrupt("return",e.sent.getAll(c));case 3:case"end":return e.stop()}}),e)})))()},putRestaurant:function(e){return o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.hasOwnProperty("id")){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,d;case 4:return t.abrupt("return",t.sent.put(c,e));case 5:case"end":return t.stop()}}),t)})))()},deleteRestaurant:function(e){return o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d;case 2:return t.abrupt("return",t.sent.delete(c,e));case 3:case"end":return t.stop()}}),t)})))()}};t.a=l},8:function(e){e.exports=JSON.parse('{"reviews":[{"id":1,"userName":"Dandi Indra Wijaya","rating":5,"picture":"https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80","review":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."},{"id":2,"userName":"Sinta Okta","rating":5,"picture":"https://images.unsplash.com/photo-1532170579297-281918c8ae72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=762&q=80","review":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. "},{"id":3,"userName":"Randy","rating":4.9,"picture":"https://images.unsplash.com/photo-1526667900883-4a817696e7e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80","review":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec."},{"id":4,"userName":"Rachma Angeline","rating":4.8,"picture":"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80","review":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus."}]}')}}]);