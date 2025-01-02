import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fav',
  imports: [],
  templateUrl: './fav.component.html',
  styleUrl: './fav.component.css'
})
export class FavComponent {

  @Input('parentData') public firstname: any;

  @Output() public childdata = new EventEmitter();

  callEvent()
  {
    this.childdata.emit('hello from child component');
  }
}
