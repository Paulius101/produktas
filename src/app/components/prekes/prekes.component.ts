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
  public id: number;
  public addToCartList: any[];
  public kiekisKrepselyje: number;

  public constructor() {
    this.prekes = [];
    this.addToCartList = [];
    this.kiekisKrepselyje = 1;

    this.id = 0;
    this.prekes.push(new Produktas(this.idGenerator(), "Super kabelis", "https://cdn.pocket-lint.com/r/s/970x/assets/images/141628-cameras-feature-ocd-cable-porn-image1-oyzsp4buna-jpg.webp?v1", 4, 100, 0.5));
    this.prekes.push(new Produktas(this.idGenerator(), "Haris Poteris: isminties akmuo", "https://thumb.knygos-static.lt/n1VUiFDcpjmuBFYF9GlDNtUxbGE=/fit-in/800x800/filters:cwatermark(static/wm.png,500,75,30)/images/books/2150/1462873163_ism.jpg", 3, 10, 0.5));
    this.prekes.push(new Produktas(this.idGenerator(), "Barsukas", "https://www.bernardinai.lt/wp-content/uploads/9553695891-barsukas.jpg", 5, 50, 0.5));
    // for (const naujaPreke of this.prekes) {
    //   this.productIdList.push(naujaPreke.id)
    // }

  }
  public idGenerator(): number {
    return this.id++
  }

  public addToCart(preke: Produktas): void {
    // console.log("Produktas pasirinktas!", preke);
    if(this.addToCartList.length === 0) {
    this.addToCartList.push(preke.id, preke.pavadinimas, this.kiekisKrepselyje)}
    // else   {
    //   // for(const p of this.addToCartList) {
    //   //   console.log(p[2]);
        
    //   // this.addToCartList.push(preke.id, preke.pavadinimas, this.kiekisKrepselyje++)
    //   }
    // }

    console.log(this.addToCartList);
  
    // this.pasirinktaPreke = preke.pavadinimas;
  }

  ngOnInit(): void {}

}
