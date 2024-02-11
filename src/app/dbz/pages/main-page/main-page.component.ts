import { Component } from '@angular/core';
import { DBZService } from '../../services/DBZServices.service';
import { DBZCharacter } from '../../interfaces/dbzcharacter.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(private dbzservice:DBZService){
  }

  get characters():DBZCharacter[]{
    return [...this.dbzservice.characters];
  }

  addCharacter(character:DBZCharacter):void{
    this.dbzservice.addCharacter(character);
  }

  deleteCharacter(id:string):void{
    this.dbzservice.deleteCharacter(id);
  }
}
