import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AlertComponent } from './_components/alert/alert.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendIntercepter } from './_helpers/fake-backend-intercepter';
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { UserCreateComponent } from './pages/users/user-create/user-create.component';
import { UserEditComponent } from './pages/users/user-edit/user-edit.component';
import { RegisterTdfComponent } from './auth/register-tdf/register-tdf.component';
import { HeroFormComponent } from './pages/hero-form/hero-form.component';
import { ValidationMessageComponent } from './_components/validation-message/validation-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    RegisterTdfComponent,
    HeroFormComponent,
    ValidationMessageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'pages/home', component: HomeComponent },
      { path: 'pages/dashboard', component: DashboardComponent },
      { path: 'pages/users/user-list', component: UserListComponent },
      { path: 'pages/users/user-create', component: UserCreateComponent },
      { path: 'pages/users/user-edit', component: UserEditComponent },
      { path: 'auth/login', component: LoginComponent },
      { path: 'auth/register', component: RegisterComponent },
      { path: '', redirectTo: 'pages/home', pathMatch: 'full' },
    ], { useHash: true })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FakeBackendIntercepter, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
