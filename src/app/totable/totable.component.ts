import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../item";

@Component({
  selector: 'app-totable',
  templateUrl: './totable.component.html',
  styleUrls: ['./totable.component.css']
})
export class TotableComponent {

  editable = false;

  @Input()
  item!: Item;
  @Input()
  newItem!: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
}
