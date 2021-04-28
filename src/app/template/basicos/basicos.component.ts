import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 4080T',
    precio: 10,
    existecias: 10,
  };

  constructor() {}

  ngOnInit(): void {}

  precioValido(): boolean {
    return (
      this.miFormulario?.controls.precio?.value < 0 &&
      this.miFormulario?.controls.precio?.touched
    );
  }

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls.producto?.invalid &&
      this.miFormulario?.controls.producto?.touched
    );
  }

  guardar() {
    console.log('Posteo Correcto');
    this.miFormulario.resetForm({
      producto: 'Producto',
      precio: 0,
      existencias: 0,
    });
  }
}
