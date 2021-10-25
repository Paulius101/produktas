import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import {
  Produktas
} from "../../models/produktas";

@Component({
  selector: 'app-preke',
  templateUrl: './preke.component.html',
  styleUrls: ['./preke.component.scss']
})
export class PrekeComponent implements OnInit {
  @Input()
  public preke ? : Produktas;
public cart: any[] = [];

  @Output()
  public onAddToCart: EventEmitter < void > ;
    @Output()
  onItemRemoved!: EventEmitter<void>;

  constructor() {
    this.onAddToCart = new EventEmitter < void > ();
     this.onItemRemoved = new EventEmitter<void>();
  }
  
  ngOnInit(): void {}

}
