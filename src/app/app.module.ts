import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { TolistComponent } from './tolist/tolist.component';
import { TotableComponent } from './totable/totable.component';
import { SpacexComponent } from './spacex/spacex.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    TolistComponent,
    TotableComponent,
    SpacexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'to-list',
      component: TolistComponent
    }]),
    RouterModule.forRoot([{
      path: 'to-table',
      component: TotableComponent
    }]),
    RouterModule.forRoot([{
      path: 'space-x',
      component: SpacexComponent
    }]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
