"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(t){var o={};function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==_typeof(n)&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(e,n,t){t(1),e.exports=t(2)},function(e,n){$(function(){var e=$("title"),n=(e.text(),$(".headtitle h1").text());$("body").hasClass("home")?$(window).on("load",function(){e.text("NYFX")}):$(window).on("load",function(){e.text(n.toLocaleUpperCase()+" | NYFX")}),$(window).focus(function(){$("body").hasClass("home")?e.text("NYFX"):e.text(n.toLocaleUpperCase()+" | NYFX")}),$(window).blur(function(){e.text("NYFX")})}),$(function(){$("#dfn-navtggle").click(function(){$(".dfn-megamenu").toggleClass("dfn-canvaskapat")}),$(".dfn-mobilemenu-mask").click(function(){$(".dfn-megamenu").removeClass("dfn-canvaskapat")})}),jQuery(function(o){991<o(window).width()?o(window).on("load resize scroll",function(e){var n=o(window).scrollTop(),t=o("header.header");n>t.height()/3?t.addClass("navscroll"):t.removeClass("navscroll")}).on("load resize",function(e){var n=o("header.header");o("header + section").css("min-height",n.height()+"px").css("padding-top",n.height()+"px")}):o(window).on("load resize scroll",function(e){var n=o(window).scrollTop(),t=o("header.header");10<n?t.addClass("navscroll"):t.removeClass("navscroll")})}),$(window).on("load resize",function(e){if(991<$(window).width()){var n=$("header.header .dfn-headnav");$("header.header .dfn-headnav .megamenu-nav").css("width",n.width()+"px"),$("header.header .dfn-headnav .megamultimenu > .megamultimenu-row").css("width",n.width()+"px"),$('.dfn-menu-list-item > a[data-toggle="dropdown"]').click(function(){$(".header-web").addClass("activemenubar"),$(document).click(function(e){$(e.target).hasClass("active")||setTimeout(function(){$(".header-web").removeClass("activemenubar"),$(".dfn-menu-list-item").removeClass("active")},500)})}),$(".dfn-menu-list-item").on("show.bs.dropdown",function(){$(this).find(".dropdown-menu").addClass("fadeIn d-block"),$(".header-web").addClass("activemenubar")}).on("hide.bs.dropdown",function(){$(this).find(".dropdown-menu").removeClass("fadeIn").addClass("fadeOut"),setTimeout(function(){$(".dfn-menu-list-item").find(".dropdown-menu").removeClass("fadeOut d-block")},750)})}}),$(window).on("load resize",function(e){991<$(window).width()&&$(".sitedropdown").on("show.bs.dropdown",function(){$(this).find(".dropdown-menu").removeClass("fadeOut").addClass("fadeIn d-block")}).on("hide.bs.dropdown",function(){$(this).find(".dropdown-menu").removeClass("fadeIn").addClass("fadeOut"),setTimeout(function(){$(".sitedropdown").find(".dropdown-menu").removeClass("fadeOut d-block")},500)})}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),jQuery(document).ready(function(){jQuery(window).scroll(function(){250<jQuery(this).scrollTop()?jQuery(".bottomtotopbutton").fadeIn(300):jQuery(".bottomtotopbutton").fadeOut(300)}),jQuery(".bottomtotopbutton").click(function(e){return e.preventDefault(),jQuery("html,body").animate({scrollTop:0},300),!1})}),$('.siteformui input[type="text"]').keyup(function(e){var n=$(this).val();$(this).val(n.replace(/^(.)|\s(.)/g,function(e){return e.toUpperCase()}))}),jQuery(document).ready(function(){$(".siteformuilabel .labelanimation > .selectclickjsblur").click(function(e){e.preventDefault(),$(this).hide().prev("select.autofill").prop("disabled",!1)})}),$(document).ready(function(){$(".inputphonemask").inputmask({mask:"+99{1,99}",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputgsmphonemask").inputmask({mask:"0599 999 99 99",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputphonemasktr").inputmask({mask:"0999 999 99 99",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputibanmask").inputmask({mask:"TR99 9999 9999 9999 9999 9999 99",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputidentitymask").inputmask({mask:"99999999999",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputdatemask").inputmask({mask:"99/99/9999",placeholder:"MM/DD/YYYY",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputdatedottedmask").inputmask({mask:"99.99.9999",placeholder:"MM.DD.YYYY",showMaskOnFocus:!0,showMaskOnHover:!1}),$(".inputonlytextmask").inputmask({mask:"AAA",placeholder:"",showMaskOnFocus:!0,showMaskOnHover:!1})})},function(e,n){$(window).on("load",function(e){var n={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"UnknownBrowser",this.OS=this.searchString(this.dataOS)||"UnknownOS"},searchString:function(e){for(var n=0;n<e.length;n++){var t=e[n].string,o=e[n].prop;if(this.versionSearchString=e[n].versionSearch||e[n].identity,t){if(-1!=t.indexOf(e[n].subString))return e[n].identity}else if(o)return e[n].identity}},searchVersion:function(e){var n=e.indexOf(this.versionSearchString);if(-1!=n)return parseFloat(e.substring(n+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Edge",identity:"MS Edge"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer"},{string:navigator.userAgent,subString:"Trident",identity:"Explorer"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.userAgent,subString:"Opera",identity:"Opera"},{string:navigator.userAgent,subString:"OPR",identity:"Opera"},{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"Safari",identity:"Safari"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};n.init(),"Chrome"===n.browser?$("html").addClass(n.OS+" Chrome Chrome"+n.version):"Firefox"===n.browser?$("html").addClass(n.OS+" Firefox Firefox"+n.version):"MS Edge"===n.browser?($("html").addClass(n.OS+" Edge Edge"+n.version),$("meta[name=viewport]").remove(),$("head").append('<meta name="viewport" content="width=1440">')):"Explorer"===n.browser&&($("html").addClass(n.OS+" IExplorer IExplorer"+n.version),$("meta[name=viewport]").remove(),$("head").append('<meta name="viewport" content="width=1440">'))})}]);
//# sourceMappingURL=plugin-app.js.map
