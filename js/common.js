(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var vh=.01*window.innerHeight;function mainLoaded(){document.querySelectorAll("iframe");var e=document.querySelector("html");console.log(e),imagesLoaded(e,function(){console.log("all images are loaded"),setTimeout(function(){e.classList.add("loaded")},1e3)})}function headerToggle(){var e=document.querySelector(".burger"),t=document.querySelector(".header"),n=!1;e.innerHTML="<span></span><span></span><span></span>",e.addEventListener("click",function(){(n=!n)?t.classList.add("active"):t.classList.remove("active")})}function scrollTop(){var e=document.querySelector("body"),t=document.createElement("span");t.className="topbtn",t.addEventListener("click",function(){window.scrollTo(0,0)}),e.appendChild(t)}document.documentElement.style.setProperty("--vh","".concat(vh,"px")),mainLoaded(),headerToggle(),scrollTop();var aSkip=document.querySelectorAll("#a_skip a"),header=document.querySelector(".header"),last=document.querySelector(".menu-item.last");function reveal(){var e=document.querySelectorAll(".reveal");e.forEach(function(e){e.classList.add("loadin")});for(var t=0;t<e.length;t++){var n=window.innerHeight;e[t].getBoundingClientRect().top<=n-150?e[t].classList.add("loaded"):e[t].classList.remove("loaded")}}aSkip.forEach(function(e){e.addEventListener("focus",function(t){"nav"==e.href.split("#")[1]?header.classList.add("active"):"content"==e.href.split("#")[1]&&header.classList.remove("active")}),e.addEventListener("focusout",function(t){"content"==e.href.split("#")[1]&&header.classList.remove("active")})}),last.addEventListener("focusout",function(e){header.classList.remove("active")}),reveal(),window.addEventListener("scroll",function(){reveal()});

},{}]},{},[1]);
