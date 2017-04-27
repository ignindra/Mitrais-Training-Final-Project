import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

@Component({
    template: `
    <p><b>Select the filter</b></p>
    <form
        [formGroup]="formDialog">
        <table cellspacing="10">
            <tr>
                <td>Gender:</td>
                <td>
                    <select name="gender" formControlName="gender">
                        <option value="all">all</option>
                        <option value="Female">female</option>
                        <option value="Male">male</option>
                        <option value="Other">other</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Location:</td>
                <td>
                    <select name="location" formControlName="location">
                        <option value="all">all</option>
                        <option value="Bandung">bandung</option>
                        <option value="Jakarta">jakarta</option>
                        <option value="Bali">bali</option>
                        <option value="Yogyakarta">yogyakarta</option>
                    </select>
                </td>
            </tr>
        </table>
        <button md-raised-button color="primary" (click)="dialogRef.close(formDialog.value)">Filter</button>
    </form>
    `
})
export class FilterDialogComponent {
    formDialog: FormGroup;

    constructor(
        @Optional() public dialogRef: MdDialogRef<FilterDialogComponent>,
        private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.formDialog = this.formBuilder.group({
            gender: this.formBuilder.control('all'),
            location: this.formBuilder.control('all')
        });
    }
}