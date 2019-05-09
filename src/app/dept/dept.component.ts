import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TableComponent } from '../table/table.component';
export interface Food {
  value: string;
  viewValue: string;
}
export interface Position{
  value: string;
  viewValue: string;
}
 @Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.scss']
})

export class DeptComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Sales And Marketing'},
    {value: 'pizza-1', viewValue: 'Executive'},
    {value: 'tacos-2', viewValue: 'Creative Design'}
  ];
  positions: Position[] = [
    {value: '0', viewValue: 'Operation Manager Jr'},
    {value: '1', viewValue: 'Sales Manager'},
    {value: '2', viewValue: 'Executive Manager'}
  ];
 
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TableComponent, {
      width: '250px',
      
    });

    dialogRef.disableClose=true;
  }

  ngOnInit() {
  }

}
