import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



export interface Item {
  name: String,
  id?: Number,
  height: Number,
  weight: Number,
  img?: String,
  url?: String
}


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  stream$ = new Subject();
  // items = [];
  // items: Item[] = [];
  pokemon;

  
  constructor( private http: HttpClient) { }
  
  watchStorage() {
    return this.stream$.asObservable();
  }
  
  fetchPokemons(): Observable<Item[]> {
    return this.http.get<Item[]>('https://pokeapi.co/api/v2/pokemon?limit=31&offset=0')
  }
  
  getDetails(items) {
    for (let i: any = 0; i < items.length; i++) {
      this.http.get<any>(items[i]['url']).subscribe(ok => {
        items.find(e => e['name'] === ok['name']).id = ok.id;
        items.find(e => e['name'] === ok['name']).height = ok.height;
        items.find(e => e['name'] === ok['name']).weight = ok.weight;
        items.find(e => e['name'] === ok['name']).img = ok.sprites.other.dream_world.front_default;
      });
    }
    return items
  }

  // addPok(data): Observable<Item[]> {
  //   return this.http.post<Item[]>('https://exampleurl.com/pokemons/', data)
  // }

  // delPok(pokemon.id): Observable<void> {
  //   return this.http.delete<void>(`https://exampleurl.com/pokemons/${pokemon.id}`)
  // }

  // editPok(pokemon.id): Observable<void> {
  //   return this.http.put<void>(`https://exampleurl.com/pokemons/${pokemon.id}`)
  // }
}
