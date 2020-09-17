import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ReactiveFormsModule } from "@angular/forms";
// import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
// import { MatDialogModule } from '@angular/material/dialog';
// import { environment } from 'src/environments/environment';
// import { AngularFireModule } from '@angular/fire';
// import { AddingFormComponent } from './pages/albums/modal/adding-form/adding-form.component';
// import { AlbumsComponent } from './pages/albums/albums.component';
// import { ConfrimModalComponent } from './pages/albums/modal/confrim-modal/confrim-modal.component';
// import { EditFormComponent } from './pages/albums/modal/edit-form/edit-form.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlbumsModule } from './pages/albums/albums.module';
import { PokemonsModule } from './pages/pokemons/pokemons.module';
// import { PokemonsComponent } from './pages/pokemons/pokemons.component';
// import { ConfirmModalComponent } from './pages/pokemons/modal/confirm-modal/confirm-modal.component';
// import { AddFormComponent } from './pages/pokemons/modal/add-form/add-form.component';
// import { SharedModule } from './shared/shared.module';


// import { ModalModule } from 'ngx-modialog/';
// import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
// import { AlbumsService }  from './services/albums.service';
// import { AngularFirestore } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    // AddingFormComponent,
    // AlbumsComponent,
    // ConfrimModalComponent,
    // EditFormComponent,
    // PokemonsComponent,
    // ConfirmModalComponent,
    // AddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // ReactiveFormsModule,
    // MatDialogModule,
    // FontAwesomeModule,
    AlbumsModule,
    PokemonsModule,
    // HttpClientModule
    // ModalModule.forRoot(),
    // BootstrapModalModule
    // SharedModule
  ],
  providers: [
    // AlbumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
