module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/events/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/events/data.json":
/*!************************************!*\
  !*** ./pages/api/events/data.json ***!
  \************************************/
/*! exports provided: events, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"events\\\":[{\\\"id\\\":\\\"1\\\",\\\"name\\\":\\\"Throwback Thursdays with DJ Manny Duke\\\",\\\"slug\\\":\\\"throwback-thursdays-with-dj-manny-duke\\\",\\\"venue\\\":\\\"Horizon Club\\\",\\\"address\\\":\\\"919 3rd Ave New York, New York(NY), 10022\\\",\\\"performers\\\":\\\"DJ Manny Duke\\\",\\\"date\\\":\\\"June 09, 2021\\\",\\\"time\\\":\\\"10:00 PM EST\\\",\\\"description\\\":\\\"Featuring deep cuts, party anthems and remixes nostalgic songs from two of the best decades of music with the very best music from the 90's and 2000's\\\",\\\"image\\\":\\\"/images/sample/event1.jpg\\\"},{\\\"id\\\":\\\"2\\\",\\\"name\\\":\\\"Boom Dance Festival Experience\\\",\\\"slug\\\":\\\"boom-dance-festival-experience\\\",\\\"venue\\\":\\\"Blackjacks\\\",\\\"address\\\":\\\"966 Lexington Ave New York, New York(NY), 10021\\\",\\\"performers\\\":\\\"DJ LUCK & MC NEAT, NICKY BLACKMARKET, DJ NICKY BLACKMARKET, RATPACK\\\",\\\"date\\\":\\\"June 2, 2021\\\",\\\"time\\\":\\\"8:00 PM EST\\\",\\\"description\\\":\\\"It's looking more and more like we will be seeing events return in the summer! To celebrate this we are arranging a festival experience to say good bye to lock down! We will also be celebrating the fact Zoom Dance is one year old!\\\",\\\"image\\\":\\\"/images/sample/event2.jpg\\\"},{\\\"id\\\":\\\"3\\\",\\\"name\\\":\\\"Encore Night Boat Party\\\",\\\"slug\\\":\\\"encore-night-boat-party\\\",\\\"venue\\\":\\\"Encore\\\",\\\"address\\\":\\\"675 Water St New York, New York(NY), 10002\\\",\\\"performers\\\":\\\"Bad Boy Bill\\\",\\\"date\\\":\\\"June 11, 2021\\\",\\\"time\\\":\\\"7:00 PM EST\\\",\\\"description\\\":\\\"Who is ready to party? I mean in the middle of the water, a boat with good music and drinks. If thats you then you have made it to the right place.\\\",\\\"image\\\":\\\"/images/sample/event3.jpg\\\"},{\\\"id\\\":\\\"4\\\",\\\"name\\\":\\\"Jam Concert Live\\\",\\\"slug\\\":\\\"jam-concert-live\\\",\\\"venue\\\":\\\"Club Ozone\\\",\\\"address\\\":\\\"70 W 115th St New York, New York(NY), 10026\\\",\\\"performers\\\":\\\"DJ RNB\\\",\\\"date\\\":\\\"June 20, 2021\\\",\\\"time\\\":\\\"10:00 PM EST\\\",\\\"description\\\":\\\"The most diverse dj on the east coast, DJ RNB team up once again to bring you the next installment in the high energy, Jam Concert Live series!\\\",\\\"image\\\":\\\"/images/sample/event4.jpg\\\"},{\\\"id\\\":\\\"5\\\",\\\"name\\\":\\\"UnMute Rock Festival\\\",\\\"slug\\\":\\\"unmute-rock-festival\\\",\\\"venue\\\":\\\"Studio 54\\\",\\\"address\\\":\\\"55 La Salle St #12K New York, New York(NY), 10027\\\",\\\"performers\\\":\\\"Big Wednesday, Black Pyre, Calling Apollo\\\",\\\"date\\\":\\\"June 30, 2021\\\",\\\"time\\\":\\\"8:00 PM EST\\\",\\\"description\\\":\\\"With bands from around the UK ready to send the roof into orbit, get ready for the loudest Welsh festival: the inaugural UnMute 2021.\\\",\\\"image\\\":\\\"/images/sample/event5.jpg\\\"},{\\\"id\\\":\\\"6\\\",\\\"name\\\":\\\"Soul Kitchen Party\\\",\\\"slug\\\":\\\"soul-kitchen-party\\\",\\\"venue\\\":\\\"Onyx Club\\\",\\\"address\\\":\\\"60 Gramercy Park N #2 New York, New York(NY), 10010\\\",\\\"performers\\\":\\\"A-Trak, Nightmares on Wax, Rakim, Jay Electronica\\\",\\\"date\\\":\\\"July 2, 2021\\\",\\\"time\\\":\\\"8:00 PM EST\\\",\\\"description\\\":\\\"Dope party which features Hip Hop legends, emerging artists and world-class turntablists\\\",\\\"image\\\":\\\"/images/sample/event6.jpg\\\"}]}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9ldmVudHMvZGF0YS5qc29uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/events/data.json\n");

/***/ }),

/***/ "./pages/api/events/index.js":
/*!***********************************!*\
  !*** ./pages/api/events/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst {\n  events\n} = __webpack_require__(/*! ./data.json */ \"./pages/api/events/data.json\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  if (req.method === 'GET') {\n    res.status(200).json(events);\n  } else {\n    res.setHeader('Allow', ['GET']);\n    res.status(405).json({\n      message: `Method ${req.method} not allowed`\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZXZlbnRzL2luZGV4LmpzP2JmZDAiXSwibmFtZXMiOlsiZXZlbnRzIiwicmVxdWlyZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJzZXRIZWFkZXIiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0EsTUFBTTtBQUFFQTtBQUFGLElBQWFDLG1CQUFPLENBQUMsaURBQUQsQ0FBMUI7O0FBQ2UsZ0VBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzNCLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQW5CLEVBQTBCO0FBQ3hCRCxPQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQk4sTUFBckI7QUFDRCxHQUZELE1BRU87QUFDTEcsT0FBRyxDQUFDSSxTQUFKLENBQWMsT0FBZCxFQUF1QixDQUFDLEtBQUQsQ0FBdkI7QUFDQUosT0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDbkJFLGFBQU8sRUFBRyxVQUFTTixHQUFHLENBQUNFLE1BQU87QUFEWCxLQUFyQjtBQUdEO0FBQ0YsQ0FURCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9ldmVudHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuY29uc3QgeyBldmVudHMgfSA9IHJlcXVpcmUoJy4vZGF0YS5qc29uJylcbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihldmVudHMpXG4gIH0gZWxzZSB7XG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCddKVxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHtcbiAgICAgIG1lc3NhZ2U6IGBNZXRob2QgJHtyZXEubWV0aG9kfSBub3QgYWxsb3dlZGBcbiAgICB9KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/events/index.js\n");

/***/ })

/******/ });