import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../models/Pais';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: Pais[] = [];
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.getPaises()
  }


  getPaises() {
    this.paisService.getPaises().subscribe(resp => {

      this.paises = resp
    })
  }

  deletePais(id: any) {
    this.paisService.deletePais(id).subscribe(resp => {
      // console.log(resp);
      this.getPaises();
    })
  }

}
