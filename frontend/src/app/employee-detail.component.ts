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
    private mediaDir = '../media/';
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
    fileList: FileList;
    selectedImage: string;

    constructor(
        @Inject(lookupListToken) public lookupLists: any,
        private formBuilder: FormBuilder,
        private appFormService: AppFormService,
        private dialog: MdDialog,
        private datePipe: DatePipe) { }

    ngOnInit(): void {
        this.fileList = null;
        this.selectedImage = this.mediaDir+'ph.jpg';
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
                birthdate: this.formBuilder.control('-', Validators.compose([
                    Validators.required,
                    this.dateValidator
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
                suspenddate: this.formBuilder.control('-', Validators.compose([
                    this.dateValidator
                ])),
                hireddate: this.formBuilder.control('-', Validators.compose([
                    Validators.required,
                    this.dateValidator
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
                ])),
                imgpath: this.formBuilder.control('')
            });
            this.selectedImage = this.mediaDir+'ph.jpg';
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
                birthdate: this.formBuilder.control('-', Validators.compose([
                    Validators.required,
                    this.dateValidator
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
                suspenddate: this.formBuilder.control('-', Validators.compose([
                    this.dateValidator
                ])),
                hireddate: this.formBuilder.control('-', Validators.compose([
                    Validators.required,
                    this.dateValidator
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
                location: this.formBuilder.control(this.emp.location.id, Validators.compose([
                    Validators.required
                ])),
                imgpath: this.formBuilder.control('')
            });
            this.dateFiller();
            this.selectedImage = this.mediaDir+this.emp.imgpath;
            this.delButton = false;
        }
    }

    dateFiller() {
        if (this.emp.suspenddate === '-') {
            this.form.controls['suspenddate'].setValue('-');
        } else {
            this.form.controls['suspenddate'].setValue(this.datePipe.transform(this.emp.suspenddate, 'dd-MM-yyyy'));
        }
        if (this.emp.birthdate === '-') {
            this.form.controls['birthdate'].setValue('-');
        } else {
            this.form.controls['birthdate'].setValue(this.datePipe.transform(this.emp.birthdate, 'dd-MM-yyyy'));
        }
        if (this.emp.hireddate === '-') {
            this.form.controls['hireddate'].setValue('-');
        } else {
            this.form.controls['hireddate'].setValue(this.datePipe.transform(this.emp.hireddate, 'dd-MM-yyyy'));
        }
    }

    dateValidator(control: any) {
        let oddMonths = [1, 3, 5, 7, 8, 10, 12];
        let evenMonths = [4, 6, 9, 11];
        let valid =  /^\d{1,2}\-\d{1,2}\-\d{4}$/.test(control.value.trim());

        if (!valid && control.value.trim() !== '-') {
            return {"validity":"Invalid date"};
        } else if (!valid && control.value.trim() === '-') {
            return null;
        } else {
            let stringDate = control.value.trim().split('-');
            let leapYearCheck = ((parseInt(stringDate[2]) % 4 == 0) && (parseInt(stringDate[2]) % 100 != 0)) || (parseInt(stringDate[2]) % 400 == 0);
            let yearCheck = (parseInt(stringDate[2]) >= 1900) && (parseInt(stringDate[2]) <= new Date().getFullYear());

            if (leapYearCheck && yearCheck) {
                if (parseInt(stringDate[1]) == 2 && parseInt(stringDate[0]) >= 1 && parseInt(stringDate[0]) <= 29) {
                    return null;
                } else if (oddMonths.indexOf(parseInt(stringDate[1])) >= 0 && parseInt(stringDate[0]) >= 1 && parseInt(stringDate[0]) <= 31) {
                    return null;
                } else if (evenMonths.indexOf(parseInt(stringDate[1])) >= 0 && parseInt(stringDate[0]) >= 1 && parseInt(stringDate[0]) <= 30) {
                    return null;
                } else {
                    return {"validity":"Invalid date"};
                }
            } else if (!leapYearCheck && yearCheck) {
                if (parseInt(stringDate[1]) == 2 && parseInt(stringDate[0]) >= 1 && parseInt(stringDate[0]) <= 28) {
                    return null;
                } else if (oddMonths.indexOf(parseInt(stringDate[1])) >= 0 && parseInt(stringDate[0]) >= 1 && parseInt(stringDate[0]) <= 31) {
                    return null;
                } else if (evenMonths.indexOf(parseInt(stringDate[1])) >= 0 && parseInt(stringDate[0]) >= 1 && parseInt(stringDate[0]) <= 30) {
                    return null;
                } else {
                    return {"validity":"Invalid date"};
                }
            } else {
                return {"validity":"Invalid date"};
            }
        }
    }

    fileChange(event: any) {
        this.fileList = event.target.files;
        if (this.fileList.length > 0) {
            let file: File = this.fileList[0];
            let formData: FormData = new FormData();
            formData.append('file', file, file.name);
            this.appFormService.uploadImage(formData)
                .then(response => {
                    if (response !== 'fail') {
                        this.selectedImage = this.mediaDir+response;
                    }
                });
        }
    }

    openDialog(emp: Employee) {
        let dialogRef = this.dialog.open(DeleteDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result === 'yes') {
                this.deleteData(emp);
            }
        })
    }

    findLocationName(empId: number): string {
        let location: any;
        for (location in this.locations) {
            if (location.id === empId) {
                return location.locationname;
            }
        }
        return 'Unknown';
    }

    transformDate(date: any): string {
        let stringDate = date.trim().split('-');
        return new Date(parseInt(stringDate[2]), parseInt(stringDate[1])-1, parseInt(stringDate[0])).toISOString();
    }

    saveData(emp: any) {
        if (this.emp === 0) {
            if (emp.birthdate === '-' || emp.birthdate === '') {
                emp.birthdate = '-';
            } else {
                emp.birthdate = this.transformDate(emp.birthdate);
            }
            if (emp.suspenddate === '-' || emp.suspenddate === '') {
                emp.suspenddate = '-';
            } else {
                emp.suspenddate = this.transformDate(emp.suspenddate);
            }
            if (emp.hireddate === '-' || emp.hireddate === '') {
                emp.hireddate = '-';
            } else {
                emp.hireddate = this.transformDate(emp.hireddate);
            }
            emp.location = {
                id: emp.location,
                locationname: this.findLocationName(emp.location)
            }
            if (this.fileList) {
                let file: File = this.fileList[0];
                let formData: FormData = new FormData();
                formData.append('file', file, file.name);
                this.appFormService.uploadImage(formData)
                    .then(response => {
                        if (response !== 'fail') {
                            emp.imgpath = response;
                            this.save.emit(emp);
                        }
                    });
            } else {
                emp.imgpath = 'ph.jpg';
                this.save.emit(emp);
            }
        } else {
            this.delButton = true;
            if (emp.birthdate === '-' || emp.birthdate === '') {
                emp.birthdate = '-';
            } else {
                emp.birthdate = this.transformDate(emp.birthdate);
            }
            if (emp.suspenddate === '-' || emp.suspenddate === '') {
                emp.suspenddate = '-';
            } else {
                emp.suspenddate = this.transformDate(emp.suspenddate);
            }
            if (emp.hireddate === '-' || emp.hireddate === '') {
                emp.hireddate = '-';
            } else {
                emp.hireddate = this.transformDate(emp.hireddate);
            }
            emp.location = {
                id: emp.location,
                locationname: this.findLocationName(emp.location)
            }
            if (this.fileList) {
                let file: File = this.fileList[0];
                let formData: FormData = new FormData();
                formData.append('file', file, file.name);
                this.appFormService.uploadImage(formData)
                    .then(response => {
                        if (response !== 'fail') {
                            emp.imgpath = response;
                            this.updt.emit(emp);
                        } else {
                            emp.imgpath = 'ph.jpg';
                            this.updt.emit(emp);
                        }
                    });
            } else {
                if (this.emp.imgpath !== 'ph.jpg') {
                    emp.imgpath = this.emp.imgpath;
                } else {
                    emp.imgpath = 'ph.jpg';
                }
                this.updt.emit(emp);
            }
        }
        this.fileList = null;
        this.selectedImage = this.mediaDir+'ph.jpg';
        this.form.reset({birthdate: '-', suspenddate: '-', hireddate: '-'});
        this.status.emit();
    }

    cancelData() {
        this.delButton = true;
        this.form.reset({birthdate: '-', suspenddate: '-', hireddate: '-'});
        this.status.emit();
    }

    deleteData(emp: Employee) {
        this.delButton = true;
        this.del.emit(emp.id);
        this.form.reset({birthdate: '-', suspenddate: '-', hireddate: '-'});
        this.status.emit();
    }
}