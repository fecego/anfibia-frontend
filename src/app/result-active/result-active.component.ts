import { Component, OnInit } from '@angular/core';
import { ParentToChildService } from '../servicios/parent-to-child.service';

@Component({
  selector: 'app-result-active',
  templateUrl: './result-active.component.html',
  styleUrls: ['./result-active.component.css']
})
export class ResultActiveComponent implements OnInit {

  public mensajeAlreadyActiva:any;
  public mensajeErrorNotRegistrado:any;
  public mensajeMessageSend:any;


  constructor(private sharedService: ParentToChildService) { 

  }


  ngOnInit(): void {
    console.log('Me ejecuto aun asi');
    this.sharedService.datoCompartido.subscribe(x => {
      console.log(x)
      if(x.statusCode == 200){
        this.mensajeAlreadyActiva = x.message

      }else if(x.status == 404){
        console.log('sapp')
        this.mensajeErrorNotRegistrado = x.message
      }else if(x.statusCode == 250){
        console.log('whsta')
        this.mensajeMessageSend = x.message
      }
    });

  }

}
