import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisService } from '../../../services/pais.service';
import { Pais } from './../../../models/Pais';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editpais',
  templateUrl: './editpais.component.html',
  styleUrls: ['./editpais.component.css']
})
export class EditpaisComponent implements OnInit {
  idPais: number;
  paisForm: FormGroup;
  constructor(private aRouter: ActivatedRoute, private router: Router, private paisService: PaisService, private fb: FormBuilder, private toastr: ToastrService) {
    this.paisForm = fb.group({
      ide_pais: ['', [Validators.required, Validators.maxLength(3)]],
      nom_pais: ['', [Validators.required, Validators.maxLength(60)]],
      nac_pais: ['', [Validators.required, Validators.maxLength(60)]],
      est_pais: ['', Validators.required],
    })
    this.idPais = Number(aRouter.snapshot.paramMap.get('id'))

  }

  ngOnInit(): void {
    this.editar();
  }

  guardar() {
    const pais: Pais = {

      ide_pais: this.paisForm.get('ide_pais')?.value,
      nom_pais: this.paisForm.get('nom_pais')?.value,
      nac_pais: this.paisForm.get('nac_pais')?.value,
      est_pais: this.paisForm.get('est_pais')?.value,
    }
    if (this.idPais !== null) {
      this.paisService.update(this.idPais, pais).subscribe(resp => {
        this.toastr.info(' El Proyecto fue actualizado con exito!', 'Proyecto Actualizado ');
        this.router.navigate(['/'])
      })
    }
  }
  editar() {
    if (this.idPais !== null) {
      this.paisService.getPais(this.idPais).subscribe(data => {
        //console.log(data);
        this.paisForm.setValue({
          ide_pais: data.ide_pais,
          nom_pais: data.nom_pais,
          nac_pais: data.nac_pais,
          est_pais: data.est_pais,

        })
      })
    }
  }
}
