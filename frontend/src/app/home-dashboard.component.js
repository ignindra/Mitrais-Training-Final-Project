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
var material_1 = require("@angular/material");
var employee_service_1 = require("./employee.service");
var filter_dialog_component_1 = require("./filter-dialog.component");
var HomeDashboardComponent = (function () {
    function HomeDashboardComponent(employeeService, dialog, snackbar) {
        this.employeeService = employeeService;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.sortDirection = 'ascending';
        this.selectedEmployee = 0;
    }
    HomeDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedList = 0;
        this.employeeService.getEmployees()
            .then(function (employees) { return _this.employees = employees; })
            .then(function () { return _this.employeesLength = _this.employees.length; });
    };
    HomeDashboardComponent.prototype.onSelectEmployee = function (emp) {
        this.selectedEmployee = emp;
        this.selectedList = emp.id;
    };
    HomeDashboardComponent.prototype.onSaveData = function (emp) {
        var _this = this;
        this.employeeService.addEmployee(emp)
            .then(function (response) { return _this.openSnackBar(response, 'Close'); })
            .then(function () { return _this.employeeService.getEmployees()
            .then(function (employees) { return _this.employees = employees; })
            .then(function () { return _this.employeesLength = _this.employees.length; }); });
    };
    HomeDashboardComponent.prototype.onUpdateData = function (emp) {
        var _this = this;
        this.employeeService.updateEmployee(emp)
            .then(function (response) { return _this.openSnackBar(response, 'Close'); })
            .then(function () { return _this.employeeService.getEmployees()
            .then(function (employees) { return _this.employees = employees; })
            .then(function () { return _this.employeesLength = _this.employees.length; }); });
    };
    HomeDashboardComponent.prototype.onDeleteData = function (id) {
        var _this = this;
        this.employeeService.deleteEmployee(id)
            .then(function (response) { return _this.openSnackBar(response, 'Close'); })
            .then(function () { return _this.employeeService.getEmployees()
            .then(function (employees) { return _this.employees = employees; })
            .then(function () { return _this.employeesLength = _this.employees.length; }); });
    };
    HomeDashboardComponent.prototype.sortEmployees = function () {
        if (this.sortDirection === 'ascending') {
            this.employees.sort(function (x, y) {
                return (x.lastname.toLowerCase() == y.lastname.toLowerCase() ? 0 : x.lastname.toLowerCase() < y.lastname.toLowerCase() ? -1 : 1);
            });
            this.sortDirection = 'descending';
        }
        else {
            this.employees.sort(function (x, y) {
                return (x.lastname.toLowerCase() == y.lastname.toLowerCase() ? 0 : x.lastname.toLowerCase() > y.lastname.toLowerCase() ? -1 : 1);
            });
            this.sortDirection = 'ascending';
        }
    };
    HomeDashboardComponent.prototype.searchName = function (term) {
        var _this = this;
        this.employeeService.getEmployees()
            .then(function (employees) { return _this.employees = employees; })
            .then(function () { return _this.employees = Object.assign([], _this.employees)
            .filter(function (emp) { return emp.firstname.toLowerCase().indexOf(term) >= 0 ||
            emp.lastname.toLowerCase().indexOf(term) >= 0 ||
            (emp.firstname + ' ' + emp.lastname).toLowerCase().indexOf(term) >= 0; }); })
            .then(function () { return _this.employeesLength = _this.employees.length; });
    };
    HomeDashboardComponent.prototype.onStatusChange = function () {
        this.selectedEmployee = 0;
        this.selectedList = 0;
    };
    HomeDashboardComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(filter_dialog_component_1.FilterDialogComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.filterSearch(result);
        });
    };
    HomeDashboardComponent.prototype.openSnackBar = function (message, action) {
        this.snackbar.open(message, action, {
            duration: 2000,
        });
    };
    HomeDashboardComponent.prototype.filterSearch = function (filterRes) {
        var _this = this;
        if (filterRes) {
            if (filterRes.gender === 'all' && filterRes.location !== 'all') {
                this.employeeService.getEmployees()
                    .then(function (employees) { return _this.employees = employees; })
                    .then(function () { return _this.employees = Object.assign([], _this.employees)
                    .filter(function (emp) { return emp.location.locationname === filterRes.location; }); })
                    .then(function () { return _this.employeesLength = _this.employees.length; });
            }
            else if (filterRes.gender !== 'all' && filterRes.location === 'all') {
                this.employeeService.getEmployees()
                    .then(function (employees) { return _this.employees = employees; })
                    .then(function () { return _this.employees = Object.assign([], _this.employees)
                    .filter(function (emp) { return emp.gender === filterRes.gender; }); })
                    .then(function () { return _this.employeesLength = _this.employees.length; });
            }
            else if (filterRes.gender === 'all' && filterRes.location === 'all') {
                this.employeeService.getEmployees()
                    .then(function (employees) { return _this.employees = employees; })
                    .then(function () { return _this.employeesLength = _this.employees.length; });
            }
            else {
                this.employeeService.getEmployees()
                    .then(function (employees) { return _this.employees = employees; })
                    .then(function () { return _this.employees = Object.assign([], _this.employees)
                    .filter(function (emp) { return emp.gender === filterRes.gender && emp.location.locationname === filterRes.location; }); })
                    .then(function () { return _this.employeesLength = _this.employees.length; });
            }
        }
    };
    return HomeDashboardComponent;
}());
HomeDashboardComponent = __decorate([
    core_1.Component({
        selector: 'home-dashboard',
        templateUrl: 'app/home-dashboard.component.html',
        styleUrls: ['app/home-dashboard.component.css']
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService,
        material_1.MdDialog,
        material_1.MdSnackBar])
], HomeDashboardComponent);
exports.HomeDashboardComponent = HomeDashboardComponent;
//# sourceMappingURL=home-dashboard.component.js.map