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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var common_1 = require("@angular/common");
var app_form_service_1 = require("./app-form.service");
var providers_1 = require("./providers");
var delete_dialog_component_1 = require("./delete-dialog.component");
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(lookupLists, formBuilder, appFormService, dialog, datePipe) {
        this.lookupLists = lookupLists;
        this.formBuilder = formBuilder;
        this.appFormService = appFormService;
        this.dialog = dialog;
        this.datePipe = datePipe;
        this.mediaDir = '../media/';
        this.save = new core_1.EventEmitter();
        this.updt = new core_1.EventEmitter();
        this.del = new core_1.EventEmitter();
        this.status = new core_1.EventEmitter();
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileList = null;
        this.selectedImage = this.mediaDir + 'ph.jpg';
        this.appFormService.getGrades()
            .then(function (grades) { return _this.grades = grades; });
        this.appFormService.getDivisions()
            .then(function (divisions) { return _this.divisions = divisions; });
        this.appFormService.getLocations()
            .then(function (locations) { return _this.locations = locations; });
    };
    EmployeeDetailComponent.prototype.ngOnChanges = function (changes) {
        if (this.emp === 0) {
            this.form = this.formBuilder.group({
                id: this.formBuilder.control(0),
                firstname: this.formBuilder.control('', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[a-zA-Z\\-\\ ]+')
                ])),
                lastname: this.formBuilder.control('', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[a-zA-Z\\-\\ ]+')
                ])),
                gender: this.formBuilder.control('', forms_1.Validators.compose([
                    forms_1.Validators.required
                ])),
                birthdate: this.formBuilder.control('', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    this.dateValidator
                ])),
                nationality: this.formBuilder.control('', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[a-zA-Z\\-\\ ]+')
                ])),
                maritalstatus: this.formBuilder.control('', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[a-zA-Z\\/\\-\\ ]+')
                ])),
                division: this.formBuilder.control('', forms_1.Validators.compose([
                    forms_1.Validators.required
                ])),
                subdivision: this.formBuilder.control('', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[a-zA-Z0-9\\-\\ ]+')
                ])),
                status: this.formBuilder.control('', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[a-zA-Z\\-\\ ]+')
                ])),
                suspenddate: this.formBuilder.control('', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    this.dateValidator
                ])),
                hireddate: this.formBuilder.control('', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    this.dateValidator
                ])),
                grade: this.formBuilder.control('', forms_1.Validators.compose([
                    forms_1.Validators.required
                ])),
                phone: this.formBuilder.control('', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[0-9]+')
                ])),
                email: this.formBuilder.control('', forms_1.Validators.compose([
                    forms_1.Validators.required
                ])),
                location: this.formBuilder.control('', forms_1.Validators.compose([
                    forms_1.Validators.required
                ])),
                imgpath: this.formBuilder.control('')
            });
            this.selectedImage = this.mediaDir + 'ph.jpg';
            this.delButton = true;
        }
        else {
            this.form = this.formBuilder.group({
                id: this.formBuilder.control(this.emp.id),
                firstname: this.formBuilder.control(this.emp.firstname, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[a-zA-Z\\-\\ ]+')
                ])),
                lastname: this.formBuilder.control(this.emp.lastname, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[a-zA-Z\\-\\ ]+')
                ])),
                gender: this.formBuilder.control(this.emp.gender, forms_1.Validators.compose([
                    forms_1.Validators.required
                ])),
                birthdate: this.formBuilder.control(this.datePipe.transform(this.emp.birthdate, 'dd-MM-yyyy'), forms_1.Validators.compose([
                    forms_1.Validators.required,
                    this.dateValidator
                ])),
                nationality: this.formBuilder.control(this.emp.nationality, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[a-zA-Z\\-\\ ]+')
                ])),
                maritalstatus: this.formBuilder.control(this.emp.maritalstatus, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[a-zA-Z\\/\\-\\ ]+')
                ])),
                division: this.formBuilder.control(this.emp.division, forms_1.Validators.compose([
                    forms_1.Validators.required
                ])),
                subdivision: this.formBuilder.control(this.emp.subdivision, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[a-zA-Z0-9\\-\\ ]+')
                ])),
                status: this.formBuilder.control(this.emp.status, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[a-zA-Z\\-\\ ]+')
                ])),
                suspenddate: this.formBuilder.control(this.datePipe.transform(this.emp.suspenddate, 'dd-MM-yyyy'), forms_1.Validators.compose([
                    forms_1.Validators.required,
                    this.dateValidator
                ])),
                hireddate: this.formBuilder.control(this.datePipe.transform(this.emp.hireddate, 'dd-MM-yyyy'), forms_1.Validators.compose([
                    forms_1.Validators.required,
                    this.dateValidator
                ])),
                grade: this.formBuilder.control(this.emp.grade, forms_1.Validators.compose([
                    forms_1.Validators.required
                ])),
                phone: this.formBuilder.control(this.emp.phone, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.pattern('[0-9]+')
                ])),
                email: this.formBuilder.control(this.emp.email, forms_1.Validators.compose([
                    forms_1.Validators.required
                ])),
                location: this.formBuilder.control(this.emp.location.id, forms_1.Validators.compose([
                    forms_1.Validators.required
                ])),
                imgpath: this.formBuilder.control('')
            });
            this.selectedImage = this.mediaDir + this.emp.imgpath;
            this.delButton = false;
        }
    };
    EmployeeDetailComponent.prototype.dateValidator = function (control) {
        var oddMonths = [1, 3, 5, 7, 8, 10, 12];
        var evenMonths = [4, 6, 9, 11];
        var valid = /^\d{1,2}\-\d{1,2}\-\d{4}$/.test(control.value.trim());
        if (!valid) {
            return { "validity": "Invalid date" };
        }
        else {
            var stringDate = control.value.trim().split('-');
            if (((parseInt(stringDate[2]) % 4 == 0) && (parseInt(stringDate[2]) % 100 != 0)) || (parseInt(stringDate[2]) % 400 == 0)) {
                if (parseInt(stringDate[1]) == 2 && parseInt(stringDate[0]) >= 1 && parseInt(stringDate[0]) <= 29) {
                    return null;
                }
                else if (oddMonths.indexOf(parseInt(stringDate[1])) > 0 && parseInt(stringDate[0]) >= 1 && parseInt(stringDate[0]) <= 31) {
                    return null;
                }
                else if (evenMonths.indexOf(parseInt(stringDate[1])) > 0 && parseInt(stringDate[0]) >= 1 && parseInt(stringDate[0]) <= 30) {
                    return null;
                }
                else {
                    return { "validity": "Invalid date" };
                }
            }
            else {
                if (parseInt(stringDate[1]) == 2 && parseInt(stringDate[0]) >= 1 && parseInt(stringDate[0]) <= 28) {
                    return null;
                }
                else if (oddMonths.indexOf(parseInt(stringDate[1])) > 0 && parseInt(stringDate[0]) >= 1 && parseInt(stringDate[0]) <= 31) {
                    return null;
                }
                else if (evenMonths.indexOf(parseInt(stringDate[1])) > 0 && parseInt(stringDate[0]) >= 1 && parseInt(stringDate[0]) <= 30) {
                    return null;
                }
                else {
                    return { "validity": "Invalid date" };
                }
            }
        }
    };
    EmployeeDetailComponent.prototype.fileChange = function (event) {
        var _this = this;
        this.fileList = event.target.files;
        if (this.fileList.length > 0) {
            var file = this.fileList[0];
            var formData = new FormData();
            formData.append('file', file, file.name);
            this.appFormService.uploadImage(formData)
                .then(function (response) {
                if (response !== 'fail') {
                    _this.selectedImage = _this.mediaDir + response;
                }
            });
        }
    };
    EmployeeDetailComponent.prototype.openDialog = function (emp) {
        var _this = this;
        var dialogRef = this.dialog.open(delete_dialog_component_1.DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === "yes") {
                _this.deleteData(emp);
            }
        });
    };
    EmployeeDetailComponent.prototype.findLocationName = function (empId) {
        var location;
        for (location in this.locations) {
            if (location.id === empId) {
                return location.locationname;
            }
        }
        return 'Unknown';
    };
    EmployeeDetailComponent.prototype.transformDate = function (date) {
        var stringDate = date.trim().split('-');
        var parsedNewDate = new Date(parseInt(stringDate[2]), parseInt(stringDate[1]) - 1, parseInt(stringDate[0]) + 1).toISOString();
        return Date.parse(parsedNewDate);
    };
    EmployeeDetailComponent.prototype.saveData = function (emp) {
        var _this = this;
        if (this.emp === 0) {
            emp.birthdate = this.transformDate(emp.birthdate);
            emp.suspenddate = this.transformDate(emp.suspenddate);
            emp.hireddate = this.transformDate(emp.hireddate);
            emp.location = {
                id: emp.location,
                locationname: this.findLocationName(emp.location)
            };
            if (this.fileList) {
                var file = this.fileList[0];
                var formData = new FormData();
                formData.append('file', file, file.name);
                this.appFormService.uploadImage(formData)
                    .then(function (response) {
                    if (response !== 'fail') {
                        emp.imgpath = response;
                        _this.save.emit(emp);
                    }
                });
            }
            else {
                emp.imgpath = 'ph.jpg';
                this.save.emit(emp);
            }
        }
        else {
            this.delButton = true;
            emp.birthdate = this.transformDate(emp.birthdate);
            emp.suspenddate = this.transformDate(emp.suspenddate);
            emp.hireddate = this.transformDate(emp.hireddate);
            emp.location = {
                id: emp.location,
                locationname: this.findLocationName(emp.location)
            };
            if (this.fileList) {
                var file = this.fileList[0];
                var formData = new FormData();
                formData.append('file', file, file.name);
                this.appFormService.uploadImage(formData)
                    .then(function (response) {
                    if (response !== 'fail') {
                        emp.imgpath = response;
                        _this.updt.emit(emp);
                    }
                    else {
                        emp.imgpath = 'ph.jpg';
                        _this.updt.emit(emp);
                    }
                });
            }
            else {
                if (this.emp.imgpath !== 'ph.jpg') {
                    emp.imgpath = this.emp.imgpath;
                }
                else {
                    emp.imgpath = 'ph.jpg';
                }
                this.updt.emit(emp);
            }
        }
        this.fileList = null;
        this.selectedImage = this.mediaDir + 'ph.jpg';
        this.form.reset({ birthdate: '01-01-1970', suspenddate: '01-01-1970', hireddate: '01-01-1970' });
        this.status.emit();
    };
    EmployeeDetailComponent.prototype.cancelData = function () {
        this.delButton = true;
        this.form.reset({ birthdate: '01-01-1970', suspenddate: '01-01-1970', hireddate: '01-01-1970' });
        this.status.emit();
    };
    EmployeeDetailComponent.prototype.deleteData = function (emp) {
        this.delButton = true;
        this.del.emit(emp.id);
        this.form.reset({ birthdate: '01-01-1970', suspenddate: '01-01-1970', hireddate: '01-01-1970' });
        this.status.emit();
    };
    return EmployeeDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EmployeeDetailComponent.prototype, "emp", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EmployeeDetailComponent.prototype, "save", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EmployeeDetailComponent.prototype, "updt", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EmployeeDetailComponent.prototype, "del", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EmployeeDetailComponent.prototype, "status", void 0);
EmployeeDetailComponent = __decorate([
    core_1.Component({
        selector: 'employee-detail',
        templateUrl: 'app/employee-detail.component.html',
        styleUrls: ['app/employee-detail.component.css'],
        providers: [common_1.DatePipe]
    }),
    __param(0, core_1.Inject(providers_1.lookupListToken)),
    __metadata("design:paramtypes", [Object, forms_1.FormBuilder,
        app_form_service_1.AppFormService,
        material_1.MdDialog,
        common_1.DatePipe])
], EmployeeDetailComponent);
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-detail.component.js.map