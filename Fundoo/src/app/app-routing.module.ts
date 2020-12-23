import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ArchivedNotesComponent } from './components/home/archived-notes/archived-notes.component';
import { HomeComponent } from './components/home/home.component';
import { NotesComponent } from './components/home/notes/notes.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegistrationComponent},
  {path:'', component: HomeComponent
  , canActivate:[AuthGuard],
  children:[
    {path:'notes', component:NotesComponent},
    {path: 'archive', component: ArchivedNotesComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
