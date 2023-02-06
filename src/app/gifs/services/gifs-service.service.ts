import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private _historial: string[] = [];

  //Creamos el metodo para obtener información del arreglo en el cual estamos capturando la información que necesitamos mostrar.
  get historial(){
    
    return [... this._historial]
  }

  buscarGifs( query:string){
    query = query.trim().toLocaleLowerCase();
    if (query.trim().length ==0) {
      return;
    }
    //Validamos que solo insertamos un valor sino lo incluye en el arreglo
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10); //Cortamos el arreglo a max 10 valores
    }
    console.log(this._historial);
  }

  constructor() { }
}
