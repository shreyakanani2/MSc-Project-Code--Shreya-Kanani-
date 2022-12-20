(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _map_page_map_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./map-page/map-page.component */
      "./src/app/map-page/map-page.component.ts");
      /* harmony import */


      var _bicycle_route_bicycle_route_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bicycle-route/bicycle-route.component */
      "./src/app/bicycle-route/bicycle-route.component.ts"); //External Imports
      //Internal Imports


      var routes = [{
        component: _map_page_map_page_component__WEBPACK_IMPORTED_MODULE_2__["MapPageComponent"],
        path: 'pedestrian'
      }, {
        component: _bicycle_route_bicycle_route_component__WEBPACK_IMPORTED_MODULE_3__["BicycleRouteComponent"],
        path: 'bicycle'
      }, {
        path: '',
        redirectTo: '/pedestrian',
        pathMatch: 'full'
      }];

      var AppRoutingModule =
      /** @class */
      function () {
        var AppRoutingModule = function AppRoutingModule() {
          _classCallCheck(this, AppRoutingModule);
        };

        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AppRoutingModule
        });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return AppRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent =
      /** @class */
      function () {
        var AppComponent = function AppComponent() {
          _classCallCheck(this, AppComponent);
        };

        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)();
        };

        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: AppComponent,
          selectors: [["app-root"]],
          decls: 1,
          vars: 0,
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
        });
        return AppComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/service-worker */
      "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _map_page_map_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./map-page/map-page.component */
      "./src/app/map-page/map-page.component.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _bicycle_route_bicycle_route_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./bicycle-route/bicycle-route.component */
      "./src/app/bicycle-route/bicycle-route.component.ts"); //Exernal Modules
      //Internal Modules


      var AppModule =
      /** @class */
      function () {
        var AppModule = function AppModule() {
          _classCallCheck(this, AppModule);
        };

        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: AppModule,
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [],
          imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
          })]]
        });
        return AppModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _map_page_map_page_component__WEBPACK_IMPORTED_MODULE_5__["MapPageComponent"], _bicycle_route_bicycle_route_component__WEBPACK_IMPORTED_MODULE_7__["BicycleRouteComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["ServiceWorkerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _map_page_map_page_component__WEBPACK_IMPORTED_MODULE_5__["MapPageComponent"], _bicycle_route_bicycle_route_component__WEBPACK_IMPORTED_MODULE_7__["BicycleRouteComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["ServiceWorkerModule"].register('ngsw-worker.js', {
              enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
            })],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/bicycle-route/bicycle-route.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/bicycle-route/bicycle-route.component.ts ***!
      \**********************************************************/

    /*! exports provided: BicycleRouteComponent */

    /***/
    function srcAppBicycleRouteBicycleRouteComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BicycleRouteComponent", function () {
        return BicycleRouteComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); //External Imports


      function BicycleRouteComponent_img_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
        }
      }

      var BicycleRouteComponent =
      /** @class */
      function () {
        var BicycleRouteComponent = /*#__PURE__*/function () {
          function BicycleRouteComponent() {
            _classCallCheck(this, BicycleRouteComponent);

            this.showLoading = true;
          }

          _createClass(BicycleRouteComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.ds = new google.maps.DirectionsService();
              this.dr = new google.maps.DirectionsRenderer({
                map: null,
                suppressMarkers: true
              });
              navigator.geolocation.getCurrentPosition(function (position) {
                _this.source = {
                  lat: 51.48306371098731,
                  lng: -0.00607076565615742
                };
                _this.destination = {
                  lat: 51.4768927943953,
                  lng: 0.0014428421863000335
                }; // initialize the map container

                _this.map = new google.maps.Map(document.getElementById('map-canvas'), {
                  center: _this.source
                }); //adding a marker

                var markerStart = new google.maps.Marker({
                  position: _this.source,
                  map: _this.map
                });
                var destinationMarker = new google.maps.Marker({
                  position: _this.destination,
                  icon: {
                    url: './assets/imgs/destination_custom_pin.svg',
                    anchor: new google.maps.Point(45, 65),
                    scaledSize: new google.maps.Size(80, 80)
                  },
                  map: _this.map
                });

                _this.map.addListener("click", function (event) {
                  _this.showMapPill = false;
                });

                _this.setRoutePolyline();
              });
            }
          }, {
            key: "setRoutePolyline",
            value: function setRoutePolyline() {
              var _this2 = this;

              var request = {
                origin: this.source,
                destination: this.destination,
                travelMode: google.maps.TravelMode.BICYCLING,
                provideRouteAlternatives: true
              };
              this.ds.route(request, function (response, status) {
                _this2.dr.setOptions({
                  suppressPolylines: false,
                  map: _this2.map
                });

                if (status == google.maps.DirectionsStatus.OK) {
                  //this.dr.setDirections(response);
                  _this2.renderDirections(response, _this2.map);
                }
              });
            }
          }, {
            key: "renderDirections",
            value: function renderDirections(result, map) {
              var image = 'https://cdn-icons-png.flaticon.com/32/1921/1921957.png';
              var marker = new google.maps.Marker({
                position: {
                  lat: 51.48286570133967,
                  lng: -0.003111578984636815
                },
                map: map,
                icon: image
              });
              var marker = new google.maps.Marker({
                position: {
                  lat: 51.48176755044623,
                  lng: -0.006601601061620334
                },
                map: map,
                icon: image
              });
              var toilet = "https://cdn4.iconfinder.com/data/icons/mini-icon-set-sign-navigation/91/Sign_-_Navigation_11-64.png";
              var marker = new google.maps.Marker({
                position: {
                  lat: 51.47664121507586,
                  lng: -0.0006294607328743888
                },
                map: map,
                icon: toilet
              });
              var museum = "https://icons.iconarchive.com/icons/iconsmind/outline/32/Museum-icon.png";
              var marker = new google.maps.Marker({
                position: {
                  lat: 51.48102175836637,
                  lng: -0.005226158558994337
                },
                map: map,
                icon: museum
              });
              var library = "https://icons.iconarchive.com/icons/benjigarner/rise-folder/32/Purple-library-icon.png";
              var marker = new google.maps.Marker({
                position: {
                  lat: 51.47981904762866,
                  lng: -0.008444809498821195
                },
                map: map,
                icon: library
              });
              var directionsRenderer1 = new google.maps.DirectionsRenderer({
                directions: result,
                routeIndex: 0,
                map: map,
                polylineOptions: {
                  strokeColor: "blue"
                }
              });
              var directionsRenderer2 = new google.maps.DirectionsRenderer({
                directions: result,
                routeIndex: 1,
                map: map,
                polylineOptions: {
                  strokeColor: "green"
                }
              });
              google.maps.event.addListener(directionsRenderer2, 'click', function (e) {
                var infoWindow = new google.maps.InfoWindow({
                  content: "Hello"
                });
                infoWindow.open(this.map, this);
              });
              this.showLoading = false;
            }
          }]);

          return BicycleRouteComponent;
        }();

        BicycleRouteComponent.ɵfac = function BicycleRouteComponent_Factory(t) {
          return new (t || BicycleRouteComponent)();
        };

        BicycleRouteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: BicycleRouteComponent,
          selectors: [["app-bicycle-route"]],
          decls: 5,
          vars: 1,
          consts: [["routerLink", "/pedestrian", 2, "width", "100px", "height", "20px", "border-radius", "8px", "padding", "5px", "position", "absolute", "border", "1px solid green", "box-shadow", "0px 1px 8px rgb(49, 48, 48)", "top", "4%", "left", "11%", "z-index", "9999999999", "background-color", "aliceblue"], [1, "app-page"], ["id", "map-canvas"], ["src", "./assets/imgs/Loading_icon.gif", "style", "width: 100px;\nheight: 100px;\nposition: absolute;\ntop: 50%;\nright: 50%;", "alt", "", 4, "ngIf"], ["src", "./assets/imgs/Loading_icon.gif", "alt", "", 2, "width", "100px", "height", "100px", "position", "absolute", "top", "50%", "right", "50%"]],
          template: function BicycleRouteComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pedestrian");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BicycleRouteComponent_img_4_Template, 1, 0, "img", 3);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoading);
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
          styles: ["#map-canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.map-loader-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.map-pill[_ngcontent-%COMP%] {\n  background: #FFF;\n  position: fixed;\n  bottom: -200px;\n  left: 0;\n  right: 0;\n  margin: 12px;\n  border-radius: 50px;\n  padding: 12px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);\n  transition: bottom 0.5s;\n  display: flex;\n  align-items: center;\n}\n\n.map-pill[_ngcontent-%COMP%]   .youps-pill-logo[_ngcontent-%COMP%] {\n  background: url('youps_small_logo.svg') no-repeat;\n  background-size: cover;\n  background-position: center;\n  width: 50px;\n  height: 50px;\n}\n\n.map-pill[_ngcontent-%COMP%]   .youps-pill-content[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.map-pill[_ngcontent-%COMP%]   .youps-pill-label[_ngcontent-%COMP%] {\n  color: #4B290C;\n  font-size: 1em;\n}\n\n.map-pill[_ngcontent-%COMP%]   .youps-pill-distance-time[_ngcontent-%COMP%] {\n  color: grey;\n  font-size: 0.7em;\n}\n\n.map-pill-show[_ngcontent-%COMP%] {\n  bottom: 25px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmljeWNsZS1yb3V0ZS9iaWN5Y2xlLXJvdXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVJO0VBQ0ksaURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBUjs7QUFHSTtFQUNJLGlCQUFBO0FBRFI7O0FBSUk7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQUZSOztBQUtJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBSFI7O0FBT0E7RUFDSSx1QkFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvYmljeWNsZS1yb3V0ZS9iaWN5Y2xlLXJvdXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcC1jYW52YXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXAtbG9hZGVyLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5tYXAtcGlsbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAtMjAwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC41cztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC55b3Vwcy1waWxsLWxvZ28ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi8uLi8uLi9hc3NldHMvaW1ncy95b3Vwc19zbWFsbF9sb2dvLnN2ZycpIG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnlvdXBzLXBpbGwtY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnlvdXBzLXBpbGwtbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjNEIyOTBDO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC55b3Vwcy1waWxsLWRpc3RhbmNlLXRpbWUge1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXAtcGlsbC1zaG93IHtcclxuICAgIGJvdHRvbTogMjVweCAhaW1wb3J0YW50O1xyXG59Il19 */"]
        });
        return BicycleRouteComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BicycleRouteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bicycle-route',
            templateUrl: './bicycle-route.component.html',
            styleUrls: ['./bicycle-route.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/map-page/map-page.component.ts":
    /*!************************************************!*\
      !*** ./src/app/map-page/map-page.component.ts ***!
      \************************************************/

    /*! exports provided: MapPageComponent */

    /***/
    function srcAppMapPageMapPageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapPageComponent", function () {
        return MapPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); //External Routes


      function MapPageComponent_img_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
        }
      }

      var MapPageComponent =
      /** @class */
      function () {
        var MapPageComponent = /*#__PURE__*/function () {
          function MapPageComponent() {
            _classCallCheck(this, MapPageComponent);

            this.showLoading = true;
          }

          _createClass(MapPageComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this3 = this;

              this.ds = new google.maps.DirectionsService();
              this.dr = new google.maps.DirectionsRenderer({
                map: null,
                suppressMarkers: true
              });
              navigator.geolocation.getCurrentPosition(function (position) {
                _this3.source = {
                  lat: 51.48306371098731,
                  lng: -0.00607076565615742
                };
                _this3.destination = {
                  lat: 51.4768927943953,
                  lng: 0.0014428421863000335
                }; // initialize the map container

                _this3.map = new google.maps.Map(document.getElementById('map-canvas'), {
                  center: _this3.source
                });

                _this3.customRoute(_this3.map);

                _this3.map.addListener('tilesloaded', function () {
                  _this3.mapLoaded = true;
                }); //adding a marker


                var markerStart = new google.maps.Marker({
                  position: _this3.source,
                  map: _this3.map
                });
                var destinationMarker = new google.maps.Marker({
                  position: _this3.destination,
                  icon: {
                    url: './assets/imgs/destination_custom_pin.svg',
                    anchor: new google.maps.Point(45, 65),
                    scaledSize: new google.maps.Size(80, 80)
                  },
                  map: _this3.map
                });

                _this3.map.addListener("click", function (event) {
                  _this3.showMapPill = false;
                });

                _this3.setRoutePolyline();
              });
            }
          }, {
            key: "setRoutePolyline",
            value: function setRoutePolyline() {
              var _this4 = this;

              var request = {
                origin: this.source,
                destination: this.destination,
                travelMode: google.maps.TravelMode.WALKING
              };
              this.ds.route(request, function (response, status) {
                _this4.dr.setOptions({
                  suppressPolylines: false,
                  map: _this4.map
                });

                if (status == google.maps.DirectionsStatus.OK) {
                  _this4.dr.setDirections(response); //this.renderDirections(response, this.map);


                  console.log(response);
                }
              });
            }
          }, {
            key: "customRoute",
            value: function customRoute(map) {
              var paths = []; // traffic lights

              var image = 'https://cdn-icons-png.flaticon.com/32/1921/1921957.png';
              var marker = new google.maps.Marker({
                position: {
                  lat: 51.48235,
                  lng: -0.004773
                },
                map: map,
                icon: image
              });
              var marker = new google.maps.Marker({
                position: {
                  lat: 51.48176755044623,
                  lng: -0.006601601061620334
                },
                map: map,
                icon: image
              });
              var marker = new google.maps.Marker({
                position: {
                  lat: 51.48286570133967,
                  lng: -0.003111578984636815
                },
                map: map,
                icon: image
              });
              var toilet = "https://cdn4.iconfinder.com/data/icons/mini-icon-set-sign-navigation/91/Sign_-_Navigation_11-64.png";
              var marker = new google.maps.Marker({
                position: {
                  lat: 51.47664121507586,
                  lng: -0.0006294607328743888
                },
                map: map,
                icon: toilet
              });
              var museum = "https://icons.iconarchive.com/icons/iconsmind/outline/32/Museum-icon.png";
              var marker = new google.maps.Marker({
                position: {
                  lat: 51.48102175836637,
                  lng: -0.005226158558994337
                },
                map: map,
                icon: museum
              });
              var library = "https://icons.iconarchive.com/icons/benjigarner/rise-folder/32/Purple-library-icon.png";
              var marker = new google.maps.Marker({
                position: {
                  lat: 51.47981904762866,
                  lng: -0.008444809498821195
                },
                map: map,
                icon: library
              }); // path middle

              paths['1_to_2'] = new google.maps.Polyline({
                path: [new google.maps.LatLng(51.48323188200924, -0.005931933864728286), new google.maps.LatLng(51.48291915226012, -0.0031628253032282296), new google.maps.LatLng(51.48287238271483, -0.0033130289982496812), new google.maps.LatLng(51.482758799333716, -0.0032379271507389554), new google.maps.LatLng(51.48224767059445, -0.004672624541653587), new google.maps.LatLng(51.4811385349852, -0.003776766789204213), new google.maps.LatLng(51.48032877934226, -0.004568728310597497), new google.maps.LatLng(51.47855808394975, -0.007218750644190253), new google.maps.LatLng(51.476937447523056, 0.0014971219950487497)],
                strokeColor: 'green'
              }); // path 2

              paths['3_to_4'] = new google.maps.Polyline({
                path: [new google.maps.LatLng(51.48323188200924, -0.005931933864728286), new google.maps.LatLng(51.482895, -0.006724), new google.maps.LatLng(51.482762744005434, -0.007048920486082032), new google.maps.LatLng(51.482348496371664, -0.006668046830849065), new google.maps.LatLng(51.482218208031576, -0.006973818638571306), new google.maps.LatLng(51.481377561150104, -0.006270426434328414), new google.maps.LatLng(51.48150505802588, -0.00578871801713846), new google.maps.LatLng(51.48020007315681, -0.005535821098113734), new google.maps.LatLng(51.48045507313557, -0.004704874078461065), new google.maps.LatLng(51.479142558004725, -0.003548773862257335), new google.maps.LatLng(51.478197523704054, 0.0013526093888587597), new google.maps.LatLng(51.4766336739587, 0.0011779901686604065), new google.maps.LatLng(51.476937447523056, 0.0014971219950487497)],
                strokeColor: 'orange'
              });
              paths['5_to_6'] = new google.maps.Polyline({
                path: [new google.maps.LatLng(51.48323188200924, -0.005931933864728286), new google.maps.LatLng(51.483863332638116, -0.003899672716885299), new google.maps.LatLng(51.48295467741339, -0.0031701119124953898), new google.maps.LatLng(51.48279432458089, -0.0030628235462925196), new google.maps.LatLng(51.48136448717233, -0.0019684823397076554), new google.maps.LatLng(51.479132782200054, -0.003556350037262544), new google.maps.LatLng(51.47821066861175, 0.0013789142921989842), new google.maps.LatLng(51.476941061439994, 0.0015291179872204358)],
                strokeColor: 'red'
              });
              var first = 1;
              var second = 2; // Show the route

              if (typeof paths['' + first + '_to_' + second] !== 'undefined') {
                paths['' + first + '_to_' + second].setOptions({
                  map: map
                });
              } else if (typeof paths['' + second + '_to_' + first] !== 'undefined') {
                paths['' + second + '_to_' + first].setOptions({
                  map: map
                });
              }

              var third = 3;
              var fourth = 4; // Show the route

              if (typeof paths['' + third + '_to_' + fourth] !== 'undefined') {
                paths['' + third + '_to_' + fourth].setOptions({
                  map: map
                });
              }

              var fifth = 5;
              var sixth = 6; // Show the route

              if (typeof paths['' + fifth + '_to_' + sixth] !== 'undefined') {
                paths['' + fifth + '_to_' + sixth].setOptions({
                  map: map
                });
              }

              this.showLoading = false;
            }
          }]);

          return MapPageComponent;
        }();

        MapPageComponent.ɵfac = function MapPageComponent_Factory(t) {
          return new (t || MapPageComponent)();
        };

        MapPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: MapPageComponent,
          selectors: [["app-map-page"]],
          decls: 5,
          vars: 1,
          consts: [["routerLink", "/bicycle", 2, "width", "100px", "height", "20px", "border-radius", "8px", "padding", "5px", "position", "absolute", "border", "1px solid green", "box-shadow", "0px 1px 8px rgb(49, 48, 48)", "top", "4%", "left", "11%", "z-index", "9999999999", "background-color", "aliceblue"], [1, "app-page"], ["id", "map-canvas"], ["src", "./assets/imgs/Loading_icon.gif", "style", "width: 100px;\nheight: 100px;\nposition: absolute;\ntop: 50%;\nright: 50%;", "alt", "", 4, "ngIf"], ["src", "./assets/imgs/Loading_icon.gif", "alt", "", 2, "width", "100px", "height", "100px", "position", "absolute", "top", "50%", "right", "50%"]],
          template: function MapPageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bicycle");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MapPageComponent_img_4_Template, 1, 0, "img", 3);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoading);
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
          styles: ["#map-canvas {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLXBhZ2UvbWFwLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFwLXBhZ2UvbWFwLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwLWNhbnZhcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbiJdfQ== */"],
          encapsulation: 2
        });
        return MapPageComponent;
      }();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-map-page',
            templateUrl: './map-page.component.html',
            styleUrls: ['./map-page.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // Import the functions you need from the SDKs you need
      // import { initializeApp } from "firebase/app";
      // import { getAnalytics } from "firebase/analytics";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
      // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      }; // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional

      var firebaseConfig = {
        apiKey: "AIzaSyAXCjMDc1qeRzDxurHBO6y2PnXb67CdeSY",
        authDomain: "pedestrian-navigation-fe421.firebaseapp.com",
        projectId: "pedestrian-navigation-fe421",
        storageBucket: "pedestrian-navigation-fe421.appspot.com",
        messagingSenderId: "637104268959",
        appId: "1:637104268959:web:8da3536177e63c678fa4aa",
        measurementId: "G-N47129DECS"
      }; // Initialize Firebase
      // const app = initializeApp(firebaseConfig);
      // const analytics = getAnalytics(app);

      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/adminshreyakanani/Documents/project/shreyakanani2.github.io/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map