import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TableComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {}
      close():void{
  this.dialogRef.close();
      }

  ngOnInit() {
    this.dialogRef.updateSize('50%','50%');

  }

  
}

