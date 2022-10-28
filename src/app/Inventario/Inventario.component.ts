import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Inventario',
  templateUrl: './Inventario.component.html',
  styleUrls: ['./Inventario.component.css']
})
export class InventarioComponent implements OnInit {
  inventario : any []=[];

  constructor(private http: HttpClient) { }
  
  

  ngOnInit() {
    this.http.get("http://localhost:8080/inventario/list").subscribe((resp:any)=>{
    if(resp==null){
          console.log("error no existe usuario o contraseña")
      }
        else{
          this.inventario = resp;
        }
    });
  }

}
