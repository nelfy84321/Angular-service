import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  
  constructor(
    private firestore: AngularFirestore,
    public dialog: MatDialog
    ) { }
    
  form = new FormGroup({
    name: new FormControl(''),
    band: new FormControl(''),
    genre: new FormControl(''),
    label: new FormControl(''),
    producer: new FormControl(''),
    releaseDate: new FormControl(''),
  })
  
  
  getAlbums(){ 
    return this.firestore.collection("albums").snapshotChanges();
  }

    
  addAlbum(data) {
      this.firestore
        .collection("albums")
        .add(data)
  }
    

  deleteAlbum(item) {
   return this.firestore
    .collection("albums")
    .doc(item.payload.doc.id)
    .delete();
  }


  editAlbum(item, data) {
    return this.firestore
       .collection("albums")
       .doc(item.payload.doc.id)
       .set(data);
  }
}