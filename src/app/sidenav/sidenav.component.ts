import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  myDate=Date.now();
  displayedColumns = ['select', 'QuestionId', 'Question', 'Duration', 'createddate','updateddate','actions'];
  data = Object.assign( ELEMENT_DATA);
  dataSource = new MatTableDataSource<Element>(this.data);
  selection = new SelectionModel<Element>(true, []);
 
 
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  removeSelectedRows() {

    this.selection.selected.forEach(item => {
      let index: number = this.data.findIndex(d => d === item);
      console.log(this.data.findIndex(d => d === item));
      this.data.splice(index,1)
      this.dataSource = new MatTableDataSource<Element>(this.data);
    });
    this.selection = new SelectionModel<Element>(true, []);
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
   
     
    });

    dialogRef.disableClose=true;
  }
}

export interface Element {
  QuestionId: number;
  Question: string;
  Duration:string;
  createddate: string;
  updateddate: string;
}

const ELEMENT_DATA: Element[] = [
  { QuestionId: 1, Question: 'Gender', Duration:'3min', createddate:'5/06/2016',updateddate:'8/03/2018' },
  { QuestionId: 2, Question: 'Tell Me About Your Self', Duration: '2min', createddate: '15/04/2017',updateddate:'8/03/2018' },
  { QuestionId: 3, Question: 'Tell Me Something', Duration:'2min',createddate: '8/03/2018',updateddate:'8/03/2018' },
  { QuestionId: 4, Question: 'Tell Me About Parents', Duration: '3min', createddate: '5/06/2016',updateddate:'16/05/2018' },
  { QuestionId: 5, Question: 'Qualification', Duration: '2min', createddate: '20/03/2015',updateddate:'28/12/2018' },
  { QuestionId: 6, Question: 'Percentage of your', Duration: '1min', createddate: '27/05/2018',updateddate:'18/06/2018' },


];

