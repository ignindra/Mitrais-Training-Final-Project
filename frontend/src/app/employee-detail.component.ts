import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MdDialog } from '@angular/material';
import { DatePipe } from '@angular/common';

import { Employee } from './employee';
import { Grade } from './grade';
import { Division } from './division';
import { Location } from './location';
import { AppFormService } from './app-form.service';
import { lookupListToken } from './providers';
import { DeleteDialogComponent } from './delete-dialog.component';

@Component({
    selector: 'employee-detail',
    templateUrl: 'app/employee-detail.component.html',
    styleUrls: ['app/employee-detail.component.css'],
    providers: [DatePipe]
})
export class EmployeeDetailComponent {
    @Input() emp: any;
    @Output() save = new EventEmitter();
    @Output() updt = new EventEmitter();
    @Output() del = new EventEmitter();
    @Output() status = new EventEmitter();
    delButton: boolean;
    form: FormGroup;
    grades: Grade[];
    selectedGrade: Grade;
    divisions: Division[];
    selectedDivision: Division;
    locations: Location[];
    selectedLocation: Location;

    constructor(
        @Inject(lookupListToken) public lookupLists: any,
        private formBuilder: FormBuilder,
        private appFormService: AppFormService,
        private dialog: MdDialog,
        private datePipe: DatePipe) { }

    ngOnInit(): void {
        this.appFormService.getGrades()
            .then(grades => this.grades = grades);
        this.appFormService.getDivisions()
            .then(divisions => this.divisions = divisions);
        this.appFormService.getLocations()
            .then(locations => this.locations = locations);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.emp === 0) {
            this.form = this.formBuilder.group({
                id: this.formBuilder.control(0),
                firstname: this.formBuilder.control('', Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-zA-Z\\-\\ ]+')
                ])),
                lastname: this.formBuilder.control('', Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-zA-Z\\-\\ ]+')
                ])),
                gender: this.formBuilder.control('', Validators.compose([
                    Validators.required
                ])),
                birthdate: this.formBuilder.control('', Validators.compose([
                    Validators.required,
                    Validators.pattern('[0-9][0-9]\\-[0-9][0-9]\\-[1-2][0-9][0-9][0-9]')
                ])),
                nationality: this.formBuilder.control('', Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-zA-Z\\-\\ ]+')
                ])),
                maritalstatus: this.formBuilder.control('', Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-zA-Z\\/\\-\\ ]+')
                ])),
                division: this.formBuilder.control('', Validators.compose([
                    Validators.required
                ])),
                subdivision: this.formBuilder.control('', Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-zA-Z0-9\\-\\ ]+')
                ])),
                status: this.formBuilder.control('', Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-zA-Z\\-\\ ]+')
                ])),
                suspenddate: this.formBuilder.control('', Validators.compose([
                    Validators.required,
                    Validators.pattern('[0-9][0-9]\\-[0-9][0-9]\\-[1-2][0-9][0-9][0-9]')
                ])),
                hireddate: this.formBuilder.control('', Validators.compose([
                    Validators.required,
                    Validators.pattern('[0-9][0-9]\\-[0-9][0-9]\\-[1-2][0-9][0-9][0-9]')
                ])),
                grade: this.formBuilder.control('', Validators.compose([
                    Validators.required
                ])),
                phone: this.formBuilder.control('', Validators.compose([
                    Validators.required,
                    Validators.pattern('[0-9]+')
                ])),
                email: this.formBuilder.control('', Validators.compose([
                    Validators.required
                ])),
                location: this.formBuilder.control('', Validators.compose([
                    Validators.required
                ]))
            });
            this.delButton = true;
        } else {
            this.form = this.formBuilder.group({
                id: this.formBuilder.control(this.emp.id),
                firstname: this.formBuilder.control(this.emp.firstname, Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-zA-Z\\-\\ ]+')
                ])),
                lastname: this.formBuilder.control(this.emp.lastname, Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-zA-Z\\-\\ ]+')
                ])),
                gender: this.formBuilder.control(this.emp.gender, Validators.compose([
                    Validators.required
                ])),
                birthdate: this.formBuilder.control(this.datePipe.transform(this.emp.birthdate, 'dd-MM-yyyy'), Validators.compose([
                    Validators.required,
                    Validators.pattern('[0-9][0-9]\\-[0-9][0-9]\\-[1-2][0-9][0-9][0-9]')
                ])),
                nationality: this.formBuilder.control(this.emp.nationality, Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-zA-Z\\-\\ ]+')
                ])),
                maritalstatus: this.formBuilder.control(this.emp.maritalstatus, Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-zA-Z\\/\\-\\ ]+')
                ])),
                division: this.formBuilder.control(this.emp.division, Validators.compose([
                    Validators.required
                ])),
                subdivision: this.formBuilder.control(this.emp.subdivision, Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-zA-Z0-9\\-\\ ]+')
                ])),
                status: this.formBuilder.control(this.emp.status, Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-zA-Z\\-\\ ]+')
                ])),
                suspenddate: this.formBuilder.control(this.datePipe.transform(this.emp.suspenddate, 'dd-MM-yyyy'), Validators.compose([
                    Validators.required,
                    Validators.pattern('[0-9][0-9]\\-[0-9][0-9]\\-[1-2][0-9][0-9][0-9]')
                ])),
                hireddate: this.formBuilder.control(this.datePipe.transform(this.emp.hireddate, 'dd-MM-yyyy'), Validators.compose([
                    Validators.required,
                    Validators.pattern('[0-9][0-9]\\-[0-9][0-9]\\-[1-2][0-9][0-9][0-9]')
                ])),
                grade: this.formBuilder.control(this.emp.grade, Validators.compose([
                    Validators.required
                ])),
                phone: this.formBuilder.control(this.emp.phone, Validators.compose([
                    Validators.required,
                    Validators.pattern('[0-9]+')
                ])),
                email: this.formBuilder.control(this.emp.email, Validators.compose([
                    Validators.required
                ])),
                location: this.formBuilder.control(this.emp.location, Validators.compose([
                    Validators.required
                ]))
            });
            this.delButton = false;
        }
    }

    openDialog(emp: Employee) {
        let dialogRef = this.dialog.open(DeleteDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result === "yes") {
                this.deleteData(emp);
            }
        })
    }

    transformDate(date: any): number {
        let stringDate = date.trim().split('-');
        let parsedNewDate = new Date(parseInt(stringDate[2]), parseInt(stringDate[1])-1, parseInt(stringDate[0])).toISOString();
        return Date.parse(parsedNewDate);
    }

    saveData(emp: any) {
        if (this.emp === 0) {
            emp.birthdate = this.transformDate(emp.birthdate);
            emp.suspenddate = this.transformDate(emp.suspenddate);
            emp.hireddate = this.transformDate(emp.hireddate);
            this.save.emit(emp);
        } else {
            this.delButton = true;
            emp.birthdate = this.transformDate(emp.birthdate);
            emp.suspenddate = this.transformDate(emp.suspenddate);
            emp.hireddate = this.transformDate(emp.hireddate);
            this.updt.emit(emp);
        }
        this.form.reset();
        this.status.emit();
    }

    cancelData() {
        this.delButton = true;
        this.form.reset();
        this.status.emit();
    }

    deleteData(emp: Employee) {
        this.delButton = true;
        this.del.emit(emp.id);
        this.form.reset();
        this.status.emit();
    }
}