import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PokemonsService } from './../../../../services/pokemons.service'


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  form: FormGroup
  static item: any

  constructor(private servicePokemon: PokemonsService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(EditFormComponent.item['name']),
      height: new FormControl(EditFormComponent.item.height),
      weight: new FormControl(EditFormComponent.item.weight),
      img: new FormControl(EditFormComponent.item.img)
    });
  }

submit() {
  EditFormComponent.item = this.form.value
}
}
