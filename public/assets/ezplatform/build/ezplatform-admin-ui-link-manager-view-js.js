(window.webpackJsonp=window.webpackJsonp||[]).push([["ezplatform-admin-ui-link-manager-view-js"],{26:function(e,n,t){e.exports=t("s7Kb")},s7Kb:function(e,n){var t,o,r,i,a,c,u;window,t=window.document,o=window.jQuery,r=window.eZ,i=window.Translator,a=window.Routing,c=r.helpers.notification.showErrorNotification,u=function(e){var n=t.querySelector("form.ez-edit-content-form"),u=n.name,d=e.currentTarget.dataset,s=d.contentId,l=d.versionNo,f=d.languageCode,m=n.querySelector('input[name="'.concat(u,'[content_info]"]')),w=n.querySelector('input[name="'.concat(u,'[version_info][content_info]"]')),p=n.querySelector('input[name="'.concat(u,'[version_info][version_no]"]')),v=n.querySelector("#".concat(u,"_language_").concat(f)),h=a.generate("ezplatform.version_draft.has_no_conflict",{contentId:s,languageCode:f}),g=a.generate("ezplatform.content.check_edit_permission",{contentId:s,languageCode:f}),_=i.trans("content.edit.permission.error",{},"content"),q=function(){m.value=s,w.value=s,p.value=void 0!==l?l:null,v.checked=!0,n.submit()},y=function(){q(),o("#version-draft-conflict-modal").modal("hide")},S=function(e){var n=t.querySelector(".ez-modal-wrapper");n.innerHTML=e;var r=n.querySelector(".ez-btn--add-draft");r&&r.addEventListener("click",y,!1),n.querySelectorAll(".ez-btn--prevented").forEach((function(e){return e.addEventListener("click",(function(e){return e.preventDefault()}),!1)})),o("#version-draft-conflict-modal").modal("show")};e.preventDefault(),fetch(g,{mode:"same-origin",credentials:"same-origin"}).then(r.helpers.request.getJsonFromResponse).then((function(e){if(e.canEdit)return fetch(h,{mode:"same-origin",credentials:"same-origin"});throw new Error(_)})).then((function(e){409===e.status?e.text().then(S):403===e.status?e.text().then(c):200===e.status&&q()})).catch(c)},t.querySelectorAll(".ez-btn--content-edit").forEach((function(e){return e.addEventListener("click",u,!1)}))}},[[26,"runtime"]]]);