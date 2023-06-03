import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Relaxpage1Component } from './relaxpage1/relaxpage1.component';
import { Assertivepage1Component } from './assertivepage1/assertivepage1.component';
import { Cafeteria1Component } from './cafeteria1/cafeteria1.component';
import { Cafeteria2Component } from './cafeteria2/cafeteria2.component';
import { Ignore1Component } from './ignore1/ignore1.component';
import { Ignore2Component } from './ignore2/ignore2.component';
import { Invite1Component } from './invite1/invite1.component';
import { Invite2Component } from './invite2/invite2.component';
import { Classroom1Component } from './classroom1/classroom1.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Classroom2Component } from './classroom2/classroom2.component';
import { Alterinvite1Component } from './alterinvite1/alterinvite1.component';
import { Alterinvite2Component } from './alterinvite2/alterinvite2.component';
import { Alterignore2Component } from './alterignore2/alterignore2.component';
import { Alterignore1Component } from './alterignore1/alterignore1.component';
import { HomeComponent } from './home/home.component';
import { Service } from './service/service';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from './enviroment/enviroment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { SurveComponent } from './surve/surve.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Relaxpage1Component,
    Assertivepage1Component,
    Cafeteria1Component,
    Cafeteria2Component,
    Ignore1Component,
    Ignore2Component,
    Invite1Component,
    Invite2Component,
    Classroom1Component,
    Home1Component,
    Home2Component,
    Classroom2Component,
    Alterinvite1Component,
    Alterinvite2Component,
    Alterignore2Component,
    Alterignore1Component,
    HomeComponent,
    SurveComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [Service, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
