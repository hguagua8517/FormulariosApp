import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailPattern, noPuederSerGuaguaso9, nombreApellidoPattern } from '../../../shared/validators/validaciones';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';
import { EmailServiceService } from 'src/app/shared/validators/email-service.service';
import { tick } from '@angular/core/testing';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit{


  miFormulario: FormGroup = this.formb.group ({
    nombre:['',[Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['',[Validators.required, Validators.pattern( this.validatorService.emailPattern)],[this.emailValidator ]],
    username:['',[Validators.required, this.validatorService.noPuederSerGuaguaso9]],
    password: ['',[Validators.required, Validators.minLength(9)]],
    password2: ['',[Validators.required, ]],


  },{
    Validators: [this.validatorService.camposIguales('password', 'password2')]
  });

  get emailErrorMsg(): string {
   const errors = this.miFormulario.get('email')?.errors;
   if(errors?.['required']){
     return 'El email es obligatorio';
   }else if (errors?.['pattern']){
    return 'El formato ingresado no es un correo';
   }else if (errors?.['emailTomado']){
     return 'El email ya fue tomado';
   }
  return '';
  }
  constructor(private formb: FormBuilder,
    private validatorService: ValidatorsService,
    private emailValidator: EmailServiceService) {}

  ngOnInit():void{
    this.miFormulario.reset({
      nombre: 'Hugo Guagua',
      email: 'test1@test.com',
      username: 'guaguaso36',
      password: '123456789',
      password2: '123456789',

    })
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }



  //emailRequired(){
  //  return this.miFormulario.get('email')?.errors?.['required'] &&
  //  this.miFormulario.get('email')?.touched;
  //}

  //emailFormato(){
  //  return this.miFormulario.get('email')?.errors?.['pattern'] &&
  //  this.miFormulario.get('email')?.touched;
  //}

  //emailTomado(){
  //  return this.miFormulario.get('email')?.errors?.['emailTomado'] &&
 //   this.miFormulario.get('email')?.touched;
  //}


  submitFormulario(){
    console.log(this.miFormulario.value)
    this.miFormulario.markAllAsTouched
  }
 }
