import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Employee } from './employee';

@Injectable()
export class EmployeeService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private emappUrl = 'http://localhost:8090/emapp/';

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getEmployees(): Promise<Employee[]> {
        return this.http.get(this.emappUrl+'all/employee')
            .toPromise()
            .then(response => response.json() as Employee[])
            .catch(this.handleError);
    }
    
    addEmployee(emp: Employee): Promise<string> {
        return this.http
            .post(this.emappUrl+'add/employee', JSON.stringify(emp), {headers: this.headers})
            .toPromise()
            .then(response => response.text())
            .catch(this.handleError);
    }

    updateEmployee(emp: Employee): Promise<string> {
        return this.http
            .put(this.emappUrl+'update/employee', JSON.stringify(emp), {headers: this.headers})
            .toPromise()
            .then(response => response.text())
            .catch(this.handleError);
    }

    deleteEmployee(id: number): Promise<string> {
        return this.http
            .delete(this.emappUrl+'del/employee/'+id, {headers: this.headers})
            .toPromise()
            .then(response => response.text())
            .catch(this.handleError);
    }
}