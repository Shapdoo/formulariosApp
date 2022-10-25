import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent implements OnInit {

  //capturando el formulario
  @ViewChild('miFormulario')
  public miFormulario!: NgForm;

  public initForm = {
    producto: '',
    precio: 0,
    existencias: 0
  }

  constructor() {}

  ngOnInit(): void {}

  //Validando el input de producto
  nombreInvalido(): boolean {
    //Se colocan esos simbolos porque ocurre que esto funciona cuando el formulario
    //termino de renderizarse por completo con eso nos aseguramos que haya cargado
    return (
      this.miFormulario?.controls['producto']?.invalid &&
      this.miFormulario?.controls['producto']?.touched
    );
  }

  precioInvalido(): boolean {
    return (
      this.miFormulario?.controls['precio']?.value < 0 &&
      this.miFormulario?.controls['precio']?.touched
    );
  }

  guardar(): void {
    console.log("Posteo correcto");

    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    })
  }

  customDirective(): ValidationErrors | null {
    return this.miFormulario?.controls['existencias']?.errors
  }
}
