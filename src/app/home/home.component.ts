import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'des-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() pagina: string = 'home';
}
