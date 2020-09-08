(window.webpackJsonp=window.webpackJsonp||[]).push([["ezplatform-admin-ui-content-tree-js"],{35:function(e,t,n){e.exports=n("ATD6")},ATD6:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Y}));var r=n("cDcd"),i=n.n(r),o=n("rf6O"),a=n.n(o),s=n("uHg5");function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var i=y(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o=p(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).toggleExpandedState=t.toggleExpandedState.bind(b(t)),t.cancelLoadingState=t.cancelLoadingState.bind(b(t)),t.loadMoreSubitems=t.loadMoreSubitems.bind(b(t)),t.handleAfterExpandedStateChange=t.handleAfterExpandedStateChange.bind(b(t)),t.sortedActions=t.getSortedActions(),t.state={isExpanded:!!e.subitems.length,isLoading:!1},t}return t=a,(n=[{key:"getSortedActions",value:function(){var e=window.eZ.adminUiConfig.contentTreeWidget.itemActions;return(e?l(e):[]).sort((function(e,t){return t.priority-e.priority}))}},{key:"cancelLoadingState",value:function(){this.setState((function(){return{isLoading:!1}}))}},{key:"toggleExpandedState",value:function(){var e=this,t=this.props,n=t.path,r=t.treeMaxDepth;if(n.split(",").length-1>=r){var i=Translator.trans("expand_item.limit.message",{},"content_tree");window.eZ.helpers.notification.showWarningNotification(i)}else this.setState((function(e){return{isExpanded:!e.isExpanded}}),(function(){var t=e.props;(0,t.afterItemToggle)(t.path,e.state.isExpanded),e.handleAfterExpandedStateChange()}))}},{key:"handleAfterExpandedStateChange",value:function(){this.state.isExpanded&&!this.props.subitems.length&&this.loadMoreSubitems()}},{key:"loadMoreSubitems",value:function(){var e=this,t=this.props,n=t.subitems,r=t.subitemsLimit,i=n.length>=r;if(!this.state.isLoading&&!i){var o=this.props,a=o.path,s=o.locationId,u=o.subitemsLoadLimit,c=o.loadMoreSubitems;this.setState((function(){return{isLoading:!0}}),(function(){return c({path:a,parentLocationId:s,offset:n.length,limit:u},e.cancelLoadingState)}))}}},{key:"checkCanLoadMore",value:function(){var e=this.props,t=e.subitems,n=e.totalSubitemsCount;return t.length<n}},{key:"renderIcon",value:function(){var e=this.props,t=e.contentTypeIdentifier,n=e.selected,r=e.locationId,o={extraClasses:"ez-icon--small ez-icon--".concat(n?"light":"dark")};return!this.state.isLoading||this.props.subitems.length?o.customPath=1===r?eZ.helpers.contentType.getContentTypeIconUrl("folder"):eZ.helpers.contentType.getContentTypeIconUrl(t)||eZ.helpers.contentType.getContentTypeIconUrl("file"):(o.name="spinner",o.extraClasses="".concat(o.extraClasses," ez-spin")),i.a.createElement("span",{className:"c-list-item__icon"},i.a.createElement(s.a,o))}},{key:"renderLoadMoreBtn",value:function(){var e=this.props,t=e.subitems,n=e.subitemsLimit,r=t.length>=n;if(!this.state.isExpanded||r||!this.checkCanLoadMore()||!t.length)return null;var o=this.state.isLoading,a=Translator.trans("show_more",{},"content_tree"),u=Translator.trans("loading_more",{},"content_tree"),c=o?u:a,l=null;return o&&(l=i.a.createElement(s.a,{name:"spinner",extraClasses:"ez-spin ez-icon--small c-list-item__load-more-btn-spinner"})),i.a.createElement("button",{type:"button",className:"c-list-item__load-more-btn btn ez-btn",onClick:this.loadMoreSubitems},l," ",c)}},{key:"renderSubitemsLimitReachedInfo",value:function(){var e=this.props,t=e.subitems,n=e.subitemsLimit,r=t.length>=n;if(!this.state.isExpanded||!r)return null;var o=Translator.trans("show_more.limit_reached",{},"content_tree");return i.a.createElement("div",{className:"c-list-item__load-more-limit-info"},o)}},{key:"renderItemLabel",value:function(){var e=this,t=this.props,n=t.totalSubitemsCount,r=t.href,o=t.name,a=t.selected,s=t.locationId,u=t.onClick;if(1===s)return null;var l={className:"c-list-item__toggler",onClick:this.toggleExpandedState,hidden:!n,tabIndex:-1};return a&&(l.className="".concat(l.className," ").concat("c-list-item__toggler","--light")),i.a.createElement("div",{className:"c-list-item__label"},i.a.createElement("span",l),i.a.createElement("a",{className:"c-list-item__link",href:r,onClick:u},this.renderIcon()," ",o),this.sortedActions.map((function(t){var n=t.component;return i.a.createElement(n,c({key:t.id},e.props))})))}},{key:"render",value:function(){var e=this.props,t=e.totalSubitemsCount,n=e.children,r=e.isInvisible,o=e.selected,a={className:"c-list-item"};return t&&(a.className="".concat(a.className," ").concat("c-list-item","--has-sub-items")),this.checkCanLoadMore()&&(a.className="".concat(a.className," ").concat("c-list-item","--can-load-more")),this.state.isExpanded&&(a.className="".concat(a.className," ").concat("c-list-item","--is-expanded")),r&&(a.className="".concat(a.className," ").concat("c-list-item","--is-hidden")),o&&(a.className="".concat(a.className," ").concat("c-list-item","--is-selected")),this.props.isRootItem&&(a.className="".concat(a.className," ").concat("c-list-item","--is-root-item")),i.a.createElement("li",a,this.renderItemLabel(),n,this.renderLoadMoreBtn(),this.renderSubitemsLimitReachedInfo())}}])&&f(t.prototype,n),r&&f(t,r),a}(r.Component);v.propTypes={path:a.a.string.isRequired,href:a.a.string.isRequired,contentTypeIdentifier:a.a.string.isRequired,totalSubitemsCount:a.a.number.isRequired,subitems:a.a.array.isRequired,children:a.a.element,hidden:a.a.bool.isRequired,isContainer:a.a.bool.isRequired,selected:a.a.bool.isRequired,locationId:a.a.number.isRequired,name:a.a.string.isRequired,isInvisible:a.a.bool.isRequired,loadMoreSubitems:a.a.func.isRequired,subitemsLimit:a.a.number.isRequired,subitemsLoadLimit:a.a.number,treeMaxDepth:a.a.number.isRequired,afterItemToggle:a.a.func.isRequired,isRootItem:a.a.bool.isRequired,onClick:a.a.func},v.defaultProps={hidden:!1,isRootItem:!1,onClick:function(){}};var g=v;function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=function e(t){var n=t.items,r=t.loadMoreSubitems,o=t.currentLocationId,a=t.path,s=t.subitemsLoadLimit,u=t.subitemsLimit,c=t.treeMaxDepth,l=t.afterItemToggle,d=t.isRoot,f=t.onClickItem,m={loadMoreSubitems:r,subitemsLoadLimit:s,subitemsLimit:u,treeMaxDepth:c,afterItemToggle:l,onClickItem:f},p=L(L({},m),{},{currentLocationId:o}),h=m;return i.a.createElement("ul",{className:"c-list"},n.map((function(t){var r=a&&a.length,s=window.Routing.generate("_ez_content_view",{contentId:t.contentId,locationId:t.locationId}),u="".concat(r?a+",":"").concat(t.locationId),c=t.subitems;return i.a.createElement(g,S({},t,h,{key:t.locationId,selected:t.locationId===o,href:s,isRootItem:d,onClick:f.bind(null,t),path:u}),c.length?i.a.createElement(e,S({path:u,items:c,isRoot:!1},p)):function(){var e=n[0],t=e,r=Translator.trans("no_subitems",{},"content_tree");if(d&&t&&(!e.subitems||!e.subitems.length))return i.a.createElement("div",{className:"c-list__no-items-message"},r)}())})))};R.propTypes={path:a.a.string.isRequired,items:a.a.array.isRequired,loadMoreSubitems:a.a.func.isRequired,currentLocationId:a.a.number.isRequired,subitemsLimit:a.a.number.isRequired,subitemsLoadLimit:a.a.number,treeMaxDepth:a.a.number.isRequired,afterItemToggle:a.a.func.isRequired,isRoot:a.a.bool.isRequired,onClickItem:a.a.func},R.defaultProps={isRoot:!1,onClickItem:function(){}};var w=R;function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var i=P(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return _(this,n)}}function _(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,n,r,o=E(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).changeContainerWidth=t.changeContainerWidth.bind(x(t)),t.addWidthChangeListener=t.addWidthChangeListener.bind(x(t)),t.handleResizeEnd=t.handleResizeEnd.bind(x(t)),t._refTreeContainer=i.a.createRef(),t.state={resizeStartPositionX:0,containerWidth:0,resizedContainerWidth:0,isResizing:!1},t}return t=a,(n=[{key:"componentWillUnmount",value:function(){this.clearDocumentResizingListeners()}},{key:"componentDidUpdate",value:function(e){this.state.containerWidth!==e.containerWidth&&document.body.dispatchEvent(new CustomEvent("ez-content-tree-resized"))}},{key:"changeContainerWidth",value:function(e){var t=e.clientX;this.setState((function(e){return{resizedContainerWidth:e.containerWidth+(t-e.resizeStartPositionX)}}))}},{key:"addWidthChangeListener",value:function(e){var t=e.nativeEvent.clientX,n=this._refTreeContainer.current.getBoundingClientRect().width;window.document.addEventListener("mousemove",this.changeContainerWidth,!1),window.document.addEventListener("mouseup",this.handleResizeEnd,!1),window.document.body.classList.add("ez-is-tree-resizing"),this.setState((function(){return{resizeStartPositionX:t,containerWidth:n,isResizing:!0}}))}},{key:"handleResizeEnd",value:function(){this.clearDocumentResizingListeners(),this.setState((function(e){return{resizeStartPositionX:0,containerWidth:e.resizedContainerWidth,isResizing:!1}}))}},{key:"clearDocumentResizingListeners",value:function(){window.document.removeEventListener("mousemove",this.changeContainerWidth),window.document.removeEventListener("mouseup",this.handleResizeEnd),window.document.body.classList.remove("ez-is-tree-resizing")}},{key:"renderCollapseAllBtn",value:function(){var e=Translator.trans("collapse_all",{},"content_tree");return i.a.createElement("div",{tabIndex:-1,className:"m-tree__collapse-all-btn",onClick:this.props.onCollapseAllItems},e)}},{key:"renderList",value:function(){var e=this.props.items;if(e&&e.length){var t=this.props,n=t.loadMoreSubitems,r=t.currentLocationId,o=t.onClickItem,a=t.subitemsLoadLimit,s={items:e,path:"",loadMoreSubitems:n,currentLocationId:r,subitemsLimit:t.subitemsLimit,subitemsLoadLimit:a,treeMaxDepth:t.treeMaxDepth,afterItemToggle:t.afterItemToggle,isRoot:!0,onClickItem:o};return i.a.createElement("div",{className:"m-tree__scrollable-wrapper"},i.a.createElement(w,s))}}},{key:"renderLoadingSpinner",value:function(){var e=this.props.items;if(!e||!e.length)return i.a.createElement("div",{className:"m-tree__loading-spinner"},i.a.createElement(s.a,{name:"spinner",extraClasses:"ez-icon--medium ez-spin"}))}},{key:"render",value:function(){var e=this.state,t=e.isResizing,n=e.containerWidth,r=e.resizedContainerWidth,o=t?r:n,a={className:"m-tree",ref:this._refTreeContainer};return o&&(a.style={width:"".concat(o,"px")}),i.a.createElement("div",a,this.renderList(),this.renderLoadingSpinner(),this.renderCollapseAllBtn(),i.a.createElement("div",{className:"m-tree__resize-handler",onMouseDown:this.addWidthChangeListener}))}}])&&T(t.prototype,n),r&&T(t,r),a}(r.Component);z.propTypes={items:a.a.array.isRequired,loadMoreSubitems:a.a.func.isRequired,currentLocationId:a.a.number.isRequired,subitemsLimit:a.a.number.isRequired,subitemsLoadLimit:a.a.number,treeMaxDepth:a.a.number.isRequired,afterItemToggle:a.a.func.isRequired,onCollapseAllItems:a.a.func.isRequired,onClickItem:a.a.func};var j=n("iRWG"),M=n("Y1Nf"),q=function(e,t){var n=e.token,r=e.siteaccess,i=e.subtree,o=e.sortClause,a=e.sortOrder,s="/api/ezp/v2/location/tree/load-subtree";o&&a&&(s+="?sortClause=".concat(o,"&sortOrder=").concat(a));var u=new Request(s,{method:"POST",mode:"same-origin",credentials:"same-origin",body:JSON.stringify({LoadSubtreeRequest:{"_media-type":"application/vnd.ez.api.ContentTreeLoadSubtreeRequest",nodes:i}}),headers:{Accept:"application/vnd.ez.api.ContentTreeRoot+json","Content-Type":"application/vnd.ez.api.ContentTreeLoadSubtreeRequest+json","X-Siteaccess":r,"X-CSRF-Token":n}});fetch(u).then(j.a).then((function(e){var t=e.ContentTreeRoot.ContentTreeNodeList;return A(t)})).then(t).catch(M.a)},A=function e(t){return t.map((function(t){return N(t),t.subitems=e(t.subitems),t}))},N=function(e){return e.totalSubitemsCount=e.totalChildrenCount,e.subitems=e.children,delete e.totalChildrenCount,delete e.children,delete e.displayLimit,e};function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||U(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=H(e);if(t){var i=H(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return F(this,n)}}function F(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?G(e):t}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(a,e);var t,n,r,o=J(a);function a(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this,e)).setInitialItemsState=t.setInitialItemsState.bind(G(t)),t.loadMoreSubitems=t.loadMoreSubitems.bind(G(t)),t.updateSubtreeAfterItemToggle=t.updateSubtreeAfterItemToggle.bind(G(t)),t.handleCollapseAllItems=t.handleCollapseAllItems.bind(G(t)),t.limitSubitemsInSubtree=t.limitSubitemsInSubtree.bind(G(t)),t.refreshContentTree=t.refreshContentTree.bind(G(t)),t.getLoadSubtreeParams=t.getLoadSubtreeParams.bind(G(t));try{var n=t.readSubtree();t.items=e.preloadedLocations,t.subtree=n||t.generateInitialSubtree(),t.expandCurrentLocationInSubtree(),t.clipTooDeepSubtreeBranches(t.subtree[0],e.treeMaxDepth-1),t.subtree[0].children.forEach(t.limitSubitemsInSubtree),t.saveSubtree()}catch(e){t.items=[],t.subtree=t.generateInitialSubtree(),t.saveSubtree()}return t}return t=a,(n=[{key:"componentDidMount",value:function(){var e=this;if(document.body.addEventListener("ez-content-tree-refresh",this.refreshContentTree,!1),this.items.length)return this.subtree=this.generateSubtree(this.items,!0),void this.saveSubtree();q(this.getLoadSubtreeParams(),(function(t){e.setInitialItemsState(t[0])}))}},{key:"componentDidUpdate",value:function(e){var t=this;e.sort.sortClause===this.props.sort.sortClause&&e.sort.sortOrder===this.props.sort.sortOrder||q(this.getLoadSubtreeParams(),(function(e){t.setInitialItemsState(e[0])}))}},{key:"setInitialItemsState",value:function(e){this.items=[e],this.subtree=this.generateSubtree(this.items,!0),this.saveSubtree(),this.forceUpdate()}},{key:"loadMoreSubitems",value:function(e,t){var n=e.parentLocationId,r=e.offset,i=e.limit,o=e.path;!function(e,t,n){var r=e.siteaccess,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:50,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=new Request("".concat("/api/ezp/v2/location/tree/load-subitems","/").concat(t,"/").concat(i,"/").concat(o),{method:"GET",mode:"same-origin",credentials:"same-origin",headers:{Accept:"application/vnd.ez.api.ContentTreeNode+json","X-Siteaccess":r}});fetch(a).then(j.a).then((function(e){var t=e.ContentTreeNode;return t.children=t.children.map(N),N(t)})).then(n).catch(M.a)}(this.props.restInfo,n,this.updateLocationsStateAfterLoadingMoreItems.bind(this,o,t),i,r)}},{key:"refreshContentTree",value:function(){var e=this;this.items=[],this.forceUpdate(),q(this.getLoadSubtreeParams(),(function(t){e.setInitialItemsState(t[0])}))}},{key:"updateLocationsStateAfterLoadingMoreItems",value:function(e,t,n){var r=this.findItem(this.items,e.split(","));r&&(r.subitems=[].concat(W(r.subitems),W(n.subitems)),this.updateSubtreeAfterLoadMoreItems(e),t(),this.forceUpdate())}},{key:"updateSubtreeAfterLoadMoreItems",value:function(e){var t=this.findItem(this.items,e.split(","));this.updateItemInSubtree(this.subtree[0],t,e.split(",")),this.saveSubtree()}},{key:"updateSubtreeAfterItemToggle",value:function(e,t){var n=this.findItem(this.items,e.split(","));t?this.addItemToSubtree(this.subtree[0],n,e.split(",")):this.removeItemFromSubtree(this.subtree[0],n,e.split(",")),this.saveSubtree(),this.props.afterItemToggle(n,t)}},{key:"addItemToSubtree",value:function(e,t,n){var r=this.findParentSubtree(e,n);if(r){var i=this.props,o=i.subitemsLoadLimit,a=i.subitemsLimit,s=Math.ceil(t.subitems.length/o)*o;r.children.push({"_media-type":"application/vnd.ez.api.ContentTreeLoadSubtreeRequestNode",locationId:t.locationId,limit:Math.min(a,s),offset:0,children:[]})}}},{key:"removeItemFromSubtree",value:function(e,t,n){var r=this.findParentSubtree(e,n);if(r){var i=r.children.findIndex((function(e){return e.locationId===t.locationId}));i>-1&&r.children.splice(i,1)}}},{key:"updateItemInSubtree",value:function(e,t,n){var r=this.findParentSubtree(e,n);if(r){var i=r.children.findIndex((function(e){return e.locationId===t.locationId}));i>-1&&(r.children[i].limit=t.subitems.length)}}},{key:"readSubtree",value:function(){var e=this.props.readSubtree;if("function"==typeof e)return e();var t=this.props,n=t.rootLocationId,r=t.userId,i=localStorage.getItem("ez-content-tree-subtrees"),o=i?JSON.parse(i):null,a=o?o[r]:null,s=a?a[n]:null;return s?JSON.parse(s):null}},{key:"saveSubtree",value:function(){var e=this.props,t=e.rootLocationId,n=e.userId,r=localStorage.getItem("ez-content-tree-subtrees"),i=r?JSON.parse(r):{};i[n]||(i[n]={}),i[n][t]=JSON.stringify(this.subtree),localStorage.setItem("ez-content-tree-subtrees",JSON.stringify(i))}},{key:"findParentSubtree",value:function(e,t){if(!(t.length<2))return t.shift(),t.pop(),t.reduce((function(e,t){return e.children.find((function(e){return e.locationId===parseInt(t,10)}))}),e)}},{key:"expandCurrentLocationInSubtree",value:function(){var e=this.props,t=e.rootLocationId,n=e.currentLocationPath.split("/").filter((function(e){return!!e})),r=n.findIndex((function(e){return parseInt(e,10)===t}));if(-1!==r){var i=n.slice(r-n.length+1),o=i.slice(0,i.length-1);this.expandPathInSubtree(this.subtree[0],o)}}},{key:"expandPathInSubtree",value:function(e,t){if(t.length){var n=parseInt(t[0],10),r=e.children.find((function(e){return e.locationId===n}));r||(r={"_media-type":"application/vnd.ez.api.ContentTreeLoadSubtreeRequestNode",locationId:n,limit:this.props.subitemsLimit,offset:0,children:[]},e.children.push(r)),t.shift(),this.expandPathInSubtree(r,t)}}},{key:"clipTooDeepSubtreeBranches",value:function(e,t){var n=this;t<=0?e.children=[]:e.children.forEach((function(e){return n.clipTooDeepSubtreeBranches(e,t-1)}))}},{key:"limitSubitemsInSubtree",value:function(e){e.limit=Math.min(this.props.subitemsLimit,e.limit),e.children.forEach(this.limitSubitemsInSubtree)}},{key:"generateInitialSubtree",value:function(){return[{"_media-type":"application/vnd.ez.api.ContentTreeLoadSubtreeRequestNode",locationId:this.props.rootLocationId,limit:this.props.subitemsLoadLimit,offset:0,children:[]}]}},{key:"generateSubtree",value:function(e,t){var n,r=[],i=this.props,o=i.subitemsLoadLimit,a=i.subitemsLimit,s=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=U(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}(e);try{for(s.s();!(n=s.n()).done;){var u=n.value,c=u.subitems.length;if(c||t){var l=c?Math.ceil(c/o)*o:o;r.push({"_media-type":"application/vnd.ez.api.ContentTreeLoadSubtreeRequestNode",locationId:u.locationId,limit:Math.min(a,l),offset:0,children:this.generateSubtree(u.subitems,!1)})}}}catch(e){s.e(e)}finally{s.f()}return r}},{key:"findItem",value:function(e,t){var n=1===t.length,r=e.find((function(e){return e.locationId===parseInt(t[0],10)}));return r?n?r:r.hasOwnProperty("subitems")&&Array.isArray(r.subitems)?(t.shift(),this.findItem(r.subitems,t)):null:null}},{key:"getCurrentLocationId",value:function(){var e=this.props.currentLocationPath.split("/").filter((function(e){return!!e})).pop();return parseInt(e,10)}},{key:"handleCollapseAllItems",value:function(){var e=this;this.items=[],this.forceUpdate(),this.subtree=this.generateInitialSubtree(),this.saveSubtree(),q(this.getLoadSubtreeParams(),(function(t){e.setInitialItemsState(t[0])}))}},{key:"getLoadSubtreeParams",value:function(){return{token:this.props.restInfo.token,siteaccess:this.props.restInfo.siteaccess,subtree:this.subtree,sortClause:this.props.sort.sortClause,sortOrder:this.props.sort.sortOrder}}},{key:"render",value:function(){var e=this.props,t=e.onClickItem,n=e.subitemsLimit,r=e.subitemsLoadLimit,o=e.treeMaxDepth,a={items:this.items,currentLocationId:this.getCurrentLocationId(),subitemsLimit:n,subitemsLoadLimit:r,treeMaxDepth:o,loadMoreSubitems:this.loadMoreSubitems,afterItemToggle:this.updateSubtreeAfterItemToggle,onCollapseAllItems:this.handleCollapseAllItems,onClickItem:t};return i.a.createElement(z,a)}}])&&X(t.prototype,n),r&&X(t,r),a}(r.Component);eZ.addConfig("modules.ContentTree",Y),Y.propTypes={rootLocationId:a.a.number.isRequired,currentLocationPath:a.a.number.isRequired,userId:a.a.number.isRequired,preloadedLocations:a.a.arrayOf(a.a.object),subitemsLimit:a.a.number.isRequired,subitemsLoadLimit:a.a.number.isRequired,treeMaxDepth:a.a.number.isRequired,restInfo:a.a.shape({token:a.a.string.isRequired,siteaccess:a.a.string.isRequired}).isRequired,onClickItem:a.a.func,readSubtree:a.a.func,afterItemToggle:a.a.func,sort:a.a.shape({sortClause:a.a.string,sortOrder:a.a.string})},Y.defaultProps={preloadedLocations:[],rootLocationId:window.eZ.adminUiConfig.contentTree.treeRootLocationId,subitemsLimit:window.eZ.adminUiConfig.contentTree.childrenLoadMaxLimit,subitemsLoadLimit:window.eZ.adminUiConfig.contentTree.loadMoreLimit,treeMaxDepth:window.eZ.adminUiConfig.contentTree.treeMaxDepth,afterItemToggle:function(){},sort:{}}},Y1Nf:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=function(e){var t=new CustomEvent("ez-notify",{detail:e});document.body.dispatchEvent(t)},i=function(e){var t=e instanceof Error?e.message:e;r({message:t,label:"error"})}},cDcd:function(e,t){e.exports=React},iRWG:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var r=function(e){if(!e.ok)throw Error(e.statusText);return e},i=function(e){return r(e).json()},o=function(e){return r(e).status}},rf6O:function(e,t){e.exports=PropTypes},uHg5:function(e,t,n){"use strict";var r=n("cDcd"),i=n.n(r),o=n("rf6O"),a=n.n(o),s=function(e){var t=e.customPath?e.customPath:"/bundles/ezplatformadminui/img/ez-icons.svg#".concat(e.name),n="ez-icon";return e.extraClasses&&(n="".concat(n," ").concat(e.extraClasses)),i.a.createElement("svg",{className:n},i.a.createElement("use",{xlinkHref:t}))};s.propTypes={extraClasses:a.a.string,name:a.a.string,customPath:a.a.string},s.defaultProps={customPath:null,name:null,extraClasses:null},t.a=s}},[[35,"runtime"]]]);