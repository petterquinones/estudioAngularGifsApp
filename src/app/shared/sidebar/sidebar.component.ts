import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from 'src/app/gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private gifservice:GifsServiceService) { }

  get historial(){
    //Consumo el historial guardado en el servicio.
    return this.gifservice.historial;
  }

  ngOnInit(): void {
  }

}
