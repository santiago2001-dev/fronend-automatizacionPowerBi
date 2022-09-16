import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {JwtHelperService,JWT_OPTIONS} from'@auth0/angular-jwt'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {UsersComponent}from './components/home/users.component'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
//petciones http
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdddcomentComponent } from './components/addddoc/adddcoment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
 
    AdddcomentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [  {provide: JWT_OPTIONS,useValue:JWT_OPTIONS},
    JwtHelperService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
