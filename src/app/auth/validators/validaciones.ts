import { FormControl } from '@angular/forms';



export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuederSerGuaguaso9= (control: FormControl)=> {
  //console.log(control.value);
  const valor: string = control.value?.trim().toLowerCase();
  //console.log(valor);
  if(valor === 'Guaguaso9'){
    return{
      noGuaguaso9: true
    }
  }
  return null
}
//noPuederSerGuaguaso9(control: FormControl){
//console.log(control.value);
//  const valor: string = control.value?.trim().toLowerCase();
  //console.log(valor);
//  if(valor === 'Guaguaso9'){
//    return{
//      noGuaguaso9: true
//    }
//  }
//  return null
//}

