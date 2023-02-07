import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  get Resultados() {
    return this.service.resultado;
  }
  constructor(private service: GifsServiceService) { }
}
