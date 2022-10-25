import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miFormulario')
  public miFormulario!: NgForm



  constructor() { }

  ngOnInit(): void {
  }

  guardar(): void {
    console.log("formulario enviado")
  }
}
