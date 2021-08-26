import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
/*import { JsonPipe } from '@angular/common';*/
import  {scrollToTop} from '../modulosAnfibia/prueba';



@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})


export class ProveedoresComponent implements OnInit {
 
  
 
 
    
  constructor() { }

  ngOnInit() {
    scrollToTop();
    
    
   
    
    
  }

    
  

}
