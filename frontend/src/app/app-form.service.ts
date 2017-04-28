import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Grade } from './grade';
import { Division } from './division';
import { Location } from './location';

@Injectable()
export class AppFormService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private emappUrl = 'http://localhost:8090/emapp/';

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getGrades(): Promise<Grade[]> {
        return this.http.get(this.emappUrl+'all/grade')
            .toPromise()
            .then(response => response.json() as Grade[])
            .catch(this.handleError);
    }

    getDivisions(): Promise<Division[]> {
        return this.http.get(this.emappUrl+'all/division')
            .toPromise()
            .then(response => response.json() as Division[])
            .catch(this.handleError);
    }

    getLocations(): Promise<Location[]> {
        return this.http.get(this.emappUrl+'all/location')
            .toPromise()
            .then(response => response.json() as Location[])
            .catch(this.handleError);
    }

    uploadImage(formData: FormData): Promise<string> {
        return this.http.post(this.emappUrl+'add/image', formData)
            .toPromise()
            .then(response => response.text())
            .catch(this.handleError);
    }
}