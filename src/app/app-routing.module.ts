import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotesResolver} from './dashboard/notes.resolver';


const routes: Routes = [{
  path: '',
  component: LoginComponent,
  pathMatch: 'full'
},
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: { NotesResolver }
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
