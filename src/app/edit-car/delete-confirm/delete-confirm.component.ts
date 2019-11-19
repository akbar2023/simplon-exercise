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

    // tslint:disable-next-line: use-life-cycle-interface
    ngOnInit() {
    // will log the entire data object
    console.log(this.data);
    // tslint:disable-next-line: no-unused-expression
    this.data;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
