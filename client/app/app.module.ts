import { NgModule }      from '@angular/core';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { HeroesComponent }      from './components/heroes/heroes.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';

import { HomeComponent } from './components/home/home.component';
import { AccountingComponent } from './components/accounting/accounting.component';
import { InformationComponent } from './components/information/information.component';
import { DocsComponent } from './components/docs/docs.component';
import { ContactComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';

import { AdminPageComponent } from './components/adminPage/adminpage.component';
import { AdminHomeComponent } from './components/adminHome/adminhome.component';
import { AdminAccountingComponent } from './components/AdminAccounting/adminaccounting.component';

import { HeroService }  from './services/hero.service';
import { UserService }  from './services/user.service';
import { ContentService } from "./services/content.service";
import { AuthenticationService }  from './services/authentication.service';
import { AuthGuard }  from './guard/guard';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,

    HomeComponent,
    AccountingComponent,
    InformationComponent,
    DocsComponent,
    ContactComponent,
    LoginComponent,
    AdminPageComponent,
    AdminHomeComponent,
    AdminAccountingComponent,
    
    FileSelectDirective,
    FileDropDirective
  ],
  providers: [
    HeroService,
    UserService,
    ContentService,
    AuthGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }