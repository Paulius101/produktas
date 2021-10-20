import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Produktas} from "./models/produktas";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public kabelis: Produktas;

  public constructor() {
    this.kabelis = new Produktas("Super kabelis", "https://cdn.pocket-lint.com/r/s/970x/assets/images/141628-cameras-feature-ocd-cable-porn-image1-oyzsp4buna-jpg.webp?v1", 4, 100, 0.5);
  }

}