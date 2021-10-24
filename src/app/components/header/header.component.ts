import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public rodomosPrekes: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
public pakeistiRodyma() {
    this.rodomosPrekes = !this.rodomosPrekes
  };
}
