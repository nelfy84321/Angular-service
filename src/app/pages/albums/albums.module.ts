import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AddingFormComponent } from './modal/adding-form/adding-form.component';
import { AlbumsComponent } from './albums.component';
import { ConfrimModalComponent } from './modal/confrim-modal/confrim-modal.component';
import { EditFormComponent } from './modal/edit-form/edit-form.component';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AddingFormComponent,
    AlbumsComponent,
    ConfrimModalComponent,
    EditFormComponent,
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    FontAwesomeModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ]
})

export class AlbumsModule { }
