import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl, Validators } from '@angular/forms';


export interface Sale {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  email = new FormControl('', [Validators.required]);
  emails = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  animalControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  domain: Sale[] = [
    {value: 'steak-0', viewValue: 'Personal'},
    {value: 'pizza-1', viewValue: 'Technical'},
    {value: 'steak0', viewValue: 'Introductory'},
    {value: 'pizza1', viewValue: 'Behavioral'},
    {value: 'tacos-2', viewValue: 'Aptitude'}
  ];

  ngOnInit() {
    this.dialogRef.updateSize('60%','70%');

  }
  ri(){
    this.email.markAsTouched();
    this.emails.markAsTouched();
  }
  
  constructor(
  public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
    close():void{
this.dialogRef.close();
    }

  }
   