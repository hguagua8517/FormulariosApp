import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailPattern, noPuederSerGuaguaso9, nombreApellidoPattern } from '../../validators/validaciones';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit{

  //TODO: Temporal

  miFormulario: FormGroup = this.formb.group ({
    nombre:['',[Validators.required, Validators.pattern(nombreApellidoPattern)]],
    email: ['',[Validators.required, Validators.pattern(emailPattern)]],
    username:['',[Validators.required, noPuederSerGuaguaso9]],
    password: ['',[Validators.required, Validators.pattern(emailPattern)]],
    password2: ['',[Validators.required, Validators.pattern(emailPattern)]],


  })

  constructor(private formb: FormBuilder) {}

  ngOnInit():void{
    this.miFormulario.reset({
      nombre: 'Hugo Guagua',
      email: 'test1@test.com',

    })
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }
  submitFormulario(){
    console.log(this.miFormulario.value)
    this.miFormulario.markAllAsTouched
  }
 }
