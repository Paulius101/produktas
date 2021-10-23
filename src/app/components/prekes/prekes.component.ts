import {
  Component,
  OnInit
} from '@angular/core';
import {
  Produktas
} from "../../models/produktas";

@Component({
  selector: 'app-prekes',
  templateUrl: './prekes.component.html',
  styleUrls: ['./prekes.component.scss']
})
export class PrekesComponent implements OnInit {
  public prekes: Produktas[];
  public pasirinktaPreke ? : string;


  public constructor() {
    this.prekes = [];
    this.prekes.push(new Produktas("Super kabelis", "https://cdn.pocket-lint.com/r/s/970x/assets/images/141628-cameras-feature-ocd-cable-porn-image1-oyzsp4buna-jpg.webp?v1", 4, 100, 0.5));
    this.prekes.push(new Produktas("Haris Poteris: isminties akmuo", "https://thumb.knygos-static.lt/n1VUiFDcpjmuBFYF9GlDNtUxbGE=/fit-in/800x800/filters:cwatermark(static/wm.png,500,75,30)/images/books/2150/1462873163_ism.jpg", 3, 10, 0.5));
    this.prekes.push(new Produktas("Barsukas", "https://www.bernardinai.lt/wp-content/uploads/9553695891-barsukas.jpg", 5, 50, 0.5));
  }

  public addToCart(preke: Produktas): void {
    console.log("Produktas pasirinktas!", preke);

    this.pasirinktaPreke = preke.pavadinimas;
  }

  ngOnInit(): void {}

}