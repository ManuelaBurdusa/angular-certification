(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AngularProjec\stock-tracker-app\src\main.ts */"zUnb");


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

/***/ "Crd4":
/*!*****************************************************************!*\
  !*** ./src/app/components/track-stock/track-stock.component.ts ***!
  \*****************************************************************/
/*! exports provided: TrackStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackStockComponent", function() { return TrackStockComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_tracking_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tracking-api.service */ "uORp");
/* harmony import */ var _track_stock_list_track_stock_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../track-stock-list/track-stock-list.component */ "P6Ti");





class TrackStockComponent {
    constructor(formBuilder, trackingApiService) {
        this.formBuilder = formBuilder;
        this.trackingApiService = trackingApiService;
        this.trackStockForm = this.formBuilder.group({
            symbol: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    ngOnInit() {
    }
    trackStock() {
        this.trackingApiService.addNewSymbol(this.trackStockForm.controls['symbol'].value.toUpperCase());
        this.trackStockForm.reset();
    }
}
TrackStockComponent.ɵfac = function TrackStockComponent_Factory(t) { return new (t || TrackStockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tracking_api_service__WEBPACK_IMPORTED_MODULE_2__["TrackingApiService"])); };
TrackStockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TrackStockComponent, selectors: [["app-track-stock"]], decls: 8, vars: 2, consts: [[1, "card"], [3, "formGroup", "ngSubmit"], ["id", "stockInput", "formControlName", "symbol"], ["type", "submit", "id", "trackBtn", 1, "btn", "btn-secondary", 3, "disabled"]], template: function TrackStockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Enter the symbol of a stock to track (i.e. AAPL, TSLA, GOOGL)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function TrackStockComponent_Template_form_ngSubmit_3_listener() { return ctx.trackStock(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Track Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-track-stock-list");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.trackStockForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.trackStockForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _track_stock_list_track_stock_list_component__WEBPACK_IMPORTED_MODULE_3__["TrackStockListComponent"]], styles: ["#stockInput[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin: 2rem;\n  padding: 2rem;\n}\n\ninput[_ngcontent-%COMP%] {\n  border-radius: 7px;\n  margin-top: 4px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcdHJhY2stc3RvY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsaUJBQUE7QUFFRiIsImZpbGUiOiJ0cmFjay1zdG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdG9ja0lucHV0IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5jYXJkIHtcclxuICBtYXJnaW46IDJyZW07XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "DRYZ":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LocalStorageService {
    constructor() { }
    setStorageItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    getStorageItem(key) {
        const item = localStorage.getItem(key);
        return !!item ? JSON.parse(item) : item;
    }
    removeItemFromStorage(item) {
        localStorage.removeItem(item);
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LH7e":
/*!********************************!*\
  !*** ./src/app/utils/Utils.ts ***!
  \********************************/
/*! exports provided: QUOTES, COMPANY, SENTIMENT_TRACKING, STORAGE_TRACKING_KEY, STORAGE_COMPANY, URL, ACCESS_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUOTES", function() { return QUOTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPANY", function() { return COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SENTIMENT_TRACKING", function() { return SENTIMENT_TRACKING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_TRACKING_KEY", function() { return STORAGE_TRACKING_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_COMPANY", function() { return STORAGE_COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_TOKEN", function() { return ACCESS_TOKEN; });
const QUOTES = 'quote';
const COMPANY = '/stock/profile2';
const SENTIMENT_TRACKING = '/stock/insider-sentiment';
const STORAGE_TRACKING_KEY = 'STOCK_SYMBOLS';
const STORAGE_COMPANY = 'ACTIVE_COMPANY';
const URL = 'https://finnhub.io/api/v1/';
const ACCESS_TOKEN = 'bu4f8kn48v6uehqi3cqg';


/***/ }),

/***/ "NUq0":
/*!*************************************************************************************!*\
  !*** ./src/app/components/track-stock-list-item/track-stock-list-item.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TrackStockListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackStockListItemComponent", function() { return TrackStockListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_tracking_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tracking-api.service */ "uORp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TrackStockListItemComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrackStockListItemComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrackStockListItemComponent_em_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2191 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrackStockListItemComponent_em_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2193 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TrackStockListItemComponent {
    constructor(router, trackingApiService) {
        this.router = router;
        this.trackingApiService = trackingApiService;
        this.removeStock = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    removeItem() {
        this.removeStock.emit(this.currentStock);
    }
    navigateToSentimentDetails() {
        this.trackingApiService.setActiveCompanyName(this.currentStock.name);
        this.router.navigateByUrl(`sentiment/${this.currentStock.id}`);
    }
    isIncreasing(stock) {
        return stock > 0;
    }
}
TrackStockListItemComponent.ɵfac = function TrackStockListItemComponent_Factory(t) { return new (t || TrackStockListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tracking_api_service__WEBPACK_IMPORTED_MODULE_2__["TrackingApiService"])); };
TrackStockListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrackStockListItemComponent, selectors: [["app-track-stock-list-item"]], inputs: { currentStock: "currentStock" }, outputs: { removeStock: "removeStock" }, decls: 33, vars: 20, consts: [[1, "card", "row"], [1, "col-12"], [1, "row", "card-header"], [1, "col-11"], [1, "col-1"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "id", "click"], [1, "card-body"], [1, "row"], [1, "col-4"], [4, "ngIf"], [1, "col-3"], ["class", "icon-up", 4, "ngIf"], ["class", "icon-down", 4, "ngIf"], [1, "btn", "btn-primary", 3, "id", "click"], [1, "icon"], [1, "icon-up"], [1, "icon-down"]], template: function TrackStockListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrackStockListItemComponent_Template_button_click_7_listener() { return ctx.removeItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Changed today: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TrackStockListItemComponent_span_12_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TrackStockListItemComponent_span_13_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TrackStockListItemComponent_em_20_Template, 2, 0, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TrackStockListItemComponent_em_21_Template, 2, 0, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrackStockListItemComponent_Template_button_click_29_listener() { return ctx.navigateToSentimentDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Go to social sentiment details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "em", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.currentStock.name, " (", ctx.currentStock.id, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "remove" + ctx.currentStock.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isIncreasing(ctx.currentStock.quote.d));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isIncreasing(ctx.currentStock.quote.d));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 12, ctx.currentStock.quote.d), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Opening price: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 14, ctx.currentStock.quote.o), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isIncreasing(ctx.currentStock.quote.d));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isIncreasing(ctx.currentStock.quote.d));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Current Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 16, ctx.currentStock.quote.c), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" High Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 18, ctx.currentStock.quote.h), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "sentiment" + ctx.currentStock.id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".card[_ngcontent-%COMP%] {\n  margin: 2rem;\n  border: 1px solid lightgray;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n}\n\n.col-4[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  width: 18rem;\n  margin: 1rem 0 1rem 1.5rem;\n}\n\n.btn-close[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcdHJhY2stc3RvY2stbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFDQTtFQUFhLFlBQUE7QUFHYiIsImZpbGUiOiJ0cmFjay1zdG9jay1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgbWFyZ2luOiAycmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uY29sLTQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIHdpZHRoOiAxOHJlbTtcclxuICBtYXJnaW46IDFyZW0gMCAxcmVtIDEuNXJlbTtcclxufVxyXG5cclxuLmJ0bi1jbG9zZSB7IGZsb2F0OnJpZ2h0OyB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ "P6Ti":
/*!***************************************************************************!*\
  !*** ./src/app/components/track-stock-list/track-stock-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: TrackStockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackStockListComponent", function() { return TrackStockListComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_tracking_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tracking-api.service */ "uORp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _track_stock_list_item_track_stock_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../track-stock-list-item/track-stock-list-item.component */ "NUq0");







function TrackStockListComponent_mat_progress_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-spinner", 2);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", "indeterminate");
} }
function TrackStockListComponent_ng_container_1_app_track_stock_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-track-stock-list-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("removeStock", function TrackStockListComponent_ng_container_1_app_track_stock_list_item_1_Template_app_track_stock_list_item_removeStock_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r5.removeStock($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stock_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currentStock", stock_r3);
} }
function TrackStockListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TrackStockListComponent_ng_container_1_app_track_stock_list_item_1_Template, 1, 1, "app-track-stock-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.stocks);
} }
class TrackStockListComponent {
    constructor(trackingApiService) {
        this.trackingApiService = trackingApiService;
        this.stocks = [];
        this.loadedItems = false;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.trackingApiService.addedSymbol$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe)).subscribe((symbol) => {
            if (symbol) {
                this.addStock(symbol);
            }
            else {
                trackingApiService.openSnackBar('Symbol already added in list', 'Dismiss');
            }
        }, (error) => {
            this.trackingApiService.openSnackBar(`Internal Server Error`, 'Cancel');
        });
    }
    ngOnInit() {
        this.restoreFromLocalStorage();
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    addStock(symbol) {
        this.loadedItems = false;
        this.trackingApiService.getStock$(symbol).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe)).subscribe((stock) => {
            this.loadedItems = true;
            if (!!stock.name) {
                this.stocks.push(stock);
            }
            else {
                this.trackingApiService.openSnackBar(`Data not found for the symbol ${symbol}`, 'Ok');
            }
        }, (error) => {
            this.loadedItems = true;
            this.trackingApiService.openSnackBar(`Internal Server Error`, 'Cancel');
        });
    }
    removeStock($event) {
        let index = this.stocks.indexOf($event);
        this.stocks.splice(index, 1);
        this.trackingApiService.removeSymbolFromStorage($event.symbol);
    }
    restoreFromLocalStorage() {
        this.loadedItems = false;
        const symbols = this.trackingApiService.getSymbolsFromStorage();
        symbols.forEach(symbol => {
            this.addStock(symbol);
        });
        this.loadedItems = true;
    }
}
TrackStockListComponent.ɵfac = function TrackStockListComponent_Factory(t) { return new (t || TrackStockListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_tracking_api_service__WEBPACK_IMPORTED_MODULE_3__["TrackingApiService"])); };
TrackStockListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TrackStockListComponent, selectors: [["app-track-stock-list"]], decls: 2, vars: 2, consts: [[3, "mode", 4, "ngIf"], [4, "ngIf"], [3, "mode"], [3, "currentStock", "removeStock", 4, "ngFor", "ngForOf"], [3, "currentStock", "removeStock"]], template: function TrackStockListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TrackStockListComponent_mat_progress_spinner_0_Template, 1, 1, "mat-progress-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TrackStockListComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loadedItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stocks.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _track_stock_list_item_track_stock_list_item_component__WEBPACK_IMPORTED_MODULE_6__["TrackStockListItemComponent"]], styles: ["mat-progress-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  z-index: 5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcdHJhY2stc3RvY2stbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7QUFDRiIsImZpbGUiOiJ0cmFjay1zdG9jay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXByb2dyZXNzLXNwaW5uZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6NTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "RM+c":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sentiment-details/sentiment-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SentimentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentimentDetailsComponent", function() { return SentimentDetailsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_tracking_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tracking-api.service */ "uORp");





function SentimentDetailsComponent_ng_container_0_div_6_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SentimentDetailsComponent_ng_container_0_div_6_em_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "em", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u2191 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SentimentDetailsComponent_ng_container_0_div_6_em_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "em", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u2193 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SentimentDetailsComponent_ng_container_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Change: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SentimentDetailsComponent_ng_container_0_div_6_span_5_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SentimentDetailsComponent_ng_container_0_div_6_em_10_Template, 2, 0, "em", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SentimentDetailsComponent_ng_container_0_div_6_em_11_Template, 2, 0, "em", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trackedMonth_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getMonthName(trackedMonth_r2.month));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isTrackChangeIncrease(trackedMonth_r2.change));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", trackedMonth_r2.change, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("MSPR: ", trackedMonth_r2.mspr, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isTrackChangeIncrease(trackedMonth_r2.change));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.isTrackChangeIncrease(trackedMonth_r2.change));
} }
function SentimentDetailsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SentimentDetailsComponent_ng_container_0_div_6_Template, 12, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SentimentDetailsComponent_ng_container_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.navigateBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \u2190 Back to list of stocks\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.trackedHistory.company, " (", ctx_r0.trackedHistory.symbol, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.trackedHistory.sentimentHistory);
} }
class SentimentDetailsComponent {
    constructor(router, activatedRouted, location, trackingApiService) {
        this.router = router;
        this.activatedRouted = activatedRouted;
        this.location = location;
        this.trackingApiService = trackingApiService;
        this.loaded = false;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.getSentimentTrackingHistory(this.activatedRouted.snapshot.paramMap.get('symbol'));
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    navigateBack() {
        //OPTION 1:
        this.location.back();
        //OPTION 2:
        //this.router.navigateByUrl('');
    }
    getSentimentTrackingHistory(symbol) {
        this.trackingApiService.getSentimentTrackingHistory$(symbol).subscribe(history => {
            this.trackedHistory = {
                company: this.trackingApiService.getActiveCompany(),
                symbol: symbol,
                sentimentHistory: history
            };
        }, (error) => {
            this.trackingApiService.openSnackBar(`Internal Server Error`, 'Cancel');
        });
    }
    getMonthName(monthIndex) {
        return this.trackingApiService.getMonthName(monthIndex);
    }
    isTrackChangeIncrease(value) {
        return value > 0;
    }
}
SentimentDetailsComponent.ɵfac = function SentimentDetailsComponent_Factory(t) { return new (t || SentimentDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tracking_api_service__WEBPACK_IMPORTED_MODULE_4__["TrackingApiService"])); };
SentimentDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SentimentDetailsComponent, selectors: [["app-sentiment-details"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "card"], [1, "col-12"], [1, "row"], ["class", "col-4", 4, "ngFor", "ngForOf"], ["id", "backBtn", 1, "btn", "btn-primary", 3, "click"], [1, "col-4"], ["class", "icon-up", 4, "ngIf"], ["class", "icon-down", 4, "ngIf"], [1, "icon-up"], [1, "icon-down"]], template: function SentimentDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SentimentDetailsComponent_ng_container_0_Template, 10, 3, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.trackedHistory);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".card[_ngcontent-%COMP%] {\n  margin: 2rem;\n  padding: 2rem;\n  border: 1px solid lightgray;\n}\n\n.col-4[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  width: 13rem;\n  margin: 0rem 0 1rem 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc2VudGltZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FBQ0YiLCJmaWxlIjoic2VudGltZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgbWFyZ2luOiAycmVtO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG59XHJcblxyXG4uY29sLTQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIHdpZHRoOiAxM3JlbTtcclxuICBtYXJnaW46IDByZW0gMCAxcmVtIDJyZW07XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'stock-tracker-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_track_stock_track_stock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/track-stock/track-stock.component */ "Crd4");
/* harmony import */ var _components_track_stock_list_track_stock_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/track-stock-list/track-stock-list.component */ "P6Ti");
/* harmony import */ var _components_track_stock_list_item_track_stock_list_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/track-stock-list-item/track-stock-list-item.component */ "NUq0");
/* harmony import */ var _components_sentiment_details_sentiment_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sentiment-details/sentiment-details.component */ "RM+c");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_track_stock_track_stock_component__WEBPACK_IMPORTED_MODULE_5__["TrackStockComponent"],
        _components_track_stock_list_track_stock_list_component__WEBPACK_IMPORTED_MODULE_6__["TrackStockListComponent"],
        _components_track_stock_list_item_track_stock_list_item_component__WEBPACK_IMPORTED_MODULE_7__["TrackStockListItemComponent"],
        _components_sentiment_details_sentiment_details_component__WEBPACK_IMPORTED_MODULE_8__["SentimentDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"]] }); })();


/***/ }),

/***/ "fn+b":
/*!************************************************!*\
  !*** ./src/app/services/date-utils.service.ts ***!
  \************************************************/
/*! exports provided: DateUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUtilsService", function() { return DateUtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DateUtilsService {
    constructor() { }
    getDateForMonth(monthNumber) {
        return this.getDate(monthNumber).toISOString().slice(0, 10);
    }
    maptoMonthName(monthNumber) {
        return this.getMonths()[monthNumber].toUpperCase();
    }
    getMonths() {
        return ['January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'];
    }
    getDate(monthNumber) {
        return new Date(new Date().getFullYear(), new Date().getMonth() - monthNumber, new Date().getDate());
    }
}
DateUtilsService.ɵfac = function DateUtilsService_Factory(t) { return new (t || DateUtilsService)(); };
DateUtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DateUtilsService, factory: DateUtilsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "uORp":
/*!**************************************************!*\
  !*** ./src/app/services/tracking-api.service.ts ***!
  \**************************************************/
/*! exports provided: TrackingApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackingApiService", function() { return TrackingApiService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "LH7e");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-storage.service */ "DRYZ");
/* harmony import */ var _date_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date-utils.service */ "fn+b");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");









class TrackingApiService {
    constructor(localStorageService, httpClient, dateUtils, snackBar) {
        this.localStorageService = localStorageService;
        this.httpClient = httpClient;
        this.dateUtils = dateUtils;
        this.snackBar = snackBar;
        this.symbols = [];
        this._addedSymbol = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    addNewSymbol(symbol) {
        var _a;
        this.symbols = this.getSymbolsFromStorage();
        const foundSymbol = (_a = this.symbols) === null || _a === void 0 ? void 0 : _a.find(item => (item === null || item === void 0 ? void 0 : item.toLowerCase()) === symbol.toLowerCase());
        if (!foundSymbol) {
            this.symbols.push(symbol);
            this._addedSymbol.next(symbol);
            this.localStorageService.setStorageItem(_utils_Utils__WEBPACK_IMPORTED_MODULE_2__["STORAGE_TRACKING_KEY"], this.symbols);
        }
        else {
            this._addedSymbol.next(null);
        }
    }
    addedSymbol$() {
        return this._addedSymbol.asObservable();
    }
    getSymbolsFromStorage() {
        const foundSymbols = this.localStorageService.getStorageItem(_utils_Utils__WEBPACK_IMPORTED_MODULE_2__["STORAGE_TRACKING_KEY"]);
        return !!foundSymbols ? foundSymbols : [];
    }
    removeSymbolFromStorage(symbol) {
        const trackedSymbols = this.getSymbolsFromStorage();
        const trackIndex = trackedSymbols.findIndex(item => item === symbol);
        trackedSymbols.splice(trackIndex, 1);
        this.localStorageService.setStorageItem(_utils_Utils__WEBPACK_IMPORTED_MODULE_2__["STORAGE_TRACKING_KEY"], trackedSymbols);
    }
    getQuote$(trackedSymbol) {
        let params = this.appendToken();
        params = params.append('symbol', trackedSymbol);
        return this.httpClient.get(`${_utils_Utils__WEBPACK_IMPORTED_MODULE_2__["URL"]}${_utils_Utils__WEBPACK_IMPORTED_MODULE_2__["QUOTES"]}`, { params: params });
    }
    getCompany$(trackedSymbol) {
        let params = this.appendToken();
        params = params.append('symbol', trackedSymbol);
        return this.httpClient.get(`${_utils_Utils__WEBPACK_IMPORTED_MODULE_2__["URL"]}${_utils_Utils__WEBPACK_IMPORTED_MODULE_2__["COMPANY"]}`, { params: params });
    }
    getStock$(trackedSymbol) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([this.getQuote$(trackedSymbol), this.getCompany$(trackedSymbol)])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([quote, company]) => {
            return {
                id: trackedSymbol,
                name: company['name'],
                symbol: trackedSymbol,
                quote: quote
            };
        }));
    }
    setActiveCompanyName(value) {
        this.localStorageService.setStorageItem(_utils_Utils__WEBPACK_IMPORTED_MODULE_2__["STORAGE_COMPANY"], value);
    }
    getActiveCompany() {
        var _a;
        return (_a = this.localStorageService.getStorageItem(_utils_Utils__WEBPACK_IMPORTED_MODULE_2__["STORAGE_COMPANY"])) === null || _a === void 0 ? void 0 : _a.toString();
    }
    getSentimentTrackingHistory$(trackedSymbol) {
        let params = this.appendToken();
        params = params.append('from', this.dateUtils.getDateForMonth(3));
        params = params.append('to', this.dateUtils.getDateForMonth(1));
        params = params.append('symbol', trackedSymbol);
        return this.httpClient.get(`${_utils_Utils__WEBPACK_IMPORTED_MODULE_2__["URL"]}${_utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SENTIMENT_TRACKING"]}`, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(item => item["data"]));
    }
    getMonthName(monthIndex) {
        return this.dateUtils.maptoMonthName(monthIndex);
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, { duration: 5000 });
    }
    appendToken() {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('token', _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["ACCESS_TOKEN"]);
        return params;
    }
}
TrackingApiService.ɵfac = function TrackingApiService_Factory(t) { return new (t || TrackingApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_date_utils_service__WEBPACK_IMPORTED_MODULE_6__["DateUtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
TrackingApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TrackingApiService, factory: TrackingApiService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _components_sentiment_details_sentiment_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sentiment-details/sentiment-details.component */ "RM+c");
/* harmony import */ var _components_track_stock_track_stock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/track-stock/track-stock.component */ "Crd4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'track-stock' },
    { path: '', component: _components_track_stock_track_stock_component__WEBPACK_IMPORTED_MODULE_2__["TrackStockComponent"] },
    { path: 'sentiment/:symbol', component: _components_sentiment_details_sentiment_details_component__WEBPACK_IMPORTED_MODULE_1__["SentimentDetailsComponent"] },
    { path: '**', component: _components_track_stock_track_stock_component__WEBPACK_IMPORTED_MODULE_2__["TrackStockComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map