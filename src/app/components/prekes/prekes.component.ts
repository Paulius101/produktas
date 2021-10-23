import { Component, OnInit } from '@angular/core';
import {Produktas} from "../../models/produktas";
@Component({
  selector: 'app-prekes',
  templateUrl: './prekes.component.html',
  styleUrls: ['./prekes.component.scss']
})
export class PrekesComponent implements OnInit {
public prekes: Produktas [];

 public constructor() {
       this.prekes = [];
    this.preke = new Produktas("Super kabelis", "https://cdn.pocket-lint.com/r/s/970x/assets/images/141628-cameras-feature-ocd-cable-porn-image1-oyzsp4buna-jpg.webp?v1", 4, 100, 0.5);
  }
  ngOnInit(): void {
  }

}
