import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard}  from './guards/login.guard'
import { UsersComponent } from './components/home/users.component';
import {AdddcomentComponent}from './components/addddoc/adddcoment.component'
const routes : Routes = [
  {path: 'login',component: LoginComponent},
  {path : 'inicio',component :UsersComponent},
  {path: 'addDoc',component: AdddcomentComponent},
  {path: 'update-doc/:id',component: AdddcomentComponent}
]


@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
