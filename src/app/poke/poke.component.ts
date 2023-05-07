import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Poke } from '../poke';
import { PokeService } from '../poke.service';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit{



  constructor(private PokeService: PokeService){}


  ngOnInit(): void {
    this.getPokemon();
  }

  id : number = 1;

  number = this.id;

  increase(){
    if(this.id<1008){
      this.id++;
    }
    else{
      this.id = 1;
    }
    this.getPokemon();

  }

  decrease(){
    if(this.id>1){
      this.id--;
    }
    else{
      this.id = 1008;
    }
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


  getType(){

    let typeNames: string[] = [];
   this.poke.types.map(t => {
  
      typeNames.push(t.type.name);

      console.log(typeNames);
  })

  
}}