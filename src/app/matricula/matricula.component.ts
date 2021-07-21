import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit, Inject } from '@angular/core';
import { Student } from './matricula'
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder} from '@angular/forms';




@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent {


  matricula: FormGroup;
  submitted = false;

  SERVER_URL = '../../../backend/data'

  constructor(public dialog: MatDialog,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    ) {

    }

  courses = ['Categoria A', 'Categoria B', ];

  aluno = new Student('caroline regis', '00000000000', '000000000', 'Barreiras',
  'Bahia', 'Bandeirantes', 'av jk', 'tiny.regis@gmail.com', '(xx) 00000-0000 ', '');



  ngOnInit() {
    this.matricula = this.formBuilder.group({
      aluno : new Student(
        'caroline regis', '00000000000', '000000000', 'Barreiras',
        'Bahia', 'Bandeirantes', 'av jk', 'tiny.regis@gmail.com', '(xx) 00000-0000 ', ''
      ),
    })
  }


  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value;
  }

  onSubmit() {
    this.submitted = true;

  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'Teste'
    }

    this.dialog.open(DialogComponent, dialogConfig);


  }



}


