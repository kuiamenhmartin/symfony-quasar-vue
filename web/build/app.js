/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/assets/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/assets/main.js":
/*!****************************!*\
  !*** ./web/assets/main.js ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (window, Vue, Quasar) {
  var Main = function Main(repLogs) {
    _classCallCheck(this, Main);

    Vue.component('my-page', {
      template: '#my-page',
      data: function data() {
        return {
          model: "",
          url: 'https://preprod.wylog.com',
          opened: true,
          search: ''
        };
      }

    });

    new Vue({
      el: '#q-app',
      data: function data() {
        return {
          version: Quasar.version,
          drawerState: false,
          model: ""
        };
      },
      methods: {
        launch: function launch(url) {
          Quasar.utils.openURL(url);
        }
      }
    });

    console.log(Quasar);

    console.log(Quasar.plugins.Notify.create('hello, how are you?'));
    console.log(Quasar.plugins.Platform.is);
  };

  module.exports = Main;
})(window, Vue, Quasar);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWI0OGI0N2NlYmZlMzkxY2FkZTciLCJ3ZWJwYWNrOi8vLy4vd2ViL2Fzc2V0cy9tYWluLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIlZ1ZSIsIlF1YXNhciIsIk1haW4iLCJyZXBMb2dzIiwiY29tcG9uZW50IiwidGVtcGxhdGUiLCJkYXRhIiwibW9kZWwiLCJ1cmwiLCJvcGVuZWQiLCJzZWFyY2giLCJlbCIsInZlcnNpb24iLCJkcmF3ZXJTdGF0ZSIsIm1ldGhvZHMiLCJsYXVuY2giLCJ1dGlscyIsIm9wZW5VUkwiLCJjb25zb2xlIiwibG9nIiwicGx1Z2lucyIsIk5vdGlmeSIsImNyZWF0ZSIsIlBsYXRmb3JtIiwiaXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVEQSxDQUFDLFVBQVNBLE1BQVQsRUFBaUJDLEdBQWpCLEVBQXNCQyxNQUF0QixFQUE4QjtBQUFBLE1BQ3pCQyxJQUR5QixHQUc3QixjQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ2ZILFFBQUlJLFNBQUosQ0FBYyxTQUFkLEVBQXlCO0FBQ3ZCQyxnQkFBVSxVQURhO0FBRXZCQyxZQUFPLGdCQUFVO0FBQ2YsZUFBTztBQUNMQyxpQkFBTyxFQURGO0FBRUxDLGVBQUssMkJBRkE7QUFHTEMsa0JBQVEsSUFISDtBQUlMQyxrQkFBUTtBQUpILFNBQVA7QUFNRDs7QUFUc0IsS0FBekI7O0FBYUEsUUFBSVYsR0FBSixDQUFRO0FBQ05XLFVBQUksUUFERTtBQUVOTCxZQUFNLGdCQUFZO0FBQ2hCLGVBQU87QUFDTE0sbUJBQVNYLE9BQU9XLE9BRFg7QUFFTEMsdUJBQWEsS0FGUjtBQUdMTixpQkFBUTtBQUhILFNBQVA7QUFLRCxPQVJLO0FBU05PLGVBQVM7QUFDUEMsZ0JBQVEsZ0JBQVVQLEdBQVYsRUFBZTtBQUNyQlAsaUJBQU9lLEtBQVAsQ0FBYUMsT0FBYixDQUFxQlQsR0FBckI7QUFDRDtBQUhNO0FBVEgsS0FBUjs7QUFnQkFVLFlBQVFDLEdBQVIsQ0FBWWxCLE1BQVo7O0FBRUFpQixZQUFRQyxHQUFSLENBQVlsQixPQUFPbUIsT0FBUCxDQUFlQyxNQUFmLENBQXNCQyxNQUF0QixDQUE2QixxQkFBN0IsQ0FBWjtBQUNBSixZQUFRQyxHQUFSLENBQVlsQixPQUFPbUIsT0FBUCxDQUFlRyxRQUFmLENBQXdCQyxFQUFwQztBQUNILEdBckMwQjs7QUF5Qy9CQyxTQUFPQyxPQUFQLEdBQWlCeEIsSUFBakI7QUFFQyxDQTNDRCxFQTJDR0gsTUEzQ0gsRUEyQ1dDLEdBM0NYLEVBMkNnQkMsTUEzQ2hCLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWIvYXNzZXRzL21haW4uanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYWI0OGI0N2NlYmZlMzkxY2FkZTciLCJcbihmdW5jdGlvbih3aW5kb3csIFZ1ZSwgUXVhc2FyKSB7XG5jbGFzcyBNYWluIHtcblxuICBjb25zdHJ1Y3RvcihyZXBMb2dzKSB7XG4gICAgICAgIFZ1ZS5jb21wb25lbnQoJ215LXBhZ2UnLCB7XG4gICAgICAgICAgdGVtcGxhdGU6ICcjbXktcGFnZScsXG4gICAgICAgICAgZGF0YSA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBtb2RlbDogXCJcIixcbiAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9wcmVwcm9kLnd5bG9nLmNvbScsXG4gICAgICAgICAgICAgIG9wZW5lZDogdHJ1ZSxcbiAgICAgICAgICAgICAgc2VhcmNoOiAnJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgICBuZXcgVnVlKHtcbiAgICAgICAgICBlbDogJyNxLWFwcCcsXG4gICAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdmVyc2lvbjogUXVhc2FyLnZlcnNpb24sXG4gICAgICAgICAgICAgIGRyYXdlclN0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgbW9kZWwgOiBcIlwiLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgbGF1bmNoOiBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgICAgICAgIFF1YXNhci51dGlscy5vcGVuVVJMKHVybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc29sZS5sb2coUXVhc2FyKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFF1YXNhci5wbHVnaW5zLk5vdGlmeS5jcmVhdGUoJ2hlbGxvLCBob3cgYXJlIHlvdT8nKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFF1YXNhci5wbHVnaW5zLlBsYXRmb3JtLmlzKTtcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYWluO1xuXG59KSh3aW5kb3csIFZ1ZSwgUXVhc2FyKTtcblxuXG5cblxuICAgIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3dlYi9hc3NldHMvbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=