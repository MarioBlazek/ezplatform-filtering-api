(window.webpackJsonp=window.webpackJsonp||[]).push([["ezplatform-admin-ui-modal-location-trash-js"],{21:function(e,t,r){e.exports=r("4LSH")},"4LSH":function(e,t){function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}!function(e,t){var n=document.querySelector('form[name="location_trash"]'),o=n.querySelector('button[type="submit"]'),i=n.querySelectorAll(".ez-modal__trash-option"),a=n.querySelector('input[name="location_trash[confirm][]"]'),c=function(e){e.disabled=!1,e.classList.remove("disabled")};if(a){n.addEventListener("change",(function(){var e;r(i).every((function(e){var t=r(e.querySelectorAll("input"));return 0===t.length||t.some((function(e){return e.checked}))}))&&a.checked?c(o):((e=o).disabled=!0,e.classList.add("disabled"))}),!1)}else c(o)}(window)}},[[21,"runtime"]]]);