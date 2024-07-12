import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsListComponent } from './components-list/components-list.component';
import { ComponentsCartComponent } from './components-cart/components-cart.component';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store/store.component';
import { AboutComponent } from './about/about.component';

import { HttpClientModule } from '@angular/common/http';
import { InputIntegerComponent } from './input-integer/input-integer.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsListComponent,
    ComponentsCartComponent,
    StoreComponent,
    AboutComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
