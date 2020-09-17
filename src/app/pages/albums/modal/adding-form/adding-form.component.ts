import { Component, OnInit  } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AlbumsService }  from './../../../../services/albums.service';

@Component({
  selector: 'app-adding-form',
  templateUrl: './adding-form.component.html',
  styleUrls: ['./adding-form.component.scss']
})
export class AddingFormComponent implements OnInit{
  form: FormGroup
  constructor(private service: AlbumsService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      band: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      label: new FormControl('', Validators.required),
      producer: new FormControl('', Validators.required),
      releaseDate: new FormControl('', [Validators.required, Validators.pattern("[0-9]{4}")]),
    })
  }



  submit() {
    let data = this.form.value;
    this.service.addAlbum(data)
  }
}
