webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _smoothstate = __webpack_require__(2);

	var _smoothstate2 = _interopRequireDefault(_smoothstate);

	var _about = __webpack_require__(3);

	var _about2 = _interopRequireDefault(_about);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(4);

	(function ($) {
	  'use strict';

	  $('#wrapper').smoothState({
	    onStart: {
	      // Set the duration of our animation
	      duration: 300,
	      // Alterations to the page
	      render: function render() {
	        // Quickly toggles a class and restarts css animations
	        content.toggleAnimationClass('is-exiting');
	        // Scroll user to the top
	        $('body, html').animate({ 'scrollTop': 0 });
	      }
	    }
	  }).data('smoothState'); // makes public methods available

	  function init() {
	    $('header').removeClass('header-transition');
	  }
	  init();

	  $(window).scroll(function () {
	    if ($(window).scrollTop() > 0) {
	      if (!$('header').hasClass('header-transition')) $('header').delay(200).addClass('header-transition');
	    } else {
	      $('header').removeClass('header-transition');
	    }
	  });
	})(_jquery2.default);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function ($) {
	  'use strict';
	}(_jquery2.default);

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);