"use strict";function _classCallCheck(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(r,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}function _createClass(r,e,t){return e&&_defineProperties(r.prototype,e),t&&_defineProperties(r,t),r}function _typeof(r){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}!function(t){var a={};function s(r){if(a[r])return a[r].exports;var e=a[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=a,s.d=function(r,e,t){s.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},s.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"==_typeof(e)&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)s.d(t,a,function(r){return e[r]}.bind(null,a));return t},s.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return s.d(e,"a",e),e},s.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},s.p="",s(s.s=0)}([function(r,e,t){t(1),r.exports=t(2)},function(r,e){$("#headbigsliderowl").owlCarousel({loop:!0,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:1500,autoplayHoverPause:!1,items:1,margin:0,autoWidth:!1}),$("#sitefeaturesiconsowl").owlCarousel({loop:!1,nav:!1,dots:!1,autoplay:!1,autoplayTimeout:1500,autoplayHoverPause:!1,items:6,margin:0,autoWidth:!1}),$("#sitefeaturesboxsowl").owlCarousel({loop:!1,nav:!1,dots:!1,autoplay:!1,autoplayTimeout:1500,autoplayHoverPause:!1,items:3,margin:45,autoWidth:!1})},function(r,e){var t={tr:{NameAlert:"En Az 2 Karakter",SurnameAlert:"En Az 2 Karakter",PhoneAlert:"Hatalı Format",EmailAlert:"Hatalı Format",Min10Character:"En Az 10 Karakter",PleaseChoose:"Lütfen Seçiniz",MessageAlert:"En Az 10 Karakter",MessageCharacterOutAlert:"En Fazla 2000 Karakter",PasswordAlert:"En Az 8 Karakter",RePasswordAlert:"Şifreler Uyuşmuyor",IdentityNoAlert:"11 Karakter Giriniz",DateSelectAlert:"Tarih Seçiniz"},en:{NameAlert:"En Az 2 Karakter",SurnameAlert:"En Az 2 Karakter",PhoneAlert:"Hatalı Format",EmailAlert:"Hatalı Format",Min10Character:"En Az 10 Karakter",PleaseChoose:"Lütfen Seçiniz",MessageAlert:"En Az 10 Karakter",MessageCharacterOutAlert:"En Fazla 2000 Karakter",PasswordAlert:"En Az 8 Karakter",RePasswordAlert:"Şifreler Uyuşmuyor",IdentityNoAlert:"11 Karakter Giriniz",DateSelectAlert:"Tarih Seçiniz"}},n=function(){function r(){_classCallCheck(this,r)}return _createClass(r,null,[{key:"translate",value:function(r,e){return t.hasOwnProperty(r)&&t[r].hasOwnProperty(e)?t[r][e]:""}}]),r}();window.generalvalidform=new(function(){function r(){_classCallCheck(this,r)}return _createClass(r,[{key:"sendGeneralValidForm",value:function(){}},{key:"setGeneralValidFormErrorMessages",value:function(r,e,t,a){var s=document.getElementById(r);s.innerHTML=e,s.classList.add(t),s.classList.remove(a)}},{key:"setGeneralValidFormErrorInput",value:function(r){document.getElementById(r)}},{key:"setGeneralValidFormErrorIcon",value:function(r,e,t){var a=document.getElementById(r);a.classList.add(e),a.classList.remove(t)}},{key:"verifyContent",value:function(r,e,t,a){var s=document.getElementById(e),o=(document.getElementById(t),document.getElementById(a),s.value.trim());switch(r){case"inputNameProcess":o.length<2?(this.setGeneralValidFormErrorMessages(t,n.translate("tr","NameAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(a,"check","error")),this.setGeneralValidFormErrorInput(e);break;case"inputSurnameProcess":o.length<2?(this.setGeneralValidFormErrorMessages(t,n.translate("tr","SurnameAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(a,"check","error")),this.setGeneralValidFormErrorInput(e);break;case"inputPhoneProcess":o.replace(/\s/g,"").length<11?(this.setGeneralValidFormErrorMessages(t,n.translate("tr","PhoneAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(a,"check","error")),this.setGeneralValidFormErrorInput(e);break;case"inputEmailProcess":/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o)?(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(a,"check","error")):(this.setGeneralValidFormErrorMessages(t,n.translate("tr","EmailAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check")),this.setGeneralValidFormErrorInput(e);break;case"inputMin10CharacterProcess":o.length<10?(this.setGeneralValidFormErrorMessages(t,n.translate("tr","Min10Character"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(a,"check","error")),this.setGeneralValidFormErrorInput(e);break;case"inputIdentityProcess":o.length<11?(this.setGeneralValidFormErrorMessages(t,n.translate("tr","IdentityNoAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(a,"check","error")),this.setGeneralValidFormErrorInput(e);break;case"inputDateSelectProcess":o.length<10?(this.setGeneralValidFormErrorMessages(t,n.translate("tr","DateSelectAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(a,"check","error")),this.setGeneralValidFormErrorInput(e);break;case"selectPleaseChoose":""===o?(this.setGeneralValidFormErrorMessages(t,n.translate("tr","PleaseChoose"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(a,"check","error")),this.setGeneralValidFormErrorInput(e);break;case"textareaMessageProcess":o.length<10?(this.setGeneralValidFormErrorMessages(t,n.translate("tr","MessageAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check")):2e3<=o.length?(this.setGeneralValidFormErrorMessages(t,n.translate("tr","MessageCharacterOutAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(a,"check","error")),this.setGeneralValidFormErrorInput(e);break;case"inputPasswordProcess":o.length<8?(this.setGeneralValidFormErrorMessages(t,n.translate("tr","PasswordAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check")):(this.setGeneralValidFormErrorMessages(t,"","check","error"),this.setGeneralValidFormErrorIcon(a,"check","error")),this.setGeneralValidFormErrorInput(e)}}},{key:"verifyContentErrorDelete",value:function(r,e,t,a){var s=document.getElementById(e),o=(document.getElementById(t),document.getElementById(a),s.value.trim());switch(r){case"inputNameProcess":0===o.length&&(this.setGeneralValidFormErrorMessages(t,n.translate("tr","NameAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check"),this.setGeneralValidFormErrorInput(e));break;case"inputSurameProcess":0===o.length&&(this.setGeneralValidFormErrorMessages(t,n.translate("tr","SurnameAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check"),this.setGeneralValidFormErrorInput(e));break;case"inputPhoneProcess":0===o.length&&(this.setGeneralValidFormErrorMessages(t,n.translate("tr","PhoneAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check"),this.setGeneralValidFormErrorInput(e));break;case"inputEmailProcess":0===o.length&&(this.setGeneralValidFormErrorMessages(t,n.translate("tr","EmailAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check"),this.setGeneralValidFormErrorInput(e));break;case"inputMin10CharacterProcess":o.length<10?(this.setGeneralValidFormErrorMessages(t,n.translate("tr","Min10Character"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check")):(this.setGeneralValidFormErrorMessages(t,n.translate("tr",""),"check","error"),this.setGeneralValidFormErrorIcon(a,"check","error")),this.setGeneralValidFormErrorInput(e);break;case"inputIdentityProcess":0===o.length&&(this.setGeneralValidFormErrorMessages(t,n.translate("tr","IdentityNoAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check"),this.setGeneralValidFormErrorInput(e));break;case"inputDateSelectProcess":0===o.length&&(this.setGeneralValidFormErrorMessages(t,n.translate("tr","DateSelectAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check"),this.setGeneralValidFormErrorInput(e));break;case"selectPleaseChoose":""===o?(this.setGeneralValidFormErrorMessages(t,n.translate("tr","PleaseChoose"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check")):(this.setGeneralValidFormErrorMessages(t,n.translate("tr",""),"check","error"),this.setGeneralValidFormErrorIcon(a,"check","error")),this.setGeneralValidFormErrorInput(e);break;case"textareaMessageProcess":o.length<10?(this.setGeneralValidFormErrorMessages(t,n.translate("tr","MessageAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check")):2e3<=o.length?(this.setGeneralValidFormErrorMessages(t,n.translate("tr","MessageCharacterOutAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check")):(this.setGeneralValidFormErrorMessages(t,n.translate("tr",""),"check","error"),this.setGeneralValidFormErrorIcon(a,"check","error")),this.setGeneralValidFormErrorInput(e);break;case"inputPasswordProcess":0===o.length&&(this.setGeneralValidFormErrorMessages(t,n.translate("tr","PasswordAlert"),"error","check"),this.setGeneralValidFormErrorIcon(a,"error","check"),this.setGeneralValidFormErrorInput(e))}}}]),r}())}]);