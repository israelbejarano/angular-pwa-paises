import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { PaisInterface } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styles: []
})
export class PaisesComponent implements OnInit {
  paises: PaisInterface[] = [];

  constructor(public paisesService: PaisesService) { }

  ngOnInit() {
    this.paisesService.getPaises().then(paises => this.paises = paises);
  }

}
