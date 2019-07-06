(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>about works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"main-page\" class=\"container-fluid h-100\" >\n  <main-nav></main-nav>\n  <div class=\"container h-100\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/characters/character-card/character-card.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/characters/character-card/character-card.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n    <a routerLink='/characters/{{character.id}}/detail' class=\"cardAnchor\">\n    <div class=\"card-container\">\n        <div class=\"card\">\n            <img class=\"cardImg\" [src]=\"character.cardImgPath\" alt=\"Character\"/>\n            <img src='/assets/images/user-circle-white-icon.svg' alt=\"Profile\"/>\n            <span class=\"card-label mt-1\">\n                Name\n            </span>\n            <h3 class=\"card-heading\">\n                {{character.name}}\n            </h3>\n            <span class=\"select-btn\">\n           Select <img class=\"d-inline-block\" src='/assets/images/arrow-right-circle-icon.svg' alt=\"Arrow Right\"/>\n        </span>\n        </div>\n    </div>\n</a>\n</ng-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/characters/character-detail/character-detail.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/characters/character-detail/character-detail.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Default Loading State -->\n<loader *ngIf=\"!loadedDetail\" [error]=\"errorLoading\" [errorText]=\"errorLoadingText\" [loadingText]=\"loadingText\"></loader>\n\n\n<!-- Loaded Success -->\n<div *ngIf=\"loadedDetail\" class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12 text-center\">\n            <img\n              class=\"d-inline-block mb-3\"\n              src='/assets/images/finger-print-icon.svg'\n              alt=\"Finger Print\"\n            />\n            <h2 class=\"h4\">{{characterDetails.name}}</h2>\n            <p class=\"sub-text\">Character Selected.</p>\n          </div>\n        </div>\n        <div class=\"character-detail-card\">\n          <div class=\"row\">\n            <div class=\"col-md-5 card-character-bg\" [ngStyle]=\"{'background-image': 'url(' + cardImgPath + ')'}\">\n              <ul class=\"character-detail-list\">\n                <span>\n                  <img \n                  src='/assets/images/user-circle-white-icon.svg'\n                  alt=\"Arrow\" />\n                </span>\n                <li>\n                  <span class=\"item-heading\">Name</span>\n                  <span class=\"item-content\">\n                    {{characterDetails.name}}\n                  </span>\n                </li>\n                <li>\n                  <span class=\"item-heading\">Height</span>\n                  <span class=\"item-content\">\n                    {{characterDetails.height}}\n                  </span>\n                </li>\n                <li>\n                  <span class=\"item-heading\">Mass</span>\n                  <span class=\"item-content\">\n                    {{characterDetails.mass}}\n                  </span>\n                </li>\n                <li>\n                  <span class=\"item-heading\">Hair Color</span>\n                  <span class=\"item-content\">\n                    {{characterDetails.hair_color}}\n                  </span>\n                </li>\n                <li>\n                  <span class=\"item-heading\">Skin Color</span>\n                  <span class=\"item-content\">\n                    {{characterDetails.skin_color}}\n                  </span>\n                </li>\n                <li>\n                  <span class=\"item-heading\">Birth Year</span>\n                  <span class=\"item-content\">\n                    {{characterDetails.birth_year}}\n                  </span>\n                </li>\n                <li>\n                  <span class=\"item-heading\">Gender</span>\n                  <span class=\"item-content\">\n                    {{characterDetails.gender}}\n                  </span>\n                </li>\n              </ul>\n            </div>\n            <div class=\"col-md-7\">\n                <!-- <h3>{{selectedMovie.title}}</h3> -->\n                <character-films [movies]=\"characterMoviesDetails\"></character-films>\n                <!-- <p>{{'characterMoviesDetails: ' + (characterMoviesDetails | json)}}}}</p> -->\n\n\n\n              \n            </div>\n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/characters/character-films/character-films.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/characters/character-films/character-films.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <ul *ngIf=\"!selectedMovie\" class=\"film-list\">\n        <span>\n          <img src=\"/assets/images/play-circle-white-icon.svg\" alt=\"Play\" />\n        </span>\n        <h3 class=\"list-heading\">Films</h3>\n\n            <li *ngFor=\"let movie of movies\">\n              <a (click)=\"selectedMovie = movie\">\n                {{movie.title}}\n                <img src=\"/assets/images/arrow-right-circle-icon.svg\" alt=\"Arrow\" />\n              </a>\n            </li>\n         \n      </ul>\n\n      \n\n\n      \n\n\n\n\n      <div *ngIf=\"selectedMovie\">\n           \n           <ul class=\"film-detail-list\">\n               <li>\n                   <span class=\"item-heading\">\n                       Title\n                   </span>\n                   <span class=\"item-content\">\n                        {{selectedMovie.title}}\n                   </span>\n                   \n               </li>\n                <li>\n                    <span class=\"item-heading\">\n                            Sypnosis\n                    </span>\n                   <span class=\"item-content small-light-text\">{{selectedMovie.opening_crawl}}</span>\n               </li> \n               <li>\n                   <span class=\"item-heading\">\n                        Director\n                   </span>\n                   <span class=\"item-content\">\n                        {{selectedMovie.director}}\n                   </span>\n               </li>\n               <li>\n                   <span class=\"item-title\">\n                        Producer\n                   </span>\n                   <span class=\"item-content\">\n                        {{selectedMovie.producer}}\n                   </span>\n               </li>\n               <li>\n                   <span class=\"item-title\">\n                        Release Date\n                   </span>\n                   <span class=\"item-content\">\n                        {{selectedMovie.release_date | date: 'fullDate'}}\n                   </span>\n               </li>\n           </ul>\n           <span class=\"back-btn\" (click)=\"selectedMovie=null\">Back to Films List</span>\n\n       </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/characters/characters-home/characters-home.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/characters/characters-home/characters-home.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center\">\n        <img\n          class=\"d-inline-block mb-3\"\n          src='/assets/images/finger-print-icon.svg'\n          alt=\"Finger Print\"\n        />\n        <h2 class=\"h4\">Select a Character</h2>\n        <p class=\"sub-text\">\n          View your favorite Star Wars character info\n          <br />\n          such as their traits, movies and more.\n        </p>\n\n        <img\n          class=\"d-inline-block\"\n          src='/assets/images/arrow-down-long-grey-icon.svg'\n          alt=\"Down Arrow\"\n        />\n      </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-3\" character-card *ngFor=\"let character of characters\" [character]=\"character\">\n            \n        </div>\n\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/characters/characters.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/characters/characters.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loader/loader.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loader/loader.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container d-flex justify-content-center align-items-center h-100\">\n    <div class=\"display-block text-center\">\n        <!-- Loaded Success State -->\n        <div *ngIf=\"!error\">\n            <div>\n                <div class=\"lds-ellipsis\">\n                    <div></div>\n                    <div></div>\n                    <div></div>\n                    <div></div>\n                </div>\n            </div>\n            <div class=\"loader-text\">\n                {{loadingText || \"loading\"}}\n            </div>\n        </div>\n\n        <!-- Error Case -->\n        <div *ngIf=\"error\" >\n            <div>Error Loading</div>\n            <!-- Optional Error Message -->\n            <div  *ngIf=\"errorText\">\n                {{errorText}}\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main-nav/main-nav.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main-nav/main-nav.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav id=\"main-nav\" class=\"navbar navbar-expand-lg\">\n      <a class=\"navbar-brand\" href=\"/\">\n      <img\n            src=\"assets/images/adp-starwars-logo.svg\"\n            alt=\"ADP StarWars\"\n          />\n      </a>\n      <button\n        class=\"navbar-toggler\"\n        type=\"button\"\n        data-toggle=\"collapse\"\n        data-target=\"#navbarNavDropdown\"\n        aria-controls=\"navbarNavDropdown\"\n        aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\"\n      >\n        <span class=\"navbar-toggler-icon\" ></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n        <ul class=\"navbar-nav  ml-md-auto \">\n          <li class=\"nav-item active\">\n            <a routerLink=\"/characters\" class=\"nav-link\" href=\"#\">\n              Home <span class=\"sr-only\">(current)</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/about\">\n              About\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\"  target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/afrozek/adp-starwars\">\n              Github\n            </a>\n          </li>\n       \n\n        </ul>\n      </div>\n    </nav>\n  </div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
    })
], AboutComponent);



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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _characters_characters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters/characters.component */ "./src/app/characters/characters.component.ts");
/* harmony import */ var _characters_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters/character-detail/character-detail.component */ "./src/app/characters/character-detail/character-detail.component.ts");
/* harmony import */ var _characters_characters_home_characters_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters/characters-home/characters-home.component */ "./src/app/characters/characters-home/characters-home.component.ts");







const routes = [
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'characters', component: _characters_characters_component__WEBPACK_IMPORTED_MODULE_4__["CharactersComponent"], children: [
            { path: '', component: _characters_characters_home_characters_home_component__WEBPACK_IMPORTED_MODULE_6__["CharactersHomeComponent"] },
            { path: ':id/detail', component: _characters_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_5__["CharacterDetailComponent"] }
        ] },
    { path: '', redirectTo: 'characters', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-page {\n  background: #202020;\n  background-image: url(\"/assets/images/starwars-main-bg.png\");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcm9vc3QvRG9jdW1lbnRzL3Byb2plY3RzL2FuZy1hZHAtc3RhcndhcnMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsNERBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbi1wYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvc3RhcndhcnMtbWFpbi1iZy5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIFxufSIsIiNtYWluLXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9zdGFyd2Fycy1tYWluLWJnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */"

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
    constructor() {
        this.title = 'ang-adp-starwars';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _characters_characters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./characters/characters.component */ "./src/app/characters/characters.component.ts");
/* harmony import */ var _characters_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./characters/character-detail/character-detail.component */ "./src/app/characters/character-detail/character-detail.component.ts");
/* harmony import */ var _characters_characters_home_characters_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./characters/characters-home/characters-home.component */ "./src/app/characters/characters-home/characters-home.component.ts");
/* harmony import */ var _characters_character_card_character_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./characters/character-card/character-card.component */ "./src/app/characters/character-card/character-card.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _characters_character_films_character_films_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./characters/character-films/character-films.component */ "./src/app/characters/character-films/character-films.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__["MainNavComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
            _characters_characters_component__WEBPACK_IMPORTED_MODULE_8__["CharactersComponent"],
            _characters_character_detail_character_detail_component__WEBPACK_IMPORTED_MODULE_9__["CharacterDetailComponent"],
            _characters_characters_home_characters_home_component__WEBPACK_IMPORTED_MODULE_10__["CharactersHomeComponent"],
            _characters_character_card_character_card_component__WEBPACK_IMPORTED_MODULE_11__["CharacterCardComponent"],
            _loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"],
            _characters_character_films_character_films_component__WEBPACK_IMPORTED_MODULE_13__["CharacterFilmsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/characters/character-card/character-card.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/characters/character-card/character-card.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3RlcnMvY2hhcmFjdGVyLWNhcmQvY2hhcmFjdGVyLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/characters/character-card/character-card.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/characters/character-card/character-card.component.ts ***!
  \***********************************************************************/
/*! exports provided: CharacterCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterCardComponent", function() { return CharacterCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CharacterCardComponent = class CharacterCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CharacterCardComponent.prototype, "character", void 0);
CharacterCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[character-card]',
        template: __webpack_require__(/*! raw-loader!./character-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/characters/character-card/character-card.component.html"),
        styles: [__webpack_require__(/*! ./character-card.component.scss */ "./src/app/characters/character-card/character-card.component.scss")]
    })
], CharacterCardComponent);



/***/ }),

/***/ "./src/app/characters/character-detail/character-detail.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/characters/character-detail/character-detail.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3RlcnMvY2hhcmFjdGVyLWRldGFpbC9jaGFyYWN0ZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/characters/character-detail/character-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/characters/character-detail/character-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: CharacterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailComponent", function() { return CharacterDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _characters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../characters.service */ "./src/app/characters/characters.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CharacterDetailComponent = class CharacterDetailComponent {
    constructor(charactersService, route) {
        this.charactersService = charactersService;
        this.route = route;
        this.test = 'test';
        this.loadedDetail = false;
        this.loadingText = "1 of 2: Loading Character Details";
        this.characterId = this.route.snapshot.params['id'];
        this.characterMetaDetails = this.charactersService.getCharactersList().filter(item => { return item.id == this.characterId; })[0];
        this.cardImgPath = this.characterMetaDetails.cardImgPath;
        console.log("cardImgPath: ", this.cardImgPath);
    }
    ngOnInit() {
        this.fetchCharacterDetail(this.characterId);
    }
    fetchCharacterDetail(id) {
        this.charactersService.getCharacterDetail(id)
            .subscribe((detail) => {
            // console.log(detail.films);
            this.characterDetails = detail;
            this.fetchCharacterMoviesDetails(detail.films);
        }, error => {
            this.errorLoading = true;
            this.errorLoadingText = "Failed to load character details";
            // alert(error);
            console.log(error);
        });
    }
    // private fetchCharacterMoviesDetails() {
    //   this.charactersService.getAllMoviesDetails()
    //   .subscribe(([res1, res2, res3]) => {
    //     console.log("res: ", res1)
    //     console.log("res: ",  res2)
    //     console.log("res: ",  res3)
    //   },
    //   error => {      
    //     console.log("error: ", error);
    //   })
    // }
    fetchCharacterMoviesDetails(films) {
        this.loadingText = "2 of 2: Loading Films Details";
        this.charactersService.getAllMoviesDetails(films)
            .subscribe((res) => {
            console.log("res: ", res);
            this.characterMoviesDetails = res;
            this.loadedDetail = true;
        }, (err) => {
            this.errorLoading = true;
            this.errorLoadingText = "Failed to load films details";
        });
    }
};
CharacterDetailComponent.ctorParameters = () => [
    { type: _characters_service__WEBPACK_IMPORTED_MODULE_2__["CharactersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
CharacterDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-character-detail',
        template: __webpack_require__(/*! raw-loader!./character-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/characters/character-detail/character-detail.component.html"),
        styles: [__webpack_require__(/*! ./character-detail.component.scss */ "./src/app/characters/character-detail/character-detail.component.scss")]
    })
], CharacterDetailComponent);



/***/ }),

/***/ "./src/app/characters/character-films/character-films.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/characters/character-films/character-films.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3RlcnMvY2hhcmFjdGVyLWZpbG1zL2NoYXJhY3Rlci1maWxtcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/characters/character-films/character-films.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/characters/character-films/character-films.component.ts ***!
  \*************************************************************************/
/*! exports provided: CharacterFilmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterFilmsComponent", function() { return CharacterFilmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CharacterFilmsComponent = class CharacterFilmsComponent {
    constructor() {
        this.selectedMovie = null;
    }
    selectedMovieHandler(movie) {
        this.selectedMovie = movie;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CharacterFilmsComponent.prototype, "movies", void 0);
CharacterFilmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'character-films',
        template: __webpack_require__(/*! raw-loader!./character-films.component.html */ "./node_modules/raw-loader/index.js!./src/app/characters/character-films/character-films.component.html"),
        styles: [__webpack_require__(/*! ./character-films.component.scss */ "./src/app/characters/character-films/character-films.component.scss")]
    })
], CharacterFilmsComponent);



/***/ }),

/***/ "./src/app/characters/characters-home/characters-home.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/characters/characters-home/characters-home.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.cardAnchor {\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  display: block;\n}\n\na.cardAnchor:hover {\n  text-decoration: none;\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n  display: block;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.card-container .card {\n  background: url(\"/assets/images/card-oval-mask.svg\"), -webkit-gradient(linear, left top, left bottom, from(#A65249), to(#9B251B));\n  background: url(\"/assets/images/card-oval-mask.svg\"), linear-gradient(180deg, #A65249 0%, #9B251B 100%);\n  background-position: bottom right;\n  background-repeat: no-repeat;\n  box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 8px;\n  height: 340px;\n  padding: 20px;\n  display: block;\n  border: none;\n  position: relative;\n}\n\n.card-container .card .cardImg {\n  position: absolute;\n  right: -5px;\n  top: 5px;\n}\n\n.card-container .card .card-label {\n  opacity: 0.75;\n  font-family: Montserrat-Regular;\n  font-size: 10px;\n  color: #FFFFFF;\n  letter-spacing: 1px;\n  display: block;\n}\n\n.card-container .card .card-heading {\n  font-family: Montserrat-Bold;\n  font-size: 16px;\n  color: #FFFFFF;\n  letter-spacing: 0;\n  position: relative;\n  z-index: 99;\n}\n\n.select-btn {\n  background-image: linear-gradient(172deg, #000000 0%, #393939 100%);\n  box-shadow: 0 2px 20px 0 rgba(255, 99, 99, 0.5);\n  border-radius: 30px;\n  display: block;\n  position: relative;\n  top: 150px;\n  padding: 15px;\n  text-align: center;\n  color: white;\n  font-family: Montserrat-Regular;\n  font-size: 12px;\n  color: #FFFFFF;\n  letter-spacing: 5px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.select-btn img {\n  position: absolute;\n  right: 18px;\n  top: 18px;\n}\n\n.character-detail-card {\n  background: url(\"/assets/images/card-detail-overlay-bg.svg\"), -webkit-gradient(linear, left top, left bottom, from(#A65249), to(#9B251B));\n  background: url(\"/assets/images/card-detail-overlay-bg.svg\"), linear-gradient(180deg, #A65249 0%, #9B251B 100%);\n  box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 8px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  min-height: 500px;\n  margin-bottom: 50px;\n  padding: 30px 70px;\n}\n\n.character-detail-list {\n  list-style: none;\n}\n\n.character-detail-list li {\n  margin: 15px 0px;\n}\n\n.character-detail-list .item-heading {\n  opacity: 0.75;\n  font-family: Montserrat-Regular;\n  font-size: 10px;\n  color: #FFFFFF;\n  letter-spacing: 1px;\n  display: block;\n  text-transform: uppercase;\n}\n\n.character-detail-list .item-content {\n  font-family: Montserrat-Bold;\n  font-size: 16px;\n  color: #FFFFFF;\n  letter-spacing: 0;\n  position: relative;\n  z-index: 99;\n  display: block;\n}\n\n.film-list {\n  list-style: none;\n  display: inline-block;\n  float: left;\n  min-width: 260px;\n}\n\n.film-list .list-heading {\n  opacity: 0.75;\n  font-family: Montserrat-Regular;\n  font-size: 10px;\n  color: #FFFFFF;\n  letter-spacing: 1px;\n  display: block;\n  text-transform: uppercase;\n  margin-top: 15px;\n}\n\n.film-list li {\n  display: block;\n  margin: 8px 0px;\n}\n\n.film-list a {\n  display: block;\n  background: rgba(0, 0, 0, 0.36);\n  border-radius: 16px;\n  padding: 8px 20px;\n  font-family: Montserrat-Regular;\n  font-size: 12px;\n  color: #FFFFFF;\n  letter-spacing: 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.film-list a img {\n  float: right;\n  position: relative;\n  top: 3px;\n  margin-left: 15px;\n}\n\n.film-list a:hover {\n  cursor: pointer;\n  text-decoration: none;\n  color: white;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.back-btn {\n  display: inline-block;\n  background: rgba(0, 0, 0, 0.36);\n  border-radius: 16px;\n  padding: 8px 20px;\n  font-family: Montserrat-Regular;\n  font-size: 12px;\n  color: #FFFFFF;\n  letter-spacing: 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  margin-top: 10px;\n}\n\n.back-btn:hover {\n  cursor: pointer;\n  text-decoration: none;\n  color: white;\n  background: rgba(0, 0, 0, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcm9vc3QvRG9jdW1lbnRzL3Byb2plY3RzL2FuZy1hZHAtc3RhcndhcnMvc3JjL2FwcC9jaGFyYWN0ZXJzL2NoYXJhY3RlcnMtaG9tZS9jaGFyYWN0ZXJzLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXJhY3RlcnMvY2hhcmFjdGVycy1ob21lL2NoYXJhY3RlcnMtaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0NKOztBREdJO0VBQ0ksaUlBQUE7RUFBQSx1R0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRFI7O0FERVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDQVo7O0FERVE7RUFDSSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FaOztBREVRO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQVo7O0FES0E7RUFDSSxtRUFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNGSjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNEUjs7QURLQTtFQUNJLHlJQUFBO0VBQUEsK0dBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtBQ0ZKOztBREdJO0VBQ0ksZ0JBQUE7QUNEUjs7QURHSTtFQUNJLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNEUjs7QURHSTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNEUjs7QURLQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURJSTtFQUNRLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0ZaOztBRE1JO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNKUjs7QURNSTtFQUNJLGNBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDSlI7O0FET1E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUNMWjs7QURRUTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ05aOztBRGNBO0VBQ0kscUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNYSjs7QURhSTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ1hSIiwiZmlsZSI6InNyYy9hcHAvY2hhcmFjdGVycy9jaGFyYWN0ZXJzLWhvbWUvY2hhcmFjdGVycy1ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYS5jYXJkQW5jaG9yIHtcbiAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmEuY2FyZEFuY2hvcjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogLjNzO1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICAgIC5jYXJkIHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9jYXJkLW92YWwtbWFzay5zdmcnKSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0E2NTI0OSAwJSwgIzlCMjUxQiAxMDAlKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIHJpZ2h0O1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBoZWlnaHQ6IDM0MHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5jYXJkSW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAtNXB4O1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtbGFiZWwge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1oZWFkaW5nIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LUJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWxlY3QtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTcyZGVnLCAjMDAwMDAwIDAlLCAjMzkzOTM5IDEwMCUpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggMCByZ2JhKDI1NSwgOTksIDk5LCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTUwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMThweDtcbiAgICAgICAgdG9wOiAxOHB4O1xuICAgIH1cbn1cblxuLmNoYXJhY3Rlci1kZXRhaWwtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9jYXJkLWRldGFpbC1vdmVybGF5LWJnLnN2ZycpLCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjQTY1MjQ5IDAlLCAjOUIyNTFCIDEwMCUpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDQwcHggMCByZ2JhKDAsIDAsIDAsIDAuNTApO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgcGFkZGluZzogMzBweCA3MHB4O1xufVxuXG4uY2hhcmFjdGVyLWRldGFpbC1saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGxpIHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDBweDtcbiAgICB9XG4gICAgLml0ZW0taGVhZGluZyB7XG4gICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgICAuaXRlbS1jb250ZW50IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtQm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLmZpbG0tbGlzdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWluLXdpZHRoOiAyNjBweDtcblxuICAgIC5saXN0LWhlYWRpbmcge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgICAgXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAgIFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDsgXG4gICAgfVxuXG5cbiAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDhweCAwcHg7XG4gICAgfVxuICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiAuM3M7XG5cblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9XG59XG5cbi5iYWNrLWJ0biB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNik7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG5cbiAgICB9XG5cbn0iLCJhLmNhcmRBbmNob3Ige1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYS5jYXJkQW5jaG9yOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY2FyZC1vdmFsLW1hc2suc3ZnXCIpLCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjQTY1MjQ5IDAlLCAjOUIyNTFCIDEwMCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDQwcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAzNDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhcmQtY29udGFpbmVyIC5jYXJkIC5jYXJkSW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTVweDtcbiAgdG9wOiA1cHg7XG59XG4uY2FyZC1jb250YWluZXIgLmNhcmQgLmNhcmQtbGFiZWwge1xuICBvcGFjaXR5OiAwLjc1O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZCAuY2FyZC1oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtQm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk7XG59XG5cbi5zZWxlY3QtYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE3MmRlZywgIzAwMDAwMCAwJSwgIzM5MzkzOSAxMDAlKTtcbiAgYm94LXNoYWRvdzogMCAycHggMjBweCAwIHJnYmEoMjU1LCA5OSwgOTksIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTUwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uc2VsZWN0LWJ0biBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxOHB4O1xuICB0b3A6IDE4cHg7XG59XG5cbi5jaGFyYWN0ZXItZGV0YWlsLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9jYXJkLWRldGFpbC1vdmVybGF5LWJnLnN2Z1wiKSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0E2NTI0OSAwJSwgIzlCMjUxQiAxMDAlKTtcbiAgYm94LXNoYWRvdzogMCAycHggNDBweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBwYWRkaW5nOiAzMHB4IDcwcHg7XG59XG5cbi5jaGFyYWN0ZXItZGV0YWlsLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmNoYXJhY3Rlci1kZXRhaWwtbGlzdCBsaSB7XG4gIG1hcmdpbjogMTVweCAwcHg7XG59XG4uY2hhcmFjdGVyLWRldGFpbC1saXN0IC5pdGVtLWhlYWRpbmcge1xuICBvcGFjaXR5OiAwLjc1O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jaGFyYWN0ZXItZGV0YWlsLWxpc3QgLml0ZW0tY29udGVudCB7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LUJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZpbG0tbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1pbi13aWR0aDogMjYwcHg7XG59XG4uZmlsbS1saXN0IC5saXN0LWhlYWRpbmcge1xuICBvcGFjaXR5OiAwLjc1O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5maWxtLWxpc3QgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA4cHggMHB4O1xufVxuLmZpbG0tbGlzdCBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNik7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5maWxtLWxpc3QgYSBpbWcge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLmZpbG0tbGlzdCBhOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4uYmFjay1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zNik7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5iYWNrLWJ0bjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/characters/characters-home/characters-home.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/characters/characters-home/characters-home.component.ts ***!
  \*************************************************************************/
/*! exports provided: CharactersHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersHomeComponent", function() { return CharactersHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _characters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../characters.service */ "./src/app/characters/characters.service.ts");



let CharactersHomeComponent = class CharactersHomeComponent {
    constructor(charactersService) {
        this.charactersService = charactersService;
        this.characters = [];
    }
    ngOnInit() {
        this.fetchCharacters();
    }
    fetchCharacters() {
        return this.characters = this.charactersService.getCharactersList();
    }
};
CharactersHomeComponent.ctorParameters = () => [
    { type: _characters_service__WEBPACK_IMPORTED_MODULE_2__["CharactersService"] }
];
CharactersHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-characters-home',
        template: __webpack_require__(/*! raw-loader!./characters-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/characters/characters-home/characters-home.component.html"),
        styles: [__webpack_require__(/*! ./characters-home.component.scss */ "./src/app/characters/characters-home/characters-home.component.scss")]
    })
], CharactersHomeComponent);



/***/ }),

/***/ "./src/app/characters/characters.component.scss":
/*!******************************************************!*\
  !*** ./src/app/characters/characters.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.cardAnchor {\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  display: block;\n}\n\na.cardAnchor:hover {\n  text-decoration: none;\n  -webkit-transform: scale(1.02);\n          transform: scale(1.02);\n  display: block;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.card-container .card {\n  background: url(\"/assets/images/card-oval-mask.svg\"), -webkit-gradient(linear, left top, left bottom, from(#A65249), to(#9B251B));\n  background: url(\"/assets/images/card-oval-mask.svg\"), linear-gradient(180deg, #A65249 0%, #9B251B 100%);\n  background-position: bottom right;\n  background-repeat: no-repeat;\n  box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 8px;\n  height: 340px;\n  padding: 20px;\n  display: block;\n  border: none;\n  position: relative;\n}\n\n.card-container .card .cardImg {\n  position: absolute;\n  right: -5px;\n  top: 5px;\n}\n\n.card-container .card .card-label {\n  opacity: 0.75;\n  font-family: Montserrat-Regular;\n  font-size: 10px;\n  color: #FFFFFF;\n  letter-spacing: 1px;\n  display: block;\n}\n\n.card-container .card .card-heading {\n  font-family: Montserrat-Bold;\n  font-size: 16px;\n  color: #FFFFFF;\n  letter-spacing: 0;\n  position: relative;\n  z-index: 99;\n}\n\n.select-btn {\n  background-image: linear-gradient(172deg, #000000 0%, #393939 100%);\n  box-shadow: 0 2px 20px 0 rgba(255, 99, 99, 0.5);\n  border-radius: 30px;\n  display: block;\n  position: relative;\n  top: 150px;\n  padding: 15px;\n  text-align: center;\n  color: white;\n  font-family: Montserrat-Regular;\n  font-size: 12px;\n  color: #FFFFFF;\n  letter-spacing: 5px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.select-btn img {\n  position: absolute;\n  right: 18px;\n  top: 18px;\n}\n\n.character-detail-card {\n  background: url(\"/assets/images/card-detail-overlay-bg.svg\"), -webkit-gradient(linear, left top, left bottom, from(#A65249), to(#9B251B));\n  background: url(\"/assets/images/card-detail-overlay-bg.svg\"), linear-gradient(180deg, #A65249 0%, #9B251B 100%);\n  box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 8px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  min-height: 500px;\n  margin-bottom: 50px;\n  padding: 30px 70px;\n}\n\n.character-detail-list, .film-detail-list {\n  list-style: none;\n}\n\n.character-detail-list li, .film-detail-list li {\n  margin: 15px 0px;\n}\n\n.character-detail-list .item-heading, .film-detail-list .item-heading {\n  opacity: 0.75;\n  font-family: Montserrat-Regular;\n  font-size: 10px;\n  color: #FFFFFF;\n  letter-spacing: 1px;\n  display: block;\n  text-transform: uppercase;\n}\n\n.character-detail-list .item-content, .film-detail-list .item-content {\n  font-family: Montserrat-Bold;\n  font-size: 16px;\n  color: #FFFFFF;\n  letter-spacing: 0;\n  position: relative;\n  z-index: 99;\n  display: block;\n}\n\n.character-detail-list .small-light-text, .film-detail-list .small-light-text {\n  font-size: 12px;\n  font-family: montserrat-light;\n}\n\n.film-list {\n  list-style: none;\n  display: inline-block;\n  float: left;\n  min-width: 260px;\n}\n\n.film-list .list-heading {\n  opacity: 0.75;\n  font-family: Montserrat-Regular;\n  font-size: 10px;\n  color: #FFFFFF;\n  letter-spacing: 1px;\n  display: block;\n  text-transform: uppercase;\n  margin-top: 15px;\n}\n\n.film-list li {\n  display: block;\n  margin: 8px 0px;\n}\n\n.film-list a {\n  display: block;\n  background: rgba(0, 0, 0, 0.36);\n  border-radius: 16px;\n  padding: 8px 20px;\n  font-family: Montserrat-Regular;\n  font-size: 12px;\n  color: #FFFFFF;\n  letter-spacing: 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.film-list a img {\n  float: right;\n  position: relative;\n  top: 3px;\n  margin-left: 15px;\n}\n\n.film-list a:hover {\n  cursor: pointer;\n  text-decoration: none;\n  color: white;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.back-btn {\n  display: inline-block;\n  background: rgba(0, 0, 0, 0.36);\n  border-radius: 16px;\n  padding: 8px 20px;\n  font-family: Montserrat-Regular;\n  font-size: 12px;\n  color: #FFFFFF;\n  letter-spacing: 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  margin-top: 10px;\n}\n\n.back-btn:hover {\n  cursor: pointer;\n  text-decoration: none;\n  color: white;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.card-character-bg {\n  background-position: right center;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcm9vc3QvRG9jdW1lbnRzL3Byb2plY3RzL2FuZy1hZHAtc3RhcndhcnMvc3JjL2FwcC9jaGFyYWN0ZXJzL2NoYXJhY3RlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0NKOztBREdJO0VBQ0ksaUlBQUE7RUFBQSx1R0FBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRFI7O0FERVE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDQVo7O0FERVE7RUFDSSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FaOztBREVRO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQVo7O0FES0E7RUFDSSxtRUFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNGSjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNEUjs7QURLQTtFQUNJLHlJQUFBO0VBQUEsK0dBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtBQ0ZKOztBREdJO0VBQ0ksZ0JBQUE7QUNEUjs7QURHSTtFQUNJLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNEUjs7QURHSTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNEUjs7QURJSTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtBQ0ZSOztBRE1BO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0hKOztBREtJO0VBQ1EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDSFo7O0FET0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0xSOztBRE9JO0VBQ0ksY0FBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNMUjs7QURRUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQ05aOztBRFNRO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDUFo7O0FEZUE7RUFDSSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxnQkFBQTtBQ1pKOztBRGNJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDWlI7O0FEa0JBO0VBQ0ksaUNBQUE7RUFDQSw0QkFBQTtBQ2ZKIiwiZmlsZSI6InNyYy9hcHAvY2hhcmFjdGVycy9jaGFyYWN0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYS5jYXJkQW5jaG9yIHtcbiAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmEuY2FyZEFuY2hvcjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogLjNzO1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICAgIC5jYXJkIHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9jYXJkLW92YWwtbWFzay5zdmcnKSwgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0E2NTI0OSAwJSwgIzlCMjUxQiAxMDAlKTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIHJpZ2h0O1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBoZWlnaHQ6IDM0MHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5jYXJkSW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAtNXB4O1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtbGFiZWwge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1oZWFkaW5nIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LUJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWxlY3QtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTcyZGVnLCAjMDAwMDAwIDAlLCAjMzkzOTM5IDEwMCUpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggMCByZ2JhKDI1NSwgOTksIDk5LCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTUwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMThweDtcbiAgICAgICAgdG9wOiAxOHB4O1xuICAgIH1cbn1cblxuLmNoYXJhY3Rlci1kZXRhaWwtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9jYXJkLWRldGFpbC1vdmVybGF5LWJnLnN2ZycpLCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjQTY1MjQ5IDAlLCAjOUIyNTFCIDEwMCUpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDQwcHggMCByZ2JhKDAsIDAsIDAsIDAuNTApO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgcGFkZGluZzogMzBweCA3MHB4O1xufVxuXG4uY2hhcmFjdGVyLWRldGFpbC1saXN0LCAuZmlsbS1kZXRhaWwtbGlzdCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBsaSB7XG4gICAgICAgIG1hcmdpbjogMTVweCAwcHg7XG4gICAgfVxuICAgIC5pdGVtLWhlYWRpbmcge1xuICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gICAgLml0ZW0tY29udGVudCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LUJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuc21hbGwtbGlnaHQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQtbGlnaHQ7XG4gICAgfVxufVxuXG4uZmlsbS1saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtaW4td2lkdGg6IDI2MHB4O1xuXG4gICAgLmxpc3QtaGVhZGluZyB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyAgICBcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICAgXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4OyBcbiAgICB9XG5cblxuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogOHB4IDBweDtcbiAgICB9XG4gICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcblxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH1cbn1cblxuLmJhY2stYnRuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIHRyYW5zaXRpb246IC4zcztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcblxuICAgIH1cblxufVxuXG4uY2FyZC1jaGFyYWN0ZXItYmcge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufSIsImEuY2FyZEFuY2hvciB7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5hLmNhcmRBbmNob3I6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9jYXJkLW92YWwtbWFzay5zdmdcIiksIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNBNjUyNDkgMCUsICM5QjI1MUIgMTAwJSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSByaWdodDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm94LXNoYWRvdzogMCAycHggNDBweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDM0MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FyZC1jb250YWluZXIgLmNhcmQgLmNhcmRJbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNXB4O1xuICB0b3A6IDVweDtcbn1cbi5jYXJkLWNvbnRhaW5lciAuY2FyZCAuY2FyZC1sYWJlbCB7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNhcmQtY29udGFpbmVyIC5jYXJkIC5jYXJkLWhlYWRpbmcge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1Cb2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbn1cblxuLnNlbGVjdC1idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTcyZGVnLCAjMDAwMDAwIDAlLCAjMzkzOTM5IDEwMCUpO1xuICBib3gtc2hhZG93OiAwIDJweCAyMHB4IDAgcmdiYSgyNTUsIDk5LCA5OSwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5zZWxlY3QtYnRuIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE4cHg7XG4gIHRvcDogMThweDtcbn1cblxuLmNoYXJhY3Rlci1kZXRhaWwtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NhcmQtZGV0YWlsLW92ZXJsYXktYmcuc3ZnXCIpLCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjQTY1MjQ5IDAlLCAjOUIyNTFCIDEwMCUpO1xuICBib3gtc2hhZG93OiAwIDJweCA0MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHBhZGRpbmc6IDMwcHggNzBweDtcbn1cblxuLmNoYXJhY3Rlci1kZXRhaWwtbGlzdCwgLmZpbG0tZGV0YWlsLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmNoYXJhY3Rlci1kZXRhaWwtbGlzdCBsaSwgLmZpbG0tZGV0YWlsLWxpc3QgbGkge1xuICBtYXJnaW46IDE1cHggMHB4O1xufVxuLmNoYXJhY3Rlci1kZXRhaWwtbGlzdCAuaXRlbS1oZWFkaW5nLCAuZmlsbS1kZXRhaWwtbGlzdCAuaXRlbS1oZWFkaW5nIHtcbiAgb3BhY2l0eTogMC43NTtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uY2hhcmFjdGVyLWRldGFpbC1saXN0IC5pdGVtLWNvbnRlbnQsIC5maWxtLWRldGFpbC1saXN0IC5pdGVtLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1Cb2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY2hhcmFjdGVyLWRldGFpbC1saXN0IC5zbWFsbC1saWdodC10ZXh0LCAuZmlsbS1kZXRhaWwtbGlzdCAuc21hbGwtbGlnaHQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQtbGlnaHQ7XG59XG5cbi5maWxtLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBtaW4td2lkdGg6IDI2MHB4O1xufVxuLmZpbG0tbGlzdCAubGlzdC1oZWFkaW5nIHtcbiAgb3BhY2l0eTogMC43NTtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZmlsbS1saXN0IGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogOHB4IDBweDtcbn1cbi5maWxtLWxpc3QgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uZmlsbS1saXN0IGEgaW1nIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5maWxtLWxpc3QgYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbn1cblxuLmJhY2stYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYmFjay1idG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi5jYXJkLWNoYXJhY3Rlci1iZyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/characters/characters.component.ts":
/*!****************************************************!*\
  !*** ./src/app/characters/characters.component.ts ***!
  \****************************************************/
/*! exports provided: CharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersComponent", function() { return CharactersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CharactersComponent = class CharactersComponent {
    constructor() { }
    ngOnInit() {
    }
};
CharactersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-characters',
        template: __webpack_require__(/*! raw-loader!./characters.component.html */ "./node_modules/raw-loader/index.js!./src/app/characters/characters.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None // Use to disable CSS Encapsulation for this component
        ,
        styles: [__webpack_require__(/*! ./characters.component.scss */ "./src/app/characters/characters.component.scss")]
    })
], CharactersComponent);



/***/ }),

/***/ "./src/app/characters/characters.service.ts":
/*!**************************************************!*\
  !*** ./src/app/characters/characters.service.ts ***!
  \**************************************************/
/*! exports provided: CharactersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersService", function() { return CharactersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let CharactersService = class CharactersService {
    constructor(http) {
        this.http = http;
    }
    getCharactersList() {
        return [
            {
                id: 1,
                name: "Luke Skywalker",
                url: "https://swapi.co/api/people/1/",
                cardImgPath: "/assets/images/luke-skywalker-card-render.svg"
            },
            {
                id: 4,
                name: "Darth Vader",
                url: "https://swapi.co/api/people/4/",
                cardImgPath: "/assets/images/darth-vader-card-render.svg",
            },
            {
                id: "unknown",
                name: "Obi-wan Kenobi",
                url: "https://swapi.co/api/people/unknown/",
                cardImgPath: "/assets/images/obi-wan-kenobi-card-render.svg"
            },
            {
                id: 3,
                name: "R2-D2",
                url: "https://swapi.co/api/people/3/",
                cardImgPath: "/assets/images/r2-d2-card-render.svg"
            }
        ];
    }
    // get single character detail by id
    getCharacterDetail(id) {
        return this.http.get(`https://swapi.co/api/people/${id}/`);
    }
    getAllMoviesDetails(films) {
        console.log(films);
        let filmsObservablesList = films.map((film) => {
            return this.http.get(film);
        });
        console.log(filmsObservablesList);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(filmsObservablesList);
    }
};
CharactersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CharactersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CharactersService);



/***/ }),

/***/ "./src/app/loader/loader.component.scss":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader-text {\n  letter-spacing: 4px;\n  font-weight: 300;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\n.lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-ellipsis div {\n  position: absolute;\n  top: 27px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: #fff;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n\n.lds-ellipsis div:nth-child(1) {\n  left: 6px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n          animation: lds-ellipsis1 0.6s infinite;\n}\n\n.lds-ellipsis div:nth-child(2) {\n  left: 6px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n\n.lds-ellipsis div:nth-child(3) {\n  left: 26px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n\n.lds-ellipsis div:nth-child(4) {\n  left: 45px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n          animation: lds-ellipsis3 0.6s infinite;\n}\n\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes lds-ellipsis1 {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n\n@keyframes lds-ellipsis3 {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  100% {\n    -webkit-transform: translate(19px, 0);\n            transform: translate(19px, 0);\n  }\n}\n\n@keyframes lds-ellipsis2 {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n  }\n  100% {\n    -webkit-transform: translate(19px, 0);\n            transform: translate(19px, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcm9vc3QvRG9jdW1lbnRzL3Byb2plY3RzL2FuZy1hZHAtc3RhcndhcnMvc3JjL2FwcC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtVQUFBLG1EQUFBO0FDQ0o7O0FEQ0U7RUFDRSxTQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ0VKOztBREFFO0VBQ0UsU0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNHSjs7QURERTtFQUNFLFVBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDSUo7O0FERkU7RUFDRSxVQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ0tKOztBREhFO0VBQ0U7SUFDRSwyQkFBQTtZQUFBLG1CQUFBO0VDTUo7RURKRTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7RUNNSjtBQUNGOztBRFpFO0VBQ0U7SUFDRSwyQkFBQTtZQUFBLG1CQUFBO0VDTUo7RURKRTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7RUNNSjtBQUNGOztBREpFO0VBQ0U7SUFDRSwyQkFBQTtZQUFBLG1CQUFBO0VDTUo7RURKRTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7RUNNSjtBQUNGOztBRFpFO0VBQ0U7SUFDRSwyQkFBQTtZQUFBLG1CQUFBO0VDTUo7RURKRTtJQUNFLDJCQUFBO1lBQUEsbUJBQUE7RUNNSjtBQUNGOztBREpFO0VBQ0U7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDTUo7RURKRTtJQUNFLHFDQUFBO1lBQUEsNkJBQUE7RUNNSjtBQUNGOztBRFpFO0VBQ0U7SUFDRSxrQ0FBQTtZQUFBLDBCQUFBO0VDTUo7RURKRTtJQUNFLHFDQUFBO1lBQUEsNkJBQUE7RUNNSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxvYWRlci10ZXh0e1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmxkcy1lbGxpcHNpcyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gIH1cbiAgLmxkcy1lbGxpcHNpcyBkaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI3cHg7XG4gICAgd2lkdGg6IDExcHg7XG4gICAgaGVpZ2h0OiAxMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAxLCAxLCAwKTtcbiAgfVxuICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xuICAgIGxlZnQ6IDZweDtcbiAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcbiAgfVxuICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xuICAgIGxlZnQ6IDZweDtcbiAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbiAgfVxuICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xuICAgIGxlZnQ6IDI2cHg7XG4gICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG4gIH1cbiAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgICBsZWZ0OiA0NXB4O1xuICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xuICB9XG4gIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczMge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxOXB4LCAwKTtcbiAgICB9XG4gIH1cbiAgIiwiLmxvYWRlci10ZXh0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubGRzLWVsbGlwc2lzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi5sZHMtZWxsaXBzaXMgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI3cHg7XG4gIHdpZHRoOiAxMXB4O1xuICBoZWlnaHQ6IDExcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiA2cHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xuICBsZWZ0OiA2cHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xuICBsZWZ0OiAyNnB4O1xuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbn1cblxuLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgbGVmdDogNDVweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxOXB4LCAwKTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoaderComponent = class LoaderComponent {
    // error = true;
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoaderComponent.prototype, "loadingText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoaderComponent.prototype, "errorText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoaderComponent.prototype, "error", void 0);
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'loader',
        template: __webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/loader/loader.component.html"),
        styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/loader/loader.component.scss")]
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/main-nav/main-nav.component.scss":
/*!**************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main-nav .nav-link {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mcm9vc3QvRG9jdW1lbnRzL3Byb2plY3RzL2FuZy1hZHAtc3RhcndhcnMvc3JjL2FwcC9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxZQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLW5hdiB7XG4gICAgLm5hdi1saW5rIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn0iLCIjbWFpbi1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainNavComponent = class MainNavComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'main-nav',
        template: __webpack_require__(/*! raw-loader!./main-nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-nav/main-nav.component.html"),
        styles: [__webpack_require__(/*! ./main-nav.component.scss */ "./src/app/main-nav/main-nav.component.scss")]
    })
], MainNavComponent);



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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/froost/Documents/projects/ang-adp-starwars/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map