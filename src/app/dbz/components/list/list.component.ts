import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DBZCharacter } from '../../interfaces/dbzcharacter.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: ``
})
export class ListComponent {

  @Input()
  public charactersList:DBZCharacter[]=[{id:'',name:'',power:0}]

  @Output()
  public id:EventEmitter<string>=new EventEmitter();

  removeCharacter(id:string):void{
    if(id==='')return;
    console.log("ID eliminar: ",id)
    this.id.emit(id);
  }
}
