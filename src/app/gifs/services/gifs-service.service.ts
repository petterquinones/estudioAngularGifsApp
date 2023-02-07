import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

import { Gif, GifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {
  private apiKey: string = '7Q05UiFxZc55gfoRt0RBiZjcJiPyRfTg';
  private url:string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  //TODO cambiar enay por su tipo
  public resultado: Gif[] = [];

  //Creamos el metodo para obtener información del arreglo en el cual estamos capturando la información que necesitamos mostrar.
  get historial() {
    return [... this._historial]
  }

  constructor(private http: HttpClient) {

    if (localStorage.getItem('historial')) {
      //asignamos el arreglo del localStorage a el historial, con el propósito que este se vuelva a imprimir
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }

    if (localStorage.getItem('resultado')) {
      //asignamos el arreglo del localStorage a el historial, con el propósito que este se vuelva a imprimir
      this.resultado = JSON.parse(localStorage.getItem('resultado')!);
    }

  }

  buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (query.trim().length == 0) {
      return;
    }
    //Validamos que solo insertamos un valor sino lo incluye en el arreglo
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10); //Cortamos el arreglo a max 10 valores
      localStorage.setItem('historial', JSON.stringify(this._historial));
    };
   
    const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q', query )
    //El http.get es un observable, por lo cual nos suscribimos a la respuesta cuando esta llegue
    this.http.get<GifsResponse>(`${this.url}/search`, {params})
      .subscribe((response) => {
        console.log(response.data);
        this.resultado = response.data;
        localStorage.setItem('resultado', JSON.stringify(this.resultado));
      })
  }
}
