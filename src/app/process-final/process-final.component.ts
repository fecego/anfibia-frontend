import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Route, ActivatedRoute} from '@angular/router';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-process-final',
  templateUrl: './process-final.component.html',
  styleUrls: ['./process-final.component.css']
})
export class ProcessFinalComponent implements OnInit {

  public respuestaExitosa:boolean = false;
  public respuestaFallida:boolean = false;
  public respuestaRechazada:boolean = false;
  public respuestaEspera:boolean = false;

  constructor(private http:HttpClient, private activaR:ActivatedRoute, private router:Router, private productS: ProductosService) { }

  ngOnInit(): void {

    /*Al inicar cambiamos los valores del localStorage y del behaviorSubject*/
    localStorage.removeItem('purchaseP');
    this.productS.BehaviorsubjectRefresCarritoCompras.next(null);
    this.activaR.queryParams.subscribe(respuesta => {
      localStorage.removeItem("valorCompra");
      console.log('This is the respuesta', respuesta);
      if(respuesta.status == "success"){
        this.respuestaExitosa = true;
      }else if(respuesta.status == "fail"){
        this.respuestaFallida = true;
      }else if(respuesta.status == 'declined'){
        this.respuestaRechazada = true;
      }else if(respuesta.status == 'waiting'){
        this.respuestaEspera = true;
      }
    })

    /*this.http.get(this.router.url, {observe: 'response'}).subscribe(
      respuesta =>{
        console.log(respuesta);
      }
    )*/

    


  }


  ngOnDestroy(){
    //this.productS.BehaviorSubjectCompraCompletada.next(null);
    localStorage.removeItem('valorCompra');
    

  }

}
