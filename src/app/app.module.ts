import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';
import { ChipsModule } from 'primeng/chips';
import {ListboxModule} from 'primeng/listbox';
import {ButtonModule} from 'primeng/button';
import {OverlayPanelModule} from 'primeng/overlaypanel';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
		ListboxModule,
    ButtonModule,
    FormsModule,
    ChipsModule,
    OverlayPanelModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
