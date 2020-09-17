import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  form: FormGroup
  static item: any;

  constructor(private service: AlbumsService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(EditFormComponent.item.payload.doc.data().name, Validators.required),
      band: new FormControl(EditFormComponent.item.payload.doc.data().band, Validators.required),
      genre: new FormControl(EditFormComponent.item.payload.doc.data().genre, Validators.required),
      label: new FormControl(EditFormComponent.item.payload.doc.data().label, Validators.required),
      producer: new FormControl(EditFormComponent.item.payload.doc.data().producer, Validators.required)
    })
  }


  submit() {
    let data = this.form.value;
    let item = EditFormComponent.item;
    this.service.editAlbum(item, data)
  }
}
