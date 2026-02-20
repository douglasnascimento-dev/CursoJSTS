/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts"
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
(__unused_webpack_module, exports) {

eval("{\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.videoPlayer = void 0;\nclass VideoPlayer {\n    constructor(videoPlayerElements) {\n        this.videoPlayer = videoPlayerElements.videoPlayer;\n        this.playButton = videoPlayerElements.playButton;\n        this.stopButton = videoPlayerElements.stopButton;\n        this.initEvents();\n    }\n    playToggle() {\n        if (this.videoPlayer.paused) {\n            this.videoPlayer.play();\n            this.playButton.innerText = 'Pause';\n        }\n        else {\n            this.videoPlayer.pause();\n            this.playButton.innerText = 'Play';\n        }\n    }\n    stop() {\n    }\n    initEvents() {\n        this.playButton.addEventListener('click', () => {\n            this.playToggle();\n        });\n        this.stopButton.addEventListener('click', () => {\n            this.videoPlayer.pause();\n            this.videoPlayer.currentTime = 0;\n            this.playButton.innerText = 'Play';\n        });\n    }\n}\nexports[\"default\"] = VideoPlayer;\nexports.videoPlayer = new VideoPlayer({\n    videoPlayer: document.querySelector('.video'),\n    playButton: document.querySelector('.play'),\n    stopButton: document.querySelector('.stop'),\n});\n\n\n//# sourceURL=webpack://modulo18/./src/index.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0,__webpack_exports__);
/******/ 	
/******/ })()
;