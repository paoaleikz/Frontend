import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'app/services/service.service';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-Bodega',
  templateUrl: './Bodega.component.html',
  styleUrls: ['./Bodega.component.css']
})
export class BodegaComponent implements OnInit {


  bodegaFormgroup: FormGroup;
  constructor(
    private service: ServiceService,
    private spinner: NgxSpinnerService
  ) { 
    this.bodegaFormgroup = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  limpiarFormulario(){
    this.bodegaFormgroup.reset();
  }

  guardarBodega(){
    this.spinner.show();
    try {
      const bodega: any = {
        nombre: this.bodegaFormgroup.get('nombre').value,
        direccion: this.bodegaFormgroup.get('direccion').value,
        //estado: this.bodegaFormgroup.get('estado').value? 'Activo' : 'Inactivo',
        estado: 'Activo',
        fechacreacion: moment().format('YYYY-MM-DD'),
        fechamodificacion: moment().format('YYYY-MM-DD'),
      }
      console.log(bodega);
      this.service.postData(this.service.BASE_URL_INVENTARIO, 'bodega/crear', bodega).subscribe((response: any) => {
          console.log(response);
          this.limpiarFormulario();
        });
    } catch (error) {
      console.log(error);
    }
  }

}
