/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _view = __webpack_require__(1);

	var _view2 = _interopRequireDefault(_view);

	var _fireBaseStore = __webpack_require__(3);

	var _fireBaseStore2 = _interopRequireDefault(_fireBaseStore);

	var _template = __webpack_require__(5);

	var _template2 = _interopRequireDefault(_template);

	var _toDoItem = __webpack_require__(4);

	var _toDoItem2 = _interopRequireDefault(_toDoItem);

	var _helpers = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var todoInput = (0, _helpers.qs)('.todo-input');
	var todoItemBox = (0, _helpers.qs)('.todo-item-box');

	var store = new _fireBaseStore2.default();
	var template = new _template2.default();
	//const view = new View(template);
	//const controller = new Controller(view, store);
	//controller.update();

	// Initialize Firebase
	var todoRender = function todoRender(todoList) {
	    todoItemBox.innerHTML = template.makeItemList(todoList);
	};

	(0, _helpers.$on)(todoInput, 'change', function (e) {
	    var todo = e.target.value.trim();
	    e.target.value = '';
	    addItem(todo);
	});

	var addItem = function addItem(todo) {
	    if (todo) {
	        store.addItem(todo);
	    }
	};

	var updateStore = function updateStore(items) {
	    var todoList = [];
	    for (var id in items) {
	        todoList.push(items[id]);
	    }
	    todoRender(todoList);
	};

	var log = function log(event) {
	    return function (o) {
	        console.log(event);
	        console.log(o);
	    };
	};
	store.on('todo/', 'value', updateStore);
	store.on('todo/', 'child_added', log('child_added'));
	store.on('todo/', 'child_changed', log('child_changed'));
	store.on('todo/', 'child_removed', log('child_removed'));
	//store.onValue(updateStore());

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _helpers = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ENTER = 13;

	var View = function View(template) {
	    var _this = this;

	    _classCallCheck(this, View);

	    this.renderTodo = function (itemList) {
	        _this.$totoItemBox.innerHTML = _this.template.makeItemList(itemList);
	    };

	    this.template = template;
	    this.$todoInput = (0, _helpers.qs)('.todo-input');
	    this.$todoInput.addEventListener('change', function (e) {
	        console.log('change');
	    });
	    this.$totoItemBox = (0, _helpers.qs)('.todo-item-box');
	};

	exports.default = View;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.qs = qs;
	exports.$on = $on;
	function qs(selector, scope) {
	    return (scope || document).querySelector(selector);
	}

	function $on(target, type, callback, capture) {
	    target.addEventListener(type, callback, !!capture);
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toDoItem = __webpack_require__(4);

	var _toDoItem2 = _interopRequireDefault(_toDoItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var config = {
	    apiKey: "AIzaSyBna5qqyCXl0ozTj9_CrEOFXygThsjb8Fg",
	    authDomain: "flickering-inferno-1056.firebaseapp.com",
	    databaseURL: "https://flickering-inferno-1056.firebaseio.com",
	    storageBucket: "flickering-inferno-1056.appspot.com",
	    messagingSenderId: "865509601909"
	};

	var FireBaseStore = function FireBaseStore() {
	    var _this = this;

	    _classCallCheck(this, FireBaseStore);

	    this.on = function (ref, event, callback) {
	        firebase.database().ref(ref).on(event, function (r) {
	            return callback(r.val());
	        });
	    };

	    this.addItem = function (todo, handle) {
	        var key = _this.database.ref().child('todo').push().key;
	        _this.database.ref('todo/' + key).set(new _toDoItem2.default(key, todo)).then(function () {
	            if (handle) handle();
	        });
	    };

	    firebase.initializeApp(config);
	    this.database = firebase.database();
	};

	exports.default = FireBaseStore;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ToDoItem = function ToDoItem(id, todo) {
	    _classCallCheck(this, ToDoItem);

	    this.id = id;
	    this.createAt = new Date().getTime();
	    this.todo = todo;
	};

	exports.default = ToDoItem;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Template = function Template() {
	    var _this = this;

	    _classCallCheck(this, Template);

	    this.makeItemList = function (itemList) {
	        return itemList.reduce(function (a, item) {
	            return a + _this.templateMaker(item);
	        }, '');
	    };

	    this.templateMaker = function (item) {
	        return '<tr data-id=\'' + item.id + '\' class="todo-item">\n                    <td>' + item.todo + '</td>\n                </tr>';
	    };
	};

	exports.default = Template;

/***/ }
/******/ ]);