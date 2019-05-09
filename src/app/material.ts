import {MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  
  imports: [MatButtonModule,MatSelectModule, MatCheckboxModule,MatSidenavModule,MatIconModule, MatFormFieldModule,  MatInputModule,MatMenuModule,MatToolbarModule
,MatCardModule,MatPaginatorModule,MatTableModule,MatGridListModule,MatTabsModule,MatProgressSpinnerModule
],
  exports: [MatButtonModule,MatSelectModule, MatCheckboxModule,MatSidenavModule,MatIconModule, MatFormFieldModule,  MatInputModule,MatMenuModule,MatToolbarModule
,MatCardModule,MatPaginatorModule,MatTableModule,MatGridListModule,MatTabsModule,MatProgressSpinnerModule
],
  
})
export class MaterialModule { }