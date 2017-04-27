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
var FilterDialogComponent = (function () {
    function FilterDialogComponent(dialogRef, formBuilder) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
    }
    FilterDialogComponent.prototype.ngOnInit = function () {
        this.formDialog = this.formBuilder.group({
            gender: this.formBuilder.control('all'),
            location: this.formBuilder.control('all')
        });
    };
    return FilterDialogComponent;
}());
FilterDialogComponent = __decorate([
    core_1.Component({
        template: "\n    <p><b>Select the filter</b></p>\n    <form\n        [formGroup]=\"formDialog\">\n        <table cellspacing=\"10\">\n            <tr>\n                <td>Gender:</td>\n                <td>\n                    <select name=\"gender\" formControlName=\"gender\">\n                        <option value=\"all\">all</option>\n                        <option value=\"Female\">female</option>\n                        <option value=\"Male\">male</option>\n                        <option value=\"Other\">other</option>\n                    </select>\n                </td>\n            </tr>\n            <tr>\n                <td>Location:</td>\n                <td>\n                    <select name=\"location\" formControlName=\"location\">\n                        <option value=\"all\">all</option>\n                        <option value=\"Bandung\">bandung</option>\n                        <option value=\"Jakarta\">jakarta</option>\n                        <option value=\"Bali\">bali</option>\n                        <option value=\"Yogyakarta\">yogyakarta</option>\n                    </select>\n                </td>\n            </tr>\n        </table>\n        <button md-raised-button color=\"primary\" (click)=\"dialogRef.close(formDialog.value)\">Filter</button>\n    </form>\n    "
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [material_1.MdDialogRef,
        forms_1.FormBuilder])
], FilterDialogComponent);
exports.FilterDialogComponent = FilterDialogComponent;
//# sourceMappingURL=filter-dialog.component.js.map