"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var home_dashboard_component_1 = require("./home-dashboard.component");
var filter_dialog_component_1 = require("./filter-dialog.component");
var delete_dialog_component_1 = require("./delete-dialog.component");
var employee_detail_component_1 = require("./employee-detail.component");
var employee_service_1 = require("./employee.service");
var app_form_service_1 = require("./app-form.service");
var providers_1 = require("./providers");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            material_1.MaterialModule,
            animations_1.BrowserAnimationsModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_dashboard_component_1.HomeDashboardComponent,
            employee_detail_component_1.EmployeeDetailComponent,
            filter_dialog_component_1.FilterDialogComponent,
            delete_dialog_component_1.DeleteDialogComponent
        ],
        providers: [
            employee_service_1.EmployeeService,
            app_form_service_1.AppFormService,
            { provide: providers_1.lookupListToken, useValue: providers_1.lookupLists },
        ],
        entryComponents: [
            filter_dialog_component_1.FilterDialogComponent,
            delete_dialog_component_1.DeleteDialogComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map