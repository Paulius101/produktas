import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';
import {
  Produktas
} from "./models/produktas";

// interface cart {
//   id: number;
//   name: string;
//   quantity: number;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  public cart: any[]=[]
}
