/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/


var state = {
  currentStyle: "css/page1.css",
  styles: {
    "Styl 1": "css/page1.css",
    "Styl 2": "css/page2.css",
    "Styl 3": "css/page3.css"
  }
};
var updateStyle = function updateStyle(styleName) {
  var styleLink = document.getElementById("theme-style");
  if (styleLink) {
    styleLink.href = state.styles[styleName];
    state.currentStyle = state.styles[styleName];
  }
};
var generateStyleLinks = function generateStyleLinks() {
  var container = document.getElementById("style-links-container");
  if (container) {
    container.innerHTML = "";
    Object.keys(state.styles).forEach(function (styleName) {
      var link = document.createElement("a");
      link.textContent = styleName;
      link.href = "#";
      link.onclick = function (e) {
        e.preventDefault();
        updateStyle(styleName);
      };
      container.appendChild(link);
    });
  }
};
document.addEventListener("DOMContentLoaded", function () {
  generateStyleLinks();
});
/******/ })()
;