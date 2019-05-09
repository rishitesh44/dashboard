import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { DeptComponent } from './dept/dept.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  {path:'',component:DeptComponent},
  {path:'login',component:LoginComponent},
  {path:'sidenav',component:SidenavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
