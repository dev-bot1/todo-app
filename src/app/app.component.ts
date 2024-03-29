import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  table_type!: 'list' | 'table';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string) {
    this.allItems.push({
      description,
      done: false
    });
  }

  remove(item: { description: string; done: boolean; }) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  
  
}
