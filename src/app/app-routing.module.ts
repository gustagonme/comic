import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Relaxpage1Component } from './relaxpage1/relaxpage1.component';
import { Assertivepage1Component } from './assertivepage1/assertivepage1.component';
import { Cafeteria1Component } from './cafeteria1/cafeteria1.component';
import { Cafeteria2Component } from './cafeteria2/cafeteria2.component';
import { Invite1Component } from './invite1/invite1.component';
import { Invite2Component } from './invite2/invite2.component';
import { Ignore1Component } from './ignore1/ignore1.component';
import { Ignore2Component } from './ignore2/ignore2.component';
import { Home1Component } from './home1/home1.component';
import { Classroom1Component } from './classroom1/classroom1.component';
import { Home2Component } from './home2/home2.component';
import { Classroom2Component } from './classroom2/classroom2.component';
import { Alterinvite1Component } from './alterinvite1/alterinvite1.component';
import { Alterignore1Component } from './alterignore1/alterignore1.component';
import { Alterignore2Component } from './alterignore2/alterignore2.component';
import { Alterinvite2Component } from './alterinvite2/alterinvite2.component';
import { HomeComponent } from './home/home.component';
import { SurveComponent } from './surve/surve.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: 'page2',
    component: Page2Component
  },
  {
    path: 'page3',
    component: Page3Component
  },
  {
    path: 'page4',
    component: Page4Component
  },
  {
    path: 'relaxpage1',
    component: Relaxpage1Component
  },
  {
    path: 'assertivepage1',
    component: Assertivepage1Component
  },
  {
    path: 'cafeteria1',
    component: Cafeteria1Component
  },
  {
    path: 'cafeteria2',
    component: Cafeteria2Component
  },
  {
    path: 'invite1',
    component: Invite1Component
  },
  {
    path: 'invite2',
    component: Invite2Component
  },
  {
    path: 'ignore1',
    component: Ignore1Component
  },
  {
    path: 'ignore2',
    component: Ignore2Component
  },
  {
    path: 'home1',
    component: Home1Component
  },
  {
    path: 'classroom1',
    component: Classroom1Component
  },
  {
    path: 'home2',
    component: Home2Component
  },
  {
    path: 'classroom2',
    component: Classroom2Component
  },
  {
    path: 'alterinvite1',
    component: Alterinvite1Component
  },
  {
    path: 'alterinvite2',
    component: Alterinvite2Component
  },
  {
    path: 'alterignore1',
    component: Alterignore1Component
  },
  {
    path: 'alterignore2',
    component: Alterignore2Component
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'survey',
    component: SurveComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
