import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-TrasladoBodega',
  templateUrl: './TrasladoBodega.component.html',
  styleUrls: ['./TrasladoBodega.component.css']
})
export class TrasladoBodegaComponent implements OnInit {
    selectBodegaSalida = 'B2';
    selectBodegaIngreso = 'B1';

  constructor() { }

  ngOnInit() {
  }

}
