import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  miFormulario: FormGroup = this.formb.group({
    nombre: [,[Validators.required, Validators.minLength(3)]],
    juego: this.formb.array([
      ['Metal Gear Solid', Validators.required],
      ['PES 2023', Validators.required]
  ], [Validators.required, Validators.minLength(3)])
  });
  //nuevoJuego: FormControl = new FormControl();
   nuevoJuego: FormControl = this.formb.control('', Validators. required);


  get juegoArr(){
    return this.miFormulario.get('juego') as FormArray;
  }
  constructor(private formb: FormBuilder){}

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
  }
  agregarJuego(){
    if(this.nuevoJuego.invalid){
      return;
    }
    this.juegoArr.push(new FormControl(this.nuevoJuego.value, Validators.required));
    //this.juegoArr.push(this.formb.control(this.nuevoJuego.value, Validators.required));
    this.nuevoJuego.reset();
  }

  //eliminar(i: number){this.juegoArr.removeAt(i);} función eliminar usando en el parametro del indice.
  eliminar(){
    this.juegoArr.removeAt(this.nuevoJuego.value);
  }
}
