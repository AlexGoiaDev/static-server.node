(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["elements-elements-module"],{

/***/ "./src/app/elements/elements-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/elements/elements-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ElementsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsRoutingModule", function() { return ElementsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _elements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements.component */ "./src/app/elements/elements.component.ts");




var routes = [{
        path: '',
        component: _elements_component__WEBPACK_IMPORTED_MODULE_3__["ElementsComponent"]
    }];
var ElementsRoutingModule = /** @class */ (function () {
    function ElementsRoutingModule() {
    }
    ElementsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ElementsRoutingModule);
    return ElementsRoutingModule;
}());



/***/ }),

/***/ "./src/app/elements/elements.component.html":
/*!**************************************************!*\
  !*** ./src/app/elements/elements.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"search-form\" [formGroup]=\"searchForm\">\n  <mat-form-field class=\"width-50\">\n    <input matInput placeholder=\"Filtra por titulo\" formControlName=\"search\" type=\"search\" (keyup)=\"filter()\">\n  </mat-form-field>\n  <span style=\"padding-left: 1em\">Elementos listados: {{filteredElements.length}}</span>\n</form>\n\n<mat-card class=\"card\" *ngFor=\"let element of filteredElements\">\n  <div class=\"relative\">\n    <button mat-flat-button color=\"secondary\" (click)=\"editElement(element._id)\">\n      <span>Editar</span>\n    </button>\n\n    <button mat-flat-button color=\"warn\" (click)=\"deleteElement(element._id)\">\n      <span *ngIf=\"!isDeleting\">Eliminar</span>\n      <span *ngIf=\"isDeleting\">Eliminando...</span>\n    </button>\n  </div>\n\n  <div class=\"left\">\n    <div class=\"image\" [style.background-image]=\"getImageUrl(element)\">\n    </div>\n  </div>\n\n  <div class=\"right\">\n    <h2>{{element.name.es}}</h2>\n    <h4>Ingredientes</h4>\n    <mat-chip-list>\n      <mat-chip [color]=\"i%2===0 ? 'primary':'secondary'\" selected\n        *ngFor=\"let ingredient of element.ingredients; let i = index\">{{ingredient.name.es}}</mat-chip>\n    </mat-chip-list>\n\n    <h4>Alérgenos</h4>\n    <mat-chip-list>\n      <mat-chip [color]=\"i%2===0 ? 'primary':'secondary'\" selected\n        *ngFor=\"let allergen of element.allergens; let i=index\">\n        {{allergen.name.es}}</mat-chip>\n    </mat-chip-list>\n\n    <h4>Precio</h4>\n    <mat-chip-list>\n      <mat-chip color=\"primary\">{{element.price | currency: 'EUR'}}</mat-chip>\n    </mat-chip-list>\n  </div>\n\n\n</mat-card>\n\n\n<mat-card class=\"card\" *ngIf=\"noContent\">\n  <h2>No hay elementos en la carta</h2>\n</mat-card>\n\n\n<mat-card class=\"card\" *ngIf=\"noResult\">\n  <h2>No hay resultados para <i>\"{{searchForm.get('search').value}}\"</i></h2>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/elements/elements.component.scss":
/*!**************************************************!*\
  !*** ./src/app/elements/elements.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-form {\n  width: 70%;\n  margin: 1em auto; }\n\n.card {\n  display: flex;\n  flex-direction: row;\n  position: relative; }\n\n.card .relative {\n    position: absolute;\n    top: 0.5em;\n    right: 0.5em; }\n\n.card .left {\n    width: 50%; }\n\n.card .left .image {\n      width: 100%;\n      height: 100%;\n      background-size: 100%;\n      background-repeat: no-repeat;\n      background-position: center;\n      position: relative; }\n\n.card .left .image.max-height {\n        height: 100%; }\n\n.card .right {\n    width: 50%;\n    position: relative; }\n\n.width-50 {\n  width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxlbWVudHMvQzpcXHdvcmtzcGFjZS1nZW5lcmFsXFxiaW5nb1xcYmluZ28tYWRtaW4tYXBwL3NyY1xcYXBwXFxlbGVtZW50c1xcZWxlbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFIcEI7SUFLSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVksRUFBQTs7QUFQaEI7SUFVSSxVQUFVLEVBQUE7O0FBVmQ7TUFZTSxXQUFXO01BQ1gsWUFBWTtNQUlaLHFCQUFxQjtNQUNyQiw0QkFBNEI7TUFDNUIsMkJBQTJCO01BQzNCLGtCQUFrQixFQUFBOztBQXBCeEI7UUFlUSxZQUFZLEVBQUE7O0FBZnBCO0lBeUJJLFVBQVU7SUFDVixrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbGVtZW50cy9lbGVtZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtZm9ybSB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW46IDFlbSBhdXRvO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAucmVsYXRpdmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwLjVlbTtcclxuICAgIHJpZ2h0OiAwLjVlbTtcclxuICB9XHJcbiAgLmxlZnQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIC5pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICYubWF4LWhlaWdodCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmlnaHQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbi53aWR0aC01MCB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/elements/elements.component.ts":
/*!************************************************!*\
  !*** ./src/app/elements/elements.component.ts ***!
  \************************************************/
/*! exports provided: ElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsComponent", function() { return ElementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ElementsComponent = /** @class */ (function () {
    function ElementsComponent(http, sanitization, router) {
        this.http = http;
        this.sanitization = sanitization;
        this.router = router;
        this.baseUrl = 'http://localhost:3333';
        this.menuElemnts = [];
        this.filteredElements = [];
        this.noContent = false;
        this.noResult = false;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.isDeleting = false;
    }
    ElementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.baseUrl + '/menu-item').subscribe(function (res) {
            if (res && res.length > 0) {
                _this.menuElemnts = res;
                _this.filteredElements = _this.menuElemnts.slice();
            }
            else {
                _this.menuElemnts = null;
                _this.noContent = true;
            }
        });
    };
    ElementsComponent.prototype.filter = function () {
        var _this = this;
        this.filteredElements = this.menuElemnts.filter(function (element) {
            var searchValue = _this.searchForm.controls.search.value;
            if (searchValue) {
                searchValue = searchValue.toLowerCase();
            }
            return element.name.es.toLowerCase().includes(searchValue);
        }).slice();
        if (this.filteredElements.length === 0) {
            this.noResult = true;
        }
        else {
            this.noResult = false;
        }
    };
    ElementsComponent.prototype.getImageUrl = function (element) {
        return this.sanitization.bypassSecurityTrustStyle("url(" + (this.baseUrl + '/' + element.image) + ")");
    };
    ElementsComponent.prototype.deleteElement = function (id) {
        var _this = this;
        this.isDeleting = true;
        this.http.delete(this.baseUrl + '/menu-item?_id=' + id).subscribe(function (data) {
            _this.isDeleting = false;
            if (data.status === 201) {
                _this.menuElemnts = _this.menuElemnts.filter(function (filtered) { return filtered._id !== id; });
                _this.filteredElements = _this.menuElemnts.slice();
                // TODO: ya veremos
            }
        });
    };
    ElementsComponent.prototype.editElement = function (id) {
        this.router.navigate(['/'], {
            queryParams: {
                id: id
            }
        });
    };
    ElementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-elements',
            template: __webpack_require__(/*! ./elements.component.html */ "./src/app/elements/elements.component.html"),
            styles: [__webpack_require__(/*! ./elements.component.scss */ "./src/app/elements/elements.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ElementsComponent);
    return ElementsComponent;
}());



/***/ }),

/***/ "./src/app/elements/elements.module.ts":
/*!*********************************************!*\
  !*** ./src/app/elements/elements.module.ts ***!
  \*********************************************/
/*! exports provided: ElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsModule", function() { return ElementsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _elements_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements-routing.module */ "./src/app/elements/elements-routing.module.ts");
/* harmony import */ var _elements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements.component */ "./src/app/elements/elements.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var ElementsModule = /** @class */ (function () {
    function ElementsModule() {
    }
    ElementsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_elements_component__WEBPACK_IMPORTED_MODULE_5__["ElementsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _elements_routing_module__WEBPACK_IMPORTED_MODULE_4__["ElementsRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
            ]
        })
    ], ElementsModule);
    return ElementsModule;
}());



/***/ })

}]);
//# sourceMappingURL=elements-elements-module.js.map