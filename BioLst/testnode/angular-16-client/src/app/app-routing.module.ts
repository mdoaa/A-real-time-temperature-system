import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { SensorDetailsComponent } from './components/sensor-details/sensor-details.component';
import { LoginComponent } from './components/login/login.component';
import { signup } from './components/Add_Data/Add_Data.component';
import { MapComponent } from './components/map/map.component';
//import { Add_Data } from './components/Add_Data/Add_Data.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'addh', component: AddTutorialComponent },
  { path: 'adds', component:  SensorDetailsComponent },
  { path:  'login',component:  LoginComponent },
  { path:  'map',component:  MapComponent },
  { path:  'signup',component:  signup },
  //{ path:  'add',component:  Add_Data }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
