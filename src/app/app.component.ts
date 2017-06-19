import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { GalleryComponent } from './gallery/gallery.component';
import { QuotesComponent } from './quotes/quotes.component';
import { MiniContentComponent } from './mini-content/mini-content.component';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
             <app-main></app-main>
             <app-quotes></app-quotes>
             <app-mini-content></app-mini-content>
             <app-gallery></app-gallery>
             <app-footer></app-footer>
  `,
})
export class AppComponent {
}
