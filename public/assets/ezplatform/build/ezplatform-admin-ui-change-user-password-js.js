(window.webpackJsonp=window.webpackJsonp||[]).push([["ezplatform-admin-ui-change-user-password-js"],{"0i9J":function(e,r){function t(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var o,i,a,u,s,l,c,d,f,m,p;o=window,i=window.document,a=window.eZ,u=i.querySelector('form[name="user_password_change"]'),s=u.querySelectorAll('[type="submit"]:not([formnovalidate])'),l=u.querySelector("#user_password_change_oldPassword"),c=u.querySelector("#user_password_change_newPassword_first"),d=u.querySelector("#user_password_change_newPassword_second"),f=function(e,r,t){var n=e?"add":"remove",o=t.closest(".ez-field"),a=o.querySelector(".ez-field__label-wrapper"),u=a.querySelectorAll(".ez-field__error");o.classList[n]("is-invalid"),t.classList[n]("is-invalid"),u.forEach((function(e){return e.remove()})),e&&a.append(function(e){var r=i.createElement("em");return r.classList.add("ez-field__error"),r.innerHTML=e,r}(r))},m=function(){var e=c.value.trim(),r=d.value.trim(),t=p(c)&&p(d),n=e===r,o=a.errors.notSamePasswords;return n||f(!n,o,d),n&&t},p=function(e){var r=e.required,t=!e.value.trim(),n=r&&t,o=e.closest(".ez-field"),i=a.errors.emptyField.replace("{fieldName}",o.querySelector(".ez-field__label").innerHTML);return f(n,i,e),!n},u.setAttribute("novalidate",!0),s.forEach((function(e){e.dataset.isFormValid=0,e.addEventListener("click",(function(r){parseInt(e.dataset.isFormValid,10)||(r.preventDefault(),t(u.querySelectorAll(".ez-field input[required]")).map(p).every((function(e){return e}))&&m()&&(e.dataset.isFormValid=1,o.setTimeout((function(){return e.click()}),0)))}),!1)})),l.addEventListener("blur",(function(e){return p(e.currentTarget)}),!1),c.addEventListener("blur",(function(e){return p(e.currentTarget)}),!1),d.addEventListener("blur",(function(e){return p(e.currentTarget)}),!1),d.addEventListener("blur",m,!1)},27:function(e,r,t){e.exports=t("0i9J")}},[[27,"runtime"]]]);