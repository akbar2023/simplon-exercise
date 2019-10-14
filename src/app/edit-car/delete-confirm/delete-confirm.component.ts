import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'app-delete-confirm',
    templateUrl: './delete-confirm.component.html',
    styleUrls: ['./delete-confirm.component.scss'],
})
export class DeleteConfirmComponent {
    constructor(
        public dialogRef: MatDialogRef<DeleteConfirmComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit() {
    // will log the entire data object
    console.log(this.data); 
    this.data;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
