import { Poke } from './poke';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokeService {

  constructor(private http: HttpClient) {}
  getPoke(id : Number): Observable<Poke>{
  return this.http.get<Poke>(`https://pokeapi.co/api/v2/pokemon/${id}`)
}
}
