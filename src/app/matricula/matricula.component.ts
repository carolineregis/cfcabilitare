import { Component, OnInit, Inject } from '@angular/core';
import { Student } from './matricula'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}


@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent {

  constructor(public dialog: MatDialog) {}



  courses = ['Categoria A', 'Categoria B', ];

  aluno = new Student('caroline regis', '00000000000', '000000000', 'Barreiras',
  'Bahia', 'Bandeirantes', 'av jk', 'tiny.regis@gmail.com', '(xx) 00000-0000 ', '');

  submitted = false;



    onSubmit() {
      this.submitted = true;

    }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
      }
  
    });
  }

  

}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}


