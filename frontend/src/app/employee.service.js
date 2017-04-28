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
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    EmployeeService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get('http://localhost:8090/emapp/all/employee')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeService.prototype.addEmployee = function (emp) {
        return this.http
            .post('http://localhost:8090/emapp/add/employee', JSON.stringify(emp), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.text(); })
            .catch(this.handleError);
    };
    EmployeeService.prototype.updateEmployee = function (emp) {
        console.log("!#@!#@!#@!@!" + emp.imgpath);
        return this.http
            .put('http://localhost:8090/emapp/update/employee', JSON.stringify(emp), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.text(); })
            .catch(this.handleError);
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this.http
            .delete('http://localhost:8090/emapp/del/employee/' + id, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.text(); })
            .catch(this.handleError);
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map