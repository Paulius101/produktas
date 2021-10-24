import { Component,  EventEmitter,
  Input,
  OnInit,
  Output } from '@angular/core';
import { Produktas } from 'src/app/models/produktas';
import { PrekesComponent } from '../prekes/prekes.component';
import { AppComponent } from 'src/app/app.component';

// interface cart {
//   id: number;
//   name: string;
//   quantity: number;
// }

@Component({
  selector: 'app-krepselis',
  templateUrl: './krepselis.component.html',
  styleUrls: ['./krepselis.component.scss']
})
export class KrepselisComponent implements OnInit {
  @Input()
  public cart:any[]=[];
// public prekes?: PrekesComponent
// public pasirinktaPreke?: any[] = this.prekes?.addToCartList

  constructor() {
  //console.log(this.pasirinktaPreke);
  
  }

  ngOnInit(): void {
  }

}
