(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var list=document.querySelector("#masonry-grid"),items=document.querySelectorAll(".grid-item"),thumbs=document.querySelectorAll(".grid-item a"),videos=document.querySelectorAll(".grid-item a video"),filters=document.querySelectorAll("#grid-filter li"),toggleBtn=document.querySelector(".toggle-btn"),tr=!1;toggleBtn.addEventListener("click",function(e){(tr=!tr)?(e.target.classList.add("on"),document.querySelector("#grid-filter").style.display="block"):(e.target.classList.remove("on"),document.querySelector("#grid-filter").style.display="none")}),imagesLoaded(list,function(){var e=new Masonry(list,{itemSelector:".grid-item",columnWidth:".grid-sizer"});filters.forEach(function(t){t.addEventListener("click",function(t){filters.forEach(function(e){e.classList.remove("on")}),t.target.classList.add("on");var i=t.target.getAttribute("data-category");"*"==i?(items.forEach(function(e){e.style.display="block"}),e.layout()):""!==i?(items.forEach(function(e){e.classList.contains(i)?e.style.display="block":e.style.display="none"}),e.layout()):(items.forEach(function(e){e.style.display="block"}),e.layout())})})}),thumbs.forEach(function(e){var t=e.querySelector("video");t&&(e.addEventListener("mouseenter",function(){t.play()}),e.addEventListener("mouseleave",function(){t.pause(),t.currentTime=0}))});

},{}]},{},[1]);
