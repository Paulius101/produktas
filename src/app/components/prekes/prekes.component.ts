import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  Produktas
} from "../../models/produktas";
import {
  AppComponent
} from 'src/app/app.component';

// interface cart {
//   id: number;
//   name: string;
//   quantity: number;
// }

@Component({
  selector: 'app-prekes',
  templateUrl: './prekes.component.html',
  styleUrls: ['./prekes.component.scss']
})
export class PrekesComponent implements OnInit {
  public prekes: Produktas[];
  public pasirinktaPreke ? : string;
  public id: number;


  @Input()
  public cart: any[] = [];


  public kiekisKrepselyje: number;

  public constructor() {
    this.prekes = [];
    //this.addToCartList = [];
    this.kiekisKrepselyje = 1;

    this.id = 0;
    this.prekes.push(new Produktas(this.idGenerator(), "Super kabelis", "https://cdn.pocket-lint.com/r/s/970x/assets/images/141628-cameras-feature-ocd-cable-porn-image1-oyzsp4buna-jpg.webp?v1", 4, 100, 0.5));
    this.prekes.push(new Produktas(this.idGenerator(), "Haris Poteris: isminties akmuo", "https://thumb.knygos-static.lt/n1VUiFDcpjmuBFYF9GlDNtUxbGE=/fit-in/800x800/filters:cwatermark(static/wm.png,500,75,30)/images/books/2150/1462873163_ism.jpg", 3, 10, 0.5));
    this.prekes.push(new Produktas(this.idGenerator(), "Barsukas", "https://www.bernardinai.lt/wp-content/uploads/9553695891-barsukas.jpg", 5, 50, 0.5));
  }
  public idGenerator(): number {
    return this.id++
  }

  public addToCart(preke: Produktas): void {

    if (this.cart.length === 0) {
      this.cart.push({
        id: preke.id,
        pavadinimas: preke.pavadinimas,
        kiekis: this.kiekisKrepselyje,
        kaina: preke.kaina
      })
      return;
    }
    let exist = false;
    for (const p of this.cart) {

      if (p.id === preke.id) {
        p.kiekis++;
        p.kaina+=preke.kaina
        exist = true;
      }
    }
    if (!exist) {
      this.cart.push({
        id: preke.id,
        pavadinimas: preke.pavadinimas,
        kiekis: this.kiekisKrepselyje,
        kaina:preke.kaina
      })
    }

    console.log(this.cart);

  }

  // public removeFromCart():void {
  //   for(const product of this.cart) {
  // if(pro)
  //   }
  // }

  ngOnInit(): void {}

}
