import { Component, OnInit, Optional } from '@angular/core';
import { MdDialog, MdSnackBar } from '@angular/material';

import { Grade } from './grade';
import { AppFormService } from './app-form.service';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { FilterDialogComponent } from './filter-dialog.component';

@Component({
    selector: 'home-dashboard',
    templateUrl: 'app/home-dashboard.component.html',
    styleUrls: ['app/home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {
    sortDirection: string = 'ascending';
    selectedEmployee: any = 0;
    selectedList: number;
    employees: Employee[];
    employeesLength: number;

    constructor(
        private employeeService: EmployeeService,
        private dialog: MdDialog,
        private snackbar: MdSnackBar) { }

    ngOnInit(): void {
        this.selectedList = 0;
        this.employeeService.getEmployees()
            .then(employees => this.employees = employees)
            .then(() => this.employeesLength = this.employees.length);
    }

    onSelectEmployee(emp: any) {
        this.selectedEmployee = emp;
        this.selectedList = emp.id;
    }

    onSaveData(emp: Employee) {
        this.employeeService.addEmployee(emp)
            .then(response => this.openSnackBar(response, 'Close'))
            .then(() => this.employeeService.getEmployees()
                .then(employees => this.employees = employees)
                .then(() => this.employeesLength = this.employees.length));
    }

    onUpdateData(emp: Employee) {
        this.employeeService.updateEmployee(emp)
            .then(response => this.openSnackBar(response, 'Close'))
            .then(() => this.employeeService.getEmployees()
                .then(employees => this.employees = employees)
                .then(() => this.employeesLength = this.employees.length));
    }

    onDeleteData(id: number) {
        this.employeeService.deleteEmployee(id)
            .then(response => this.openSnackBar(response, 'Close'))
            .then(() => this.employeeService.getEmployees()
                .then(employees => this.employees = employees)
                .then(() => this.employeesLength = this.employees.length));
    }

    sortEmployees() {
        if (this.sortDirection === 'ascending') {
            this.employees.sort(function(x, y) {
                return (x.lastname.toLowerCase() == y.lastname.toLowerCase() ? 0 : x.lastname.toLowerCase() < y.lastname.toLowerCase() ? -1 : 1);
            });
            this.sortDirection = 'descending';
        } else {
            this.employees.sort(function(x, y) {
                return (x.lastname.toLowerCase() == y.lastname.toLowerCase() ? 0 : x.lastname.toLowerCase() > y.lastname.toLowerCase() ? -1 : 1);
            });
            this.sortDirection = 'ascending';
        }
    }

    searchName(term: string) {
        this.employeeService.getEmployees()
            .then(employees => this.employees = employees)
            .then(() => this.employees = Object.assign([], this.employees)
            .filter(emp => emp.firstname.toLowerCase().indexOf(term) >= 0 ||
                    emp.lastname.toLowerCase().indexOf(term) >= 0 ||
                    (emp.firstname+' '+emp.lastname).toLowerCase().indexOf(term) >= 0))
            .then(() => this.employeesLength = this.employees.length);
    }

    onStatusChange() {
        this.selectedEmployee = 0;
        this.selectedList = 0;
    }

    openDialog() {
        let dialogRef = this.dialog.open(FilterDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            this.filterSearch(result);
        })
    }

    openSnackBar(message: string, action: string) {
        this.snackbar.open(message, action, {
            duration: 2000,
        });
    }
    
    filterSearch(filterRes: any) {
        if (filterRes) {
            if (filterRes.gender === 'all' && filterRes.location !== 'all') {
                this.employeeService.getEmployees()
                    .then(employees => this.employees = employees)
                    .then(() => this.employees = Object.assign([], this.employees)
                    .filter(emp => emp.location === filterRes.location))
                    .then(() => this.employeesLength = this.employees.length);
            } else if (filterRes.gender !== 'all' && filterRes.location === 'all') {
                this.employeeService.getEmployees()
                    .then(employees => this.employees = employees)
                    .then(() => this.employees = Object.assign([], this.employees)
                    .filter(emp => emp.gender === filterRes.gender))
                    .then(() => this.employeesLength = this.employees.length);
            } else if (filterRes.gender === 'all' && filterRes.location === 'all') {
                this.employeeService.getEmployees()
                    .then(employees => this.employees = employees)
                    .then(() => this.employeesLength = this.employees.length);
            } else {
                this.employeeService.getEmployees()
                    .then(employees => this.employees = employees)
                    .then(() => this.employees = Object.assign([], this.employees)
                    .filter(emp => emp.gender === filterRes.gender && emp.location === filterRes.location))
                    .then(() => this.employeesLength = this.employees.length);
            }
        }
    }
}