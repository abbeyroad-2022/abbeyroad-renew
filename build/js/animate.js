(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var $body=document.querySelector("body"),animatedTextsV1=$body.querySelectorAll(".animated-text.v1"),animatedTextsV2=$body.querySelector(".animated-text.v2");function animateTextV1(){animatedTextsV1.forEach(function(e){var t=e.innerHTML.split("<br>"),a=[];t.forEach(function(e,n){var i=e.split(" "),r=[];i.forEach(function(e){r.push(e.replace(/([^\x00-\x80]|\w|.)/g,"<span class='_text'>$&</span>"))}),a.push(r.map(function(e){return"<div class='_box'>".concat(e,"</div>")}).join("")),n!=t.length-1&&a.push("<br>")}),e.innerHTML=a.join("")});var e=document.querySelectorAll(".animated-text span");(new TimelineMax).delay(2).staggerFrom(e,.2,{alpha:0,y:50,z:0,ease:Linear.easeNone},.05)}function animateTextV2(){animatedTextsV2.style.opacity=1,animatedTextsV2.style.transform="translateY(0px)"}animateTextV1(),animateTextV2();

},{}]},{},[1]);
