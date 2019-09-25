// import {
//   ChangeDetectionStrategy,
//   Component,
//   HostListener,
//   Inject
// } from '@angular/core';
// import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
// import { Action, Store } from "@ngrx/store";
// // import { State } from "../../app.reducers";


// @Component({
//   selector: 'app-delete-confirm',
//   templateUrl: './delete-confirm.component.html',
//   styleUrls: ['./delete-confirm.component.scss']
// })
// export class DeleteConfirmComponent {

//   constructor(
//     @Inject(MAT_DIALOG_DATA) public data: {
//       cancel?: Action,
//       delete: Action,
//       text: string,
//       title: string
//     },
//     private mdDialogRef: MatDialogRef<DeleteConfirmComponent>,
//     private store: Store<State>
//   ) { }

//   public cancel() {
//     if (this.data.cancel !== undefined){
//       this.store.dispatch(this.data.cancel);
//     }
//     this.close();
//   }

//   public close() {
//     this.mdDialogRef.close();
//   }

//   public delete() {
//     this.store.dispatch(this.data.delete);
//     this.close();
//   }

//   @HostListener("keydown.esc")
//   public onEsc() {
//     this.close();
//   }

// }
