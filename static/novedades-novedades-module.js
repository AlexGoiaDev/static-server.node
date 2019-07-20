(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["novedades-novedades-module"],{

/***/ "./src/app/novedades/edit-promotions/edit-promotions.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/novedades/edit-promotions/edit-promotions.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"promotions\">\r\n  <h2 *ngIf=\"promotions && promotions.length === 0\">No hay promociones que mostrar</h2>\r\n  <div class=\"promotion\" *ngFor=\"let promotion of promotions\">\r\n    <div class=\"is-visible\" *ngIf=\"promotion.visible === false\">\r\n      <p>No se está mostrando</p>\r\n    </div>\r\n    <div class=\"buttons\">\r\n      <button mat-button *ngIf=\"promotion.visible === true\" (click)=\"hide(promotion._id)\">\r\n            <mat-icon>visibility_off</mat-icon>\r\n        </button>\r\n        <button mat-button *ngIf=\"promotion.visible === false\" (click)=\"show(promotion._id)\">\r\n            <mat-icon>visibility</mat-icon>\r\n        </button>\r\n        <button mat-button (click)=\"deleteOne(promotion._id)\">\r\n            <mat-icon>delete</mat-icon>\r\n        </button>\r\n    </div>\r\n    <img *ngIf=\"promotion.promotionType === 'image'\" [src]=\"baseUrl + '/' + promotion.url\" width=\"250\"/>\r\n    <video *ngIf=\"promotion.promotionType === 'video'\" width=\"250\" controls>\r\n        <source [src]=\"baseUrl + '/' + promotion.url\" [type]=\"'video/mp4'\">\r\n        Tu explorador no soporta html5\r\n    </video>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/novedades/edit-promotions/edit-promotions.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/novedades/edit-promotions/edit-promotions.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".promotions {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  align-content: center;\n  justify-content: center; }\n  .promotions .promotion {\n    margin-right: 1em;\n    margin-bottom: 1em;\n    position: relative; }\n  .promotions .promotion .is-visible {\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 100%;\n      text-align: center;\n      background: rgba(255, 255, 255, 0.3);\n      z-index: 10001; }\n  .promotions .promotion .buttons {\n      z-index: 10001;\n      width: 100%;\n      padding: 0.25em;\n      padding-bottom: 0.4em;\n      background: rgba(255, 255, 255, 0.3);\n      display: flex;\n      position: absolute;\n      align-items: flex-end;\n      align-content: flex-end;\n      justify-content: flex-end;\n      bottom: 0;\n      right: 0; }\n  .promotions .promotion .buttons .mat-button {\n        padding: 0;\n        margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm92ZWRhZGVzL2VkaXQtcHJvbW90aW9ucy9DOlxcd29ya3NwYWNlLWdlbmVyYWxcXGJpbmdvXFxiaW5nby1hZG1pbi1hcHAvc3JjXFxhcHBcXG5vdmVkYWRlc1xcZWRpdC1wcm9tb3Rpb25zXFxlZGl0LXByb21vdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHVCQUF1QixFQUFBO0VBTnpCO0lBU0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTtFQVh0QjtNQWNNLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sUUFBUTtNQUNSLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsb0NBQWlDO01BQ2pDLGNBQWMsRUFBQTtFQXBCcEI7TUF1Qk0sY0FBYztNQUNkLFdBQVc7TUFDWCxlQUFlO01BQ2YscUJBQXFCO01BQ3JCLG9DQUFvQztNQUNwQyxhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLHFCQUFxQjtNQUNyQix1QkFBdUI7TUFDdkIseUJBQXlCO01BRXpCLFNBQVM7TUFDVCxRQUFRLEVBQUE7RUFuQ2Q7UUFxQ1EsVUFBVTtRQUNWLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25vdmVkYWRlcy9lZGl0LXByb21vdGlvbnMvZWRpdC1wcm9tb3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb21vdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIC5wcm9tb3Rpb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmlzLXZpc2libGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcclxuICAgICAgei1pbmRleDogMTAwMDE7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9ucyB7XHJcbiAgICAgIHotaW5kZXg6IDEwMDAxO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMC4yNWVtO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC40ZW07XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgLm1hdC1idXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/novedades/edit-promotions/edit-promotions.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/novedades/edit-promotions/edit-promotions.component.ts ***!
  \************************************************************************/
/*! exports provided: EditPromotionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPromotionsComponent", function() { return EditPromotionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var EditPromotionsComponent = /** @class */ (function () {
    function EditPromotionsComponent(http) {
        this.http = http;
        this.promotionsSubscription = null;
        this.promotions = [];
        this.baseUrl = 'http://localhost:3333';
    }
    EditPromotionsComponent.prototype.ngOnInit = function () {
        console.log('NgOnInit()');
        this._loadElements();
    };
    EditPromotionsComponent.prototype._loadElements = function () {
        var _this = this;
        this.promotions = [];
        this.http.get(this.baseUrl + '/promotion').subscribe(function (data) {
            if (data) {
                _this.promotions = data;
            }
        });
    };
    EditPromotionsComponent.prototype.ngOnDestroy = function () {
        // TODO: falta arreglar esta parte
        console.log('ngOnDestroy()');
    };
    EditPromotionsComponent.prototype.ngOnChanges = function () {
        // Si es la segunda pestaña volvemos a cargar
        if (this.selected === 2) {
            this._loadElements();
        }
    };
    EditPromotionsComponent.prototype.deleteOne = function (id) {
        var _this = this;
        console.log('Deleting...', id);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params.append('_id', id);
        this.http.delete(this.baseUrl + '/promotion?id=' + id).subscribe(function (data) {
            _this._loadElements();
        }, function (err) {
            console.log('Error', err);
        });
    };
    EditPromotionsComponent.prototype.changeVisibility = function (id, visibility) {
        var _this = this;
        var resultado = this.promotions.find(function (element) { return element._id === id; });
        if (resultado) {
            resultado.visible = visibility;
            this.http.put(this.baseUrl + '/promotion?id=' + id, resultado).subscribe(function (data) {
                _this._loadElements();
            });
        }
    };
    EditPromotionsComponent.prototype.hide = function (id) {
        this.changeVisibility(id, false);
    };
    EditPromotionsComponent.prototype.show = function (id) {
        this.changeVisibility(id, true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], EditPromotionsComponent.prototype, "selected", void 0);
    EditPromotionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-promotions',
            template: __webpack_require__(/*! ./edit-promotions.component.html */ "./src/app/novedades/edit-promotions/edit-promotions.component.html"),
            styles: [__webpack_require__(/*! ./edit-promotions.component.scss */ "./src/app/novedades/edit-promotions/edit-promotions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EditPromotionsComponent);
    return EditPromotionsComponent;
}());



/***/ }),

/***/ "./src/app/novedades/novedades-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/novedades/novedades-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: NovedadesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovedadesRoutingModule", function() { return NovedadesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _novedades_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./novedades.component */ "./src/app/novedades/novedades.component.ts");




var routes = [{
        path: '',
        component: _novedades_component__WEBPACK_IMPORTED_MODULE_3__["NovedadesComponent"]
    }];
var NovedadesRoutingModule = /** @class */ (function () {
    function NovedadesRoutingModule() {
    }
    NovedadesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NovedadesRoutingModule);
    return NovedadesRoutingModule;
}());



/***/ }),

/***/ "./src/app/novedades/novedades.component.html":
/*!****************************************************!*\
  !*** ./src/app/novedades/novedades.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n  <mat-tab-group (selectedIndexChange)=\"changeSelected($event)\">\r\n    <mat-tab label=\"Subir vídeo\">\r\n      <div class=\"content\">\r\n        <app-upload-video></app-upload-video>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Subir foto\">\r\n      <div class=\"content\">\r\n        <app-upload-image></app-upload-image>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Editar promociones\">\r\n      <div class=\"content\">\r\n        <app-edit-promotions [selected]=\"selected\"></app-edit-promotions>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/novedades/novedades.component.scss":
/*!****************************************************!*\
  !*** ./src/app/novedades/novedades.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdmVkYWRlcy9ub3ZlZGFkZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/novedades/novedades.component.ts":
/*!**************************************************!*\
  !*** ./src/app/novedades/novedades.component.ts ***!
  \**************************************************/
/*! exports provided: NovedadesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovedadesComponent", function() { return NovedadesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NovedadesComponent = /** @class */ (function () {
    function NovedadesComponent() {
    }
    NovedadesComponent.prototype.ngOnInit = function () {
    };
    NovedadesComponent.prototype.changeSelected = function (selected) {
        console.log('Changed selected', selected);
        this.selected = selected;
    };
    NovedadesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-novedades',
            template: __webpack_require__(/*! ./novedades.component.html */ "./src/app/novedades/novedades.component.html"),
            styles: [__webpack_require__(/*! ./novedades.component.scss */ "./src/app/novedades/novedades.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NovedadesComponent);
    return NovedadesComponent;
}());



/***/ }),

/***/ "./src/app/novedades/novedades.module.ts":
/*!***********************************************!*\
  !*** ./src/app/novedades/novedades.module.ts ***!
  \***********************************************/
/*! exports provided: NovedadesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovedadesModule", function() { return NovedadesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _novedades_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./novedades-routing.module */ "./src/app/novedades/novedades-routing.module.ts");
/* harmony import */ var _novedades_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./novedades.component */ "./src/app/novedades/novedades.component.ts");
/* harmony import */ var _upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upload-video/upload-video.component */ "./src/app/novedades/upload-video/upload-video.component.ts");
/* harmony import */ var _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upload-image/upload-image.component */ "./src/app/novedades/upload-image/upload-image.component.ts");
/* harmony import */ var _edit_promotions_edit_promotions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-promotions/edit-promotions.component */ "./src/app/novedades/edit-promotions/edit-promotions.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");














var NovedadesModule = /** @class */ (function () {
    function NovedadesModule() {
    }
    NovedadesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [_novedades_component__WEBPACK_IMPORTED_MODULE_7__["NovedadesComponent"], _upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_8__["UploadVideoComponent"], _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_9__["UploadImageComponent"], _edit_promotions_edit_promotions_component__WEBPACK_IMPORTED_MODULE_10__["EditPromotionsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _novedades_routing_module__WEBPACK_IMPORTED_MODULE_6__["NovedadesRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_12__["ImageCropperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]
            ]
        })
    ], NovedadesModule);
    return NovedadesModule;
}());



/***/ }),

/***/ "./src/app/novedades/upload-image/upload-image.component.html":
/*!********************************************************************!*\
  !*** ./src/app/novedades/upload-image/upload-image.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"uploadImageForm\" enctype=\"multipart/form-data\" (submit)=\"uploadImage()\">\r\n  <h2>Selecciona una image como promoción</h2>\r\n  <p>Luego podrás editarla.</p>\r\n  <input type=\"file\" accept=\"image/jpeg\" name=\"image\" (change)=\"fileChangeEvent($event)\" formControlName=\"image\" />\r\n  <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [imageFileChanged]=\"imageBlob\" [maintainAspectRatio]=\"true\"\r\n    [resizeToWidth]=\"1200\" format=\"jpg\" (imageCropped)=\"imageCropped($event)\" (imageLoaded)=\"imageLoaded()\"\r\n    (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\" [aspectRatio]=\"16/9\"></image-cropper>\r\n  <button mat-raised-button color=\"primary\" [disabled]=\"!uploadImageForm.valid\" >Guardar</button>\r\n  <p *ngIf=\"isSending\">Enviando...</p>\r\n  <p *ngIf=\"sent\">¡Subido correctamente!</p>\r\n  <p class=\"error\" *ngIf=\"error\">Error al subir el archivo , vuelve a intentarlo.</p>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/novedades/upload-image/upload-image.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/novedades/upload-image/upload-image.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdmVkYWRlcy91cGxvYWQtaW1hZ2UvdXBsb2FkLWltYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/novedades/upload-image/upload-image.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/novedades/upload-image/upload-image.component.ts ***!
  \******************************************************************/
/*! exports provided: UploadImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImageComponent", function() { return UploadImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var UploadImageComponent = /** @class */ (function () {
    function UploadImageComponent(http) {
        this.http = http;
        this.uploadImageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.imageBlob = null;
        this.formData = new FormData();
        this.isSending = false;
        this.sent = false;
        this.error = false;
    }
    UploadImageComponent.prototype.ngOnInit = function () {
    };
    UploadImageComponent.prototype.fileChangeEvent = function (event) {
        console.log('Event', event);
        this.imageChangedEvent = event;
    };
    UploadImageComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.file;
        console.log('ImagedCroped', this.croppedImage);
    };
    UploadImageComponent.prototype.imageLoaded = function () {
        // show cropper
    };
    UploadImageComponent.prototype.cropperReady = function () {
        // cropper ready
    };
    UploadImageComponent.prototype.loadImageFailed = function () {
        // show message
    };
    UploadImageComponent.prototype.prepareImage = function () {
        var arrayBlob = new Array();
        arrayBlob.push(this.croppedImage);
        var date = new Date();
        var fileName = '' +
            date.getDay() +
            date.getMonth() +
            date.getFullYear() +
            date.getMinutes() +
            date.getSeconds() + date.getMilliseconds();
        var file = new File(arrayBlob, fileName + ".jpg", { type: 'image/jpeg' });
        this.formData.append('image', file);
    };
    UploadImageComponent.prototype.postImage = function () {
        var _this = this;
        this.isSending = true;
        this.http.post('http://localhost:3333/promotion/image', this.formData).subscribe(function (data) {
            _this.isSending = false;
            _this.error = false;
            if (data) {
                _this.sent = true;
                // Solución a volver a subir imagen
                _this.formData = new FormData();
                setTimeout(function () {
                    _this.sent = false;
                }, 2000);
            }
        }, function (err) {
            _this.isSending = false;
            _this.sent = false;
            _this.error = true;
            console.error('Error', err);
        });
    };
    UploadImageComponent.prototype.uploadImage = function () {
        this.prepareImage();
        if (this.formData.get('image')) {
            this.postImage();
        }
    };
    UploadImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-upload-image',
            template: __webpack_require__(/*! ./upload-image.component.html */ "./src/app/novedades/upload-image/upload-image.component.html"),
            styles: [__webpack_require__(/*! ./upload-image.component.scss */ "./src/app/novedades/upload-image/upload-image.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadImageComponent);
    return UploadImageComponent;
}());



/***/ }),

/***/ "./src/app/novedades/upload-video/upload-video.component.html":
/*!********************************************************************!*\
  !*** ./src/app/novedades/upload-video/upload-video.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"videoFormGroup\">\r\n  <h2>Selecciona un vídeo como promoción</h2>\r\n  <p>Luego podrás ocultaro o eliminarlo en editar promociones</p>\r\n  <div>\r\n    <input type=\"file\" accept=\"video/*\" name=\"video\" (change)=\"fileChangeEvent($event)\" formControlName=\"video\" />\r\n  </div>\r\n  <div *ngIf=\"videoFormGroup.valid\">\r\n    <video #videoView width=\"auto\" controls>\r\n      <source [src]=\"\"\r\n        [type]=\"(videoFile && videoFile.type) ? videoFile.type : 'video/mp4'\">\r\n      Tu explorador no soporta html5\r\n    </video>\r\n  </div>\r\n  <br>\r\n  <button mat-raised-button color=\"primary\" [disabled]=\"!videoFormGroup.valid\" (click)=\"saveVideo()\">Guardar</button>\r\n  <p *ngIf=\"isSending\">Enviando...</p>\r\n  <p *ngIf=\"sent\">¡Subido correctamente!</p>\r\n  <p class=\"error\" *ngIf=\"error\">Error al subir el archivo , vuelve a intentarlo.</p>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/novedades/upload-video/upload-video.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/novedades/upload-video/upload-video.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdmVkYWRlcy91cGxvYWQtdmlkZW8vdXBsb2FkLXZpZGVvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/novedades/upload-video/upload-video.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/novedades/upload-video/upload-video.component.ts ***!
  \******************************************************************/
/*! exports provided: UploadVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadVideoComponent", function() { return UploadVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var UploadVideoComponent = /** @class */ (function () {
    function UploadVideoComponent(http) {
        this.http = http;
        this.videoFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            video: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.videoFile = null;
        this.isSending = false;
        this.sent = false;
        this.error = false;
    }
    UploadVideoComponent.prototype.ngOnInit = function () {
    };
    UploadVideoComponent.prototype.fileChangeEvent = function (event) {
        console.log('Evento', event);
        console.log('Form control video', this.videoFormGroup.get('video').value);
        var files = (event && event.target && event.target.files) ? event.target.files : [];
        if (files.length > 0) {
            this.videoFile = files[0];
            console.log('Video file', this.videoFile);
            this.videoView.nativeElement.src = URL.createObjectURL(this.videoFile);
            this.videoView.nativeElement.load();
        }
    };
    UploadVideoComponent.prototype.getLocalUrlFile = function () {
        if (this.videoFile) {
            return URL.createObjectURL(this.videoFile);
        }
        return null;
    };
    UploadVideoComponent.prototype.saveVideo = function () {
        var _this = this;
        var formData = new FormData();
        var date = new Date();
        var fileName = '' +
            date.getDay() +
            date.getMonth() +
            date.getFullYear() +
            date.getMinutes() +
            date.getSeconds() + date.getMilliseconds();
        formData.append('video', this.videoFile, fileName);
        this.isSending = true;
        this.http.post('http://localhost:3333/promotion/video', formData).subscribe(function (data) {
            console.log('Data', data);
            _this.isSending = false;
            _this.error = false;
            _this.sent = true;
        }, function (err) {
            _this.isSending = false;
            _this.sent = false;
            _this.error = true;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('videoView'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], UploadVideoComponent.prototype, "videoView", void 0);
    UploadVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-upload-video',
            template: __webpack_require__(/*! ./upload-video.component.html */ "./src/app/novedades/upload-video/upload-video.component.html"),
            styles: [__webpack_require__(/*! ./upload-video.component.scss */ "./src/app/novedades/upload-video/upload-video.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadVideoComponent);
    return UploadVideoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=novedades-novedades-module.js.map