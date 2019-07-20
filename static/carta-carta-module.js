(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carta-carta-module"],{

/***/ "./src/app/carta/carta-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/carta/carta-routing.module.ts ***!
  \***********************************************/
/*! exports provided: CartaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartaRoutingModule", function() { return CartaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _carta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carta.component */ "./src/app/carta/carta.component.ts");




var routes = [{
        path: '',
        component: _carta_component__WEBPACK_IMPORTED_MODULE_3__["CartaComponent"]
    }];
var CartaRoutingModule = /** @class */ (function () {
    function CartaRoutingModule() {
    }
    CartaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CartaRoutingModule);
    return CartaRoutingModule;
}());



/***/ }),

/***/ "./src/app/carta/carta.component.html":
/*!********************************************!*\
  !*** ./src/app/carta/carta.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n  <h2>\r\n    <span *ngIf=\"!idElementToEdit\">Añadir nuevo elemento a la carta</span>\r\n    <span *ngIf=\"idElementToEdit\">Editando elemento de la carta</span>\r\n  </h2>\r\n  <form [formGroup]=\"menuItemForm\" enctype=\"multipart/form-data\">\r\n\r\n    <div class=\"container-form-menu-item\">\r\n      <div class=\"left\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Nombre en castellano\" formControlName=\"esName\" width=\"100%\" required>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Nombre en inglés\" formControlName=\"enName\" required>\r\n        </mat-form-field>\r\n\r\n        <br>\r\n\r\n        <!-- Ingredientes -->\r\n        <mat-form-field>\r\n          <mat-label>Ingredientes</mat-label>\r\n          <mat-select formControlName=\"ingredientsFormContorl\" multiple>\r\n            <mat-option *ngFor=\"let ingredient of ingredients\" [value]=\"ingredient.id\">{{ingredient.name.es}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <!-- Alérgenos -->\r\n        <mat-form-field>\r\n          <mat-label>Alérgenos</mat-label>\r\n          <mat-select formControlName=\"allergensFormControl\" multiple>\r\n            <mat-option *ngFor=\"let allergen of allergens\" [value]=\"allergen.id\">{{allergen.name.es}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <br>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput type=\"number\" step=\"0.01\" placeholder=\"Precio\" formControlName=\"price\" required>\r\n        </mat-form-field>\r\n\r\n        <!-- Categoría -->\r\n        <mat-form-field>\r\n          <mat-label>Categoría</mat-label>\r\n          <mat-select formControlName=\"categories\" required>\r\n            <mat-option *ngFor=\"let categorie of categories\" [value]=\"categorie.en\">{{categorie.es}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-checkbox formControlName=\"featured\">Producto destacado</mat-checkbox>\r\n        <br>\r\n        <br>\r\n      </div>\r\n      <div class=\"right\">\r\n        <label>Selecciona una imagen:</label>\r\n        <br>\r\n        <br>\r\n        <input type=\"file\" accept=\"image/jpeg\" (change)=\"fileChangeEvent($event)\" required />\r\n\r\n        <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [imageFileChanged]=\"imageBlob\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"4.5 / 3\"\r\n          [resizeToWidth]=\"1200\" format=\"jpg\" (imageCropped)=\"imageCropped($event)\" (imageLoaded)=\"imageLoaded()\"\r\n          (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <p *ngIf=\"!menuItemForm.valid\">Rellena todos los cambios obligatorios tanto en inglés como en castellano. No\r\n      olvides añadir una imagen.</p>\r\n    <button mat-raised-button color=\"primary\" (click)=\"addToMenu()\" [disabled]=\"!menuItemForm.valid\"\r\n      *ngIf=\"!idElementToEdit\">\r\n      <span *ngIf=\"!isCreating\">Añadir a la carta</span>\r\n      <span *ngIf=\"isCreating\">Creando...</span>\r\n    </button>\r\n\r\n    <button mat-raised-button color=\"primary\" (click)=\"editElement()\" [disabled]=\"!menuItemForm.valid\"\r\n      *ngIf=\"idElementToEdit\">\r\n      <span *ngIf=\"!isCreating\">Editar elemento</span>\r\n      <span *ngIf=\"isCreating\">Editando...</span>\r\n    </button>\r\n    <span *ngIf=\"createdMenuItem\" class=\"ok\">¡Corrrecto!</span>\r\n  </form>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/carta/carta.component.scss":
/*!********************************************!*\
  !*** ./src/app/carta/carta.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnRhL2NhcnRhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/carta/carta.component.ts":
/*!******************************************!*\
  !*** ./src/app/carta/carta.component.ts ***!
  \******************************************/
/*! exports provided: CartaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartaComponent", function() { return CartaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var CartaComponent = /** @class */ (function () {
    function CartaComponent(http, route) {
        this.http = http;
        this.route = route;
        this.menuItemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            allergensFormControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            ingredientsFormContorl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            esName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            enName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            categories: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('food', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            featured: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.createdMenuItem = false;
        this.isCreating = false;
        this.idElementToEdit = '';
        this.imageBlob = null;
    }
    CartaComponent.prototype.ngOnInit = function () {
        this.checkEdit();
        this.addAllergens();
        this.addIngredients();
        this.addCategories();
    };
    CartaComponent.prototype.checkEdit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.idElementToEdit = params ? params.id : '';
            if (_this.idElementToEdit) {
                _this.getElementToEdit();
            }
            else {
                _this.clearEdit();
            }
        });
    };
    CartaComponent.prototype.getElementToEdit = function () {
        var _this = this;
        this.http.get('http://localhost:3333/menu-item?id=' + this.idElementToEdit).subscribe(function (menuElement) {
            if (menuElement) {
                _this.fillForm(menuElement);
            }
            else {
                _this.clearEdit();
            }
        });
    };
    CartaComponent.prototype.clearEdit = function () {
        console.log('Clearing the edit form');
        this.menuItemForm.reset();
        this.idElementToEdit = '';
        this.imageBlob = null;
    };
    CartaComponent.prototype.fillForm = function (menuElement) {
        var _this = this;
        // NOMBRE EN CASTELLANO
        this.menuItemForm.get('esName').setValue(menuElement.name.es);
        // NOMBRE EN INGLÉS
        this.menuItemForm.get('enName').setValue(menuElement.name.en);
        // PRODUCTO DESTACADO
        if (menuElement.categories.includes('featured')) {
            this.menuItemForm.get('featured').setValue(true);
        }
        // ALÉRGENOS
        if (menuElement.allergens) {
            this.menuItemForm.get('allergensFormControl').setValue(menuElement.allergens.map(function (allergen) {
                return allergen.id;
            }));
        }
        // INGREDIENTES
        if (menuElement.ingredients) {
            this.menuItemForm.get('ingredientsFormContorl').setValue(menuElement.ingredients.map(function (ingredient) {
                return ingredient.id;
            }));
        }
        // PRECIO
        if (menuElement.price) {
            this.menuItemForm.get('price').setValue(menuElement.price);
        }
        if (menuElement.image) {
            this.menuItemForm.get('image').setValue(menuElement.image);
        }
        this.getImage('http://localhost:3333/' + menuElement.image).subscribe(function (data) {
            _this.imageBlob = data;
            _this.croppedImage = _this.imageBlob;
        });
    };
    CartaComponent.prototype.getImage = function (imageUrl) {
        return this.http.get(imageUrl, { responseType: 'blob' });
    };
    CartaComponent.prototype.addAllergens = function () {
        this.allergens = [];
        this.allergens.push({
            id: 'glueten',
            color: 'f5c472',
            name: {
                en: 'Gluten',
                es: 'Glúten'
            }
        }, {
            id: 'apio',
            color: 'f5c472',
            name: {
                en: 'Celery',
                es: 'Apio'
            }
        }, {
            id: 'molluscos',
            color: 'f5c472',
            name: {
                en: 'Molluscos',
                es: 'Molúscos'
            }
        }, {
            id: 'fish',
            color: 'f5c472',
            name: {
                en: 'Fish',
                es: 'Pescado'
            }
        }, {
            id: 'peanuts',
            color: 'f5c472',
            name: {
                en: 'Peanuts',
                es: 'Cacahuetes'
            }
        }, {
            id: 'lupins',
            color: 'f5c472',
            name: {
                en: 'Lupins',
                es: 'Altramueces'
            }
        }, {
            id: 'mustaro',
            color: 'f5c472',
            name: {
                en: 'Mustaro',
                es: 'Mostaza'
            }
        }, {
            id: 'nuts',
            color: 'f5c472',
            name: {
                en: 'Nuts',
                es: 'Nueces'
            }
        }, {
            id: 'milk',
            color: 'f5c472',
            name: {
                en: 'Milk',
                es: 'Lácteos'
            }
        }, {
            id: 'egg',
            color: 'f5c472',
            name: {
                en: 'Egg',
                es: 'Huevo'
            }
        }, {
            id: 'soya',
            color: 'f5c472',
            name: {
                en: 'Soya',
                es: 'Soja'
            }
        }, {
            id: 'crustaceans',
            color: 'f5c472',
            name: {
                en: 'Crustaceans',
                es: 'Crustáceos'
            }
        }, {
            id: 'sulphites',
            color: 'f5c472',
            name: {
                en: 'Sulphites',
                es: 'Sulfitos'
            }
        }, {
            id: 'nutshell',
            color: 'f5c472',
            name: {
                en: 'Nut Shell',
                es: 'F. Cáscara'
            }
        }, {
            id: 'sesame',
            color: 'f5c472',
            name: {
                en: 'Sesame',
                es: 'Sésamo'
            }
        });
    };
    CartaComponent.prototype.addIngredients = function () {
        var _this = this;
        this.ingredients = [];
        this.http.get('http://localhost:3333/ingredient').subscribe(function (ingredients) {
            _this.ingredients = ingredients;
            _this.ingredients.sort(function (a, b) {
                if (a.name.es > b.name.es) {
                    return 1;
                }
                if (a.name.es < b.name.es) {
                    return -1;
                }
                return 0;
            });
        });
    };
    CartaComponent.prototype.addCategories = function () {
        this.categories = [];
        this.categories.push({
            en: 'food',
            es: 'Comida'
        });
        this.categories.push({
            en: 'drinks',
            es: 'Bebidas'
        });
    };
    CartaComponent.prototype.addToMenu = function () {
        var _this = this;
        console.log('Add to menu');
        var selectedAllergens = this.menuItemForm.controls.allergensFormControl.value ?
            this.menuItemForm.controls.allergensFormControl.value : [];
        var selectedIngredientes = this.menuItemForm.controls.ingredientsFormContorl.value ?
            this.menuItemForm.controls.ingredientsFormContorl.value : [];
        var allergensToSend = [];
        var ingredientsToSend = [];
        selectedAllergens.forEach(function (id) {
            allergensToSend = allergensToSend.concat(_this.allergens.filter(function (allergen) { return allergen.id === id; }));
        });
        selectedIngredientes.forEach(function (id) {
            ingredientsToSend = ingredientsToSend.concat(_this.ingredients.filter(function (allergen) { return allergen.id === id; }));
        });
        var formData = new FormData();
        var arrayBlob = new Array();
        arrayBlob.push(this.croppedImage);
        var date = new Date();
        var fileName = '' +
            date.getDay() +
            date.getMonth() +
            date.getFullYear() +
            date.getMinutes() +
            date.getSeconds() + date.getMilliseconds();
        console.log('File name', fileName);
        var file = new File(arrayBlob, fileName + ".jpg", { type: 'image/jpeg' });
        console.log('File', file);
        formData.append('image', file);
        var menuItemToSend = {
            name: {
                es: this.menuItemForm.controls.esName.value,
                en: this.menuItemForm.controls.enName.value
            },
            allergens: allergensToSend,
            ingredients: ingredientsToSend,
            price: this.menuItemForm.controls.price.value,
            image: this.menuItemForm.controls.image.value,
            categories: []
        };
        if (this.menuItemForm.controls.featured.value) {
            menuItemToSend.categories.push('featured');
        }
        if (this.menuItemForm.controls.categories.value) {
            menuItemToSend.categories.push(this.menuItemForm.controls.categories.value);
        }
        this.isCreating = true;
        var imageToDelete = menuItemToSend.image;
        console.log('Image to delete', imageToDelete);
        if (imageToDelete) {
            // No hay ningún problema que la elimación de la imagen se haga de forma asíncrona
            this.deleteImage(imageToDelete).subscribe();
            // FIXME: Tal vez deberíamos añadir un mensaje de eliminación
            // sin embargo no afectaría mucho que hubiera una imagen
            // de más en la carpeta de imagenes
            // hablar con duke
        }
        console.log('Edit', this.idElementToEdit);
        // Primero subimos la imagen
        this.uploadImage(formData).subscribe(function (data) {
            if (data) {
                menuItemToSend.image = data.image;
                if (_this.idElementToEdit) {
                    // EDIT
                    _this.sendBodyToEdit(menuItemToSend).subscribe(function (res) {
                        _this.isCreating = false;
                        _this.createdMenuItem = true;
                    });
                }
                else {
                    // NEW
                    _this.sendBody(menuItemToSend).subscribe(function (res) {
                        if (res && res._id) {
                            _this.createdMenuItem = true;
                            _this.isCreating = false;
                            _this.idElementToEdit = res._id;
                        }
                    }, function (err) {
                        console.log('Error', err);
                        _this.isCreating = false;
                    });
                }
            }
        });
    };
    CartaComponent.prototype.uploadImage = function (formData) {
        return this.http.post('http://localhost:3333/image', formData);
    };
    CartaComponent.prototype.deleteImage = function (imageToDelete) {
        return this.http.delete("http://localhost:3333/image?imageToDelete=" + imageToDelete);
    };
    CartaComponent.prototype.sendBody = function (body) {
        return this.http.post('http://localhost:3333/menu-item', body);
    };
    CartaComponent.prototype.sendBodyToEdit = function (bodyToEdit) {
        return this.http.put("http://localhost:3333/menu-item?id=" + this.idElementToEdit, bodyToEdit);
    };
    CartaComponent.prototype.editElement = function () {
        this.addToMenu();
    };
    CartaComponent.prototype.fileChangeEvent = function (event) {
        console.log('Event', event);
        this.imageChangedEvent = event;
    };
    CartaComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.file;
        console.log('ImagedCroped', this.croppedImage);
    };
    CartaComponent.prototype.imageLoaded = function () {
        // show cropper
    };
    CartaComponent.prototype.cropperReady = function () {
        // cropper ready
    };
    CartaComponent.prototype.loadImageFailed = function () {
        // show message
    };
    CartaComponent.prototype.isFormValid = function () {
        if (this.menuItemForm.valid) {
            return true;
        }
        else {
            return false;
        }
    };
    CartaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-carta',
            template: __webpack_require__(/*! ./carta.component.html */ "./src/app/carta/carta.component.html"),
            styles: [__webpack_require__(/*! ./carta.component.scss */ "./src/app/carta/carta.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CartaComponent);
    return CartaComponent;
}());



/***/ }),

/***/ "./src/app/carta/carta.module.ts":
/*!***************************************!*\
  !*** ./src/app/carta/carta.module.ts ***!
  \***************************************/
/*! exports provided: CartaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartaModule", function() { return CartaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _carta_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carta-routing.module */ "./src/app/carta/carta-routing.module.ts");
/* harmony import */ var _carta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carta.component */ "./src/app/carta/carta.component.ts");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





/* Angular Material */





var CartaModule = /** @class */ (function () {
    function CartaModule() {
    }
    CartaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_carta_component__WEBPACK_IMPORTED_MODULE_4__["CartaComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _carta_routing_module__WEBPACK_IMPORTED_MODULE_3__["CartaRoutingModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__["ImageCropperModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"]
            ]
        })
    ], CartaModule);
    return CartaModule;
}());



/***/ })

}]);
//# sourceMappingURL=carta-carta-module.js.map