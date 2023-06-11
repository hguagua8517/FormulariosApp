import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

 // miFormulario: FormGroup = new FormGroup({
 //   nombre: new FormControl('RTX 4800'),
 //   precio: new FormControl(2500),
 //   existencias: new FormControl(5)
 //   })

 miFormulario: FormGroup = this.formb.group({
  nombre: [, [Validators.required,Validators.minLength(3)]],
  precio: [, [Validators.required, Validators.minLength(0)]],
  existencias: [,[Validators.required, Validators.minLength(0)]]
 })
  constructor( private formb: FormBuilder){  }

  ngOnInit(){
    this.miFormulario.reset({
      nombre: 'RTX4800ti',
      precio: 1500,
      existencias: 10
    })
  }

  pathIsValid(path: string){
    return this.miFormulario.controls[path].errors
    && this.miFormulario.controls[path].touched;
  }
  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
