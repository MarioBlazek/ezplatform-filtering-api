(window.webpackJsonp=window.webpackJsonp||[]).push([["ezplatform-admin-ui-url-management-js"],{36:function(t,e,r){r("KuNv"),r("rvQw"),t.exports=r("h0Uf")},KuNv:function(t,e){var r,n;r=window,window.document,(n=window.jQuery)('.ez-tabs a[href="#'.concat(r.location.hash.split("#")[1],'"]')).tab("show"),n(".ez-tabs a").on("shown.bs.tab",(function(t){r.location.hash="".concat(t.target.hash,"#tab")}))},h0Uf:function(t,e){function r(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}!function(t,e){var n=window.document.querySelector("#create-wildcards-modal");if(n){var o=n.querySelectorAll('[data-dismiss="modal"]'),a=n.querySelector('[type="submit"]'),i=r(n.querySelectorAll('[required="required"]')),c=n.querySelectorAll(".ez-field-edit--ezboolean input"),u=function(){var t=i.some((function(t){return 0===t.value.trim().length}));a[t?"setAttribute":"removeAttribute"]("disabled",!0)},l=function(t){var e=t.target;e.closest(".ez-data-source__label").classList.toggle("is-checked",e.checked)},f=function(){i.forEach((function(t){t.value=""})),u()};i.forEach((function(t){return t.addEventListener("input",u,!1)})),c.forEach((function(t){return t.addEventListener("change",l,!1)})),o.forEach((function(t){return t.addEventListener("click",f,!1)}))}}(window)},rvQw:function(t,e){function r(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var o;window,(o=window.document).querySelectorAll(".ez-toggle-btn-state").forEach((function(t){var e=r(t.querySelectorAll('.ez-table__cell.ez-table__cell--has-checkbox input[type="checkbox"]')),n=o.querySelector(t.dataset.toggleButtonId);if(n){var a=function(){var t=e.some((function(t){return t.checked}));n.disabled=!t};a(),e.forEach((function(t){return t.addEventListener("change",a,!1)}))}}))}},[[36,"runtime"]]]);