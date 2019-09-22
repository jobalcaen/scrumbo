(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _services_board_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/board-resolver.service */ "./src/app/services/board-resolver.service.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");







var appRoutes = [
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
        component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"]
    },
    {
        path: "board-not-found",
        component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
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
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _common_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/material.module */ "./src/app/common/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_board_form_board_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/board-form/board-form.component */ "./src/app/components/board-form/board-form.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");
/* harmony import */ var _components_new_note_new_note_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/new-note/new-note.component */ "./src/app/components/new-note/new-note.component.ts");
/* harmony import */ var _components_note_note_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/note/note.component */ "./src/app/components/note/note.component.ts");
/* harmony import */ var _directives_view_mode_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/view-mode.directive */ "./src/app/directives/view-mode.directive.ts");
/* harmony import */ var _directives_edit_mode_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/edit-mode.directive */ "./src/app/directives/edit-mode.directive.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_board_form_board_form_component__WEBPACK_IMPORTED_MODULE_11__["BoardFormComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"],
                _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__["HomePageComponent"],
                _components_board_board_component__WEBPACK_IMPORTED_MODULE_13__["BoardComponent"],
                _components_new_note_new_note_component__WEBPACK_IMPORTED_MODULE_14__["NewNoteComponent"],
                _components_note_note_component__WEBPACK_IMPORTED_MODULE_15__["NoteComponent"],
                _directives_view_mode_directive__WEBPACK_IMPORTED_MODULE_16__["ViewModeDirective"],
                _directives_edit_mode_directive__WEBPACK_IMPORTED_MODULE_17__["EditModeDirective"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _common_material_module__WEBPACK_IMPORTED_MODULE_9__["CustomMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");







var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
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
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/components/board-form/board-form.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/board-form/board-form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <form [formGroup]=\"boardForm\" (ngSubmit)=\"onSubmit()\" id=\"boardForm\">\n    <input formControlName=\"name\" matInput type=\"text\" required maxlength=\"30\" placeholder=\"Board name\">\n      \n     <mat-error *ngIf=\"boardForm.controls.name.errors?.pattern\">\n        Alpha numberic values only\n      </mat-error>\n    \n      <mat-error *ngIf=\"boardForm.controls.name.errors?.boardNameTaken\">\n        This board name has already been taken\n      </mat-error>\n\n  </form>\n\n</mat-form-field>\n\n<button type=\"submit\" mat-raised-button color=\"primary\" form=\"boardForm\"  [disabled]=\"boardForm.invalid\">Submit</button>\n\n"

/***/ }),

/***/ "./src/app/components/board-form/board-form.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/board-form/board-form.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9hcmQtZm9ybS9ib2FyZC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/board-form/board-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/board-form/board-form.component.ts ***!
  \***************************************************************/
/*! exports provided: BoardFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardFormComponent", function() { return BoardFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/board.service */ "./src/app/services/board.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var BoardFormComponent = /** @class */ (function () {
    function BoardFormComponent(bs, router) {
        var _this = this;
        this.bs = bs;
        this.router = router;
        this.boardForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9 ]+'),
            ], [function (value) { return _this.checkBoardNameTaken(value); }])
        });
        this.isValidBoardName = false;
    }
    BoardFormComponent.prototype.ngOnInit = function () {
    };
    BoardFormComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.boardForm);
        this.bs.addBoard({ 'name': this.boardForm.value.name }).subscribe(function (board) {
            _this.router.navigate([board.url_friendly_name]);
        });
    };
    BoardFormComponent.prototype.checkBoardNameTaken = function (control) {
        return this.bs.checkNameNotTaken(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (boardTaken) { return boardTaken ? { boardNameTaken: true } : null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return null; }));
    };
    BoardFormComponent.prototype.ngOnChanges = function () {
        console.log(this.boardForm.errors);
    };
    BoardFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board-form',
            template: __webpack_require__(/*! ./board-form.component.html */ "./src/app/components/board-form/board-form.component.html"),
            styles: [__webpack_require__(/*! ./board-form.component.scss */ "./src/app/components/board-form/board-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], BoardFormComponent);
    return BoardFormComponent;
}());



/***/ }),

/***/ "./src/app/components/board/board.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/board/board.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <app-new-note  *ngFor=\"let coords of noteCoordinates\" [startCoordinates]=\"coords\" ></app-new-note>\n</div>\n<div class=\"canvas\">\n  <app-note\n    *ngFor=\"let note of notes; trackBy: trackByFn\"\n    cdkDrag\n    [note]=\"note\"\n    (deleteNote)=\"deleteNote($event)\"\n    (cdkDragEnded)=\"dragEnd(note)\"\n    (updateNote)=\"updateNote($event)\">\n  </app-note>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/board/board.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/board/board.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: grid;\n  grid-template-columns: 50px auto;\n  grid-template-rows: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFsY2Flbi9wZXJzb25hbF9wcm9qZWN0cy9zY3J1bWJvL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MDBweDtcbn1cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notes.service */ "./src/app/services/notes.service.ts");
/* harmony import */ var _note_note_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../note/note.component */ "./src/app/components/note/note.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var coordinates = [
    {
        top: 50,
        left: 50
    },
    {
        top: 200,
        left: 200
    }
];
var event_type;
(function (event_type) {
    event_type["CONNECT"] = "connect";
    event_type["DELETE"] = "note.delete";
    event_type["ADD"] = "note.add";
    event_type["MOVE"] = "note.move";
    event_type["EDIT"] = "note.edit";
})(event_type || (event_type = {}));
var BoardComponent = /** @class */ (function () {
    function BoardComponent(notesService, cd) {
        this.notesService = notesService;
        this.cd = cd;
        this.dragPosition = { x: 50, y: 50 };
        this.notes = [];
        this.boardName = window.location.pathname;
        this.noteCoordinates = [];
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noteCoordinates = coordinates;
        this.notesService$ = this.notesService.connect(this.boardName);
        this.notesService$.subscribe(function (event) {
            console.log('event', event);
            switch (event.type) {
                case event_type.CONNECT:
                    _this.notes = event.payload.notes;
                    break;
                case event_type.DELETE:
                    _this.notes = _this.notes.filter(function (note) { return note.id !== event.payload.id; });
                    break;
                case event_type.ADD:
                    _this.notes.push(event.payload.note);
                    break;
                case event_type.MOVE:
                    _this.notes.map(function (note) {
                        if (note.id === event.payload.id) {
                            note.top = event.payload.top;
                            note.left = event.payload.left;
                        }
                        return note;
                    });
                    break;
                case event_type.EDIT:
                    console.log(event.payload.body);
                    _this.notes.map(function (note) {
                        if (note.id === event.payload.id) {
                            note.body = event.payload.body;
                        }
                        console.log('edit note: ', note);
                        return note;
                    });
                    break;
            }
            _this.cd.markForCheck();
        });
        var toGroups = this.notes.map(function (note) {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                body: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](note.body, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
            });
        });
        this.controls = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"](toGroups);
    };
    BoardComponent.prototype.ngOnDestroy = function () {
        this.notesService$.unsubscribe();
    };
    // getControl(index: number) : FormControl {
    //   return this.controls.get(index)
    // }
    BoardComponent.prototype.deleteNote = function (note) {
        this.notesService$.next({
            type: event_type.DELETE,
            payload: {
                id: note.id
            }
        });
    };
    BoardComponent.prototype.updateNote = function (note) {
        console.log('updated body', note.body);
        this.notesService$.next({
            type: event_type.EDIT,
            payload: {
                id: note.id,
                body: note.body
            }
        });
    };
    BoardComponent.prototype.dragEnd = function (note) {
        var _this = this;
        this.noteChildren.forEach(function (noteCmp) {
            if (noteCmp.note.id === note.id) {
                var coortdinates = noteCmp.getClientPosition();
                _this.notesService$.next({
                    type: event_type.MOVE,
                    payload: {
                        id: note.id,
                        top: coortdinates.top,
                        left: coortdinates.left,
                    }
                });
            }
        });
    };
    BoardComponent.prototype.trackByFn = function (note) {
        return note.id;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_note_note_component__WEBPACK_IMPORTED_MODULE_3__["NoteComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], BoardComponent.prototype, "noteChildren", void 0);
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/components/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.scss */ "./src/app/components/board/board.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/home-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Scrumbo</h1>\n<p>A free and easy scrum board</p>\n<app-board-form></app-board-form>\n\n\n"

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/components/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/components/home-page/home-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/components/new-note/new-note.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/new-note/new-note.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"createNote()\">\nCreate note\n</div>\n"

/***/ }),

/***/ "./src/app/components/new-note/new-note.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/new-note/new-note.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background-color: yellow;\n  width: 50px;\n  height: 50px; }\n\ndiv {\n  background-color: yellow; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFsY2Flbi9wZXJzb25hbF9wcm9qZWN0cy9zY3J1bWJvL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9uZXctbm90ZS9uZXctbm90ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXctbm90ZS9uZXctbm90ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG5kaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notes.service */ "./src/app/services/notes.service.ts");



var NewNoteComponent = /** @class */ (function () {
    function NewNoteComponent(notesService) {
        this.notesService = notesService;
        this.boardName = window.location.pathname;
    }
    NewNoteComponent.prototype.ngOnInit = function () {
        this.notesService$ = this.notesService.connect(this.boardName);
        this.notesService$.subscribe();
    };
    NewNoteComponent.prototype.createNote = function () {
        this.notesService$.next({
            type: 'note.add',
            payload: {
                note: {
                    top: this.startCoordinates.top,
                    left: this.startCoordinates.left,
                    body: ''
                }
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewNoteComponent.prototype, "startCoordinates", void 0);
    NewNoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-note',
            template: __webpack_require__(/*! ./new-note.component.html */ "./src/app/components/new-note/new-note.component.html"),
            styles: [__webpack_require__(/*! ./new-note.component.scss */ "./src/app/components/new-note/new-note.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]])
    ], NewNoteComponent);
    return NewNoteComponent;
}());



/***/ }),

/***/ "./src/app/components/note/note.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/note/note.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"mode === 'view'; else editMote\">\n    <mat-icon aria-hidden=\"false\" aria-label=\"close icon\" (click)=\"deleteNoteEmit()\">close</mat-icon>\n\n\n    {{ note.body }}\n</ng-container>\n\n<ng-template #editMote>\n    <form [formGroup]=\"noteForm\">\n        <input formControlName=\"body\" matInput type=\"text\">\n    </form>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/note/note.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/note/note.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  word-wrap: break-word;\n  width: 100px;\n  overflow: scroll;\n  height: 100px;\n  background-color: bisque;\n  position: fixed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYmFsY2Flbi9wZXJzb25hbF9wcm9qZWN0cy9zY3J1bWJvL2Zyb250ZW5kL3NyYy9hcHAvY29tcG9uZW50cy9ub3RlL25vdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25vdGUvbm90ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var NoteComponent = /** @class */ (function () {
    function NoteComponent(elRef, sanitizer, cd) {
        this.elRef = elRef;
        this.sanitizer = sanitizer;
        this.cd = cd;
        this.noteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', {
                validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(500),
                updateOn: 'blur'
            }),
        });
        this.mode = 'view';
        this.editMode = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.editMode$ = this.editMode.asObservable();
        this.deleteNote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateNote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(NoteComponent.prototype, "getPosition", {
        get: function () {
            var transformString = this.sanitizer.bypassSecurityTrustStyle("transform: translate3d(" + this.note.left + "px, " + this.note.top + "px, 0px);");
            return transformString;
        },
        enumerable: true,
        configurable: true
    });
    NoteComponent.prototype.viewModeHandler = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.elRef.nativeElement, 'dblclick').subscribe(function () {
            console.log('edit mode');
            if (_this.mode !== 'edit') {
                _this.mode = 'edit';
                _this.editMode.next(true);
                _this.cd.markForCheck();
            }
        });
    };
    NoteComponent.prototype.editModeHandler = function () {
        var _this = this;
        var clickedOutside$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(document, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return _this.elRef.nativeElement.contains(event.target) === false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])());
        this.editMode$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return clickedOutside$; })).subscribe(function () {
            _this.mode = 'view';
            var updatedNote = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.note, { body: _this.noteForm.value.body });
            if (_this.note.body !== _this.noteForm.value.body) {
                _this.note.body = _this.noteForm.value.body;
                _this.updateNote.emit(updatedNote);
            }
            _this.cd.markForCheck();
        });
    };
    NoteComponent.prototype.ngOnInit = function () {
        this.noteForm.setValue({ body: this.note.body });
        this.viewModeHandler();
        this.editModeHandler();
    };
    NoteComponent.prototype.deleteNoteEmit = function () {
        this.deleteNote.emit(this.note);
    };
    NoteComponent.prototype.getClientPosition = function () {
        return this.elRef.nativeElement.getBoundingClientRect();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NoteComponent.prototype, "note", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoteComponent.prototype, "getPosition", null);
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
            template: __webpack_require__(/*! ./note.component.html */ "./src/app/components/note/note.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./note.component.scss */ "./src/app/components/note/note.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], NoteComponent);
    return NoteComponent;
}());



/***/ }),

/***/ "./src/app/directives/edit-mode.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/edit-mode.directive.ts ***!
  \***************************************************/
/*! exports provided: EditModeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModeDirective", function() { return EditModeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditModeDirective = /** @class */ (function () {
    function EditModeDirective(tpl) {
        this.tpl = tpl;
    }
    EditModeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[editMode]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], EditModeDirective);
    return EditModeDirective;
}());



/***/ }),

/***/ "./src/app/directives/view-mode.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/view-mode.directive.ts ***!
  \***************************************************/
/*! exports provided: ViewModeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModeDirective", function() { return ViewModeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewModeDirective = /** @class */ (function () {
    function ViewModeDirective(tpl) {
        this.tpl = tpl;
    }
    ViewModeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[viewMode]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], ViewModeDirective);
    return ViewModeDirective;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.sass */ "./src/app/pagenotfound/pagenotfound.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board.service */ "./src/app/services/board.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var BoardResolverService = /** @class */ (function () {
    function BoardResolverService(bs, router) {
        this.bs = bs;
        this.router = router;
    }
    BoardResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        var boardUrl = route.paramMap.get('boardUrl');
        return this.bs.getBoard(boardUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (board) {
            if (board) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(board);
            }
            else {
                _this.router.navigate(['board-not-found']);
                return rxjs__WEBPACK_IMPORTED_MODULE_4__["EMPTY"];
            }
        }));
    };
    BoardResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BoardResolverService);
    return BoardResolverService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var BoardService = /** @class */ (function () {
    function BoardService(http) {
        this.http = http;
        this.boardApiUrl = 'http://127.0.0.1:8000/api/boards/';
    }
    BoardService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.error['status_code'] + ", " +
                ("body was: " + error.error['detail']));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    BoardService.prototype.addBoard = function (board) {
        var boardJson = JSON.stringify(board);
        return this.http.post(this.boardApiUrl, boardJson, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    BoardService.prototype.getBoard = function (boardUrl) {
        return this.http.get(this.boardApiUrl + boardUrl + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    BoardService.prototype.checkNameNotTaken = function (boardName) {
        console.log('checkEmailNotTaken: ', boardName);
        return this.http
            .get(this.boardApiUrl + '?name=' + boardName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (boardAray) { return !!boardAray.length; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    BoardService.prototype.getNotes = function (boardUrl) {
        return this.http.get(this.boardApiUrl + boardUrl + '/notes/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    BoardService.prototype.createNote = function (boardUrl, body) {
        var boardJson = JSON.stringify(body);
        return this.http.post(this.boardApiUrl + boardUrl + '/notes/', { "body": body }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    BoardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BoardService);
    return BoardService;
}());



/***/ }),

/***/ "./src/app/services/notes.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/notes.service.ts ***!
  \*******************************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/webSocket */ "./node_modules/rxjs/_esm5/webSocket/index.js");



var WS_URL = 'ws://127.0.0.1:8000';
var NotesService = /** @class */ (function () {
    function NotesService() {
    }
    NotesService.prototype.connect = function (boardName) {
        return Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_2__["webSocket"])(WS_URL + boardName);
    };
    NotesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotesService);
    return NotesService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main.js.map