import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsListComponent } from './components-list/components-list.component';
import { ComponentsCartComponent } from './components-cart/components-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsListComponent,
    ComponentsCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
