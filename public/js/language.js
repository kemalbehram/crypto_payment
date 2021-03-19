(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{40:function(t,e,n){t.exports=n(41)},41:function(t,e,n){Vue.component("confirmation-dialog",n(42).default),new Vue({el:"#app",data:{languages:data.languages,selectedLanguage:data.selectedLanguage,searchPhrase:"",selectedKey:null,translations:[],filteredTranslations:[],newKeyErrorMsg:"",newKeyValueErrorMsg:"",confirmDialog:!1,addNewKey:!1,newKey:"",newKeyValue:""},methods:{highlight:function(t){if(t)return t.replace(/:{1}[\w-]+/gi,(function(t){return"<mark>"+t+"</mark>"}))},changeLanguage:function(t){this.selectedLanguage=t,this.filteredTranslations=this.translations[t],this.searchPhrase="",this.selectedKey=null,this.addNewKey=""},save:function(){var t={translations:this.translations};axios.put(data.routes.update,t).then((function(t){flashBox(t.data.type,t.data.message)}))},saveNewKey:function(){var t=this;this.newKey.length?(this.newKeyErrorMsg="",this.newKeyValue.length?(this.newKeyValueErrorMsg="",_.forEach(this.languages,(function(e){t.translations[e][t.newKey]=t.newKeyValue})),this.save()):this.newKeyValueErrorMsg=data.newKeyValueError):this.newKeyErrorMsg=data.newKeyError},getTranslations:function(){var t=this;axios.get(data.routes.getTranslations).then((function(e){t.translations=e.data,t.filteredTranslations=t.translations[t.selectedLanguage]}))},changeTranslations:function(t,e){this.translations[this.selectedLanguage][t]=e.target.value,this.filteredTranslations[t]=e.target.value},searchTranslations:function(){var t=this,e={};this.searchPhrase.length>0?(_.forEach(this.filteredTranslations,(function(n,a){a&&a.toString().trim().toLowerCase().includes(t.searchPhrase.trim().toLowerCase())&&(e[a]=t.filteredTranslations[a])})),this.filteredTranslations=e):this.filteredTranslations=this.translations[this.selectedLanguage]},sync:function(){var t=this;axios.put(data.routes.sync).then((function(e){flashBox(e.data.type,e.data.message),t.translations=e.data.translations,t.filteredTranslations=t.translations[t.selectedLanguage]}))},add:function(){this.addNewKey=!0},remove:function(){this.confirmDialog=!0},confirmDelete:function(){var t=this;this.confirmDialog=!1,_.forEach(this.languages,(function(e){t.translations[e]=_.omit(t.translations[e],[t.selectedKey])})),this.filteredTranslations=this.translations[this.selectedLanguage],this.selectedKey=null,this.save()},cancelDelete:function(){this.confirmDialog=!1}},mounted:function(){this.getTranslations()},filters:{uppercase:function(t){return t?(t=t.toString()).toUpperCase():""}}})},42:function(t,e,n){"use strict";n.r(e);var a=function(t,e,n,a,s,i,r,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):s&&(l=o?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var h=c.render;c.render=function(t,e){return l.call(e),h(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}({props:["messages"],methods:{onConfirmation:function(){this.$emit("confirm")},conCancellation:function(){this.$emit("cancel")}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flash-message flash-message-active"},[n("div",{staticClass:"centralize-wrapper"},[n("div",{staticClass:"centralize-inner"},[n("div",{staticClass:"centralize-content flash-confirmation"},[n("div",{staticClass:"flash-removable"},[n("button",{staticClass:"close flash-close",attrs:{type:"button","aria-hidden":"true"},on:{click:t.conCancellation}},[t._v("×")]),t._v(" "),n("div",{staticClass:"flash-icon"}),t._v(" "),n("p",[t._v(t._s(t.messages.title))]),t._v(" "),n("a",{staticClass:"hidden-flash-item btn btn-sm btn-info btn-flat",attrs:{href:"javascript:"},on:{click:t.onConfirmation}},[t._v(t._s(t.messages.confirmButtonText))]),t._v(" "),n("a",{staticClass:"hidden-flash-item btn btn-sm btn-warning btn-flat",attrs:{href:"javascript:"},on:{click:t.conCancellation}},[t._v(t._s(t.messages.cancelButtonText))])])])])])])}),[],!1,null,null,null);e.default=a.exports}},[[40,0]]]);