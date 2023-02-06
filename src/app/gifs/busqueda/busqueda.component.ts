import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  // usamos el operador ! para confirmar que este elemento nunca va a ser nulo
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  //los servicios se inyectan en el constructor
  constructor(private gifservice:GifsServiceService){


  }
  //Método Buscar relacionado en la busqueda.html en el keyup.enter
  buscar(){
    const query = this.txtBuscar.nativeElement.value;
   
    console.log(query);
    this.txtBuscar.nativeElement.value = '';//Asignamos vacio a la caja de texto
    this.gifservice.buscarGifs(query);
  }

}
