import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.formb.group({
  genero:['M',Validators.required],
  notificaciones: [ true, Validators.required],
  condiciones: [false, Validators.requiredTrue]
  });

  persona ={
    genero:'F',
    notificaciones: true,
  }

  constructor(private formb: FormBuilder){}

  ngOnInit(){
    this.miFormulario.reset({...this.persona, condiciones: false});

    //select basado en otro select
    //this.miFormulario.get('condiciones')?.valueChanges.subscribe(newValue=>{
    //  console.log(newValue);
    //})

    //eliminando desde el objeto
    //this.miFormulario.valueChanges.subscribe(form=>{
    //  delete form.condiciones;
    //  this.persona = form;
    //})


    //desestructurando el objeto
    this.miFormulario.valueChanges.subscribe(({condiciones, ...rest})=>{
      this.persona = rest;
      console.log(rest);
    })
  }

  //RX.js

  guardar(){
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;

    this.persona = formValue;
  }
}
