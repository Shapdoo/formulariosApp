import { Component, OnInit } from '@angular/core';

interface MenuItem {
  text: string,
  ruta: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  public templateMenu: MenuItem[] = [
    {
      text: 'Basicos',
      ruta: './template/basicos'
    },
    {
      text: 'Dinámicos',
      ruta: './template/dinamicos'
    },
    {
      text: 'Switches',
      ruta: './template/switches'
    },
  ]

  public reactiveMenu: MenuItem[] = [
    {
      text: 'Basicos',
      ruta: './reactive/basicos'
    },
    {
      text: 'Dinámicos',
      ruta: './reactive/dinamicos'
    },
    {
      text: 'Switches',
      ruta: './reactive/switches'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
