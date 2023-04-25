import { Component, OnInit } from '@angular/core';
import { Poke } from '../poke';
import { PokeService } from '../poke.service';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit{

  id : Number = 5;

  constructor(private PokeService: PokeService){}


  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this.PokeService.getPoke(this.id).subscribe(
      {
      next : poke => this.poke = poke
    }
    );
  }

  poke : Poke = {} as Poke;


  pegarImagem(){
   return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
  }

}

/*poke : Poke = {
  "name":"Bulbasaur",
  "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  "height": 7,
  "weight": 69,
} as Poke;
}
*/
