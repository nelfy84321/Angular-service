import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsComponent } from './pokemons.component';
import { ConfirmModalComponent } from './modal/confirm-modal/confirm-modal.component';
import { AddFormComponent } from './modal/add-form/add-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EditFormComponent } from './modal/edit-form/edit-form.component';



@NgModule({
  declarations: [
    PokemonsComponent,
    ConfirmModalComponent,
    AddFormComponent,
    EditFormComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ]
})

export class PokemonsModule { }
