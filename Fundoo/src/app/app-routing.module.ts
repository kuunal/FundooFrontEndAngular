import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ArchivedNotesComponent } from './components/home/archived-notes/archived-notes.component';
import { DeleteComponent } from './components/home/delete/delete.component';
import { GetnotesComponent } from './components/home/getnotes/getnotes.component';
import { GridViewComponent } from './components/home/grid-view/grid-view.component';
import { HomeComponent } from './components/home/home.component';
import { NotesComponent } from './components/home/notes/notes.component';
import { RemainderComponent } from './components/home/remainder/remainder.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'notes', component: NotesComponent },
      { path: 'archive', component: ArchivedNotesComponent },
      { path: 'delete', component: DeleteComponent },
      { path: 'remainder', component: RemainderComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
