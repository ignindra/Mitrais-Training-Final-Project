import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Employee } from './employee';

@Injectable()
export class EmployeeService {
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getEmployees(): Promise<Employee[]> {
        return this.http.get('http://localhost:8090/emapp/all/employee')
            .toPromise()
            .then(response => response.json() as Employee[])
            .catch(this.handleError);
    }
    
    addEmployee(emp: Employee): Promise<string> {
        return this.http
            .post('http://localhost:8090/emapp/add/employee', JSON.stringify(emp), {headers: this.headers})
            .toPromise()
            .then(response => response.text())
            .catch(this.handleError);
    }

    updateEmployee(emp: Employee): Promise<string> {
        return this.http
            .put('http://localhost:8090/emapp/update/employee', JSON.stringify(emp), {headers: this.headers})
            .toPromise()
            .then(response => response.text())
            .catch(this.handleError);
    }

    deleteEmployee(id: number): Promise<string> {
        return this.http
            .delete('http://localhost:8090/emapp/del/employee/'+id, {headers: this.headers})
            .toPromise()
            .then(response => response.text())
            .catch(this.handleError);
    }
}