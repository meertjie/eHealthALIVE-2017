import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdToolbarModule, MdCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { GalleryComponent } from './gallery/gallery.component';
import { QuotesComponent } from './quotes/quotes.component';
import { MiniContentComponent } from './mini-content/mini-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    GalleryComponent,
    QuotesComponent,
    MiniContentComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    MdCardModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
