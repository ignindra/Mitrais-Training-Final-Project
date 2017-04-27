import { Component, OnInit, Optional } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    template: `
    <p><b>Are you sure you want to delete this employee?</b></p>
    <button #nobutton md-raised-button color="primary" (click)="dialogRef.close('no')">No</button>
    <button #yesbutton md-raised-button (click)="dialogRef.close('yes')">Yes</button>
    `
})
export class DeleteDialogComponent {
    constructor(@Optional() public dialogRef: MdDialogRef<DeleteDialogComponent>) { }
}