import { Component, OnInit } from '@angular/core';
import { AlbumsService }  from './../../services/albums.service';
// import { MatDialog } from '@angular/material/dialog';
// import { AddingFormComponent }  from './../modal/adding-form/adding-form.component';
import { EditFormComponent } from './modal/edit-form/edit-form.component';
import { faPen, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { ConfrimModalComponent } from './modal/confrim-modal/confrim-modal.component';
import { AddingFormComponent } from './modal/adding-form/adding-form.component';




@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  providers: [AlbumsService],
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  faPen = faPen;
  faTrashAlt = faTrashAlt;
  faPlusCircle = faPlusCircle;
  loading = false;

  constructor(
    private albumsService: AlbumsService,
    public dialog: MatDialog
    ) { }
  
  ngOnInit() {this.getAlbums();}

  albums;
  
  getAlbums = () => {
    this.loading = true
    this.albumsService
    .getAlbums()
    .subscribe(res =>(this.albums = res, this.loading = false));}
    

  deleteAlbum(album) {
    let dialogref = this.dialog.open(ConfrimModalComponent)
    dialogref.afterClosed().subscribe(res => {
      if (res === "true") {
        this.albumsService.deleteAlbum(album)}
      }
    )
  }

  openAddForm() {
    this.dialog.open(AddingFormComponent)
  }

  openEditForm = (album) => {
    let dialogref = this.dialog.open(EditFormComponent)
    EditFormComponent.item = album
  } 
}