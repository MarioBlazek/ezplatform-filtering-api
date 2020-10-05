(window.webpackJsonp=window.webpackJsonp||[]).push([["ezplatform-admin-ui-trash-list-js"],{18:function(e,t,r){r("61Dn"),e.exports=r("cKz5")},"61Dn":function(e,t){function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}!function(e,t,n,a,c,i){var s,l=this,u=t.querySelector("#trash_search_sort_field").value,d=t.querySelector("#trash_search_sort_direction").value,f=t.querySelectorAll(".ez-trash-search-form__range-select"),m=t.querySelector("#trash_search_trashed"),h=t.querySelector('meta[name="CSRF-Token"]').content,p=t.querySelector('meta[name="SiteAccess"]').content,v=t.querySelector('form[name="trash_search"]'),_=t.querySelector("#trash_search_sort_field"),y=t.querySelector("#trash_search_sort_direction"),b=t.querySelector(".ez-trash-search-form__item--creator .ez-trash-search-form__input"),S=t.querySelector(".ez-trash-search-form__item--creator .ez-trash-search-form__user-list"),g=t.querySelector(".ez-btn--reset-creator"),w=t.querySelector("#trash_search_creator"),z=t.querySelectorAll(".ez-table__sort-column"),q=t.querySelectorAll(".btn--open-udw"),L=t.getElementById("react-udw"),E=t.querySelectorAll(".ez-trash-search-form__item--auto-send"),O=i.trans("trash.user_list.error",{},"trash_ui"),A={mode:"range",locale:{rangeSeparator:" - "},formatDate:function(e){return n.helpers.timezone.formatShortDateTime(e,null,n.adminUiConfig.dateFormat.shortDate)}},k=function(){return c.unmountComponentAtNode(L)},C=function(e,t){e.querySelector("#trash_item_restore_location_location").value=t.map((function(e){return e.id})).join(),k(),e.submit()},j=function(){return k()},D=function(e){e.preventDefault();var t=e.target.closest('form[name="trash_item_restore"]'),r=JSON.parse(e.currentTarget.dataset.udwConfig),s=i.trans("restore_under_new_location.title",{},"universal_discovery_widget");c.render(a.createElement(n.modules.UniversalDiscovery,o({onConfirm:C.bind(l,t),onCancel:j,title:s,containersOnly:!0,multiple:!1},r)),L)};q.forEach((function(e){return e.addEventListener("click",D,!1)}));var T=r(t.querySelectorAll('form[name="trash_item_restore"] input[type="checkbox"]')),I=t.querySelector("#trash_item_restore_restore"),P=t.querySelector("#trash_item_restore_location_select_content"),x=t.querySelector("#delete-trash-items"),R=function(){var e=T.every((function(e){return!e.checked})),t=T.some((function(e){return e.checked&&1===parseInt(e.dataset.isParentInTrash,10)}));I&&(I.disabled=e||t),x&&(x.disabled=e),P&&(P.disabled=e)},F=function(e){e.forEach((function(e){var r=t.querySelector('form[name="trash_item_delete"] input[type="checkbox"][value="'.concat(e.value,'"]'));r&&(r.checked=e.checked)}))},N=function(e){F([e.target]),R()},J=function e(r){r.target.closest(".ez-trash-search-form__item--creator")||(b.value="",S.classList.add("ez-trash-search-form__item__user-list--hidden"),t.querySelector("body").removeEventListener("click",e,!1))},M=function(e){var t=JSON.stringify({ViewInput:{identifier:"find-user-by-name-".concat(e),public:!1,ContentQuery:{FacetBuilders:{},SortClauses:{},Query:{FullTextCriterion:"".concat(e,"*"),ContentTypeIdentifierCriterion:b.dataset.contentTypeIdentifiers.split(",")},limit:50,offset:0}}}),r=new Request("/api/ezp/v2/views",{method:"POST",headers:{Accept:"application/vnd.ez.api.View+json; version=1.1","Content-Type":"application/vnd.ez.api.ViewInput+json; version=1.1","X-Siteaccess":p,"X-CSRF-Token":h},body:t,mode:"same-origin",credentials:"same-origin"});fetch(r).then(n.helpers.request.getJsonFromResponse).then(H).catch((function(){return n.helpers.notification.showErrorNotification(O)}))},H=function(e){var r=e.View.Result.searchHits.searchHit.reduce((function(e,t){return e+(r=t.value.Content,'<li data-id="'.concat(r._id,'" data-name="').concat(r.TranslatedName,'" class="ez-trash-search-form__user-item">').concat(r.TranslatedName,"</li>"));var r}),""),n=r?"addEventListener":"removeEventListener";S.innerHTML=r,S.classList.remove("ez-trash-search-form__user-list--hidden"),t.querySelector("body")[n]("click",J,!1)},U=function(e){var t=e.target,r=t.dataset,n=r.field,a=r.direction;_.value=n,t.dataset.direction="ASC"===a?"DESC":"ASC",y.setAttribute("value","DESC"===a?1:0),v.submit()},V=function(e,r,n){var a=n.input.closest(".ez-trash-search-form__range-wrapper");if(2===e.length){var o=B(e[0]),c=B(e[1]),i=(c-o)/86400;t.querySelector(a.dataset.periodSelector).value="P0Y0M".concat(i,"D"),t.querySelector(a.dataset.endSelector).value=c,v.submit()}},B=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()));return t=Math.floor(t.getTime()/1e3)},Z=function(e){e.preventDefault(),"custom_range"!==e.target.value&&v.submit()};!function(){if(t.querySelectorAll(".ez-table__sort-column").forEach((function(e){e.classList.remove("ez-table__sort-column--asc","ez-table__sort-column--desc")})),u){var e=t.querySelector(".ez-table__sort-column--".concat(u));1===parseInt(d)?e.classList.add("ez-table__sort-column--asc"):e.classList.add("ez-table__sort-column--desc")}}(),f.forEach((function(e){var t=e.dataset,r=t.start,n=t.end,a=r&&n?[r,n]:[];flatpickr(e,o(o({},A),{},{onChange:V,defaultDate:a}))})),E.forEach((function(e){return e.addEventListener("change",Z,!1)})),z.forEach((function(e){return e.addEventListener("click",U,!1)})),m.addEventListener("change",(function(e){var r=t.querySelector(e.target.dataset.targetSelector);if("custom_range"!==e.target.value)return t.querySelector(r.dataset.periodSelector).value=e.target.value,t.querySelector(r.dataset.endSelector).value="",r.classList.remove("ez-trash-search-form__range-wrapper--visible"),void v.submit();r.classList.add("ez-trash-search-form__range-wrapper--visible")}),!1),b.addEventListener("keyup",(function(r){var n=r.target.value.trim();e.clearTimeout(s),n.length>2?s=e.setTimeout(M.bind(null,n),200):(S.classList.add("ez-trash-search-form__user-list--hidden"),t.querySelector("body").removeEventListener("click",J,!1))}),!1),S.addEventListener("click",(function(e){w.value=e.target.dataset.id,S.classList.add("ez-trash-search-form__user-list--hidden"),b.value=e.target.dataset.name,b.setAttribute("disabled",!0),t.querySelector("body").removeEventListener("click",J,!1),v.submit()}),!1),g.addEventListener("click",(function(){w.value="",b.value="",b.removeAttribute("disabled")}),!1),F(T),R(),T.forEach((function(e){return e.addEventListener("change",N,!1)}))}(window,window.document,window.eZ,window.React,window.ReactDOM,window.Translator)},cKz5:function(e,t){var r,n,a,o,c,i,s,l,u,d,f,m,h,p,v,_,y,b;window,r=window.document,n=window.React,a=window.ReactDOM,o=window.eZ,c=window.localStorage,i=r.querySelector('meta[name="CSRF-Token"]').content,s=r.querySelector('meta[name="SiteAccess"]').content,l=r.querySelector(".ez-content-tree-container"),u=r.querySelector(".ez-content-tree-container__wrapper"),d=r.querySelector(".ez-btn--toggle-content-tree"),f=l.dataset,m=f.currentLocationPath,h=f.treeRootLocationId,p=window.eZ.helpers.user.getId(),v=null,_=function(){var e=Math.min(window.innerHeight-l.getBoundingClientRect().top,window.innerHeight);u.style.height="".concat(e,"px")},y=function(){v&&cancelAnimationFrame(v),v=requestAnimationFrame(_)},b=function(e,t){var r=JSON.parse(c.getItem("ez-content-tree-expanded"));r instanceof Object||(r={}),r[e]=t,c.setItem("ez-content-tree-expanded",JSON.stringify(r))},a.render(n.createElement(o.modules.ContentTree,{userId:p,currentLocationPath:m,rootLocationId:h,restInfo:{token:i,siteaccess:s}}),u),d.addEventListener("click",(function(){r.activeElement.blur(),l.classList.toggle("ez-content-tree-container--expanded"),l.classList.add("ez-content-tree-container--animate"),d.classList.toggle("ez-btn--content-tree-expanded"),_();var e=l.classList.contains("ez-content-tree-container--expanded");b(p,e),o.helpers.tooltips.hideAll()}),!1),function(e){var t=JSON.parse(c.getItem("ez-content-tree-expanded"));return t&&t[e]}(p)&&(l.classList.add("ez-content-tree-container--expanded"),d.classList.add("ez-btn--content-tree-expanded")),_(),r.addEventListener("scroll",y,{capture:!1,passive:!0}),window.addEventListener("resize",y,{capture:!1,passive:!0})}},[[18,"runtime"]]]);