import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { TolistComponent } from './tolist/tolist.component';
import { TotableComponent } from './totable/totable.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    TolistComponent,
    TotableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
