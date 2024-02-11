import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { DBZCharacter } from '../interfaces/dbzcharacter.interface';

@Injectable({providedIn: 'root'})
export class DBZService {
  constructor() { }

  public characters:DBZCharacter[]=
  [
    {
      id:uuid(),
      name:'Krilin',
      power:5000
    },
    {
      id:uuid(),
      name:'Goku',
      power:15000
    },
    {
      id:uuid(),
      name:'Vegeta',
      power:12000
    },
  ]

  addCharacter(character:DBZCharacter):void{
    character.id=uuid();
    this.characters.push(character);
  }

  deleteCharacter(id:string):void{
    if(id==='') return;
    this.characters=this.characters.filter(character=>character.id!==id);
  }


}
