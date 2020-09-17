// This is an imitation of working with a server.
// Because PokeApi is a consumption-only API — only the HTTP GET method is available on resources.
// Therefore, we receive data from the database,
// but implemention of the functions "add", "delete", "edit" is local (only "front" part).
// Code in comment - is sulution for case when all HTTP methods works (the code that should
// be commented out in this case is marked by "*").


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Item, PokemonsService } from 'src/app/services/pokemons.service';
import { AddFormComponent } from './modal/add-form/add-form.component';
import { ConfirmModalComponent } from './modal/confirm-modal/confirm-modal.component';
import { faPen, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { delay } from 'rxjs/operators';
import { EditFormComponent } from '../pokemons/modal/edit-form/edit-form.component';



@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  items: Item[] = [];
  faPen = faPen;
  faTrashAlt = faTrashAlt;
  faPlusCircle = faPlusCircle;
  loading = false;
  
  constructor(
    private pokemonsService: PokemonsService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(){
    this.getPokemons() //*
    // this.pokemonsService.watchStorage().subscribe(() => {
    //    this.items = this.getPokemons()
    // })
  }



  getPokemons() {
    // let pokList
    this.loading = true;
    this.pokemonsService.fetchPokemons()
    .pipe(delay(1500))
    .subscribe(data => {
      // pokList = this.pokemonsService.getDetails(data['results'])
      this.items = this.pokemonsService.getDetails(data['results']) //*
      this.loading = false;
    });
    // return pokList
  }

  delPokemon(pokemon) {
    let dialogref = this.dialog.open(ConfirmModalComponent)
    dialogref.afterClosed().subscribe(res => {
      if (res === "true") {
        // this.confirmDel(pokemon)}
        this.items = this.items.filter(i => pokemon.id != i.id || pokemon.name != i.name);//*
      }
    })
  }

  // confirmDel(pokemon) {
    // this.pokemonsService.delPok(pokemon).subscribe(data => {
    // this.items = this.items.filter(i => pokemon.id != i.id || pokemon.name != i.name);
    //}
    // this.pokemonsService.stream$.next('changed');
  // }

  addPokemon() {
    let dialogref = this.dialog.open(AddFormComponent)
    dialogref.afterClosed().subscribe(res => {
      if (res === "true") {
        // this.confirmAdding()
        this.items.push(this.pokemonsService.pokemon)//*
      }
    })
  }

  // confirmAdding() {
    // this.pokemonsService.addPok(pokemon).subscribe(data => {
    // this.items.push(this.pokemonsService.pokemon)
    // }
    // this.pokemonsService.stream$.next('changed');
  // }

  editPokemon(item) {
    EditFormComponent.item = item
    let dialogref = this.dialog.open(EditFormComponent)
    dialogref.afterClosed().subscribe(res => {
      if (res === "true") {
        // this.confirmEditin()
        let index = this.items.indexOf(item)
        this.items.splice(index, 1, EditFormComponent.item);
      }
    })
  }

  // confirmEditin(pokemon) {
    // this.pokemonsService.addPok(pokemon.id).subscribe(data => {
    // let index = this.items.indexOf(pokemon)
    // this.items.splice(index, 1, EditFormComponent.item);
    // }
    // this.pokemonsService.stream$.next('changed');
  // }
}
