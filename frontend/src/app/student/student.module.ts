import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { StudentRoutingModule } from './student-routing.module';
import { EducationComponent } from './education/education.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestsComponent } from './requests/requests.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Add10thComponent } from './education/add10th/add10th.component';
import { HttpClientModule } from '@angular/common/http';
import { PucComponent } from './education/puc/puc.component';
import { DegreeComponent } from './education/degree/degree.component';
import { MastersComponent } from './education/masters/masters.component';
import { SelfcertificateComponent } from './education/selfcertificate/selfcertificate.component';
import { CommitComponent } from './education/commit/commit.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AccountComponent } from './account/account.component';

// import { CommonbothModule } from '../common/common.module';
//  import { AccountComponent } from '../common/account/account.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule
  //  CommonbothModule
  ],
  declarations: [ 
  Add10thComponent,
  EducationComponent, 
  DashboardComponent, 
  RequestsComponent, 
  StudentProfileComponent, 
  PucComponent, 
  DegreeComponent, 
  MastersComponent, 
  SelfcertificateComponent, 
  CommitComponent,
  HeaderComponent,
  SidenavListComponent,
  AccountComponent
]
})
export class StudentModule { }