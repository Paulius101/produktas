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
  public preke? : Produktas;

  @Output()
  public onAddToCart: EventEmitter < void > ;

  constructor() {
    this.onAddToCart = new EventEmitter < void > ();
  }

  ngOnInit(): void {}

}
