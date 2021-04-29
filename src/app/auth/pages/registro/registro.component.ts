import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { emailPattern } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: [
      '',
      [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)],
    ],
    email: [
      '',
      [Validators.required, Validators.pattern(this.vs.emailPattern)],
    ],
    username: ['', [Validators.required, this.vs.noPuedeSerStrider]],
  });

  constructor(private fb: FormBuilder, private vs: ValidatorService) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Alejandro Murawczik',
      email: 'test1@test.com',
      username: 'Alexepa',
    });
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched;
    this.miFormulario.reset();
  }
}
