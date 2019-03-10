import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AlertComponent } from './_components/alert/alert.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendIntercepter } from './_helpers/fake-backend-intercepter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'pages/home', component: HomeComponent },
      { path: 'pages/dashboard', component: DashboardComponent },
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
