(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/board/board.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/board/board.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"palette\">\n  <app-new-note  *ngFor=\"let noteButton of noteButtons\" [noteButtonInformation]=\"noteButton\" ></app-new-note>\n</div>\n<div class=\"canvas\">\n  <app-note\n    *ngFor=\"let note of notes;trackBy: trackByFn\"\n    cdkDrag\n    [cdkDragFreeDragPosition]=\"{x: note.left, y: note.top}\"\n    [note]=\"note\"\n    (deleteNote)=\"deleteNote($event)\"\n    (cdkDragEnded)=\"dragEnd($event)\"\n    [cdkDragData]=\"note\"\n    (updateNote)=\"updateNote($event)\">\n  </app-note>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Scrumbo</h1>\n<h2>A free and easy to use collaborative scrum board</h2>\n<mat-form-field>\n    <form [formGroup]=\"boardForm\" (ngSubmit)=\"onSubmit()\" id=\"boardForm\">\n        <input formControlName=\"name\" matInput type=\"text\" required maxlength=\"30\" placeholder=\"Enter your board name to begin.\" autocomplete=\"off\">\n    </form>\n\n    <ng-container *ngIf=\"boardForm.controls.name.errors?.pattern\">\n        <mat-error>\n            Alpha numberic values only\n        </mat-error>\n    </ng-container>\n    \n    <ng-container *ngIf=\"boardForm.controls.name.errors?.boardNameTaken\">\n        <mat-error>\n            This board name has already been taken\n        </mat-error>\n    </ng-container>\n</mat-form-field>\n\n<button type=\"submit\" mat-raised-button color=\"primary\" form=\"boardForm\"  [disabled]=\"boardForm.invalid\">Submit</button>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/new-note/new-note.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/new-note/new-note.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button [style.background-color]=\"color\" class=\"note-button-container\">\n    <mat-icon aria-hidden=\"false\" aria-label=\"add note button\" class=\"add-note-button\" (click)=\"createNote()\">note_add</mat-icon>\n\n</button>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/note/note.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/note/note.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"note-background\" [ngStyle]=\"noteStyle\">\n    <ng-container *ngIf=\"mode === 'view'; else editMote\" body-1>\n        <mat-icon aria-hidden=\"false\" aria-label=\"close icon\" (click)=\"deleteNoteEmit()\" class=\"close-button\">close</mat-icon>\n        {{ note.body }}\n    </ng-container>\n</div>\n\n<ng-template #editMote>\n    <form [formGroup]=\"noteForm\">\n        <textarea formControlName=\"body\" matInput type=\"text\" class=\"body-1\"></textarea>\n    </form>\n\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _services_board_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/board-resolver.service */ "./src/app/services/board-resolver.service.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");






const appRoutes = [
    {
        path: "",
        component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"],
    },
    {
        path: ":boardUrl",
        component: _components_board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"],
        resolve: {
            board: _services_board_resolver_service__WEBPACK_IMPORTED_MODULE_4__["BoardResolverService"]
        }
    },
    {
        path: '**',
        component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _common_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/material.module */ "./src/app/common/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");
/* harmony import */ var _components_new_note_new_note_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/new-note/new-note.component */ "./src/app/components/new-note/new-note.component.ts");
/* harmony import */ var _components_note_note_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/note/note.component */ "./src/app/components/note/note.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"],
            _components_board_board_component__WEBPACK_IMPORTED_MODULE_11__["BoardComponent"],
            _components_new_note_new_note_component__WEBPACK_IMPORTED_MODULE_12__["NewNoteComponent"],
            _components_note_note_component__WEBPACK_IMPORTED_MODULE_13__["NoteComponent"]
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"].withOptions({
                cookieName: 'csrftoken',
                headerName: 'X-CSRFToken',
            }),
            _common_material_module__WEBPACK_IMPORTED_MODULE_8__["CustomMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/common/material.module.ts ***!
  \*******************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");







let CustomMaterialModule = class CustomMaterialModule {
};
CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
        ],
        exports: [
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
        ]
    })
], CustomMaterialModule);



/***/ }),

/***/ "./src/app/components/board/board.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/board/board.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: grid;\n  grid-template-columns: -webkit-min-content auto;\n  grid-template-columns: min-content auto;\n  grid-template-rows: minmax(500px, 100vh);\n}\n\n.palette {\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  padding: 0 15px 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFsY2Flbi9wZXJzb25hbF9wcm9qZWN0cy9zY3J1bWJvL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSwrQ0FBQTtFQUFBLHVDQUFBO0VBQ0Esd0NBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9hcmQvYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoNTAwcHgsIDEwMHZoKTtcbn1cblxuLnBhbGV0dGUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDE1cHggMCAxNXB4O1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDUwMHB4LCAxMDB2aCk7XG59XG5cbi5wYWxldHRlIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/board/board.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/board/board.component.ts ***!
  \*****************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notes.service */ "./src/app/services/notes.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





const noteButtons = [
    {
        top: 50,
        left: 50,
        color: 'ACC1FF'
    },
    {
        top: 150,
        left: 50,
        color: 'C7EEFF'
    },
    {
        top: 150,
        left: 50,
        color: 'FFAEAE'
    },
    {
        top: 150,
        left: 50,
        color: 'FFEC94'
    },
    {
        top: 150,
        left: 50,
        color: 'B0E57C'
    },
];
let BoardComponent = class BoardComponent {
    constructor(notesService, cd, activatedRoute) {
        this.notesService = notesService;
        this.cd = cd;
        this.activatedRoute = activatedRoute;
        this.notes = [];
        this.noteButtons = [];
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngOnInit() {
        this.noteButtons = noteButtons;
        this.subscriptions.add(this.activatedRoute.paramMap.subscribe((params) => {
            this.notesService.connect(params.get('boardUrl'));
        }));
        this.subscriptions.add(this.notesService.subscribe((event) => {
            switch (event.type) {
                case src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_3__["event_type"].CONNECT:
                    this.notes = event.payload.notes;
                    break;
                case src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_3__["event_type"].DELETE:
                    this.notes = this.notes.filter(note => note.id !== event.payload.id);
                    break;
                case src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_3__["event_type"].ADD:
                    this.notes.push(event.payload.note);
                    break;
                case src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_3__["event_type"].MOVE:
                    this.notes.map((note) => {
                        if (note.id === event.payload.id) {
                            note.top = event.payload.top;
                            note.left = event.payload.left;
                        }
                        return note;
                    });
                    break;
                case src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_3__["event_type"].EDIT:
                    this.notes.map((note) => {
                        if (note.id === event.payload.id) {
                            note.body = event.payload.body;
                        }
                        return note;
                    });
                    break;
            }
            this.cd.markForCheck();
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    deleteNote(noteId) {
        this.notesService.deleteNote(noteId);
    }
    updateNote(note) {
        this.notesService.updateNote(note.id, note.body);
    }
    dragEnd(evt) {
        const newTop = evt.source.data.top + evt.distance.y;
        const newLeft = evt.source.data.left + evt.distance.x;
        this.notesService.moveNote(evt.source.data.id, newTop, newLeft);
    }
    trackByFn(index, note) {
        if (!note) {
            return null;
        }
        else {
            return note.id;
        }
    }
};
BoardComponent.ctorParameters = () => [
    { type: src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_3__["NotesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/board/board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board.component.scss */ "./src/app/components/board/board.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_3__["NotesService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], BoardComponent);



/***/ }),

/***/ "./src/app/components/home-page/home-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\nh1 {\n  font-size: 150px;\n  margin: 0;\n  height: 100px;\n}\n\nmat-form-field {\n  width: 300px;\n}\n\nbutton {\n  margin-top: 10px;\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFsY2Flbi9wZXJzb25hbF9wcm9qZWN0cy9zY3J1bWJvL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDE1MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG5idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxNTBweDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDMwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_board_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/board.service */ "./src/app/services/board.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let HomePageComponent = class HomePageComponent {
    constructor(bs, router) {
        this.bs = bs;
        this.router = router;
        this.boardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9 ]+')
            ], [(value) => this.checkBoardNameTaken(value)])
        });
    }
    onSubmit() {
        this.bs.addBoard(this.boardForm.value.name).subscribe(board => {
            this.router.navigate([board.url_friendly_name]);
        });
    }
    checkBoardNameTaken(control) {
        return this.bs.checkNameNotTaken(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(boardTaken => boardTaken ? { boardNameTaken: true } : null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(() => null));
    }
};
HomePageComponent.ctorParameters = () => [
    { type: src_app_services_board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.scss */ "./src/app/components/home-page/home-page.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], HomePageComponent);



/***/ }),

/***/ "./src/app/components/new-note/new-note.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/new-note/new-note.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  height: 81px;\n  width: 82px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin: 10px 0 10px 0;\n}\n\n.note-button-container {\n  border-radius: 8px;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.note-button-container .mat-icon {\n  position: absolute;\n  font-size: 80px;\n  top: 0px;\n  right: 56px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFsY2Flbi9wZXJzb25hbF9wcm9qZWN0cy9zY3J1bWJvL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9uZXctbm90ZS9uZXctbm90ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uZXctbm90ZS9uZXctbm90ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXctbm90ZS9uZXctbm90ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBoZWlnaHQ6IDgxcHg7XG4gICAgd2lkdGg6IDgycHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xuICBcbn1cblxuLm5vdGUtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAubWF0LWljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHJpZ2h0OiA1NnB4O1xuICAgIH1cbn1cbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiA4MXB4O1xuICB3aWR0aDogODJweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbn1cblxuLm5vdGUtYnV0dG9uLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm5vdGUtYnV0dG9uLWNvbnRhaW5lciAubWF0LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiA1NnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/new-note/new-note.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/new-note/new-note.component.ts ***!
  \***********************************************************/
/*! exports provided: NewNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewNoteComponent", function() { return NewNoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notes.service */ "./src/app/services/notes.service.ts");



let NewNoteComponent = class NewNoteComponent {
    constructor(notesService) {
        this.notesService = notesService;
    }
    ngOnInit() {
        this.color = `#${this.noteButtonInformation.color}`;
    }
    createNote() {
        this.notesService.addNote(this.noteButtonInformation.top, this.noteButtonInformation.left, this.noteButtonInformation.color);
    }
};
NewNoteComponent.ctorParameters = () => [
    { type: src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NewNoteComponent.prototype, "noteButtonInformation", void 0);
NewNoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-note',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-note.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/new-note/new-note.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-note.component.scss */ "./src/app/components/new-note/new-note.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]])
], NewNoteComponent);



/***/ }),

/***/ "./src/app/components/note/note.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/note/note.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 150px;\n  height: 175px;\n  position: fixed;\n}\n:host:not(.cdk-drag-dragging) {\n  transition: 0.3s;\n}\n.note-background {\n  width: 100%;\n  height: 100%;\n  padding: 4px;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n}\n.close-button {\n  position: absolute;\n  top: -11px;\n  left: -10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nform {\n  height: 100%;\n  width: 100%;\n}\ntextarea {\n  outline: none;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  resize: none;\n  padding: 0;\n  border: 0;\n  font-size: 14px;\n  background: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFsY2Flbi9wZXJzb25hbF9wcm9qZWN0cy9zY3J1bWJvL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9ub3RlL25vdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbm90ZS9ub3RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFFQSxlQUFBO0FDREo7QURFSTtFQUNLLGdCQUFBO0FDQVQ7QURLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO0FDRko7QURNQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ0hKO0FETUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0hKO0FETUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25vdGUvbm90ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3Qge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE3NXB4O1xuICAgIFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAmOm5vdCguY2RrLWRyYWctZHJhZ2dpbmcpIHtcbiAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgfVxufVxuXG5cbi5ub3RlLWJhY2tncm91bmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTFweDtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgIFxufSAgIFxuXG5mb3JtIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbnRleHRhcmVhIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNzVweDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuOmhvc3Q6bm90KC5jZGstZHJhZy1kcmFnZ2luZykge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ubm90ZS1iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNHB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xMXB4O1xuICBsZWZ0OiAtMTBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmZvcm0ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZXh0YXJlYSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/note/note.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/note/note.component.ts ***!
  \***************************************************/
/*! exports provided: NoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteComponent", function() { return NoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let NoteComponent = class NoteComponent {
    constructor(elRef) {
        this.elRef = elRef;
        this.noteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500),
                updateOn: 'blur'
            }),
        });
        this.mode = 'view';
        this.editMode = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.editMode$ = this.editMode.asObservable();
        this.deleteNote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateNote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    viewModeHandler() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.elRef.nativeElement, 'dblclick').subscribe(() => {
            if (this.mode !== 'edit') {
                this.mode = 'edit';
                this.editMode.next(true);
            }
        });
    }
    editModeHandler() {
        const clickedOutside$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => this.elRef.nativeElement.contains(event.target) === false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => console.log('clicked outside')));
        this.editMode$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => clickedOutside$)).subscribe(() => {
            this.mode = 'view';
            const updatedNote = Object.assign({}, this.note, { body: this.noteForm.value.body });
            if (this.note.body !== this.noteForm.value.body) {
                this.note.body = this.noteForm.value.body;
                console.log('emitting');
                this.updateNote.emit(updatedNote);
            }
        });
    }
    ngOnInit() {
        this.noteForm.setValue({ body: this.note.body });
        this.noteStyle = this.setStyle();
        this.viewModeHandler();
        this.editModeHandler();
    }
    deleteNoteEmit() {
        this.deleteNote.emit(this.note.id);
    }
    setStyle() {
        let degrees = Math.floor(Math.random() * 4);
        degrees *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
        return {
            'transform': `rotate(${degrees}deg)`,
            'background-color': `#${this.note.color}`
        };
    }
};
NoteComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NoteComponent.prototype, "note", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], NoteComponent.prototype, "deleteNote", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], NoteComponent.prototype, "updateNote", void 0);
NoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-note',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./note.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/note/note.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./note.component.scss */ "./src/app/components/note/note.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], NoteComponent);



/***/ }),

/***/ "./src/app/services/board-resolver.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/board-resolver.service.ts ***!
  \****************************************************/
/*! exports provided: BoardResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardResolverService", function() { return BoardResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board.service */ "./src/app/services/board.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let BoardResolverService = class BoardResolverService {
    constructor(bs, router) {
        this.bs = bs;
        this.router = router;
    }
    resolve(route) {
        let boardUrl = route.paramMap.get('boardUrl');
        return this.bs.getBoard(boardUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(board => {
            if (board) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(board);
            }
            else {
                this.router.navigate(['board-not-found']);
                return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
            }
        }));
    }
};
BoardResolverService.ctorParameters = () => [
    { type: _board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BoardResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], BoardResolverService);



/***/ }),

/***/ "./src/app/services/board.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/board.service.ts ***!
  \*******************************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let BoardService = class BoardService {
    constructor(http) {
        this.http = http;
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.error['status_code']}, ` +
                `body was: ${error.error['detail']}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    }
    ;
    addBoard(boardName) {
        const boardJson = JSON.stringify({ 'name': boardName });
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].httpApiUrl + '/', boardJson, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getBoard(boardUrl) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].httpApiUrl + '/' + boardUrl + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    checkNameNotTaken(boardName) {
        return this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].httpApiUrl + '/' + '?name=' + boardName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(boardAray => !!boardAray.length), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
};
BoardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BoardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], BoardService);



/***/ }),

/***/ "./src/app/services/notes.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/notes.service.ts ***!
  \*******************************************/
/*! exports provided: event_type, NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event_type", function() { return event_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/webSocket */ "./node_modules/rxjs/_esm2015/webSocket/index.js");



const WS_URL = 'ws://127.0.0.1:8000';
var event_type;
(function (event_type) {
    event_type["CONNECT"] = "connect";
    event_type["DELETE"] = "note.delete";
    event_type["ADD"] = "note.add";
    event_type["MOVE"] = "note.move";
    event_type["EDIT"] = "note.edit";
})(event_type || (event_type = {}));
let NotesService = class NotesService {
    constructor() { }
    connect(boardName) {
        this.disconnect();
        this.websocketSubject = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__["webSocket"])(WS_URL + '/' + boardName);
    }
    subscribe(callback) {
        return this.websocketSubject.subscribe(callback);
    }
    disconnect() {
        if (this.websocketSubject) {
            this.websocketSubject.unsubscribe();
        }
        this.websocketSubject = undefined;
    }
    addNote(top, left, color) {
        this.websocketSubject.next({
            type: 'note.add',
            payload: {
                note: {
                    top: top,
                    left: left,
                    body: '',
                    color: color
                }
            }
        });
    }
    deleteNote(noteId) {
        this.websocketSubject.next({
            type: event_type.DELETE,
            payload: {
                id: noteId
            }
        });
    }
    updateNote(noteId, newBody) {
        this.websocketSubject.next({
            type: event_type.EDIT,
            payload: {
                id: noteId,
                body: newBody
            }
        });
    }
    moveNote(noteId, top, left) {
        this.websocketSubject.next({
            type: event_type.MOVE,
            payload: {
                id: noteId,
                top: top,
                left: left
            }
        });
    }
};
NotesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotesService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    httpApiUrl: 'http://127.0.0.1:8000/api/boards',
    wsUrl: 'ws:///127.0.0.1:8000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jbalcaen/personal_projects/scrumbo/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map