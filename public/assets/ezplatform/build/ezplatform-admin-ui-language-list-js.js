(window.webpackJsonp=window.webpackJsonp||[]).push([["ezplatform-admin-ui-language-list-js","ezplatform-admin-ui-content-type-group-list-js","ezplatform-admin-ui-content-type-list-js","ezplatform-admin-ui-object-state-group-list-js","ezplatform-admin-ui-object-state-list-js","ezplatform-admin-ui-role-list-js"],{0:function(t,e,r){t.exports=r("rvQw")},rvQw:function(t,e){function r(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var o;window,(o=window.document).querySelectorAll(".ez-toggle-btn-state").forEach((function(t){var e=r(t.querySelectorAll('.ez-table__cell.ez-table__cell--has-checkbox input[type="checkbox"]')),n=o.querySelector(t.dataset.toggleButtonId);if(n){var i=function(){var t=e.some((function(t){return t.checked}));n.disabled=!t};i(),e.forEach((function(t){return t.addEventListener("change",i,!1)}))}}))}},[[0,"runtime"]]]);