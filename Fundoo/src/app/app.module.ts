import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { HomeNavbarComponent } from './components/home/home-navbar/home-navbar.component';
import { AuthGuard } from './auth.guard';
import { SidnavComponent } from './components/home/sidnav/sidnav.component';
import { MenuComponent } from './components/home/menu/menu.component';
import { TokenInterceptorService } from './services/token-interceptor/token-interceptor.service';
import { AddnotesComponent } from './components/home/addnotes/addnotes.component';
import { AddnotetoggleComponent } from './components/home/addnotetoggle/addnotetoggle.component';
import { RemainderIconComponent } from './components/home/buttons/remainder-icon/remainder-icon.component';
import { AddCollaboratorComponent } from './components/home/buttons/add-collaborator/add-collaborator.component';
import { PaintComponent } from './components/home/buttons/paint/paint.component';
import { PictureComponent } from './components/home/buttons/picture/picture.component';
import { ArchieveComponent } from './components/home/buttons/archieve/archieve.component';
import { MoreComponent } from './components/home/buttons/more/more.component';
import { UndoComponent } from './components/home/buttons/undo/undo.component';
import { RedoComponent } from './components/home/buttons/redo/redo.component';
import { PinComponent } from './components/home/buttons/pin/pin.component';
import { CheckboxComponent } from './components/home/buttons/checkbox/checkbox.component';
import { EditComponent } from './components/home/buttons/edit/edit.component';
import { CloseComponent } from './components/home/buttons/close/close.component';
import { GetnotesComponent } from './components/home/getnotes/getnotes.component';
import { NoteComponent } from './components/home/getnotes/note/note.component';
import { AddLabelComponent } from './components/home/buttons/add-label/add-label.component';
import { PictureAddNoteComponent } from './components/home/buttons/picture/picture-add-note.component';
import { NotesComponent } from './components/home/notes/notes.component';
import { ArchivedNotesComponent } from './components/home/archived-notes/archived-notes.component';
import { DeleteComponent } from './components/home/delete/delete.component';
import { TrashComponent } from './components/home/buttons/trash/trash.component';
import { RecoverComponent } from './components/home/buttons/recover/recover.component';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RemainderComponent } from './components/home/remainder/remainder.component';
import { AddNoteBodyComponent } from './components/home/add-note-body/add-note-body.component';
import { LabelsComponent } from './components/home/labels/labels.component';
import { GridViewComponent } from './components/home/grid-view/grid-view.component';
import { SharedDataServiceService } from './services/data/shared-data-service.service';
import { LabelItemsComponent } from './components/home/label-items/label-items.component';
import { CollaboratorsComponent } from './components/home/collaborators/collaborators.component';
import { CollaboratorComponent } from './components/home/collaborator/collaborator.component';
import { SearchComponent } from './components/home/search/search.component';
import { UpdateComponentComponent } from './components/home/update-component/update-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    HomeNavbarComponent,
    SidnavComponent,
    MenuComponent,
    AddnotesComponent,
    AddnotetoggleComponent,
    RemainderIconComponent,
    AddCollaboratorComponent,
    PaintComponent,
    PictureComponent,
    ArchieveComponent,
    MoreComponent,
    UndoComponent,
    RedoComponent,
    PinComponent,
    CheckboxComponent,
    EditComponent,
    CloseComponent,
    GetnotesComponent,
    NoteComponent,
    AddLabelComponent,
    PictureAddNoteComponent,
    NotesComponent,
    ArchivedNotesComponent,
    DeleteComponent,
    TrashComponent,
    RecoverComponent,
    RemainderComponent,
    AddNoteBodyComponent,
    LabelsComponent,
    GridViewComponent,
    LabelItemsComponent,
    CollaboratorsComponent,
    CollaboratorComponent,
    SearchComponent,
    UpdateComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatDatepickerModule,
    NgxMatNativeDateModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    SharedDataServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
