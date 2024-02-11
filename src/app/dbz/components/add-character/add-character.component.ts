import { Component, EventEmitter, Output } from '@angular/core';
import { DBZCharacter } from '../../interfaces/dbzcharacter.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styles: ``
})
export class AddCharacterComponent {

  @Output()
  public characterEmitt:EventEmitter<DBZCharacter>=new EventEmitter();

  public character:DBZCharacter={id:'0',name:'',power:0};

  emittCharacter():void{
    if(this.character.name==='')return;
    this.characterEmitt.emit({...this.character});
    this.character.id='0';
    this.character.name='';
    this.character.power=0;
  }
}
