import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaisService } from '../../../services/pais.service';
import { Pais } from '../../../models/Pais';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-newpais',
  templateUrl: './newpais.component.html',
  styleUrls: ['./newpais.component.css']
})
export class NewpaisComponent implements OnInit {
  id: number = 15;
  paisForm: FormGroup;


  constructor(private paisService: PaisService, private router: Router, private fb: FormBuilder,
    private toastr: ToastrService) {
    this.paisForm = fb.group({

      ide_pais: ['', [Validators.required, Validators.maxLength(3)]],
      nom_pais: ['', [Validators.required, Validators.maxLength(60)]],
      nac_pais: ['', [Validators.required, Validators.maxLength(60)]],
      est_pais: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  guardar(): void {

    const pais: Pais = {
      cod_pais: Pais.length + 1,
      ide_pais: this.paisForm.get('ide_pais')?.value,
      nom_pais: this.paisForm.get('nom_pais')?.value,
      nac_pais: this.paisForm.get('nac_pais')?.value,
      est_pais: this.paisForm.get('est_pais')?.value,
    }

    this.paisService.addPais(pais).subscribe(resp => {
      this.toastr.success(' El Pais fue registrado con exito!', 'Pais Registrado ');
      this.router.navigate(['/'])
    })
  }
}
