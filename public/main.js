(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+1bY":
/*!********************************************!*\
  !*** ./src/app/state/exception.actions.ts ***!
  \********************************************/
/*! exports provided: ExceptionTypes, openLoading, closeLoading, newMessage, resetExceptionState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionTypes", function() { return ExceptionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openLoading", function() { return openLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeLoading", function() { return closeLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newMessage", function() { return newMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetExceptionState", function() { return resetExceptionState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var ExceptionTypes;
(function (ExceptionTypes) {
    ExceptionTypes["LOADING_OPEN"] = "[Exception] Loading Open";
    ExceptionTypes["LOADING_CLOSE"] = "[Exception] Loading Close";
    ExceptionTypes["NEW_MESSAGE"] = "[Exception] New Message";
    ExceptionTypes["RESET_EXCEPTION_STATE"] = "[Exception] Reset Exception State";
})(ExceptionTypes || (ExceptionTypes = {}));
const openLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ExceptionTypes.LOADING_OPEN, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const closeLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ExceptionTypes.LOADING_CLOSE);
const newMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ExceptionTypes.NEW_MESSAGE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const resetExceptionState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ExceptionTypes.RESET_EXCEPTION_STATE);


/***/ }),

/***/ "+VzF":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _state_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state/auth.reducer */ "Gh6o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(store, router) {
        this.store = store;
        this.router = router;
        this.store.select(_state_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["selectIsLoggedIn"])
            .subscribe(isLoggedIn => {
            this.isLoggedIn = isLoggedIn;
        });
    }
    canActivate(route, state) {
        if (this.isLoggedIn) {
            return this.router.createUrlTree(['/users']);
        }
        else {
            return true;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/programmer/Documents/projects/side/mikro-cms/theme-mikro-panel/angular/src/main.ts */"zUnb");


/***/ }),

/***/ "0ceX":
/*!*******************************************!*\
  !*** ./src/app/services/roles.service.ts ***!
  \*******************************************/
/*! exports provided: RolesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesService", function() { return RolesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class RolesService {
    constructor(http) {
        this.http = http;
    }
    loadListRoles(offset, length) {
        const listRolesApiUrl = `${ENV.apiUrl}/roles?offset=${offset}&length=${length}`;
        return this.http.get(listRolesApiUrl);
    }
}
RolesService.ɵfac = function RolesService_Factory(t) { return new (t || RolesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RolesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RolesService, factory: RolesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "2/5o":
/*!*******************************************************************!*\
  !*** ./src/app/components/select-roles/select-roles.component.ts ***!
  \*******************************************************************/
/*! exports provided: SelectRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectRolesComponent", function() { return SelectRolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_roles_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @state/roles.actions */ "2Hr6");
/* harmony import */ var _state_roles_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/roles.reducer */ "jgOj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SelectRolesComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", role_r2.role_id === ctx_r1.roleId)("value", role_r2.role_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r2.role_name);
} }
class SelectRolesComponent {
    constructor(store) {
        this.store = store;
        this.selectedRoleId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.roles$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_roles_reducer__WEBPACK_IMPORTED_MODULE_3__["selectRoles"]));
        this.store.dispatch(_state_roles_actions__WEBPACK_IMPORTED_MODULE_2__["loadListRoles"](0, 100));
    }
    changeRoleId(roleId) {
        this.selectedRoleId.emit(roleId);
    }
}
SelectRolesComponent.ɵfac = function SelectRolesComponent_Factory(t) { return new (t || SelectRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
SelectRolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectRolesComponent, selectors: [["app-select-roles"]], inputs: { roleId: "roleId" }, outputs: { selectedRoleId: "selectedRoleId" }, decls: 7, vars: 4, consts: [[1, "Select"], ["name", "role_id", 3, "change"], ["selectRole", ""], ["value", "none", 3, "selected"], [3, "selected", "value", 4, "ngFor", "ngForOf"], [3, "selected", "value"]], template: function SelectRolesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectRolesComponent_Template_select_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.changeRoleId(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectRolesComponent_option_5_Template, 2, 3, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.roleId === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.roles$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3Qtcm9sZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "2ALx":
/*!***********************************************************!*\
  !*** ./src/app/components/list-api/list-api.component.ts ***!
  \***********************************************************/
/*! exports provided: ListApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListApiComponent", function() { return ListApiComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_apis_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/apis.actions */ "6oeF");
/* harmony import */ var _state_apis_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @state/apis.reducer */ "2DWq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a1) { return ["/api", a1]; };
function ListApiComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const api_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](api_r1.api_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, api_r1.api_id));
} }
class ListApiComponent {
    constructor(store) {
        this.store = store;
        this.load = {
            allowToLoad: false,
            offset: 0,
            length: 10
        };
    }
    ngOnInit() {
        this.apis$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_state_apis_reducer__WEBPACK_IMPORTED_MODULE_2__["selectApis"]));
        this.store.select(_state_apis_reducer__WEBPACK_IMPORTED_MODULE_2__["selectLoad"]).subscribe((load) => {
            this.load = Object.assign({}, load);
        });
        // only load apis once
        if (this.load.allowToLoad) {
            this.store.dispatch(_state_apis_actions__WEBPACK_IMPORTED_MODULE_1__["loadListApis"](this.load.offset, this.load.length));
        }
    }
}
ListApiComponent.ɵfac = function ListApiComponent_Factory(t) { return new (t || ListApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
ListApiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ListApiComponent, selectors: [["app-list-api"]], decls: 3, vars: 3, consts: [[1, "List"], ["class", "ListItem", 4, "ngFor", "ngForOf"], [1, "ListItem"], [3, "routerLink"], [1, "material-icons"]], template: function ListApiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ListApiComponent_div_1_Template, 6, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx.apis$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".List[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n  background: #FFFFFF;\n}\n\n.ListItem[_ngcontent-%COMP%] {\n  display: flex;\n  justify-self: flex-start;\n  align-items: center;\n  width: 100%;\n  min-height: 3rem;\n}\n\n.ListItem[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n  padding-left: 1rem;\n  flex-grow: 1;\n  font-size: 0.85rem;\n  color: #333333;\n}\n\n.ListItem[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 3rem;\n  height: 3rem;\n  text-decoration: none;\n}\n\n.ListItem[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpc3QtYXBpLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkNDVztBREZiOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ1ZlO0FEV2pCOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQUE7RUFDRSxpQkFBQTtFQUNBLGNDdEJlO0FEeUJqQiIsImZpbGUiOiJsaXN0LWFwaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3BhbGV0dGUuc2Nzcyc7XG5cbi5MaXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG59XG4uTGlzdEl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzcmVtO1xufVxuLkxpc3RJdGVtIHAge1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBjb2xvcjogJHRleHRCYWNrZ3JvdW5kO1xufVxuLkxpc3RJdGVtIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLkxpc3RJdGVtIGEgaSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogJHRleHRCYWNrZ3JvdW5kO1xufVxuIiwiJHByaW1hcnk6ICMyNjMyMzg7XG4kcHJpbWFyeUxpZ2h0OiAjNEY1QjYyO1xuJHByaW1hcnlEYXJrOiAjMDAwQTEyO1xuJHNlY29uZGFyeTogIzBENDdBMTtcbiRzZWNvbmRhcnlMaWdodDogIzU0NzJEMztcbiRzZWNvbmRhcnlEYXJrOiAjMDAyMTcxO1xuJHRleHRQcmltYXJ5OiAjRkZGRkZGO1xuJHRleHRTZWNvbmRhcnk6ICNGRkZGRkY7XG4kYmFja2dyb3VuZDogI0ZGRkZGRjtcbiRzdXJmYWNlOiAjRkZGRkZGO1xuJGVycm9yOiAjQjcxQzFDO1xuJHRleHRCYWNrZ3JvdW5kOiAjMzMzMzMzO1xuJHRleHRTdXJmYWNlOiAjMzMzMzMzO1xuIl19 */"] });


/***/ }),

/***/ "2DWq":
/*!***************************************!*\
  !*** ./src/app/state/apis.reducer.ts ***!
  \***************************************/
/*! exports provided: initialState, apisReducer, reducer, selectApis, selectLoad, selectApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apisReducer", function() { return apisReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectApis", function() { return selectApis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoad", function() { return selectLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectApi", function() { return selectApi; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_apis_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/apis.actions */ "6oeF");


const initialState = {
    apis: [],
    load: {
        allowToLoad: true,
        offset: 0,
        length: 10,
        total: 0
    }
};
const apisReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_apis_actions__WEBPACK_IMPORTED_MODULE_1__["loadListApis"], (state, action) => (Object.assign(Object.assign({}, state), { load: Object.assign(Object.assign({}, state.load), { offset: action.offset, length: action.length }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_apis_actions__WEBPACK_IMPORTED_MODULE_1__["loadListApisSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { apis: action.apis, load: Object.assign(Object.assign({}, state.load), { allowToLoad: false, total: action.total }) }))));
function reducer(state, action) {
    return apisReducer(state, action);
}
const getApisFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('apis');
const selectApis = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getApisFeatureState, (state) => state.apis);
const selectLoad = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getApisFeatureState, (state) => state.load);
const selectApi = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getApisFeatureState, (state, apiId) => {
    for (var api of state.apis) {
        if (api.api_id === apiId) {
            return api;
        }
    }
    return null;
});


/***/ }),

/***/ "2Hr6":
/*!****************************************!*\
  !*** ./src/app/state/roles.actions.ts ***!
  \****************************************/
/*! exports provided: RolesTypes, loadListRoles, loadListRolesSuccess, loadListRolesFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesTypes", function() { return RolesTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListRoles", function() { return loadListRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListRolesSuccess", function() { return loadListRolesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListRolesFailed", function() { return loadListRolesFailed; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var RolesTypes;
(function (RolesTypes) {
    RolesTypes["LOAD_LIST_ROLES"] = "[Roles] Load List Roles";
    RolesTypes["LOAD_LIST_ROLES_SUCCESS"] = "[Roles] Load List Roles Success";
    RolesTypes["LOAD_LIST_ROLES_FAILED"] = "[Roles] Load List Roles Failed";
})(RolesTypes || (RolesTypes = {}));
const loadListRoles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(RolesTypes.LOAD_LIST_ROLES, (offset, length) => ({
    offset: offset,
    length: length,
    message: 'Load List Role'
}));
const loadListRolesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(RolesTypes.LOAD_LIST_ROLES_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadListRolesFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(RolesTypes.LOAD_LIST_ROLES_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "3LCl":
/*!*****************************************************!*\
  !*** ./src/app/components/menus/menus.component.ts ***!
  \*****************************************************/
/*! exports provided: MenusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusComponent", function() { return MenusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/users"]; };
const _c1 = function () { return ["/pages"]; };
const _c2 = function () { return ["/apis"]; };
class MenusComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenusComponent.ɵfac = function MenusComponent_Factory(t) { return new (t || MenusComponent)(); };
MenusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenusComponent, selectors: [["app-menus"]], decls: 16, vars: 6, consts: [[1, "Menus"], [3, "routerLink"], [1, "material-icons"]], template: function MenusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "USER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".Menus[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  justify-content: center;\n  width: 100%;\n  height: 6rem;\n  background: url('background-menus.png') no-repeat #FFFFFF;\n  background-size: 100% 6rem;\n}\n\n.Menus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 2rem;\n  margin-left: 2rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: auto;\n  height: auto;\n  text-decoration: none;\n}\n\n.Menus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  color: #FFFFFF;\n}\n\n.Menus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 0.85rem;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21lbnVzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlEQUFBO0VBQ0EsMEJBQUE7QUFERjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQ2xCWTtBRG1CZDs7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQ3ZCWTtBRHlCZCIsImZpbGUiOiJtZW51cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9wYWxldHRlLnNjc3NcIjtcblxuLk1lbnVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQtbWVudXMucG5nXCIpIG5vLXJlcGVhdCAkYmFja2dyb3VuZDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDZyZW07XG59XG4uTWVudXMgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uTWVudXMgYSBpIHtcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xuICBjb2xvcjogJHRleHRQcmltYXJ5O1xufVxuLk1lbnVzIGEgc3BhbiB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBjb2xvcjogJHRleHRQcmltYXJ5O1xufVxuIiwiJHByaW1hcnk6ICMyNjMyMzg7XG4kcHJpbWFyeUxpZ2h0OiAjNEY1QjYyO1xuJHByaW1hcnlEYXJrOiAjMDAwQTEyO1xuJHNlY29uZGFyeTogIzBENDdBMTtcbiRzZWNvbmRhcnlMaWdodDogIzU0NzJEMztcbiRzZWNvbmRhcnlEYXJrOiAjMDAyMTcxO1xuJHRleHRQcmltYXJ5OiAjRkZGRkZGO1xuJHRleHRTZWNvbmRhcnk6ICNGRkZGRkY7XG4kYmFja2dyb3VuZDogI0ZGRkZGRjtcbiRzdXJmYWNlOiAjRkZGRkZGO1xuJGVycm9yOiAjQjcxQzFDO1xuJHRleHRCYWNrZ3JvdW5kOiAjMzMzMzMzO1xuJHRleHRTdXJmYWNlOiAjMzMzMzMzO1xuIl19 */"] });


/***/ }),

/***/ "497E":
/*!***************************************!*\
  !*** ./src/app/state/user.reducer.ts ***!
  \***************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/user.actions */ "us4F");


const initialState = {
    user_fullname: '',
    user_email: '',
    user_username: '',
    user_password: ''
};
const userReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_user_actions__WEBPACK_IMPORTED_MODULE_1__["addNewUser"], (state, action) => (Object.assign(Object.assign({}, state), action.user))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_user_actions__WEBPACK_IMPORTED_MODULE_1__["editUserSuccess"], (state, action) => (Object.assign(Object.assign({}, state), action.user))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_user_actions__WEBPACK_IMPORTED_MODULE_1__["resetUserState"], () => (Object.assign({}, initialState))));
function reducer(state, action) {
    return userReducer(state, action);
}


/***/ }),

/***/ "5a7y":
/*!**************************************!*\
  !*** ./src/app/state/api.effects.ts ***!
  \**************************************/
/*! exports provided: ApiEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiEffects", function() { return ApiEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_exception_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/exception.actions */ "+1bY");
/* harmony import */ var _state_api_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/api.actions */ "HS9v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/api.service */ "H+bZ");









class ApiEffects {
    constructor(action$, store, apiService) {
        this.action$ = action$;
        this.store = store;
        this.apiService = apiService;
        this.processStart$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_api_actions__WEBPACK_IMPORTED_MODULE_4__["loadApi"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["openLoading"]({ message: action.message }));
        })), {
            dispatch: false
        });
        this.processDone$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_api_actions__WEBPACK_IMPORTED_MODULE_4__["loadApiSuccess"], _state_api_actions__WEBPACK_IMPORTED_MODULE_4__["loadApiSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["closeLoading"]());
        })), {
            dispatch: false
        });
        this.loadApi$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_api_actions__WEBPACK_IMPORTED_MODULE_4__["loadApi"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.apiService.loadApi(action.apiId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => _state_api_actions__WEBPACK_IMPORTED_MODULE_4__["loadApiSuccess"]({ api: response.api })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_api_actions__WEBPACK_IMPORTED_MODULE_4__["loadApiFailed"]({ message: error })))))));
    }
}
ApiEffects.ɵfac = function ApiEffects_Factory(t) { return new (t || ApiEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"])); };
ApiEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ApiEffects, factory: ApiEffects.ɵfac });


/***/ }),

/***/ "5j9j":
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _state_exception_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state/exception.reducer */ "NkTF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function MessageComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.message.nameClass)("innerHtml", ctx_r0.message.message, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class MessageComponent {
    constructor(store) {
        this.store = store;
        this.message = {
            state: false,
            message: '',
            nameClass: ''
        };
    }
    ngOnInit() {
        this.store.select(_state_exception_reducer__WEBPACK_IMPORTED_MODULE_0__["selectMessage"]).subscribe(message => {
            let messages = '';
            let nameClass = '';
            if (typeof message.message === 'object') {
                let messagesObj;
                if (message.message.code === 200) {
                    nameClass = 'Message';
                    messagesObj = message.message;
                }
                else {
                    nameClass = 'Message Error';
                    messagesObj = message.message.error.message || message.message.message;
                }
                if (Array.isArray(messagesObj)) {
                    for (var text of messagesObj) {
                        messages += `${text.msg || text}<br/>`;
                    }
                }
                else {
                    messages = messagesObj;
                }
            }
            else {
                nameClass = 'Message';
                messages = message.message;
            }
            this.message.state = message.state;
            this.message.message = messages;
            this.message.nameClass = nameClass;
        });
    }
}
MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
MessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessageComponent, selectors: [["app-message"]], decls: 1, vars: 1, consts: [[3, "ngClass", "innerHtml", 4, "ngIf"], [3, "ngClass", "innerHtml"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MessageComponent_p_0_Template, 1, 2, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message.state);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".Message[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 1rem;\n  background: #0D47A1;\n  color: #FFFFFF;\n  font-size: 0.85rem;\n  border-radius: 0.25rem;\n}\n\n.Error[_ngcontent-%COMP%] {\n  background: #B71C1C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkNMVTtFRE1WLGNDRmM7RURHZCxrQkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBR0E7RUFDRSxtQkNKTTtBRElSIiwiZmlsZSI6Im1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9wYWxldHRlLnNjc3MnO1xuXG4uTWVzc2FnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgYmFja2dyb3VuZDogJHNlY29uZGFyeTtcbiAgY29sb3I6ICR0ZXh0U2Vjb25kYXJ5O1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4uRXJyb3Ige1xuICBiYWNrZ3JvdW5kOiAkZXJyb3I7XG59XG4iLCIkcHJpbWFyeTogIzI2MzIzODtcbiRwcmltYXJ5TGlnaHQ6ICM0RjVCNjI7XG4kcHJpbWFyeURhcms6ICMwMDBBMTI7XG4kc2Vjb25kYXJ5OiAjMEQ0N0ExO1xuJHNlY29uZGFyeUxpZ2h0OiAjNTQ3MkQzO1xuJHNlY29uZGFyeURhcms6ICMwMDIxNzE7XG4kdGV4dFByaW1hcnk6ICNGRkZGRkY7XG4kdGV4dFNlY29uZGFyeTogI0ZGRkZGRjtcbiRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuJHN1cmZhY2U6ICNGRkZGRkY7XG4kZXJyb3I6ICNCNzFDMUM7XG4kdGV4dEJhY2tncm91bmQ6ICMzMzMzMzM7XG4kdGV4dFN1cmZhY2U6ICMzMzMzMzM7XG4iXX0= */"] });


/***/ }),

/***/ "6Qg2":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class UsersService {
    constructor(http) {
        this.http = http;
    }
    loadListUser(offset, length) {
        const listUsersApiUrl = `${ENV.apiUrl}/users?offset=${offset}&length=${length}`;
        return this.http.get(listUsersApiUrl);
    }
    deleteUser(userId) {
        const deteleteUserApiUrl = `${ENV.apiUrl}/user?user_id=${userId}`;
        return this.http.delete(deteleteUserApiUrl);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "6frD":
/*!**************************************!*\
  !*** ./src/app/state/api.reducer.ts ***!
  \**************************************/
/*! exports provided: initialState, reducer, selectApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectApi", function() { return selectApi; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_api_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/api.actions */ "HS9v");


const initialState = {
    api_id: '',
    api_name: '',
    api_version: '',
    api_author: '',
    api_url: ''
};
const apiReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_api_actions__WEBPACK_IMPORTED_MODULE_1__["loadApiSuccess"], (state, action) => (Object.assign(Object.assign({}, state), action.api))));
function reducer(state, action) {
    return apiReducer(state, action);
}
const getApiFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('api');
const selectApi = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getApiFeatureState, (state) => state);


/***/ }),

/***/ "6oeF":
/*!***************************************!*\
  !*** ./src/app/state/apis.actions.ts ***!
  \***************************************/
/*! exports provided: ApisTypes, loadListApis, loadListApisSuccess, loadListApisFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApisTypes", function() { return ApisTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListApis", function() { return loadListApis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListApisSuccess", function() { return loadListApisSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListApisFailed", function() { return loadListApisFailed; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var ApisTypes;
(function (ApisTypes) {
    ApisTypes["LOAD_LIST_APIS"] = "[Apis] Load List Apis";
    ApisTypes["LOAD_LIST_APIS_SUCCESS"] = "[Apis] Load List Apis Success";
    ApisTypes["LOAD_LIST_APIS_FAILED"] = "[Apis] Load List Apis Failed";
})(ApisTypes || (ApisTypes = {}));
const loadListApis = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ApisTypes.LOAD_LIST_APIS, (offset, length) => ({
    offset: offset,
    length: length,
    message: 'Load List Apis'
}));
const loadListApisSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ApisTypes.LOAD_LIST_APIS_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadListApisFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ApisTypes.LOAD_LIST_APIS_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "72XM":
/*!*************************************************************!*\
  !*** ./src/app/components/customize/customize.component.ts ***!
  \*************************************************************/
/*! exports provided: CustomizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizeComponent", function() { return CustomizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");




class CustomizeComponent {
    constructor(route, sanitizer) {
        this.route = route;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        const token = window.localStorage.getItem('token');
        this.pageId = this.route.snapshot.paramMap.get('pageId');
        this.pageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${ENV.apiUrl}/customize?page_id=${this.pageId}&token=${token}`);
    }
}
CustomizeComponent.ɵfac = function CustomizeComponent_Factory(t) { return new (t || CustomizeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
CustomizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomizeComponent, selectors: [["app-customize"]], decls: 3, vars: 1, consts: [["id", "Customize"], ["title", "Customize Page", "backlink", "/pages"], [3, "src"]], template: function CustomizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]], styles: ["#Customize[_ngcontent-%COMP%] {\n  display: flex;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background: #FFFFFF;\n}\n\n#Customize[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow: auto;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2N1c3RvbWl6ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBRUYiLCJmaWxlIjoiY3VzdG9taXplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI0N1c3RvbWl6ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuI0N1c3RvbWl6ZSBpZnJhbWUge1xuICBmbGV4LWdyb3c6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXI6IG5vbmU7XG59XG4iXX0= */"] });


/***/ }),

/***/ "8RPc":
/*!******************************************!*\
  !*** ./src/app/services/apis.service.ts ***!
  \******************************************/
/*! exports provided: ApisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApisService", function() { return ApisService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ApisService {
    constructor(http) {
        this.http = http;
    }
    loadListApis(offset, length) {
        const listApisUrlApi = `${ENV.apiUrl}/apis?offset=${offset}&length=${length}`;
        return this.http.get(listApisUrlApi);
    }
}
ApisService.ɵfac = function ApisService_Factory(t) { return new (t || ApisService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApisService, factory: ApisService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    version: '0.0.1'
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

/***/ "Ck3C":
/*!********************************************!*\
  !*** ./src/app/state/resources.effects.ts ***!
  \********************************************/
/*! exports provided: ResourcesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesEffects", function() { return ResourcesEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_exception_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/exception.actions */ "+1bY");
/* harmony import */ var _state_resources_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/resources.actions */ "x186");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_resources_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/resources.service */ "HoTU");









class ResourcesEffects {
    constructor(action$, store, resourcesService) {
        this.action$ = action$;
        this.store = store;
        this.resourcesService = resourcesService;
        this.processStart$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_resources_actions__WEBPACK_IMPORTED_MODULE_4__["loadListResources"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["openLoading"]({ message: action.message }));
        })), {
            dispatch: false
        });
        this.processDone$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_resources_actions__WEBPACK_IMPORTED_MODULE_4__["loadListResourcesSuccess"], _state_resources_actions__WEBPACK_IMPORTED_MODULE_4__["loadListResourcesFailed"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["closeLoading"]());
        })), {
            dispatch: false
        });
        this.loadListResources = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_resources_actions__WEBPACK_IMPORTED_MODULE_4__["loadListResources"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])((action) => this.resourcesService.loadListResources(action.apiId, action.offset, action.length).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => _state_resources_actions__WEBPACK_IMPORTED_MODULE_4__["loadListResourcesSuccess"]({
            resources: response.resources,
            total: response.total
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_resources_actions__WEBPACK_IMPORTED_MODULE_4__["loadListResourcesFailed"]({ message: error })))))));
    }
}
ResourcesEffects.ɵfac = function ResourcesEffects_Factory(t) { return new (t || ResourcesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_resources_service__WEBPACK_IMPORTED_MODULE_7__["ResourcesService"])); };
ResourcesEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ResourcesEffects, factory: ResourcesEffects.ɵfac });


/***/ }),

/***/ "E+JU":
/*!***************************************!*\
  !*** ./src/app/state/user.effects.ts ***!
  \***************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_exception_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/exception.actions */ "+1bY");
/* harmony import */ var _state_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/user.actions */ "us4F");
/* harmony import */ var _state_users_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @state/users.actions */ "i4Yy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/user.service */ "qfBg");










class UserEffects {
    constructor(store, action$, userService) {
        this.store = store;
        this.action$ = action$;
        this.userService = userService;
        this.processStart$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_user_actions__WEBPACK_IMPORTED_MODULE_4__["addNewUser"], _state_user_actions__WEBPACK_IMPORTED_MODULE_4__["editUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["openLoading"]({ message: action.message }));
        })), {
            dispatch: false
        });
        this.processDone$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_user_actions__WEBPACK_IMPORTED_MODULE_4__["addNewUserSuccess"], _state_user_actions__WEBPACK_IMPORTED_MODULE_4__["addNewUserFailed"], _state_user_actions__WEBPACK_IMPORTED_MODULE_4__["editUserSuccess"], _state_user_actions__WEBPACK_IMPORTED_MODULE_4__["editUserFailed"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["newMessage"]({ message: action.message }));
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["closeLoading"]());
        })), {
            dispatch: false
        });
        this.addNewUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_user_actions__WEBPACK_IMPORTED_MODULE_4__["addNewUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.userService.addNewUser(action.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            this.store.dispatch(_state_users_actions__WEBPACK_IMPORTED_MODULE_5__["addNewUser"]({ user: response.user }));
            return _state_user_actions__WEBPACK_IMPORTED_MODULE_4__["addNewUserSuccess"]({ message: response.message });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_user_actions__WEBPACK_IMPORTED_MODULE_4__["addNewUserFailed"]({ message: error })))))));
        this.editUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_user_actions__WEBPACK_IMPORTED_MODULE_4__["editUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.userService.editUser(action.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => _state_user_actions__WEBPACK_IMPORTED_MODULE_4__["editUserSuccess"]({ user: response.user, message: response.message })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_user_actions__WEBPACK_IMPORTED_MODULE_4__["editUserFailed"]({ message: error })))))));
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"])); };
UserEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac });


/***/ }),

/***/ "EPRI":
/*!****************************************!*\
  !*** ./src/app/services/user.guard.ts ***!
  \****************************************/
/*! exports provided: UserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuard", function() { return UserGuard; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @state/auth.actions */ "Kaqs");
/* harmony import */ var _state_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/auth.reducer */ "Gh6o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/auth.service */ "lGQG");







class UserGuard {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
        this.store.select(_state_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["selectIsLoggedIn"])
            .subscribe(isLoggedIn => {
            this.isLoggedIn = isLoggedIn;
        });
    }
    canActivate(route, state) {
        if (this.isLoggedIn)
            return true;
        this.store.dispatch(_state_auth_actions__WEBPACK_IMPORTED_MODULE_2__["hasBeenLogin"]());
        return this.authService.checkUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => {
            this.store.dispatch(_state_auth_actions__WEBPACK_IMPORTED_MODULE_2__["hasBeenLoginSuccess"]({
                user: response.user,
                message: response.message
            }));
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => {
            this.store.dispatch(_state_auth_actions__WEBPACK_IMPORTED_MODULE_2__["hasBeenLoginFailed"]({
                message: error
            }));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
        }));
    }
}
UserGuard.ɵfac = function UserGuard_Factory(t) { return new (t || UserGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
UserGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UserGuard, factory: UserGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "EmAT":
/*!*******************************************!*\
  !*** ./src/app/state/resource.actions.ts ***!
  \*******************************************/
/*! exports provided: ResourceTypes, loadResource, loadResourceSuccess, loadResourceFailed, editResource, editResourceSuccess, editResourceFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceTypes", function() { return ResourceTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadResource", function() { return loadResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadResourceSuccess", function() { return loadResourceSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadResourceFailed", function() { return loadResourceFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editResource", function() { return editResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editResourceSuccess", function() { return editResourceSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editResourceFailed", function() { return editResourceFailed; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var ResourceTypes;
(function (ResourceTypes) {
    ResourceTypes["LOAD_RESOURCE"] = "[Resource] Load Resource";
    ResourceTypes["LOAD_RESOURCE_SUCCESS"] = "[Resource] Load Resource Success";
    ResourceTypes["LOAD_RESOURCE_FAILED"] = "[Resource] Load Resource Failed";
    ResourceTypes["EDIT_RESOURCE"] = "[Resource] Edit Resource";
    ResourceTypes["EDIT_RESOURCE_SUCCESS"] = "[Resource] Edit Resource Success";
    ResourceTypes["EDIT_RESOURCE_FAILED"] = "[Resource] Edit Resource Failed";
})(ResourceTypes || (ResourceTypes = {}));
const loadResource = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ResourceTypes.LOAD_RESOURCE, (resourceId) => ({
    resourceId: resourceId,
    message: 'Load Resource'
}));
const loadResourceSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ResourceTypes.LOAD_RESOURCE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadResourceFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ResourceTypes.LOAD_RESOURCE_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const editResource = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ResourceTypes.EDIT_RESOURCE, (resourceIndex, resource) => ({
    resource_index: resourceIndex,
    resource: resource,
    message: 'Edit Resource'
}));
const editResourceSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ResourceTypes.EDIT_RESOURCE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const editResourceFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ResourceTypes.EDIT_RESOURCE_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "EnPu":
/*!****************************************!*\
  !*** ./src/app/state/pages.actions.ts ***!
  \****************************************/
/*! exports provided: PagesTypes, loadListPages, loadListPagesSuccess, loadListPagesFailed, loadMorePages, loadMorePagesSuccess, loadMorePagesFailed, addNewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesTypes", function() { return PagesTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListPages", function() { return loadListPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListPagesSuccess", function() { return loadListPagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListPagesFailed", function() { return loadListPagesFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMorePages", function() { return loadMorePages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMorePagesSuccess", function() { return loadMorePagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMorePagesFailed", function() { return loadMorePagesFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewPage", function() { return addNewPage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var PagesTypes;
(function (PagesTypes) {
    PagesTypes["LOAD_LIST_PAGES"] = "[Pages] Load List Pages";
    PagesTypes["LOAD_LIST_PAGES_SUCCESS"] = "[Pages] Load List Pages Success";
    PagesTypes["LOAD_LIST_PAGES_FAILED"] = "[Pages] Load List Pages Failed";
    PagesTypes["LOAD_MORE_PAGES"] = "[Pages] Load More Pages";
    PagesTypes["LOAD_MORE_PAGES_SUCCESS"] = "[Pages] Load More Pages Success";
    PagesTypes["LOAD_MORE_PAGES_FAILED"] = "[Pages] Load More Pages Failed";
    PagesTypes["ADD_NEW_PAGE"] = "[Pages] Add New Page";
})(PagesTypes || (PagesTypes = {}));
const loadListPages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PagesTypes.LOAD_LIST_PAGES, (offset, length) => ({
    offset: offset,
    length: length,
    message: 'load list pages'
}));
const loadListPagesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PagesTypes.LOAD_LIST_PAGES_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadListPagesFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PagesTypes.LOAD_LIST_PAGES_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadMorePages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PagesTypes.LOAD_MORE_PAGES, (offset, length) => ({
    offset: offset,
    length: length,
    message: 'load more pages'
}));
const loadMorePagesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PagesTypes.LOAD_MORE_PAGES_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadMorePagesFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PagesTypes.LOAD_LIST_PAGES_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addNewPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PagesTypes.ADD_NEW_PAGE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "GU60":
/*!*******************************************!*\
  !*** ./src/app/services/pages.service.ts ***!
  \*******************************************/
/*! exports provided: PagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesService", function() { return PagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PagesService {
    constructor(http) {
        this.http = http;
    }
    loadListPages(offset, length) {
        const listPagesApiUrl = `${ENV.apiUrl}/pages?offset=${offset}&length=${length}`;
        return this.http.get(listPagesApiUrl);
    }
}
PagesService.ɵfac = function PagesService_Factory(t) { return new (t || PagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PagesService, factory: PagesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Gh6o":
/*!***************************************!*\
  !*** ./src/app/state/auth.reducer.ts ***!
  \***************************************/
/*! exports provided: initialState, reducer, selectIsLoggedIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsLoggedIn", function() { return selectIsLoggedIn; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/auth.actions */ "Kaqs");


const initialState = {
    user_fullname: '',
    user_email: '',
    user_username: '',
    user_password: '',
    isLoggedIn: false
};
const authReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["registerNewUser"], (state, action) => (Object.assign(Object.assign({}, state), action.user))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["loginAsUser"], (state, action) => (Object.assign(Object.assign({}, state), action.user))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["loginAsUserSuccess"], (state) => (Object.assign(Object.assign({}, state), { isLoggedIn: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["loginAsUserFailed"], (state) => (Object.assign(Object.assign({}, state), { isLoggedIn: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["hasBeenLoginSuccess"], (state, action) => (Object.assign(Object.assign(Object.assign({}, state), action.user), { isLoggedIn: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["hasBeenLoginFailed"], (state) => (Object.assign(Object.assign({}, state), { isLoggedIn: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["logoutAsUserSuccess"], (state) => (Object.assign({}, initialState))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["resetAuthState"], () => (Object.assign({}, initialState))));
function reducer(state, action) {
    return authReducer(state, action);
}
const getAuthFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('auth');
const selectIsLoggedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthFeatureState, (state) => state.isLoggedIn);


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ApiService {
    constructor(http) {
        this.http = http;
    }
    loadApi(apiId) {
        const apiApiUrl = `${ENV.apiUrl}/api?api_id=${apiId}`;
        return this.http.get(apiApiUrl);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "HS9v":
/*!**************************************!*\
  !*** ./src/app/state/api.actions.ts ***!
  \**************************************/
/*! exports provided: ApiTypes, loadApi, loadApiSuccess, loadApiFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiTypes", function() { return ApiTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadApi", function() { return loadApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadApiSuccess", function() { return loadApiSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadApiFailed", function() { return loadApiFailed; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var ApiTypes;
(function (ApiTypes) {
    ApiTypes["LOAD_API"] = "[Api] Load Api";
    ApiTypes["LOAD_API_SUCCESS"] = "[Api] Load Api Success";
    ApiTypes["LOAD_API_FAILED"] = "[Api] Load Api Failed";
})(ApiTypes || (ApiTypes = {}));
const loadApi = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ApiTypes.LOAD_API, (apiId) => ({
    apiId: apiId,
    message: 'Load Api'
}));
const loadApiSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ApiTypes.LOAD_API_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadApiFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ApiTypes.LOAD_API_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "Hkgh":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _state_users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state/users.actions */ "i4Yy");
/* harmony import */ var _state_users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/users.reducer */ "I3PE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _menus_menus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menus/menus.component */ "3LCl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../list-user/list-user.component */ "gi3F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









function UsersComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UsersComponent_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.loadMoreUsers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "load more users");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/user/add"]; };
class UsersComponent {
    constructor(store) {
        this.store = store;
        this.load = {
            allowToLoad: true,
            offset: 0,
            length: 10,
            total: 0
        };
    }
    ngOnInit() {
        this.store.select(_state_users_reducer__WEBPACK_IMPORTED_MODULE_1__["selectLoadInfo"]).subscribe(load => {
            this.load = Object.assign({}, load);
        });
    }
    get allowToLoadMore() {
        const nextOffset = this.load.offset + this.load.length;
        if (nextOffset < this.load.total) {
            return true;
        }
        else {
            return false;
        }
    }
    loadMoreUsers() {
        const nextOffset = this.load.offset + this.load.length;
        if (nextOffset < this.load.total) {
            this.store.dispatch(_state_users_actions__WEBPACK_IMPORTED_MODULE_0__["loadMoreUsers"](nextOffset, this.load.length));
        }
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 11, vars: 3, consts: [["id", "Users"], [1, "BoxContent"], [1, "BoxContentMenu"], [1, "material-icons", 3, "routerLink"], ["class", "BoxLoadContent", 3, "click", 4, "ngIf"], [1, "BoxLoadContent", 3, "click"], [1, "material-icons"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-menus");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Add New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-list-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, UsersComponent_a_10_Template, 5, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowToLoadMore);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _menus_menus_component__WEBPACK_IMPORTED_MODULE_5__["MenusComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_7__["ListUserComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "HoTU":
/*!***********************************************!*\
  !*** ./src/app/services/resources.service.ts ***!
  \***********************************************/
/*! exports provided: ResourcesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesService", function() { return ResourcesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ResourcesService {
    constructor(http) {
        this.http = http;
    }
    loadListResources(apiId, offset, length) {
        const listResourcesApiUrl = `${ENV.apiUrl}/resources?api_id=${apiId}&offset=${offset}&length=${length}`;
        return this.http.get(listResourcesApiUrl);
    }
}
ResourcesService.ɵfac = function ResourcesService_Factory(t) { return new (t || ResourcesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ResourcesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ResourcesService, factory: ResourcesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "I3PE":
/*!****************************************!*\
  !*** ./src/app/state/users.reducer.ts ***!
  \****************************************/
/*! exports provided: initialState, reducer, selectUsers, selectUser, selectLoadInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUsers", function() { return selectUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUser", function() { return selectUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoadInfo", function() { return selectLoadInfo; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_users_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/users.actions */ "i4Yy");


const initialState = {
    users: [],
    load: {
        allowToLoad: true,
        offset: 0,
        length: 10,
        total: 0
    }
};
const usersReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_users_actions__WEBPACK_IMPORTED_MODULE_1__["loadListUser"], (state, action) => (Object.assign(Object.assign({}, state), { load: Object.assign(Object.assign({}, state.load), { offset: action.offset, length: action.length }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_users_actions__WEBPACK_IMPORTED_MODULE_1__["loadListUserSuccess"], (state, action) => ({
    users: action.users,
    load: Object.assign(Object.assign({}, state.load), { allowToLoad: false, total: action.total })
})), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_users_actions__WEBPACK_IMPORTED_MODULE_1__["loadMoreUsers"], (state, action) => (Object.assign(Object.assign({}, state), { load: Object.assign(Object.assign({}, state.load), { offset: action.offset, length: action.length }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_users_actions__WEBPACK_IMPORTED_MODULE_1__["loadMoreUsersSuccess"], (state, action) => ({
    users: state.users.concat(action.users),
    load: Object.assign(Object.assign({}, state.load), { total: action.total })
})), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_users_actions__WEBPACK_IMPORTED_MODULE_1__["deleteUserSuccess"], (state, action) => {
    const newState = Object.assign({}, state);
    newState.users = newState.users.map((user, index) => {
        if (index === action.user_index) {
            return action.user;
        }
        else {
            return user;
        }
    });
    return newState;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_users_actions__WEBPACK_IMPORTED_MODULE_1__["addNewUser"], (state, action) => {
    const newState = Object.assign({}, state);
    newState.users = newState.users.concat(action.user);
    return newState;
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_users_actions__WEBPACK_IMPORTED_MODULE_1__["resetListUsersState"], () => (Object.assign({}, initialState))));
function reducer(state, action) {
    return usersReducer(state, action);
}
const getUsersFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('users');
const selectUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUsersFeatureState, (state) => state.users);
const selectUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUsersFeatureState, (state, userIndex) => state.users[userIndex]);
const selectLoadInfo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUsersFeatureState, (state) => state.load);


/***/ }),

/***/ "I4qr":
/*!*********************************************************************!*\
  !*** ./src/app/components/select-themes/select-themes.component.ts ***!
  \*********************************************************************/
/*! exports provided: SelectThemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectThemesComponent", function() { return SelectThemesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_themes_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @state/themes.actions */ "YXwe");
/* harmony import */ var _state_themes_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/themes.reducer */ "pilm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SelectThemesComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", theme_r2.theme_id === ctx_r1.themeId)("value", theme_r2.theme_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](theme_r2.theme_name);
} }
class SelectThemesComponent {
    constructor(store) {
        this.store = store;
        this.selectedThemeId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.load = {
            allowToLoad: true,
            offset: 0,
            length: 10,
            total: 0
        };
    }
    ngOnInit() {
        this.themes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_themes_reducer__WEBPACK_IMPORTED_MODULE_3__["selectThemes"]));
        this.store.select(_state_themes_reducer__WEBPACK_IMPORTED_MODULE_3__["selectLoad"]).subscribe((load) => {
            this.load = Object.assign({}, load);
        });
        // only load themes once
        if (this.load.allowToLoad) {
            this.store.dispatch(_state_themes_actions__WEBPACK_IMPORTED_MODULE_2__["loadListThemes"](this.load.offset, this.load.length, this.themeId));
        }
    }
    changeThemeId(themeId) {
        this.selectedThemeId.emit(themeId);
    }
}
SelectThemesComponent.ɵfac = function SelectThemesComponent_Factory(t) { return new (t || SelectThemesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
SelectThemesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectThemesComponent, selectors: [["app-select-themes"]], inputs: { themeId: "themeId" }, outputs: { selectedThemeId: "selectedThemeId" }, decls: 7, vars: 4, consts: [[1, "Select"], ["name", "theme_id", 3, "change"], ["selectTheme", ""], ["value", "none", 3, "selected"], [3, "selected", "value", 4, "ngFor", "ngForOf"], [3, "selected", "value"]], template: function SelectThemesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectThemesComponent_Template_select_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.changeThemeId(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectThemesComponent_option_5_Template, 2, 3, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.themeId === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.themes$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtdGhlbWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "I764":
/*!***************************************!*\
  !*** ./src/app/state/auth.effects.ts ***!
  \***************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_exception_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/exception.actions */ "+1bY");
/* harmony import */ var _state_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/auth.actions */ "Kaqs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/auth.service */ "lGQG");










class AuthEffects {
    constructor(store, action$, router, authService) {
        this.store = store;
        this.action$ = action$;
        this.router = router;
        this.authService = authService;
        this.processStart$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["registerNewUser"], _state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["loginAsUser"], _state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["hasBeenLogin"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["openLoading"]({ message: action.message }));
        })), {
            dispatch: false
        });
        this.processDone$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["registerNewUserSuccess"], _state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["registerNewUserFailed"], _state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["loginAsUserSuccess"], _state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["loginAsUserFailed"], _state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["hasBeenLoginSuccess"], _state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["hasBeenLoginFailed"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["newMessage"]({ message: action.message }));
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["closeLoading"]());
        })), {
            dispatch: false
        });
        this.registerNewUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["registerNewUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.authService.registerNewUser(action.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => _state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["registerNewUserSuccess"]({ message: response.message })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["registerNewUserFailed"]({ message: error })))))));
        this.loginAsUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["loginAsUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.authService.loginAsUser(action.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            window.localStorage.setItem('token', response.token);
            return _state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["loginAsUserSuccess"](response);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["loginAsUserFailed"]({ message: error })))))));
        this.loginAsUserSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["loginAsUserSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.router.navigate(['/users']))), {
            dispatch: false
        });
        this.hasBeenLoginFailed$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["hasBeenLoginFailed"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.router.navigate(['/login']))), {
            dispatch: false
        });
        this.logoutAsUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["logoutAsUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(() => this.authService.logoutAsUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => _state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["logoutAsUserSuccess"]({ message: response.message })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["logoutAsUserFailed"]({ message: error })))))));
        this.logoutAsUserSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_auth_actions__WEBPACK_IMPORTED_MODULE_4__["logoutAsUserSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.router.navigate(['/login']))), {
            dispatch: false
        });
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"])); };
AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });
;


/***/ }),

/***/ "Iek1":
/*!*****************************************!*\
  !*** ./src/app/state/themes.effects.ts ***!
  \*****************************************/
/*! exports provided: ThemesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesEffects", function() { return ThemesEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_exception_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/exception.actions */ "+1bY");
/* harmony import */ var _state_themes_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/themes.actions */ "YXwe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_themes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/themes.service */ "onZX");









class ThemesEffects {
    constructor(action$, store, themesService) {
        this.action$ = action$;
        this.store = store;
        this.themesService = themesService;
        this.processStart$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_themes_actions__WEBPACK_IMPORTED_MODULE_4__["loadListThemes"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["openLoading"]({ message: action.message }));
        })), {
            dispatch: false
        });
        this.processDone$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_themes_actions__WEBPACK_IMPORTED_MODULE_4__["loadListThemes"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["closeLoading"]());
        })), {
            dispatch: false
        });
        this.loadListThemes$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_themes_actions__WEBPACK_IMPORTED_MODULE_4__["loadListThemes"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.themesService.loadListThemes(action.offset, action.length).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(action => _state_themes_actions__WEBPACK_IMPORTED_MODULE_4__["loadListThemesSuccess"]({ themes: action.themes, total: action.total, themeId: action.themeId })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_themes_actions__WEBPACK_IMPORTED_MODULE_4__["loadListThemesFailed"]({ message: error })))))));
    }
}
ThemesEffects.ɵfac = function ThemesEffects_Factory(t) { return new (t || ThemesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_themes_service__WEBPACK_IMPORTED_MODULE_7__["ThemesService"])); };
ThemesEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ThemesEffects, factory: ThemesEffects.ɵfac });


/***/ }),

/***/ "ItBg":
/*!****************************************!*\
  !*** ./src/app/state/roles.effects.ts ***!
  \****************************************/
/*! exports provided: RolesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesEffects", function() { return RolesEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_exception_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/exception.actions */ "+1bY");
/* harmony import */ var _state_roles_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/roles.actions */ "2Hr6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_roles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/roles.service */ "0ceX");









class RolesEffects {
    constructor(action$, store, rolesService) {
        this.action$ = action$;
        this.store = store;
        this.rolesService = rolesService;
        this.processStart$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_roles_actions__WEBPACK_IMPORTED_MODULE_4__["loadListRoles"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["openLoading"]({ message: action.message }));
        })), {
            dispatch: false
        });
        this.processDone$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_roles_actions__WEBPACK_IMPORTED_MODULE_4__["loadListRolesSuccess"], _state_roles_actions__WEBPACK_IMPORTED_MODULE_4__["loadListRolesFailed"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["closeLoading"]());
        })), {
            dispatch: false
        });
        this.loadListRoles$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_roles_actions__WEBPACK_IMPORTED_MODULE_4__["loadListRoles"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])((action) => this.rolesService.loadListRoles(action.offset, action.length).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(action => _state_roles_actions__WEBPACK_IMPORTED_MODULE_4__["loadListRolesSuccess"]({ roles: action.roles, total: action.total })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_roles_actions__WEBPACK_IMPORTED_MODULE_4__["loadListRolesFailed"]({ message: error })))))));
    }
}
RolesEffects.ɵfac = function RolesEffects_Factory(t) { return new (t || RolesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_roles_service__WEBPACK_IMPORTED_MODULE_7__["RolesService"])); };
RolesEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: RolesEffects, factory: RolesEffects.ɵfac });


/***/ }),

/***/ "Kaqs":
/*!***************************************!*\
  !*** ./src/app/state/auth.actions.ts ***!
  \***************************************/
/*! exports provided: AuthTypes, registerNewUser, registerNewUserSuccess, registerNewUserFailed, loginAsUser, loginAsUserSuccess, loginAsUserFailed, hasBeenLogin, hasBeenLoginSuccess, hasBeenLoginFailed, logoutAsUser, logoutAsUserSuccess, logoutAsUserFailed, resetAuthState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTypes", function() { return AuthTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerNewUser", function() { return registerNewUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerNewUserSuccess", function() { return registerNewUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerNewUserFailed", function() { return registerNewUserFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAsUser", function() { return loginAsUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAsUserSuccess", function() { return loginAsUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAsUserFailed", function() { return loginAsUserFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBeenLogin", function() { return hasBeenLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBeenLoginSuccess", function() { return hasBeenLoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBeenLoginFailed", function() { return hasBeenLoginFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAsUser", function() { return logoutAsUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAsUserSuccess", function() { return logoutAsUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAsUserFailed", function() { return logoutAsUserFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAuthState", function() { return resetAuthState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var AuthTypes;
(function (AuthTypes) {
    AuthTypes["REGISTER_NEW_USER"] = "[Auth] Register New User";
    AuthTypes["REGISTER_NEW_USER_SUCCESS"] = "[Auth] Register New User Success";
    AuthTypes["REGISTER_NEW_USER_FAILED"] = "[Auth] Register New User Failed";
    AuthTypes["LOGIN_AS_USER"] = "[Auth] Login As User";
    AuthTypes["LOGIN_AS_USER_SUCCESS"] = "[Auth] Login As User Success";
    AuthTypes["LOGIN_AS_USER_FAILED"] = "[Auth] Login As User Failed";
    AuthTypes["RESET_AUTH_STATE"] = "[Auth] Reset Auth State";
    AuthTypes["HAS_BEEN_LOGIN"] = "[Auth] Has Been Login";
    AuthTypes["HAS_BEEN_LOGIN_SUCCESS"] = "[Auth] Has Been Login Success";
    AuthTypes["HAS_BEEN_LOGIN_FAILED"] = "[Auth] Has Been Login Failed";
    AuthTypes["LOGOUT_AS_USER"] = "[Auth] Logout As User";
    AuthTypes["LOGOUT_AS_USER_SUCCESS"] = "[Auth] Logout As User Sucess";
    AuthTypes["LOGOUT_AS_USER_FAILED"] = "[Auth] Logout As User Failed";
})(AuthTypes || (AuthTypes = {}));
const registerNewUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AuthTypes.REGISTER_NEW_USER, (user) => ({
    user: user,
    message: 'register as new user'
}));
const registerNewUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AuthTypes.REGISTER_NEW_USER_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const registerNewUserFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AuthTypes.REGISTER_NEW_USER_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginAsUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AuthTypes.LOGIN_AS_USER, (user) => ({
    user: user,
    message: 'login as new user ...'
}));
const loginAsUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AuthTypes.LOGIN_AS_USER_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginAsUserFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AuthTypes.LOGIN_AS_USER_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const hasBeenLogin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AuthTypes.HAS_BEEN_LOGIN, () => ({
    message: 'get active user data'
}));
const hasBeenLoginSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AuthTypes.HAS_BEEN_LOGIN_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const hasBeenLoginFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AuthTypes.HAS_BEEN_LOGIN_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const logoutAsUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AuthTypes.LOGOUT_AS_USER, () => ({
    message: 'logout as user'
}));
const logoutAsUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AuthTypes.LOGOUT_AS_USER_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const logoutAsUserFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AuthTypes.LOGOUT_AS_USER_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const resetAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(AuthTypes.RESET_AUTH_STATE);


/***/ }),

/***/ "MzfI":
/*!***********************************************************!*\
  !*** ./src/app/components/resource/resource.component.ts ***!
  \***********************************************************/
/*! exports provided: ResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceComponent", function() { return ResourceComponent; });
/* harmony import */ var _state_exception_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state/exception.actions */ "+1bY");
/* harmony import */ var _state_resources_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/resources.reducer */ "p2EJ");
/* harmony import */ var _state_resource_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @state/resource.reducer */ "VKJF");
/* harmony import */ var _state_resource_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/resource.actions */ "EmAT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../message/message.component */ "5j9j");
/* harmony import */ var _select_roles_select_roles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../select-roles/select-roles.component */ "2/5o");











class ResourceComponent {
    constructor(route, store) {
        this.route = route;
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_0__["resetExceptionState"]());
        this.resourceIndex = this.route.snapshot.paramMap.get('resourceIndex');
        this.apiId = this.route.snapshot.paramMap.get('apiId');
        this.resourceId = this.route.snapshot.paramMap.get('resourceId');
        this.store.select(_state_resource_reducer__WEBPACK_IMPORTED_MODULE_2__["selectResource"]).subscribe((resource) => {
            this.role_id = resource.role_id;
            this.role_group = resource.role_group;
            this.api_resource = resource.api_resource;
            this.api_method = resource.api_method;
        });
        this.store.select(_state_resources_reducer__WEBPACK_IMPORTED_MODULE_1__["selectResource"], this.resourceId).subscribe((resource) => {
            if (!resource) {
                this.store.dispatch(_state_resource_actions__WEBPACK_IMPORTED_MODULE_3__["loadResource"](this.resourceId));
            }
            else {
                this.store.dispatch(_state_resource_actions__WEBPACK_IMPORTED_MODULE_3__["loadResourceSuccess"]({ resource: resource }));
            }
        });
    }
    selectedRoleId(roleId) {
        this.role_id = roleId;
    }
    editResource() {
        const resource = {
            resource_id: this.resourceId,
            role_id: this.role_id || 'none',
            role_group: this.role_group,
            api_resource: this.api_resource,
            api_method: this.api_method
        };
        this.store.dispatch(_state_resource_actions__WEBPACK_IMPORTED_MODULE_3__["editResource"](this.resourceIndex, resource));
    }
}
ResourceComponent.ɵfac = function ResourceComponent_Factory(t) { return new (t || ResourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
ResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ResourceComponent, selectors: [["app-resource"]], decls: 17, vars: 5, consts: [["id", "Resource"], ["title", "Edit Resource Permission", 3, "backlink"], [1, "Content"], [1, "ResourceItem"], ["method", "POST", "action", "/register", 1, "Form", 3, "submit"], [3, "roleId", "selectedRoleId"], [1, "Input"], ["type", "text", "name", "role_group", "placeholder", "Role group", 3, "ngModel", "ngModelChange"], [1, "Action"], ["type", "submit"], [1, "material-icons"]], template: function ResourceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-navigation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function ResourceComponent_Template_form_submit_8_listener() { return ctx.editResource(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "app-select-roles", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedRoleId", function ResourceComponent_Template_app_select_roles_selectedRoleId_10_listener($event) { return ctx.selectedRoleId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ResourceComponent_Template_input_ngModelChange_12_listener($event) { return ctx.role_group = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("backlink", "/api/" + ctx.apiId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api_method);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.api_resource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("roleId", ctx.role_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.role_group);
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _message_message_component__WEBPACK_IMPORTED_MODULE_9__["MessageComponent"], _select_roles_select_roles_component__WEBPACK_IMPORTED_MODULE_10__["SelectRolesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]], styles: ["#Resource[_ngcontent-%COMP%]   .Content[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  padding-right: 2rem;\n  padding-bottom: 2rem;\n  padding-left: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Jlc291cmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFBSiIsImZpbGUiOiJyZXNvdXJjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNSZXNvdXJjZSB7XG4gIC5Db250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "NkTF":
/*!********************************************!*\
  !*** ./src/app/state/exception.reducer.ts ***!
  \********************************************/
/*! exports provided: initialState, reducer, selectLoading, selectMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoading", function() { return selectLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMessage", function() { return selectMessage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_exception_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/exception.actions */ "+1bY");


const initialState = {
    loading: {
        state: false,
        message: ''
    },
    message: {
        state: false,
        message: false
    }
};
const exceptionReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_exception_actions__WEBPACK_IMPORTED_MODULE_1__["openLoading"], (state, action) => (Object.assign(Object.assign({}, state), { loading: {
        state: true,
        message: action.message
    } }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_exception_actions__WEBPACK_IMPORTED_MODULE_1__["closeLoading"], (state) => (Object.assign(Object.assign({}, state), { loading: {
        state: false,
        message: ''
    } }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_exception_actions__WEBPACK_IMPORTED_MODULE_1__["newMessage"], (state, action) => (Object.assign(Object.assign({}, state), { message: {
        state: action.message ? true : false,
        message: action.message
    } }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_exception_actions__WEBPACK_IMPORTED_MODULE_1__["resetExceptionState"], () => (Object.assign({}, initialState))));
function reducer(state, action) {
    return exceptionReducer(state, action);
}
const getLoadingFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('loading');
const selectLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLoadingFeatureState, (state) => state.loading);
const selectMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLoadingFeatureState, (state) => state.message);


/***/ }),

/***/ "O169":
/*!*******************************************************!*\
  !*** ./src/app/directives/moment/moment.directive.ts ***!
  \*******************************************************/
/*! exports provided: MomentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentDirective", function() { return MomentDirective; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MomentDirective {
    constructor(element) {
        this.element = element;
    }
    ngOnInit() {
        this.element.nativeElement.innerHTML = `${(this.appMoment ?
            ((this.prefix || '') + ' ' + moment__WEBPACK_IMPORTED_MODULE_0__(new Date(this.appMoment)).fromNow())
            :
                this.invalid)}`;
    }
}
MomentDirective.ɵfac = function MomentDirective_Factory(t) { return new (t || MomentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
MomentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MomentDirective, selectors: [["", "appMoment", ""]], inputs: { appMoment: "appMoment", prefix: "prefix", invalid: "invalid" } });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SizH":
/*!********************************!*\
  !*** ./src/app/custom-http.ts ***!
  \********************************/
/*! exports provided: CustomHttp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttp", function() { return CustomHttp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CustomHttp {
    intercept(req, next) {
        const token = window.localStorage.getItem('token') || '';
        const reqWithAuth = req.clone({
            setHeaders: {
                Authorization: token
            }
        });
        return next.handle(reqWithAuth);
    }
}
CustomHttp.ɵfac = function CustomHttp_Factory(t) { return new (t || CustomHttp)(); };
CustomHttp.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomHttp, factory: CustomHttp.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loading/loading.component */ "qQYQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UiVb":
/*!***************************************!*\
  !*** ./src/app/state/page.reducer.ts ***!
  \***************************************/
/*! exports provided: initialState, reducer, selectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPage", function() { return selectPage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_page_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/page.actions */ "jlYJ");


const initialState = {
    page_id: '',
    role_id: '',
    role_group: '',
    page_title: '',
    page_url: '',
    theme_id: '',
    variant: ''
};
const pageReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_page_actions__WEBPACK_IMPORTED_MODULE_1__["loadPageSuccess"], (state, action) => (Object.assign(Object.assign({}, state), action.page))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_page_actions__WEBPACK_IMPORTED_MODULE_1__["addNewPage"], (state, action) => (Object.assign(Object.assign({}, state), action.page))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_page_actions__WEBPACK_IMPORTED_MODULE_1__["editPageSuccess"], (state, action) => (Object.assign(Object.assign({}, state), action.page))));
function reducer(state, action) {
    return pageReducer(state, action);
}
const getPageFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('page');
const selectPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPageFeatureState, (state) => state);


/***/ }),

/***/ "UsnX":
/*!*************************************************!*\
  !*** ./src/app/components/api/api.component.ts ***!
  \*************************************************/
/*! exports provided: ApiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiComponent", function() { return ApiComponent; });
/* harmony import */ var _state_api_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state/api.actions */ "HS9v");
/* harmony import */ var _state_api_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/api.reducer */ "6frD");
/* harmony import */ var _state_apis_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @state/apis.reducer */ "2DWq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _list_resource_list_resource_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../list-resource/list-resource.component */ "c2HJ");








class ApiComponent {
    constructor(route, store) {
        this.route = route;
        this.store = store;
    }
    ngOnInit() {
        this.apiId = this.route.snapshot.paramMap.get('apiId');
        this.store.select(_state_api_reducer__WEBPACK_IMPORTED_MODULE_1__["selectApi"]).subscribe((api) => {
            this.api_name = api.api_name;
            this.api_version = api.api_version;
            this.api_author = api.api_author;
            this.api_url = api.api_url;
        });
        this.store.select(_state_apis_reducer__WEBPACK_IMPORTED_MODULE_2__["selectApi"], this.apiId).subscribe((api) => {
            if (!api) {
                this.store.dispatch(_state_api_actions__WEBPACK_IMPORTED_MODULE_0__["loadApi"](this.apiId));
            }
            else {
                this.store.dispatch(_state_api_actions__WEBPACK_IMPORTED_MODULE_0__["loadApiSuccess"]({ api }));
            }
        });
    }
}
ApiComponent.ɵfac = function ApiComponent_Factory(t) { return new (t || ApiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
ApiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ApiComponent, selectors: [["app-api"]], decls: 23, vars: 5, consts: [["id", "Api"], ["title", "Api Resource", "backlink", "/apis"], [1, "Content"], [1, "Info"], [1, "InfoTitle"], [1, "InfoDetail"], [1, "material-icons"], [3, "apiId"]], template: function ApiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-navigation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "link");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "app-list-resource", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api_author);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.api_url);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("apiId", ctx.apiId);
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"], _list_resource_list_resource_component__WEBPACK_IMPORTED_MODULE_7__["ListResourceComponent"]], styles: ["#Api[_ngcontent-%COMP%]   .Content[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  padding-right: 2rem;\n  padding-bottom: 2rem;\n  padding-left: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQUoiLCJmaWxlIjoiYXBpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI0FwaSB7XG4gIC5Db250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "VKJF":
/*!*******************************************!*\
  !*** ./src/app/state/resource.reducer.ts ***!
  \*******************************************/
/*! exports provided: initialState, reducer, selectResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectResource", function() { return selectResource; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_resource_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/resource.actions */ "EmAT");


const initialState = {
    role_id: null,
    role_group: '',
    api_method: '',
    api_resource: ''
};
const resourceReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_resource_actions__WEBPACK_IMPORTED_MODULE_1__["loadResourceSuccess"], (state, action) => (Object.assign(Object.assign({}, state), action.resource))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_resource_actions__WEBPACK_IMPORTED_MODULE_1__["editResourceSuccess"], (state, action) => (Object.assign(Object.assign({}, state), action.resource))));
function reducer(state, action) {
    return resourceReducer(state, action);
}
const getResourceFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('resource');
const selectResource = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getResourceFeatureState, (state) => state);


/***/ }),

/***/ "W+Da":
/*!****************************************!*\
  !*** ./src/app/state/pages.reducer.ts ***!
  \****************************************/
/*! exports provided: initialState, reducer, selectPages, selectLoad, selectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPages", function() { return selectPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoad", function() { return selectLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPage", function() { return selectPage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_pages_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/pages.actions */ "EnPu");


const initialState = {
    pages: [],
    load: {
        allowToLoad: true,
        offset: 0,
        length: 10,
        total: 0
    }
};
const pagesReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_pages_actions__WEBPACK_IMPORTED_MODULE_1__["loadListPages"], (state, action) => (Object.assign(Object.assign({}, state), { load: Object.assign(Object.assign({}, state.load), { offset: action.offset, length: action.length }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_pages_actions__WEBPACK_IMPORTED_MODULE_1__["loadListPagesSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { pages: action.pages, load: Object.assign(Object.assign({}, state.load), { allowToLoad: false, total: action.total }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_pages_actions__WEBPACK_IMPORTED_MODULE_1__["loadMorePages"], (state, action) => (Object.assign(Object.assign({}, state), { load: Object.assign(Object.assign({}, state.load), { offset: action.offset, length: action.length }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_pages_actions__WEBPACK_IMPORTED_MODULE_1__["loadMorePagesSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { pages: state.pages.concat(action.pages), load: Object.assign(Object.assign({}, state.load), { allowToLoad: false, total: (state.load.total + action.total) }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_pages_actions__WEBPACK_IMPORTED_MODULE_1__["addNewPage"], (state, action) => {
    const newState = Object.assign({}, state);
    newState.pages = newState.pages.concat(action.page);
    return newState;
}));
function reducer(state, action) {
    return pagesReducer(state, action);
}
const getPagesFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('pages');
const selectPages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPagesFeatureState, (state) => state.pages);
const selectLoad = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPagesFeatureState, (state) => state.load);
const selectPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPagesFeatureState, (state, pageId) => {
    for (var page of state.pages) {
        if (page.page_id === pageId) {
            return page;
        }
    }
    return null;
});


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _state_exception_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state/exception.actions */ "+1bY");
/* harmony import */ var _state_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/auth.actions */ "Kaqs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message/message.component */ "5j9j");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _version_version_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../version/version.component */ "nMPd");








const _c0 = function () { return ["/register"]; };
class LoginComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_0__["resetExceptionState"]());
        this.store.dispatch(_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["resetAuthState"]());
    }
    login() {
        const user = {
            user_username: this.user_username,
            user_password: this.user_password
        };
        this.store.dispatch(_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["loginAsUser"](user));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 20, vars: 4, consts: [[1, "Auth"], [1, "AuthBox"], ["method", "POST", "action", "/register", 1, "AuthForm", 3, "ngSubmit"], [1, "Input"], ["type", "text", "name", "username", "placeholder", "Username", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Password", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "AuthAction"], [3, "routerLink"], ["type", "submit"], [1, "material-icons"], [1, "AuthVersion"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "LOGIN AS A USER");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) { return ctx.user_username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.user_password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "dont have an account ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "arrow_right_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "app-version");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user_username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user_password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _version_version_component__WEBPACK_IMPORTED_MODULE_7__["VersionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _state_exception_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state/exception.actions */ "+1bY");
/* harmony import */ var _state_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/auth.actions */ "Kaqs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message/message.component */ "5j9j");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _version_version_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../version/version.component */ "nMPd");








const _c0 = function () { return ["/login"]; };
class RegisterComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_0__["resetExceptionState"]());
        this.store.dispatch(_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["resetAuthState"]());
    }
    register() {
        const user = {
            user_fullname: this.user_fullname,
            user_email: this.user_email,
            user_username: this.user_username,
            user_password: this.user_password
        };
        this.store.dispatch(_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["registerNewUser"](user));
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 24, vars: 6, consts: [[1, "Auth"], [1, "AuthBox"], ["method", "POST", "action", "/register", 1, "AuthForm", 3, "ngSubmit"], [1, "Input"], ["type", "text", "name", "fullname", "placeholder", "Full name", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "Email Address", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "username", "placeholder", "Username", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Password", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "AuthAction"], [3, "routerLink"], ["type", "submit"], [1, "material-icons"], [1, "AuthVersion"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "REGISTER AS A NEW USER");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_7_listener($event) { return ctx.user_fullname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_9_listener($event) { return ctx.user_email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_11_listener($event) { return ctx.user_username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_13_listener($event) { return ctx.user_password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "have an account ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "app-version");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user_fullname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user_email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user_username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user_password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _version_version_component__WEBPACK_IMPORTED_MODULE_7__["VersionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "XVkB":
/*!*****************************************************!*\
  !*** ./src/app/components/pages/pages.component.ts ***!
  \*****************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _state_pages_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state/pages.actions */ "EnPu");
/* harmony import */ var _state_pages_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/pages.reducer */ "W+Da");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _menus_menus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menus/menus.component */ "3LCl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../list-page/list-page.component */ "dpzK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









function PagesComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PagesComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.loadMorePages(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "load more pages");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/page"]; };
class PagesComponent {
    constructor(store) {
        this.store = store;
        this.load = {
            allowToLoad: true,
            offset: 0,
            length: 10,
            total: 0
        };
    }
    ngOnInit() {
        this.store.select(_state_pages_reducer__WEBPACK_IMPORTED_MODULE_1__["selectLoad"]).subscribe(load => {
            this.load = Object.assign({}, load);
        });
    }
    get allowToLoadMore() {
        const nextOffset = this.load.offset + this.load.length;
        if (nextOffset < this.load.total) {
            return true;
        }
        else {
            return false;
        }
    }
    loadMorePages() {
        const nextOffset = this.load.offset + this.load.length;
        if (nextOffset < this.load.total) {
            this.store.dispatch(_state_pages_actions__WEBPACK_IMPORTED_MODULE_0__["loadMorePages"](nextOffset, this.load.length));
        }
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 12, vars: 3, consts: [["id", "Pages"], [1, "Content"], [1, "ContentMenu"], [3, "routerLink"], [1, "material-icons"], ["class", "LoadMore", 3, "click", 4, "ngIf"], [1, "LoadMore", 3, "click"]], template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-menus");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Add New Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-list-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, PagesComponent_a_11_Template, 5, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.allowToLoadMore);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _menus_menus_component__WEBPACK_IMPORTED_MODULE_5__["MenusComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_7__["ListPageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "YXwe":
/*!*****************************************!*\
  !*** ./src/app/state/themes.actions.ts ***!
  \*****************************************/
/*! exports provided: ThemesTypes, loadListThemes, loadListThemesSuccess, loadListThemesFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesTypes", function() { return ThemesTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListThemes", function() { return loadListThemes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListThemesSuccess", function() { return loadListThemesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListThemesFailed", function() { return loadListThemesFailed; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var ThemesTypes;
(function (ThemesTypes) {
    ThemesTypes["LOAD_LIST_THEMES"] = "[Themes] Load List Themes";
    ThemesTypes["LOAD_LIST_THEMES_SUCCESS"] = "[Themes] Load List Themes Success";
    ThemesTypes["LOAD_LIST_THEMES_FAILED"] = "[Themes] Load List Tehems Failed";
})(ThemesTypes || (ThemesTypes = {}));
const loadListThemes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ThemesTypes.LOAD_LIST_THEMES, (offset, length, themeId) => ({
    offset: offset,
    length: length,
    themeId: themeId,
    message: 'load list themes'
}));
const loadListThemesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ThemesTypes.LOAD_LIST_THEMES_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadListThemesFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ThemesTypes.LOAD_LIST_THEMES_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _custom_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-http */ "SizH");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! environments/environment */ "AytR");
/* harmony import */ var _state_exception_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @state/exception.reducer */ "NkTF");
/* harmony import */ var _state_auth_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @state/auth.reducer */ "Gh6o");
/* harmony import */ var _state_auth_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @state/auth.effects */ "I764");
/* harmony import */ var _state_users_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @state/users.reducer */ "I3PE");
/* harmony import */ var _state_users_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @state/users.effects */ "nHPL");
/* harmony import */ var _state_user_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @state/user.reducer */ "497E");
/* harmony import */ var _state_user_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @state/user.effects */ "E+JU");
/* harmony import */ var _state_pages_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @state/pages.reducer */ "W+Da");
/* harmony import */ var _state_pages_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @state/pages.effects */ "cEt4");
/* harmony import */ var _state_page_reducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @state/page.reducer */ "UiVb");
/* harmony import */ var _state_page_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @state/page.effects */ "unFy");
/* harmony import */ var _state_apis_reducer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @state/apis.reducer */ "2DWq");
/* harmony import */ var _state_apis_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @state/apis.effects */ "zzmC");
/* harmony import */ var _state_api_reducer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @state/api.reducer */ "6frD");
/* harmony import */ var _state_api_effects__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @state/api.effects */ "5a7y");
/* harmony import */ var _state_resources_reducer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @state/resources.reducer */ "p2EJ");
/* harmony import */ var _state_resources_effects__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @state/resources.effects */ "Ck3C");
/* harmony import */ var _state_resource_reducer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @state/resource.reducer */ "VKJF");
/* harmony import */ var _state_resource_effects__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @state/resource.effects */ "q+Y8");
/* harmony import */ var _state_roles_reducer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @state/roles.reducer */ "jgOj");
/* harmony import */ var _state_roles_effects__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @state/roles.effects */ "ItBg");
/* harmony import */ var _state_themes_reducer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @state/themes.reducer */ "pilm");
/* harmony import */ var _state_themes_effects__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @state/themes.effects */ "Iek1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_version_version_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/version/version.component */ "nMPd");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/loading/loading.component */ "qQYQ");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/message/message.component */ "5j9j");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/users/users.component */ "Hkgh");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "mvyS");
/* harmony import */ var _components_menus_menus_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/menus/menus.component */ "3LCl");
/* harmony import */ var _components_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/list-user/list-user.component */ "gi3F");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/user/user.component */ "ytin");
/* harmony import */ var _components_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/list-page/list-page.component */ "dpzK");
/* harmony import */ var _components_pages_pages_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/pages/pages.component */ "XVkB");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/page/page.component */ "ycSy");
/* harmony import */ var _components_customize_customize_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/customize/customize.component */ "72XM");
/* harmony import */ var _components_list_api_list_api_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/list-api/list-api.component */ "2ALx");
/* harmony import */ var _components_apis_apis_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/apis/apis.component */ "lZJt");
/* harmony import */ var _components_api_api_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/api/api.component */ "UsnX");
/* harmony import */ var _components_list_resource_list_resource_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/list-resource/list-resource.component */ "c2HJ");
/* harmony import */ var _components_resource_resource_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/resource/resource.component */ "MzfI");
/* harmony import */ var _components_select_roles_select_roles_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/select-roles/select-roles.component */ "2/5o");
/* harmony import */ var _components_select_themes_select_themes_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/select-themes/select-themes.component */ "I4qr");
/* harmony import */ var _components_select_variants_select_variants_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/select-variants/select-variants.component */ "obnO");
/* harmony import */ var _directives_moment_moment_directive__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./directives/moment/moment.directive */ "O169");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/core */ "fXoL");






























































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_58__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_33__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_58__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["APP_BASE_HREF"],
            useValue: ENV.pageUrl
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _custom_http__WEBPACK_IMPORTED_MODULE_7__["CustomHttp"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({
                loading: _state_exception_reducer__WEBPACK_IMPORTED_MODULE_9__["reducer"],
                auth: _state_auth_reducer__WEBPACK_IMPORTED_MODULE_10__["reducer"],
                users: _state_users_reducer__WEBPACK_IMPORTED_MODULE_12__["reducer"],
                user: _state_user_reducer__WEBPACK_IMPORTED_MODULE_14__["reducer"],
                pages: _state_pages_reducer__WEBPACK_IMPORTED_MODULE_16__["reducer"],
                page: _state_page_reducer__WEBPACK_IMPORTED_MODULE_18__["reducer"],
                apis: _state_apis_reducer__WEBPACK_IMPORTED_MODULE_20__["reducer"],
                api: _state_api_reducer__WEBPACK_IMPORTED_MODULE_22__["reducer"],
                resources: _state_resources_reducer__WEBPACK_IMPORTED_MODULE_24__["reducer"],
                resource: _state_resource_reducer__WEBPACK_IMPORTED_MODULE_26__["reducer"],
                roles: _state_roles_reducer__WEBPACK_IMPORTED_MODULE_28__["reducer"],
                themes: _state_themes_reducer__WEBPACK_IMPORTED_MODULE_30__["reducer"]
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([
                _state_auth_effects__WEBPACK_IMPORTED_MODULE_11__["AuthEffects"],
                _state_users_effects__WEBPACK_IMPORTED_MODULE_13__["UsersEffects"],
                _state_user_effects__WEBPACK_IMPORTED_MODULE_15__["UserEffects"],
                _state_pages_effects__WEBPACK_IMPORTED_MODULE_17__["PagesEffects"],
                _state_page_effects__WEBPACK_IMPORTED_MODULE_19__["PageEffects"],
                _state_apis_effects__WEBPACK_IMPORTED_MODULE_21__["ApisEffects"],
                _state_api_effects__WEBPACK_IMPORTED_MODULE_23__["ApiEffects"],
                _state_resources_effects__WEBPACK_IMPORTED_MODULE_25__["ResourcesEffects"],
                _state_resource_effects__WEBPACK_IMPORTED_MODULE_27__["ResourceEffects"],
                _state_roles_effects__WEBPACK_IMPORTED_MODULE_29__["RolesEffects"],
                _state_themes_effects__WEBPACK_IMPORTED_MODULE_31__["ThemesEffects"]
            ]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_32__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_58__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_33__["AppComponent"],
        _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_35__["LoadingComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_36__["RegisterComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_37__["LoginComponent"],
        _components_users_users_component__WEBPACK_IMPORTED_MODULE_39__["UsersComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_40__["NavbarComponent"],
        _components_menus_menus_component__WEBPACK_IMPORTED_MODULE_42__["MenusComponent"],
        _components_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_43__["ListUserComponent"],
        _directives_moment_moment_directive__WEBPACK_IMPORTED_MODULE_57__["MomentDirective"],
        _components_user_user_component__WEBPACK_IMPORTED_MODULE_44__["UserComponent"],
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_41__["NavigationComponent"],
        _components_message_message_component__WEBPACK_IMPORTED_MODULE_38__["MessageComponent"],
        _components_version_version_component__WEBPACK_IMPORTED_MODULE_34__["VersionComponent"],
        _components_apis_apis_component__WEBPACK_IMPORTED_MODULE_50__["ApisComponent"],
        _components_list_api_list_api_component__WEBPACK_IMPORTED_MODULE_49__["ListApiComponent"],
        _components_api_api_component__WEBPACK_IMPORTED_MODULE_51__["ApiComponent"],
        _components_list_resource_list_resource_component__WEBPACK_IMPORTED_MODULE_52__["ListResourceComponent"],
        _components_resource_resource_component__WEBPACK_IMPORTED_MODULE_53__["ResourceComponent"],
        _components_select_roles_select_roles_component__WEBPACK_IMPORTED_MODULE_54__["SelectRolesComponent"],
        _components_pages_pages_component__WEBPACK_IMPORTED_MODULE_46__["PagesComponent"],
        _components_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_45__["ListPageComponent"],
        _components_page_page_component__WEBPACK_IMPORTED_MODULE_47__["PageComponent"],
        _components_customize_customize_component__WEBPACK_IMPORTED_MODULE_48__["CustomizeComponent"],
        _components_select_themes_select_themes_component__WEBPACK_IMPORTED_MODULE_55__["SelectThemesComponent"],
        _components_select_variants_select_variants_component__WEBPACK_IMPORTED_MODULE_56__["SelectVariantsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_32__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "c2HJ":
/*!*********************************************************************!*\
  !*** ./src/app/components/list-resource/list-resource.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListResourceComponent", function() { return ListResourceComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_resources_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/resources.actions */ "x186");
/* harmony import */ var _state_resources_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @state/resources.reducer */ "p2EJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a1, a2, a3) { return ["/resource", a1, a2, a3]; };
function ListResourceComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resource_r1 = ctx.$implicit;
    const resourceIndex_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, resource_r1.api_method));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](resource_r1.api_resource);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](5, _c0, resourceIndex_r2, ctx_r0.apiId, resource_r1.resource_id));
} }
class ListResourceComponent {
    constructor(store) {
        this.store = store;
        this.load = {
            allowToLoad: false,
            offset: 0,
            length: 0
        };
    }
    ngOnInit() {
        this.resources$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_state_resources_reducer__WEBPACK_IMPORTED_MODULE_2__["selectResources"]));
        this.store.select(_state_resources_reducer__WEBPACK_IMPORTED_MODULE_2__["selectLoad"]).subscribe(load => {
            this.load = Object.assign({}, load);
        });
        // only load resources once
        if (this.load.allowToLoad) {
            this.store.dispatch(_state_resources_actions__WEBPACK_IMPORTED_MODULE_1__["loadListResources"](this.apiId, this.load.offset, this.load.length));
        }
    }
}
ListResourceComponent.ɵfac = function ListResourceComponent_Factory(t) { return new (t || ListResourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
ListResourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ListResourceComponent, selectors: [["app-list-resource"]], inputs: { apiId: "apiId" }, decls: 3, vars: 3, consts: [[1, "Resources"], ["class", "ResourceItem", 4, "ngFor", "ngForOf"], [1, "ResourceItem"], [3, "routerLink"], [1, "material-icons"]], template: function ListResourceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ListResourceComponent_div_1_Template, 9, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx.resources$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXJlc291cmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "cEt4":
/*!****************************************!*\
  !*** ./src/app/state/pages.effects.ts ***!
  \****************************************/
/*! exports provided: PagesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesEffects", function() { return PagesEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_exception_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/exception.actions */ "+1bY");
/* harmony import */ var _state_pages_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/pages.actions */ "EnPu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_pages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/pages.service */ "GU60");









class PagesEffects {
    constructor(store, action$, pagesService) {
        this.store = store;
        this.action$ = action$;
        this.pagesService = pagesService;
        this.processStart$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_pages_actions__WEBPACK_IMPORTED_MODULE_4__["loadListPages"], _state_pages_actions__WEBPACK_IMPORTED_MODULE_4__["loadMorePages"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => {
            return this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["openLoading"]({ message: action.message }));
        })), {
            dispatch: false
        });
        this.processDone$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_pages_actions__WEBPACK_IMPORTED_MODULE_4__["loadListPagesSuccess"], _state_pages_actions__WEBPACK_IMPORTED_MODULE_4__["loadListPagesFailed"], _state_pages_actions__WEBPACK_IMPORTED_MODULE_4__["loadMorePagesSuccess"], _state_pages_actions__WEBPACK_IMPORTED_MODULE_4__["loadMorePagesFailed"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            return this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["closeLoading"]());
        })), {
            dispatch: false
        });
        this.loadListPages$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_pages_actions__WEBPACK_IMPORTED_MODULE_4__["loadListPages"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.pagesService.loadListPages(action.offset, action.length).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => _state_pages_actions__WEBPACK_IMPORTED_MODULE_4__["loadListPagesSuccess"]({ pages: response.pages, total: response.total })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_pages_actions__WEBPACK_IMPORTED_MODULE_4__["loadListPagesFailed"]({ message: error })))))));
        this.loadMorePages$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_pages_actions__WEBPACK_IMPORTED_MODULE_4__["loadMorePages"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.pagesService.loadListPages(action.offset, action.length).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => _state_pages_actions__WEBPACK_IMPORTED_MODULE_4__["loadMorePagesSuccess"]({ pages: response.pages, total: response.total })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_pages_actions__WEBPACK_IMPORTED_MODULE_4__["loadMorePagesFailed"]({ message: error })))))));
    }
}
PagesEffects.ɵfac = function PagesEffects_Factory(t) { return new (t || PagesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_pages_service__WEBPACK_IMPORTED_MODULE_7__["PagesService"])); };
PagesEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PagesEffects, factory: PagesEffects.ɵfac });


/***/ }),

/***/ "dpzK":
/*!*************************************************************!*\
  !*** ./src/app/components/list-page/list-page.component.ts ***!
  \*************************************************************/
/*! exports provided: ListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageComponent", function() { return ListPageComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_pages_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/pages.actions */ "EnPu");
/* harmony import */ var _state_pages_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @state/pages.reducer */ "W+Da");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a1) { return ["/customize", a1]; };
function ListPageComponent_div_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "format_shapes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, page_r1.page_id));
} }
const _c1 = function (a1) { return ["/page", a1]; };
function ListPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ListPageComponent_div_1_a_3_Template, 3, 3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](page_r1.page_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", page_r1.theme_customize !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c1, page_r1.page_id));
} }
class ListPageComponent {
    constructor(store) {
        this.store = store;
        this.load = {
            allowToLoad: true,
            offset: 0,
            length: 10
        };
    }
    ngOnInit() {
        this.pages$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_state_pages_reducer__WEBPACK_IMPORTED_MODULE_2__["selectPages"]));
        this.store.select(_state_pages_reducer__WEBPACK_IMPORTED_MODULE_2__["selectLoad"]).subscribe((load) => {
            this.load = Object.assign({}, load);
        });
        // only load pages once
        if (this.load.allowToLoad) {
            this.store.dispatch(_state_pages_actions__WEBPACK_IMPORTED_MODULE_1__["loadListPages"](this.load.offset, this.load.length));
        }
    }
}
ListPageComponent.ɵfac = function ListPageComponent_Factory(t) { return new (t || ListPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
ListPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ListPageComponent, selectors: [["app-list-page"]], decls: 3, vars: 3, consts: [[1, "List"], ["class", "ListItem", 4, "ngFor", "ngForOf"], [1, "ListItem"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"], [1, "material-icons"]], template: function ListPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ListPageComponent_div_1_Template, 7, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx.pages$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "fsaK":
/*!******************************************!*\
  !*** ./src/app/services/page.service.ts ***!
  \******************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PageService {
    constructor(http) {
        this.http = http;
    }
    loadPage(pageId) {
        const loadPageApiUrl = `${ENV.apiUrl}/page?page_id=${pageId}`;
        return this.http.get(loadPageApiUrl);
    }
    addNewPage(page) {
        const addNewPageApiUrl = `${ENV.apiUrl}/page`;
        return this.http.post(addNewPageApiUrl, {
            'role_id': page.role_id,
            'role_group': page.role_group,
            'page_url': page.page_url,
            'page_title': page.page_title,
            'theme_id': page.theme_id,
            'variant': page.variant
        });
    }
    editPage(page) {
        const editPageApiUrl = `${ENV.apiUrl}/page`;
        const editedPage = {};
        editedPage.page_id = page.page_id;
        if (page.role_id)
            editedPage.role_id = page.role_id;
        if (page.role_group)
            editedPage.role_group = page.role_group;
        if (page.page_url)
            editedPage.page_url = page.page_url;
        if (page.page_title)
            editedPage.page_title = page.page_title;
        if (page.theme_id)
            editedPage.theme_id = page.theme_id;
        if (page.variant)
            editedPage.variant = page.variant;
        return this.http.put(editPageApiUrl, editedPage);
    }
}
PageService.ɵfac = function PageService_Factory(t) { return new (t || PageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PageService, factory: PageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "gi3F":
/*!*************************************************************!*\
  !*** ./src/app/components/list-user/list-user.component.ts ***!
  \*************************************************************/
/*! exports provided: ListUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserComponent", function() { return ListUserComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_users_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/users.actions */ "i4Yy");
/* harmony import */ var _state_users_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @state/users.reducer */ "I3PE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_moment_moment_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/moment/moment.directive */ "O169");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








const _c0 = function (a1) { return ["/user/edit", a1]; };
function ListUserComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListUserComponent_div_1_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const userIndex_r2 = ctx.index; const user_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.deleteUser(userIndex_r2, user_r1.user_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const userIndex_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "assets/users/" + user_r1.user_username + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r1.user_fullname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 6, user_r1.role_name), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r1.deleted_at ? "toggle_off" : "toggle_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appMoment", user_r1.last_login || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, userIndex_r2));
} }
class ListUserComponent {
    constructor(store) {
        this.store = store;
        this.load = {
            allowToLoad: true,
            offset: 0,
            length: 10
        };
    }
    ngOnInit() {
        this.users$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_state_users_reducer__WEBPACK_IMPORTED_MODULE_2__["selectUsers"]));
        this.store.select(_state_users_reducer__WEBPACK_IMPORTED_MODULE_2__["selectLoadInfo"]).subscribe(load => {
            this.load = Object.assign({}, load);
        });
        // only load users once
        if (this.load.allowToLoad) {
            this.store.dispatch(_state_users_actions__WEBPACK_IMPORTED_MODULE_1__["loadListUser"](this.load.offset, this.load.length));
        }
    }
    deleteUser(userIndex, userId) {
        this.store.dispatch(_state_users_actions__WEBPACK_IMPORTED_MODULE_1__["deleteUser"](userIndex, userId));
    }
}
ListUserComponent.ɵfac = function ListUserComponent_Factory(t) { return new (t || ListUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
ListUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ListUserComponent, selectors: [["app-list-user"]], decls: 3, vars: 3, consts: [[1, "Users"], ["class", "UserItems", 4, "ngFor", "ngForOf"], [1, "UserItems"], [1, "UserItemImage", 3, "src"], [1, "UserItemName"], [3, "click"], [1, "material-icons"], [1, "UserItemStatus"], ["prefix", "last login", "invalid", "never login", 3, "appMoment"], [3, "routerLink"]], template: function ListUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ListUserComponent_div_1_Template, 18, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx.users$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _directives_moment_moment_directive__WEBPACK_IMPORTED_MODULE_5__["MomentDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]], styles: [".Users[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 1rem;\n}\n\n.UserItems[_ngcontent-%COMP%] {\n  display: grid;\n  position: relative;\n  grid-template-columns: repeat(120, 1fr);\n  grid-template-rows: auto auto;\n  margin-bottom: 2rem;\n}\n\n.UserItemImage[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: auto;\n  margin-bottom: auto;\n  top: 0;\n  bottom: 0;\n  left: 1rem;\n  width: 4rem;\n  height: 4rem;\n  background: url('user.png') no-repeat #FFFFFF;\n  background-size: cover;\n  border: 0.1rem solid #FFFFFF;\n}\n\n.UserItemName[_ngcontent-%COMP%] {\n  display: flex;\n  grid-column: 1/span 120;\n  grid-row: 1;\n  padding-right: 1rem;\n  padding-left: 7rem;\n  justify-content: flex-start;\n  align-items: center;\n  background: #000A12;\n}\n\n.UserItemName[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  justify-content: flex-start;\n  align-items: center;\n  min-height: 3rem;\n}\n\n.UserItemName[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-top: 0.25rem;\n  padding-right: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.25rem;\n  font-size: 0.85rem;\n  color: #FFFFFF;\n}\n\n.UserItemName[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  padding-top: 0.25rem;\n  padding-right: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.25rem;\n  font-size: 0.5rem;\n  color: #FFFFFF;\n}\n\n.UserItemName[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.UserItemName[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #FFFFFF;\n}\n\n.UserItemStatus[_ngcontent-%COMP%] {\n  display: flex;\n  grid-column: 1/span 120;\n  grid-row: 2;\n  padding-right: 1rem;\n  padding-left: 7rem;\n  justify-content: flex-start;\n  align-items: center;\n  background: #FFFFFF;\n}\n\n.UserItemStatus[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  justify-content: flex-start;\n  align-items: center;\n  min-height: 3rem;\n}\n\n.UserItemStatus[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-top: 0.25rem;\n  padding-right: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.25rem;\n  font-size: 0.85rem;\n  color: #333333;\n}\n\n.UserItemStatus[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  padding-top: 0.25rem;\n  padding-right: 0.25rem;\n  padding-bottom: 0.25rem;\n  padding-left: 0.25rem;\n  font-size: 0.5rem;\n  color: #FFFFFF;\n}\n\n.UserItemStatus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.UserItemStatus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpc3QtdXNlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkNsQ1k7QURvQ2Q7O0FBQUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFJO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNDN0NRO0FEK0NkOztBQUFJO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNDckRRO0FEdURkOztBQUNFO0VBQ0UscUJBQUE7QUFDSjs7QUFDSTtFQUNFLGlCQUFBO0VBQ0EsY0M3RFE7QUQ4RGQ7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkN2RVE7QURzRVY7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdJO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNDbkZRO0FEa0ZkOztBQUdJO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNDakdRO0FEZ0dkOztBQUlFO0VBQ0UscUJBQUE7QUFGSjs7QUFJSTtFQUNFLGVBQUE7RUFDQSxjQ25HUTtBRGlHZCIsImZpbGUiOiJsaXN0LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vcGFsZXR0ZS5zY3NzXCI7XG5cbi5Vc2VycyB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuLlVzZXJJdGVtcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5Vc2VySXRlbUltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMXJlbTtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL3VzZXIucG5nJykgbm8tcmVwZWF0ICRiYWNrZ3JvdW5kO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCAkdGV4dFByaW1hcnk7XG59XG4uVXNlckl0ZW1OYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDEyMDtcbiAgZ3JpZC1yb3c6IDE7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIHBhZGRpbmctbGVmdDogN3JlbTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeURhcms7XG5cbiAgcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogM3JlbTtcblxuICAgIHNwYW4ge1xuICAgICAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICBjb2xvcjogJHRleHRQcmltYXJ5O1xuICAgIH1cbiAgICBzbWFsbCB7XG4gICAgICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xuICAgICAgY29sb3I6ICR0ZXh0UHJpbWFyeTtcbiAgICB9XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGNvbG9yOiAkdGV4dFByaW1hcnk7XG4gICAgfVxuICB9XG59XG5cbi5Vc2VySXRlbVN0YXR1cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxMjA7XG4gIGdyaWQtcm93OiAyO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDdyZW07XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogJHN1cmZhY2U7XG5cbiAgcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogM3JlbTtcblxuICAgIHNwYW4ge1xuICAgICAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICBjb2xvcjogJHRleHRTdXJmYWNlO1xuICAgIH1cbiAgICBzbWFsbCB7XG4gICAgICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgICAgIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xuICAgICAgY29sb3I6ICR0ZXh0UHJpbWFyeTtcbiAgICB9XG4gIH1cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBjb2xvcjogJHRleHRTdXJmYWNlO1xuICAgIH1cbiAgfVxufVxuIiwiJHByaW1hcnk6ICMyNjMyMzg7XG4kcHJpbWFyeUxpZ2h0OiAjNEY1QjYyO1xuJHByaW1hcnlEYXJrOiAjMDAwQTEyO1xuJHNlY29uZGFyeTogIzBENDdBMTtcbiRzZWNvbmRhcnlMaWdodDogIzU0NzJEMztcbiRzZWNvbmRhcnlEYXJrOiAjMDAyMTcxO1xuJHRleHRQcmltYXJ5OiAjRkZGRkZGO1xuJHRleHRTZWNvbmRhcnk6ICNGRkZGRkY7XG4kYmFja2dyb3VuZDogI0ZGRkZGRjtcbiRzdXJmYWNlOiAjRkZGRkZGO1xuJGVycm9yOiAjQjcxQzFDO1xuJHRleHRCYWNrZ3JvdW5kOiAjMzMzMzMzO1xuJHRleHRTdXJmYWNlOiAjMzMzMzMzO1xuIl19 */"] });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _state_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state/auth.actions */ "Kaqs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");



class NavbarComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.subscribe(state => {
            this.user_fullname = state.auth.user_fullname;
            this.user_username = state.auth.user_username;
        });
    }
    logout() {
        this.store.dispatch(_state_auth_actions__WEBPACK_IMPORTED_MODULE_0__["logoutAsUser"]());
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 4, vars: 2, consts: [[1, "Navbar"], [1, "Userimg", 3, "src"], [1, "Fullname", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_p_click_2_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/users/" + ctx.user_username + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user_fullname);
    } }, styles: [".Navbar[_ngcontent-%COMP%] {\n  display: flex;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 5rem;\n  background: #FFFFFF;\n}\n\n.Navbar[_ngcontent-%COMP%]   .Userimg[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  overflow: hidden;\n  background: #F0F0F0;\n  background-size: cover;\n  border-radius: 100%;\n  border: 0.1rem solid #333333;\n}\n\n.Navbar[_ngcontent-%COMP%]   .Fullname[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n  padding-left: 1rem;\n  flex-grow: 1;\n  font-size: 1rem;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhbGV0dGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJDRlc7QURDYjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQUFGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0NmZTtBRGdCakIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3BhbGV0dGUuc2Nzc1wiO1xuXG4uTmF2YmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVyZW07XG4gIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xufVxuLk5hdmJhciAuVXNlcmltZyB7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNGMEYwRjA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICR0ZXh0QmFja2dyb3VuZDtcbn1cbi5OYXZiYXIgLkZ1bGxuYW1lIHtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6ICR0ZXh0QmFja2dyb3VuZDtcbn1cbiIsIiRwcmltYXJ5OiAjMjYzMjM4O1xuJHByaW1hcnlMaWdodDogIzRGNUI2MjtcbiRwcmltYXJ5RGFyazogIzAwMEExMjtcbiRzZWNvbmRhcnk6ICMwRDQ3QTE7XG4kc2Vjb25kYXJ5TGlnaHQ6ICM1NDcyRDM7XG4kc2Vjb25kYXJ5RGFyazogIzAwMjE3MTtcbiR0ZXh0UHJpbWFyeTogI0ZGRkZGRjtcbiR0ZXh0U2Vjb25kYXJ5OiAjRkZGRkZGO1xuJGJhY2tncm91bmQ6ICNGRkZGRkY7XG4kc3VyZmFjZTogI0ZGRkZGRjtcbiRlcnJvcjogI0I3MUMxQztcbiR0ZXh0QmFja2dyb3VuZDogIzMzMzMzMztcbiR0ZXh0U3VyZmFjZTogIzMzMzMzMztcbiJdfQ== */"] });


/***/ }),

/***/ "i4Yy":
/*!****************************************!*\
  !*** ./src/app/state/users.actions.ts ***!
  \****************************************/
/*! exports provided: UsersTypes, loadListUser, loadListUserSuccess, loadListUserFailed, loadMoreUsers, loadMoreUsersSuccess, loadMoreUsersFailed, deleteUser, deleteUserSuccess, deleteUserFailed, addNewUser, resetListUsersState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersTypes", function() { return UsersTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListUser", function() { return loadListUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListUserSuccess", function() { return loadListUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListUserFailed", function() { return loadListUserFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreUsers", function() { return loadMoreUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreUsersSuccess", function() { return loadMoreUsersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoreUsersFailed", function() { return loadMoreUsersFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUserSuccess", function() { return deleteUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUserFailed", function() { return deleteUserFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewUser", function() { return addNewUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetListUsersState", function() { return resetListUsersState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var UsersTypes;
(function (UsersTypes) {
    UsersTypes["LOAD_LIST_USERS"] = "[Users] Load List Users";
    UsersTypes["LOAD_LIST_USERS_SUCCESS"] = "[Users] Load List Users Success";
    UsersTypes["LOAD_LIST_USERS_FAILED"] = "[Users] Load List Users Failed";
    UsersTypes["LOAD_MORE_USERS"] = "[Users] Load More Users";
    UsersTypes["LOAD_MORE_USERS_SUCCESS"] = "[Users] Load More Users Success";
    UsersTypes["LOAD_MORE_USERS_FAILED"] = "[Users] Load More Users Failed";
    UsersTypes["DELETE_USER"] = "[Users] Delete User";
    UsersTypes["DELETE_USER_SUCCESS"] = "[Users] Delete User Success";
    UsersTypes["DELETE_USER_FAILED"] = "[Users] Delete User Failed";
    UsersTypes["ADD_NEW_USER"] = "[Users] Add New User";
    UsersTypes["RESET_LIST_USERS_STATE"] = "[Users] Reset Users State";
})(UsersTypes || (UsersTypes = {}));
const loadListUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UsersTypes.LOAD_LIST_USERS, (offset, length) => ({
    offset: offset,
    length: length,
    message: 'load list users'
}));
const loadListUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UsersTypes.LOAD_LIST_USERS_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadListUserFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UsersTypes.LOAD_LIST_USERS_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadMoreUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UsersTypes.LOAD_MORE_USERS, (offset, length) => ({
    offset: offset,
    length: length,
    message: 'load more users'
}));
const loadMoreUsersSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UsersTypes.LOAD_MORE_USERS_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadMoreUsersFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UsersTypes.LOAD_MORE_USERS_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UsersTypes.DELETE_USER, (userIndex, userId) => ({
    user_index: userIndex,
    user_id: userId,
    message: 'delete user'
}));
const deleteUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UsersTypes.DELETE_USER_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteUserFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UsersTypes.DELETE_USER_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addNewUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UsersTypes.ADD_NEW_USER, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const resetListUsersState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UsersTypes.RESET_LIST_USERS_STATE);


/***/ }),

/***/ "jgOj":
/*!****************************************!*\
  !*** ./src/app/state/roles.reducer.ts ***!
  \****************************************/
/*! exports provided: initialState, reducer, selectRoles, selectLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRoles", function() { return selectRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoad", function() { return selectLoad; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_roles_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/roles.actions */ "2Hr6");


const initialState = {
    roles: [],
    load: {
        offset: 0,
        length: 10,
        total: 0
    }
};
const rolesReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_roles_actions__WEBPACK_IMPORTED_MODULE_1__["loadListRoles"], (state, action) => (Object.assign(Object.assign({}, state), { load: Object.assign(Object.assign({}, state.load), { offset: action.offset, length: action.length }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_roles_actions__WEBPACK_IMPORTED_MODULE_1__["loadListRolesSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { roles: action.roles, load: Object.assign(Object.assign({}, state.load), { total: action.total }) }))));
function reducer(state, action) {
    return rolesReducer(state, action);
}
const getRolesFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('roles');
const selectRoles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRolesFeatureState, (state) => state.roles);
const selectLoad = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getRolesFeatureState, (state) => state.load);


/***/ }),

/***/ "jlYJ":
/*!***************************************!*\
  !*** ./src/app/state/page.actions.ts ***!
  \***************************************/
/*! exports provided: PageTypes, loadPage, loadPageSuccess, loadPageFailed, addNewPage, addNewPageSuccess, addNewPageFailed, editPage, editPageSuccess, editPageFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTypes", function() { return PageTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPage", function() { return loadPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPageSuccess", function() { return loadPageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPageFailed", function() { return loadPageFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewPage", function() { return addNewPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewPageSuccess", function() { return addNewPageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewPageFailed", function() { return addNewPageFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPage", function() { return editPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPageSuccess", function() { return editPageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPageFailed", function() { return editPageFailed; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var PageTypes;
(function (PageTypes) {
    PageTypes["LOAD_PAGE"] = "[Page] Load Page";
    PageTypes["LOAD_PAGE_SUCCESS"] = "[Page] Load Page Success";
    PageTypes["LOAD_PAGE_FAILED"] = "[Page] Load Page Failed";
    PageTypes["ADD_NEW_PAGE"] = "[Page] Add New Page";
    PageTypes["ADD_NEW_PAGE_SUCCESS"] = "[Page] Add New Page Success";
    PageTypes["ADD_NEW_PAGE_FAILED"] = "[Page] Add New Page Failed";
    PageTypes["EDIT_PAGE"] = "[Page] Edit Page";
    PageTypes["EDIT_PAGE_SUCCESS"] = "[Page] Edit Page Success";
    PageTypes["EDIT_PAGE_FAILED"] = "[Page] Edit Page Failed";
})(PageTypes || (PageTypes = {}));
const loadPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PageTypes.LOAD_PAGE, (pageId) => ({
    page_id: pageId,
    message: 'load page'
}));
const loadPageSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PageTypes.LOAD_PAGE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadPageFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PageTypes.LOAD_PAGE_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addNewPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PageTypes.ADD_NEW_PAGE, (page) => ({
    page: page,
    message: 'add new page'
}));
const addNewPageSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PageTypes.ADD_NEW_PAGE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addNewPageFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PageTypes.ADD_NEW_PAGE_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const editPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PageTypes.EDIT_PAGE, (page) => ({
    page: page,
    message: 'edit page'
}));
const editPageSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PageTypes.EDIT_PAGE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const editPageFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PageTypes.EDIT_PAGE_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class AuthService {
    constructor(http) {
        this.http = http;
    }
    checkUser() {
        const checkSessionApiUrl = `${ENV.apiUrl}/user`;
        return this.http.get(checkSessionApiUrl);
    }
    registerNewUser(user) {
        const registerApiUrl = `${ENV.apiUrl}/register`;
        return this.http.post(registerApiUrl, {
            'fullname': user.user_fullname,
            'email': user.user_email,
            'username': user.user_username,
            'password': user.user_password
        });
    }
    loginAsUser(user) {
        const loginApiUrl = `${ENV.apiUrl}/login`;
        return this.http.post(loginApiUrl, {
            'username': user.user_username,
            'password': user.user_password
        });
    }
    logoutAsUser() {
        const logoutApiUrl = `${ENV.apiUrl}/logout`;
        return this.http.get(logoutApiUrl);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lZJt":
/*!***************************************************!*\
  !*** ./src/app/components/apis/apis.component.ts ***!
  \***************************************************/
/*! exports provided: ApisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApisComponent", function() { return ApisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _menus_menus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menus/menus.component */ "3LCl");
/* harmony import */ var _list_api_list_api_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-api/list-api.component */ "2ALx");




class ApisComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApisComponent.ɵfac = function ApisComponent_Factory(t) { return new (t || ApisComponent)(); };
ApisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApisComponent, selectors: [["app-apis"]], decls: 10, vars: 0, consts: [["id", "Apis"], [1, "Content"], [1, "LoadMore"], [1, "material-icons"]], template: function ApisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-list-api");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "load more api");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _menus_menus_component__WEBPACK_IMPORTED_MODULE_2__["MenusComponent"], _list_api_list_api_component__WEBPACK_IMPORTED_MODULE_3__["ListApiComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcGlzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "m88C":
/*!**********************************************!*\
  !*** ./src/app/services/resource.service.ts ***!
  \**********************************************/
/*! exports provided: ResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceService", function() { return ResourceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ResourceService {
    constructor(http) {
        this.http = http;
    }
    loadResource(resourceId) {
        const loadResourceApiUrl = `${ENV.apiUrl}/resource?resource_id=${resourceId}`;
        return this.http.get(loadResourceApiUrl);
    }
    editResource(resource) {
        const editResource = `${ENV.apiUrl}/resource`;
        return this.http.put(editResource, {
            resource_id: resource.resource_id,
            role_id: resource.role_id,
            role_group: resource.role_group
        });
    }
}
ResourceService.ɵfac = function ResourceService_Factory(t) { return new (t || ResourceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ResourceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ResourceService, factory: ResourceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mvyS":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function (a0) { return [a0]; };
class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], inputs: { title: "title", backlink: "backlink" }, decls: 6, vars: 4, consts: [[1, "Navigation"], [1, "NavigationBack", 3, "routerLink"], [1, "material-icons"], [1, "NavigationTitle"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backlink));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".Navigation[_ngcontent-%COMP%] {\n  display: flex;\n  padding-right: 1rem;\n  padding-left: 1rem;\n  justify-content: flex-start;\n  align-items: center;\n  height: 4.5rem;\n  background: #263238;\n}\n\n.NavigationBack[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  font-size: 1.5rem;\n  color: #FFFFFF;\n  text-decoration: none;\n}\n\n.NavigationTitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: normal;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJDVFE7QURRVjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ1JZO0VEU1oscUJBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNDZFk7QURlZCIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vcGFsZXR0ZS5zY3NzJztcblxuLk5hdmlnYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA0LjVyZW07XG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xufVxuLk5hdmlnYXRpb25CYWNrIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICR0ZXh0UHJpbWFyeTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLk5hdmlnYXRpb25UaXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICR0ZXh0UHJpbWFyeTtcbn1cbiIsIiRwcmltYXJ5OiAjMjYzMjM4O1xuJHByaW1hcnlMaWdodDogIzRGNUI2MjtcbiRwcmltYXJ5RGFyazogIzAwMEExMjtcbiRzZWNvbmRhcnk6ICMwRDQ3QTE7XG4kc2Vjb25kYXJ5TGlnaHQ6ICM1NDcyRDM7XG4kc2Vjb25kYXJ5RGFyazogIzAwMjE3MTtcbiR0ZXh0UHJpbWFyeTogI0ZGRkZGRjtcbiR0ZXh0U2Vjb25kYXJ5OiAjRkZGRkZGO1xuJGJhY2tncm91bmQ6ICNGRkZGRkY7XG4kc3VyZmFjZTogI0ZGRkZGRjtcbiRlcnJvcjogI0I3MUMxQztcbiR0ZXh0QmFja2dyb3VuZDogIzMzMzMzMztcbiR0ZXh0U3VyZmFjZTogIzMzMzMzMztcbiJdfQ== */"] });


/***/ }),

/***/ "nHPL":
/*!****************************************!*\
  !*** ./src/app/state/users.effects.ts ***!
  \****************************************/
/*! exports provided: UsersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEffects", function() { return UsersEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_exception_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/exception.actions */ "+1bY");
/* harmony import */ var _state_users_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/users.actions */ "i4Yy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/users.service */ "6Qg2");









class UsersEffects {
    constructor(store, action$, usersService) {
        this.store = store;
        this.action$ = action$;
        this.usersService = usersService;
        this.processStart$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_users_actions__WEBPACK_IMPORTED_MODULE_4__["loadListUser"], _state_users_actions__WEBPACK_IMPORTED_MODULE_4__["loadMoreUsers"], _state_users_actions__WEBPACK_IMPORTED_MODULE_4__["deleteUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["openLoading"]({ message: action.message }));
        })), {
            dispatch: false
        });
        this.processDone$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_users_actions__WEBPACK_IMPORTED_MODULE_4__["loadListUserSuccess"], _state_users_actions__WEBPACK_IMPORTED_MODULE_4__["loadListUserFailed"], _state_users_actions__WEBPACK_IMPORTED_MODULE_4__["loadMoreUsersSuccess"], _state_users_actions__WEBPACK_IMPORTED_MODULE_4__["loadMoreUsersFailed"], _state_users_actions__WEBPACK_IMPORTED_MODULE_4__["deleteUserSuccess"], _state_users_actions__WEBPACK_IMPORTED_MODULE_4__["deleteUserFailed"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["closeLoading"]());
        })), {
            dispatch: false
        });
        this.loadUsers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_users_actions__WEBPACK_IMPORTED_MODULE_4__["loadListUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.usersService.loadListUser(action.offset, action.length).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => _state_users_actions__WEBPACK_IMPORTED_MODULE_4__["loadListUserSuccess"]({ users: response.users, total: response.total })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_users_actions__WEBPACK_IMPORTED_MODULE_4__["loadListUserFailed"]({ message: error })))))));
        this.loadMoreUsers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_users_actions__WEBPACK_IMPORTED_MODULE_4__["loadMoreUsers"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.usersService.loadListUser(action.offset, action.length).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => _state_users_actions__WEBPACK_IMPORTED_MODULE_4__["loadMoreUsersSuccess"]({ users: response.users, total: response.total })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_users_actions__WEBPACK_IMPORTED_MODULE_4__["loadMoreUsersFailed"]({ message: error })))))));
        this.deleteUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_users_actions__WEBPACK_IMPORTED_MODULE_4__["deleteUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.usersService.deleteUser(action.user_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => _state_users_actions__WEBPACK_IMPORTED_MODULE_4__["deleteUserSuccess"]({
            user_index: action.user_index,
            user: response.user,
            message: response.message
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_users_actions__WEBPACK_IMPORTED_MODULE_4__["deleteUserFailed"]({ message: error })))))));
    }
}
UsersEffects.ɵfac = function UsersEffects_Factory(t) { return new (t || UsersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"])); };
UsersEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UsersEffects, factory: UsersEffects.ɵfac });


/***/ }),

/***/ "nMPd":
/*!*********************************************************!*\
  !*** ./src/app/components/version/version.component.ts ***!
  \*********************************************************/
/*! exports provided: VersionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionComponent", function() { return VersionComponent; });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class VersionComponent {
    constructor() { }
    ngOnInit() {
        this.appName = ENV.appName;
        this.version = environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].version;
    }
}
VersionComponent.ɵfac = function VersionComponent_Factory(t) { return new (t || VersionComponent)(); };
VersionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VersionComponent, selectors: [["app-version"]], decls: 2, vars: 2, template: function VersionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.appName, " v", ctx.version, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJzaW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "obnO":
/*!*************************************************************************!*\
  !*** ./src/app/components/select-variants/select-variants.component.ts ***!
  \*************************************************************************/
/*! exports provided: SelectVariantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectVariantsComponent", function() { return SelectVariantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_themes_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @state/themes.reducer */ "pilm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SelectVariantsComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const variant_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r1.variantName === variant_r2)("value", variant_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](variant_r2);
} }
class SelectVariantsComponent {
    constructor(store) {
        this.store = store;
        this.selectedVariantName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set themeId(value) {
        this._themeId = value;
        if (this.variants$) {
            this.variantName = null;
            this.setVariants(value);
        }
    }
    get themeId() {
        return this._themeId;
    }
    ngOnInit() {
        this.setVariants(this.themeId);
    }
    setVariants(themeId) {
        this.variants$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_themes_reducer__WEBPACK_IMPORTED_MODULE_2__["selectVariants"], themeId));
    }
    variantChange(variantName) {
        this.selectedVariantName.emit(variantName);
    }
}
SelectVariantsComponent.ɵfac = function SelectVariantsComponent_Factory(t) { return new (t || SelectVariantsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
SelectVariantsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectVariantsComponent, selectors: [["app-select-variants"]], inputs: { variantName: "variantName", themeId: "themeId" }, outputs: { selectedVariantName: "selectedVariantName" }, decls: 7, vars: 4, consts: [[1, "Select"], ["name", "variant", 3, "change"], ["selectVariant", ""], ["value", "none", 3, "selected"], [3, "selected", "value", 4, "ngFor", "ngForOf"], [3, "selected", "value"]], template: function SelectVariantsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectVariantsComponent_Template_select_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.variantChange(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectVariantsComponent_option_5_Template, 2, 3, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.variantName === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.variants$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtdmFyaWFudHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "onZX":
/*!********************************************!*\
  !*** ./src/app/services/themes.service.ts ***!
  \********************************************/
/*! exports provided: ThemesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesService", function() { return ThemesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ThemesService {
    constructor(http) {
        this.http = http;
    }
    loadListThemes(offset, length) {
        const listThemesApiUrl = `${ENV.apiUrl}/themes?offset=${offset}&length=${length}`;
        return this.http.get(listThemesApiUrl);
    }
}
ThemesService.ɵfac = function ThemesService_Factory(t) { return new (t || ThemesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ThemesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemesService, factory: ThemesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "p2EJ":
/*!********************************************!*\
  !*** ./src/app/state/resources.reducer.ts ***!
  \********************************************/
/*! exports provided: initialState, reducer, selectResources, selectLoad, selectResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectResources", function() { return selectResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoad", function() { return selectLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectResource", function() { return selectResource; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_resources_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/resources.actions */ "x186");


const initialState = {
    resources: [],
    load: {
        allowToLoad: true,
        offset: 0,
        length: 10
    }
};
const resourceReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_resources_actions__WEBPACK_IMPORTED_MODULE_1__["loadListResources"], (state, action) => (Object.assign(Object.assign({}, state), { load: Object.assign(Object.assign({}, state.load), { offset: action.offset, length: action.length }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_resources_actions__WEBPACK_IMPORTED_MODULE_1__["loadListResourcesSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { resources: action.resources, load: Object.assign(Object.assign({}, state.load), { allowToLoad: false, total: action.total }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_resources_actions__WEBPACK_IMPORTED_MODULE_1__["editResource"], (state, action) => {
    const newState = Object.assign({}, state);
    newState.resources = newState.resources.map((resource, index) => {
        if (parseInt(action.resource_index) === index) {
            return action.resource;
        }
        else {
            return resource;
        }
    });
    return newState;
}));
function reducer(state, action) {
    return resourceReducer(state, action);
}
const getResourcesFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('resources');
const selectResources = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getResourcesFeatureState, (state) => state.resources);
const selectLoad = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getResourcesFeatureState, (state) => state.load);
const selectResource = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getResourcesFeatureState, (state, resourceId) => {
    for (var resource of state.resources) {
        if (resource.resource_id === resourceId) {
            return resource;
        }
    }
    return null;
});


/***/ }),

/***/ "pilm":
/*!*****************************************!*\
  !*** ./src/app/state/themes.reducer.ts ***!
  \*****************************************/
/*! exports provided: initialState, reducer, selectThemes, selectLoad, selectVariants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectThemes", function() { return selectThemes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoad", function() { return selectLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectVariants", function() { return selectVariants; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_themes_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/themes.actions */ "YXwe");


;
const initialState = {
    themes: [],
    load: {
        allowToLoad: true,
        offset: 0,
        length: 10,
        total: 0
    }
};
const themesReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_themes_actions__WEBPACK_IMPORTED_MODULE_1__["loadListThemes"], (state, action) => (Object.assign(Object.assign({}, state), { load: Object.assign(Object.assign({}, state.load), { offset: action.offset, length: action.length }) }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_state_themes_actions__WEBPACK_IMPORTED_MODULE_1__["loadListThemesSuccess"], (state, action) => (Object.assign(Object.assign({}, state), { themes: state.themes.concat(action.themes), load: Object.assign(Object.assign({}, state.load), { allowToLoad: false, total: (state.load.total + action.total) }) }))));
function reducer(state, action) {
    return themesReducer(state, action);
}
const getThemesFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('themes');
const selectThemes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getThemesFeatureState, (state) => state.themes);
const selectLoad = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getThemesFeatureState, (state) => state.load);
const selectVariants = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getThemesFeatureState, (state, themeId) => {
    let variants = [];
    for (var theme of state.themes) {
        if (theme.theme_id === themeId) {
            variants = theme.theme_components;
            break;
        }
    }
    return variants;
});


/***/ }),

/***/ "q+Y8":
/*!*******************************************!*\
  !*** ./src/app/state/resource.effects.ts ***!
  \*******************************************/
/*! exports provided: ResourceEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceEffects", function() { return ResourceEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_exception_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/exception.actions */ "+1bY");
/* harmony import */ var _state_resource_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/resource.actions */ "EmAT");
/* harmony import */ var _state_resources_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @state/resources.actions */ "x186");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_resource_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/resource.service */ "m88C");










class ResourceEffects {
    constructor(action$, store, resourceService) {
        this.action$ = action$;
        this.store = store;
        this.resourceService = resourceService;
        this.processStart$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_resource_actions__WEBPACK_IMPORTED_MODULE_4__["loadResource"], _state_resource_actions__WEBPACK_IMPORTED_MODULE_4__["editResource"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["openLoading"]({ message: action.message }));
        })), {
            dispatch: false
        });
        this.processDone$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_resource_actions__WEBPACK_IMPORTED_MODULE_4__["loadResourceSuccess"], _state_resource_actions__WEBPACK_IMPORTED_MODULE_4__["loadResourceFailed"], _state_resource_actions__WEBPACK_IMPORTED_MODULE_4__["editResourceSuccess"], _state_resource_actions__WEBPACK_IMPORTED_MODULE_4__["editResourceFailed"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["newMessage"]({ message: action.message }));
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["closeLoading"]());
        })), {
            dispatch: false
        });
        this.loadResource$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_resource_actions__WEBPACK_IMPORTED_MODULE_4__["loadResource"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.resourceService.loadResource(action.resourceId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => _state_resource_actions__WEBPACK_IMPORTED_MODULE_4__["loadResourceSuccess"]({ resource: response.resource })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_resource_actions__WEBPACK_IMPORTED_MODULE_4__["loadResourceFailed"]({ message: error })))))));
        this.editResource$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_resource_actions__WEBPACK_IMPORTED_MODULE_4__["editResource"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.resourceService.editResource(action.resource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            this.store.dispatch(_state_resources_actions__WEBPACK_IMPORTED_MODULE_5__["editResource"]({
                resource_index: action.resource_index,
                resource: response.resource
            }));
            return _state_resource_actions__WEBPACK_IMPORTED_MODULE_4__["editResourceSuccess"]({
                resource: response.resource,
                message: response.message
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_resource_actions__WEBPACK_IMPORTED_MODULE_4__["editResourceFailed"]({ message: error })))))));
    }
}
ResourceEffects.ɵfac = function ResourceEffects_Factory(t) { return new (t || ResourceEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_resource_service__WEBPACK_IMPORTED_MODULE_8__["ResourceService"])); };
ResourceEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: ResourceEffects, factory: ResourceEffects.ɵfac });


/***/ }),

/***/ "qQYQ":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _state_exception_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state/exception.reducer */ "NkTF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function LoadingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.loading.message);
} }
class LoadingComponent {
    constructor(store) {
        this.store = store;
        this.loading = {
            state: false,
            message: ''
        };
    }
    ngOnInit() {
        this.store.select(_state_exception_reducer__WEBPACK_IMPORTED_MODULE_0__["selectLoading"]).subscribe((loading) => {
            this.loading = Object.assign({}, loading);
        });
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 1, vars: 1, consts: [["class", "Loading", 4, "ngIf"], [1, "Loading"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoadingComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading.state);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".Loading[_ngcontent-%COMP%] {\n  display: flex;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: rgba(38, 50, 56, 0.85);\n}\n\n.Loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUFERjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsY0NaWTtBRFlkIiwiZmlsZSI6ImxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9wYWxldHRlLnNjc3MnO1xuXG4uTG9hZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgzOCwgNTAsIDU2LCAwLjg1KTtcbn1cbi5Mb2FkaW5nIHAge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGNvbG9yOiAkdGV4dFByaW1hcnk7XG59XG4iLCIkcHJpbWFyeTogIzI2MzIzODtcbiRwcmltYXJ5TGlnaHQ6ICM0RjVCNjI7XG4kcHJpbWFyeURhcms6ICMwMDBBMTI7XG4kc2Vjb25kYXJ5OiAjMEQ0N0ExO1xuJHNlY29uZGFyeUxpZ2h0OiAjNTQ3MkQzO1xuJHNlY29uZGFyeURhcms6ICMwMDIxNzE7XG4kdGV4dFByaW1hcnk6ICNGRkZGRkY7XG4kdGV4dFNlY29uZGFyeTogI0ZGRkZGRjtcbiRiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuJHN1cmZhY2U6ICNGRkZGRkY7XG4kZXJyb3I6ICNCNzFDMUM7XG4kdGV4dEJhY2tncm91bmQ6ICMzMzMzMzM7XG4kdGV4dFN1cmZhY2U6ICMzMzMzMzM7XG4iXX0= */"] });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class UserService {
    constructor(http) {
        this.http = http;
    }
    addNewUser(user) {
        const addNewUserApiUrl = `${ENV.apiUrl}/user`;
        return this.http.post(addNewUserApiUrl, {
            'fullname': user.user_fullname,
            'email': user.user_email,
            'username': user.user_username,
            'password': user.user_password
        });
    }
    editUser(user) {
        const editUserApiUrl = `${ENV.apiUrl}/user`;
        const editedUser = {};
        editedUser.user_id = user.user_id;
        if (user.user_fullname)
            editedUser.fullname = user.user_fullname;
        if (user.user_email)
            editedUser.email = user.user_email;
        if (user.user_username)
            editedUser.username = user.user_username;
        if (user.user_password)
            editedUser.password = user.user_password;
        return this.http.put(editUserApiUrl, editedUser);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "unFy":
/*!***************************************!*\
  !*** ./src/app/state/page.effects.ts ***!
  \***************************************/
/*! exports provided: PageEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEffects", function() { return PageEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_exception_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/exception.actions */ "+1bY");
/* harmony import */ var _state_page_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/page.actions */ "jlYJ");
/* harmony import */ var _state_pages_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @state/pages.actions */ "EnPu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/page.service */ "fsaK");










class PageEffects {
    constructor(action$, store, pageService) {
        this.action$ = action$;
        this.store = store;
        this.pageService = pageService;
        this.processStart$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_page_actions__WEBPACK_IMPORTED_MODULE_4__["loadPage"], _state_page_actions__WEBPACK_IMPORTED_MODULE_4__["addNewPage"], _state_page_actions__WEBPACK_IMPORTED_MODULE_4__["editPage"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["openLoading"]({ message: action.message }));
        })), {
            dispatch: false
        });
        this.processDone$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_page_actions__WEBPACK_IMPORTED_MODULE_4__["loadPageSuccess"], _state_page_actions__WEBPACK_IMPORTED_MODULE_4__["loadPageFailed"], _state_page_actions__WEBPACK_IMPORTED_MODULE_4__["addNewPageSuccess"], _state_page_actions__WEBPACK_IMPORTED_MODULE_4__["addNewPageFailed"], _state_page_actions__WEBPACK_IMPORTED_MODULE_4__["editPageSuccess"], _state_page_actions__WEBPACK_IMPORTED_MODULE_4__["editPageFailed"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["newMessage"]({ message: action.message }));
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["closeLoading"]());
        })), {
            dispatch: false
        });
        this.loadPage$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_page_actions__WEBPACK_IMPORTED_MODULE_4__["loadPage"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.pageService.loadPage(action.page_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => _state_page_actions__WEBPACK_IMPORTED_MODULE_4__["loadPageSuccess"]({ page: response.page })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_page_actions__WEBPACK_IMPORTED_MODULE_4__["loadPageFailed"]({ message: error })))))));
        this.addNewPage$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_page_actions__WEBPACK_IMPORTED_MODULE_4__["addNewPage"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.pageService.addNewPage(action.page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => {
            this.store.dispatch(_state_pages_actions__WEBPACK_IMPORTED_MODULE_5__["addNewPage"]({ page: response.page }));
            return _state_page_actions__WEBPACK_IMPORTED_MODULE_4__["addNewPageSuccess"]({ message: response.message });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_page_actions__WEBPACK_IMPORTED_MODULE_4__["addNewPageFailed"]({ message: error })))))));
        this.editPage$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_page_actions__WEBPACK_IMPORTED_MODULE_4__["editPage"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.pageService.editPage(action.page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => _state_page_actions__WEBPACK_IMPORTED_MODULE_4__["editPageSuccess"]({ page: response.page, message: response.message })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_page_actions__WEBPACK_IMPORTED_MODULE_4__["editPageFailed"]({ message: error })))))));
    }
}
PageEffects.ɵfac = function PageEffects_Factory(t) { return new (t || PageEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_page_service__WEBPACK_IMPORTED_MODULE_8__["PageService"])); };
PageEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: PageEffects, factory: PageEffects.ɵfac });


/***/ }),

/***/ "us4F":
/*!***************************************!*\
  !*** ./src/app/state/user.actions.ts ***!
  \***************************************/
/*! exports provided: UserTypes, addNewUser, addNewUserSuccess, addNewUserFailed, editUser, editUserSuccess, editUserFailed, resetUserState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTypes", function() { return UserTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewUser", function() { return addNewUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewUserSuccess", function() { return addNewUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewUserFailed", function() { return addNewUserFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editUser", function() { return editUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editUserSuccess", function() { return editUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editUserFailed", function() { return editUserFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetUserState", function() { return resetUserState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var UserTypes;
(function (UserTypes) {
    UserTypes["ADD_NEW_USER"] = "[User] Add New User";
    UserTypes["ADD_NEW_USER_SUCCESS"] = "[User] Add New User Success";
    UserTypes["ADD_NEW_USER_FAILED"] = "[User] Add New User Failed";
    UserTypes["EDIT_USER"] = "[User] Edit User";
    UserTypes["EDIT_USER_SUCCESS"] = "[User] Edit User Success";
    UserTypes["EDIT_USER_FAILED"] = "[User] Edit User Failed";
    UserTypes["RESET_USER_STATE"] = "[User] Reset User State";
})(UserTypes || (UserTypes = {}));
const addNewUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UserTypes.ADD_NEW_USER, (user) => ({
    user: user,
    message: 'add new user'
}));
const addNewUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UserTypes.ADD_NEW_USER_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addNewUserFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UserTypes.ADD_NEW_USER_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const editUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UserTypes.EDIT_USER, (user) => ({
    user: user,
    message: 'edit user'
}));
const editUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UserTypes.EDIT_USER_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const editUserFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UserTypes.EDIT_USER_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const resetUserState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UserTypes.RESET_USER_STATE);


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth.guard */ "+VzF");
/* harmony import */ var _services_user_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/user.guard */ "EPRI");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/register/register.component */ "XC3f");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/login/login.component */ "W3Zi");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/users/users.component */ "Hkgh");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/user/user.component */ "ytin");
/* harmony import */ var _components_pages_pages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/pages/pages.component */ "XVkB");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/page/page.component */ "ycSy");
/* harmony import */ var _components_customize_customize_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/customize/customize.component */ "72XM");
/* harmony import */ var _components_apis_apis_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/apis/apis.component */ "lZJt");
/* harmony import */ var _components_api_api_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/api/api.component */ "UsnX");
/* harmony import */ var _components_resource_resource_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/resource/resource.component */ "MzfI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");















const routes = [
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'users',
        component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
    },
    {
        path: 'user/add',
        component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
        data: {
            type: 'add'
        },
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
    },
    {
        path: 'user/edit/:userIndex',
        component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
        data: {
            type: 'edit'
        },
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
    },
    {
        path: 'pages',
        component: _components_pages_pages_component__WEBPACK_IMPORTED_MODULE_7__["PagesComponent"],
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
    },
    {
        path: 'page',
        component: _components_page_page_component__WEBPACK_IMPORTED_MODULE_8__["PageComponent"],
        data: {
            type: 'add'
        },
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
    },
    {
        path: 'page/:pageId',
        component: _components_page_page_component__WEBPACK_IMPORTED_MODULE_8__["PageComponent"],
        data: {
            type: 'edit'
        },
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
    },
    {
        path: 'customize/:pageId',
        component: _components_customize_customize_component__WEBPACK_IMPORTED_MODULE_9__["CustomizeComponent"],
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
    },
    {
        path: 'apis',
        component: _components_apis_apis_component__WEBPACK_IMPORTED_MODULE_10__["ApisComponent"],
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
    },
    {
        path: 'api/:apiId',
        component: _components_api_api_component__WEBPACK_IMPORTED_MODULE_11__["ApiComponent"],
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
    },
    {
        path: 'resource/:resourceIndex/:apiId/:resourceId',
        component: _components_resource_resource_component__WEBPACK_IMPORTED_MODULE_12__["ResourceComponent"],
        canActivate: [_services_user_guard__WEBPACK_IMPORTED_MODULE_2__["UserGuard"]]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "x186":
/*!********************************************!*\
  !*** ./src/app/state/resources.actions.ts ***!
  \********************************************/
/*! exports provided: ResourcesTypes, loadListResources, loadListResourcesSuccess, loadListResourcesFailed, editResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesTypes", function() { return ResourcesTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListResources", function() { return loadListResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListResourcesSuccess", function() { return loadListResourcesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadListResourcesFailed", function() { return loadListResourcesFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editResource", function() { return editResource; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var ResourcesTypes;
(function (ResourcesTypes) {
    ResourcesTypes["LOAD_LIST_RESOURCES"] = "[Resources] Load List Resources";
    ResourcesTypes["LOAD_LIST_RESOURCES_SUCCESS"] = "[Resources] Load List Resources Success";
    ResourcesTypes["LOAD_LIST_RESOURCES_FAILED"] = "[Resources] Load List Resources Failed";
    ResourcesTypes["EDIT_RESOURCE"] = "[Resources] Edit Resource";
})(ResourcesTypes || (ResourcesTypes = {}));
const loadListResources = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ResourcesTypes.LOAD_LIST_RESOURCES, (apiId, offset, length) => ({
    apiId: apiId,
    offset: offset,
    length: length,
    message: 'Load List Resources'
}));
const loadListResourcesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ResourcesTypes.LOAD_LIST_RESOURCES_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadListResourcesFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ResourcesTypes.LOAD_LIST_RESOURCES_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const editResource = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ResourcesTypes.EDIT_RESOURCE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "ycSy":
/*!***************************************************!*\
  !*** ./src/app/components/page/page.component.ts ***!
  \***************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _state_exception_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state/exception.actions */ "+1bY");
/* harmony import */ var _state_page_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/page.actions */ "jlYJ");
/* harmony import */ var _state_page_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @state/page.reducer */ "UiVb");
/* harmony import */ var _state_pages_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/pages.reducer */ "W+Da");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../message/message.component */ "5j9j");
/* harmony import */ var _select_roles_select_roles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../select-roles/select-roles.component */ "2/5o");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _select_themes_select_themes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../select-themes/select-themes.component */ "I4qr");
/* harmony import */ var _select_variants_select_variants_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../select-variants/select-variants.component */ "obnO");














function PageComponent_app_select_themes_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-select-themes", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedThemeId", function PageComponent_app_select_themes_11_Template_app_select_themes_selectedThemeId_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.selectedThemeId($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("themeId", ctx_r0.theme_id);
} }
function PageComponent_app_select_variants_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-select-variants", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedVariantName", function PageComponent_app_select_variants_12_Template_app_select_variants_selectedVariantName_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.selectedVariantName($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("themeId", ctx_r1.theme_id)("variantName", ctx_r1.variant);
} }
class PageComponent {
    constructor(route, store) {
        this.route = route;
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_0__["resetExceptionState"]());
        this.pageId = this.route.snapshot.paramMap.get('pageId');
        this.route.data.subscribe(data => {
            this.data = data;
        });
        if (this.data.type === 'add') {
            this.title = 'Add New Page';
        }
        else {
            this.title = 'Edit Page';
            this.loadPageData();
        }
    }
    loadPageData() {
        this.store.select(_state_page_reducer__WEBPACK_IMPORTED_MODULE_2__["selectPage"]).subscribe(page => {
            this.role_id = page.role_id;
            this.role_group = page.role_group;
            this.page_url = page.page_url;
            this.page_title = page.page_title;
            this.theme_id = page.theme_id;
            this.variant = page.variant;
        });
        this.store.select(_state_pages_reducer__WEBPACK_IMPORTED_MODULE_3__["selectPage"], this.pageId).subscribe((page) => {
            if (!page) {
                this.store.dispatch(_state_page_actions__WEBPACK_IMPORTED_MODULE_1__["loadPage"](this.pageId));
            }
            else {
                this.store.dispatch(_state_page_actions__WEBPACK_IMPORTED_MODULE_1__["loadPageSuccess"]({ page: page }));
            }
        });
    }
    selectedRoleId(roleId) {
        this.role_id = roleId;
    }
    selectedThemeId(themeId) {
        this.theme_id = themeId;
    }
    selectedVariantName(variantName) {
        this.variant = variantName;
    }
    savePage() {
        if (this.data.type === 'add') {
            this.addNewPage();
        }
        else {
            this.editPage();
        }
    }
    addNewPage() {
        const page = {
            page_id: this.pageId,
            role_id: this.role_id,
            role_group: this.role_group,
            page_url: this.page_url,
            page_title: this.page_title,
            theme_id: this.theme_id,
            variant: this.variant
        };
        this.store.dispatch(_state_page_actions__WEBPACK_IMPORTED_MODULE_1__["addNewPage"](page));
    }
    editPage() {
        const page = {
            page_id: this.pageId,
            role_id: this.role_id,
            role_group: this.role_group,
            page_url: this.page_url,
            page_title: this.page_title,
            theme_id: this.theme_id,
            variant: this.variant
        };
        this.store.dispatch(_state_page_actions__WEBPACK_IMPORTED_MODULE_1__["editPage"](page));
    }
}
PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PageComponent, selectors: [["app-page"]], decls: 17, vars: 7, consts: [["id", "Page"], ["backlink", "/pages", 3, "title"], ["method", "POST", "action", "/page", 1, "Content", 3, "ngSubmit"], [1, "Input"], ["type", "text", "name", "page_url", "placeholer", "Page url", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "page_title", "placeholder", "Page Title", 3, "ngModel", "ngModelChange"], [3, "roleId", "selectedRoleId"], ["type", "text", "name", "role_group", "placeholder", "Role group", 3, "ngModel", "ngModelChange"], [3, "themeId", "selectedThemeId", 4, "ngIf"], [3, "themeId", "variantName", "selectedVariantName", 4, "ngIf"], [1, "Action"], ["type", "submit"], [1, "material-icons"], [3, "themeId", "selectedThemeId"], [3, "themeId", "variantName", "selectedVariantName"]], template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-navigation", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function PageComponent_Template_form_ngSubmit_2_listener() { return ctx.savePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PageComponent_Template_input_ngModelChange_5_listener($event) { return ctx.page_url = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PageComponent_Template_input_ngModelChange_7_listener($event) { return ctx.page_title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "app-select-roles", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedRoleId", function PageComponent_Template_app_select_roles_selectedRoleId_8_listener($event) { return ctx.selectedRoleId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PageComponent_Template_input_ngModelChange_10_listener($event) { return ctx.role_group = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, PageComponent_app_select_themes_11_Template, 1, 1, "app-select-themes", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, PageComponent_app_select_variants_12_Template, 1, 2, "app-select-variants", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.page_url);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.page_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("roleId", ctx.role_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.role_group);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.theme_id != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.theme_id != "");
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _message_message_component__WEBPACK_IMPORTED_MODULE_9__["MessageComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _select_roles_select_roles_component__WEBPACK_IMPORTED_MODULE_10__["SelectRolesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _select_themes_select_themes_component__WEBPACK_IMPORTED_MODULE_12__["SelectThemesComponent"], _select_variants_select_variants_component__WEBPACK_IMPORTED_MODULE_13__["SelectVariantsComponent"]], styles: ["#Page[_ngcontent-%COMP%]   .Content[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  padding-right: 2rem;\n  padding-bottom: 2rem;\n  padding-left: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUFKIiwiZmlsZSI6InBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjUGFnZSB7XG4gIC5Db250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "ytin":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _state_exception_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @state/exception.actions */ "+1bY");
/* harmony import */ var _state_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @state/user.actions */ "us4F");
/* harmony import */ var _state_users_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @state/users.reducer */ "I3PE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../message/message.component */ "5j9j");









class UserComponent {
    constructor(route, store) {
        this.route = route;
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_0__["resetExceptionState"]());
        this.store.dispatch(_state_user_actions__WEBPACK_IMPORTED_MODULE_1__["resetUserState"]());
        this.route.data.subscribe(data => {
            this.data = data;
        });
        if (this.data.type === 'add') {
            this.title = 'Add New User';
        }
        else {
            this.title = 'Edit User';
            this.loadUserData();
        }
    }
    loadUserData() {
        const userIndex = this.route.snapshot.paramMap.get('userIndex');
        this.store.select(_state_users_reducer__WEBPACK_IMPORTED_MODULE_2__["selectUser"], userIndex).subscribe((user) => {
            this.initialUser = user;
            this.user_id = user.user_id;
            this.user_fullname = user.user_fullname;
            this.user_email = user.user_email;
            this.user_username = user.user_username;
        });
    }
    saveUser() {
        if (this.data.type === 'add') {
            this.addNewUser();
        }
        else if (this.data.type === 'edit') {
            this.editUser();
        }
    }
    addNewUser() {
        const user = {
            user_fullname: this.user_fullname,
            user_email: this.user_email,
            user_username: this.user_username,
            user_password: this.user_password
        };
        this.store.dispatch(_state_user_actions__WEBPACK_IMPORTED_MODULE_1__["addNewUser"](user));
    }
    editUser() {
        const user = {
            user_id: this.user_id
        };
        if (this.user_fullname !== this.initialUser.user_fullname) {
            user.user_fullname = this.user_fullname;
        }
        if (this.user_email !== this.initialUser.user_email) {
            user.user_email = this.user_email;
        }
        if (this.user_username !== this.initialUser.user_username) {
            user.user_username = this.user_username;
        }
        if (typeof this.user_password !== 'undefined') {
            user.user_password = this.user_password;
        }
        this.store.dispatch(_state_user_actions__WEBPACK_IMPORTED_MODULE_1__["editUser"](user));
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 17, vars: 5, consts: [["backlink", "/users", 3, "title"], [1, "UserBox"], ["method", "POST", "action", "/user", 1, "UserForm", 3, "ngSubmit"], [1, "Input"], ["type", "text", "name", "fullname", "placeholder", "Full name", 3, "ngModel", "ngModelChange"], ["type", "email", "name", "email", "placeholder", "Email Address", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "username", "placeholder", "Username", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Password", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "UserAction"], ["type", "submit"], [1, "material-icons"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navigation", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UserComponent_Template_form_ngSubmit_2_listener() { return ctx.saveUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_5_listener($event) { return ctx.user_fullname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_7_listener($event) { return ctx.user_email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_9_listener($event) { return ctx.user_username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function UserComponent_Template_input_ngModelChange_11_listener($event) { return ctx.user_password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "check_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.user_fullname);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.user_email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.user_username);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.user_password);
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _message_message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: [".UserBox[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 1rem;\n  background: #FFFFFF;\n}\n\n.UserForm[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.UserAction[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 1rem;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.UserAction[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  color: #333333;\n}\n\n.UserAction[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #333333;\n}\n\n.UserAction[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  background: none;\n  color: #333333;\n  border: none;\n  outline: none;\n}\n\n.UserAction[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VzZXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQ0NXO0FERmI7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxjQ1ZlO0FEWWpCOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQ2RlO0FEaUJqQjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ3BCZTtFRHFCZixZQUFBO0VBQ0EsYUFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtBQUtGIiwiZmlsZSI6InVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9wYWxldHRlLnNjc3MnO1xuXG4uVXNlckJveCB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbn1cbi5Vc2VyRm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLlVzZXJBY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5Vc2VyQWN0aW9uIHAge1xuICBmbGV4LWdyb3c6IDE7XG4gIGNvbG9yOiAkdGV4dEJhY2tncm91bmQ7XG59XG4uVXNlckFjdGlvbiBwIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAkdGV4dEJhY2tncm91bmQ7XG59XG4uVXNlckFjdGlvbiBidXR0b24ge1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogJHRleHRCYWNrZ3JvdW5kO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uVXNlckFjdGlvbiBidXR0b24gaSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cbiIsIiRwcmltYXJ5OiAjMjYzMjM4O1xuJHByaW1hcnlMaWdodDogIzRGNUI2MjtcbiRwcmltYXJ5RGFyazogIzAwMEExMjtcbiRzZWNvbmRhcnk6ICMwRDQ3QTE7XG4kc2Vjb25kYXJ5TGlnaHQ6ICM1NDcyRDM7XG4kc2Vjb25kYXJ5RGFyazogIzAwMjE3MTtcbiR0ZXh0UHJpbWFyeTogI0ZGRkZGRjtcbiR0ZXh0U2Vjb25kYXJ5OiAjRkZGRkZGO1xuJGJhY2tncm91bmQ6ICNGRkZGRkY7XG4kc3VyZmFjZTogI0ZGRkZGRjtcbiRlcnJvcjogI0I3MUMxQztcbiR0ZXh0QmFja2dyb3VuZDogIzMzMzMzMztcbiR0ZXh0U3VyZmFjZTogIzMzMzMzMztcbiJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zzmC":
/*!***************************************!*\
  !*** ./src/app/state/apis.effects.ts ***!
  \***************************************/
/*! exports provided: ApisEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApisEffects", function() { return ApisEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_exception_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @state/exception.actions */ "+1bY");
/* harmony import */ var _state_apis_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @state/apis.actions */ "6oeF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_apis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/apis.service */ "8RPc");









class ApisEffects {
    constructor(action$, store, apisService) {
        this.action$ = action$;
        this.store = store;
        this.apisService = apisService;
        this.processStart$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_apis_actions__WEBPACK_IMPORTED_MODULE_4__["loadListApis"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((action) => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["openLoading"]({ message: action.message }));
        })), {
            dispatch: false
        });
        this.processEnd$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_apis_actions__WEBPACK_IMPORTED_MODULE_4__["loadListApisSuccess"], _state_apis_actions__WEBPACK_IMPORTED_MODULE_4__["loadListApisFailed"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.store.dispatch(_state_exception_actions__WEBPACK_IMPORTED_MODULE_3__["closeLoading"]());
        })), {
            dispatch: false
        });
        this.loadListApis$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => this.action$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_state_apis_actions__WEBPACK_IMPORTED_MODULE_4__["loadListApis"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.apisService.loadListApis(action.offset, action.length).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => _state_apis_actions__WEBPACK_IMPORTED_MODULE_4__["loadListApisSuccess"]({
            apis: response.apis,
            total: response.total
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_state_apis_actions__WEBPACK_IMPORTED_MODULE_4__["loadListApisFailed"]({ message: error })))))));
    }
}
ApisEffects.ɵfac = function ApisEffects_Factory(t) { return new (t || ApisEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_apis_service__WEBPACK_IMPORTED_MODULE_7__["ApisService"])); };
ApisEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ApisEffects, factory: ApisEffects.ɵfac });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map