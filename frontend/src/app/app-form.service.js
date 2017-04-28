"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var AppFormService = (function () {
    function AppFormService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    AppFormService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AppFormService.prototype.getGrades = function () {
        return this.http.get('http://localhost:8090/emapp/all/grade')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AppFormService.prototype.getDivisions = function () {
        return this.http.get('http://localhost:8090/emapp/all/division')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AppFormService.prototype.getLocations = function () {
        return this.http.get('http://localhost:8090/emapp/all/location')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AppFormService.prototype.uploadImage = function (formData) {
        return this.http.post('http://localhost:8090/emapp/add/image', formData)
            .toPromise()
            .then(function (response) { return response.text(); })
            .catch(this.handleError);
    };
    return AppFormService;
}());
AppFormService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppFormService);
exports.AppFormService = AppFormService;
//# sourceMappingURL=app-form.service.js.map