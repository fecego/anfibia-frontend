import { Component, OnInit } from '@angular/core';
import * as slick from 'slick-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import * as ezPlus from 'ez-plus';

declare let $:any;


@Component({
  selector: 'app-individual-product',
  templateUrl: './individual-product.component.html',
  styleUrls: ['./individual-product.component.css']
})
export class IndividualProductComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {

    $("#image-container2").ezPlus({
      zoomWindowFadeIn: 500,
      zoomWindowFadeOut: 500,
      lensFadeIn: 500,
      lensFadeOut: 500,
      scrollZoom: true
    });
     /*Funcion para cambio de imagenes en la vista de productos*/
      $("img").click(function(){
        /*Obtengo la ruta de la imagen que es clickeada y la de la imagen Principal, 
        la reasigno a la imagenPrincipal y la cambia.
        */
        var imagenPrincipal = $("#image-container2").attr('src');
        console.log('imagenPrincipal '+ imagenPrincipal);
        var clickedImage = $(this).attr('src');
        console.log("This is img" + clickedImage);
        var c = $("#image-container2").attr('src', clickedImage);
        /*Sirve para cambiar el valor de la segunda imagen al actual
        Se redefinio */
        $("#image-container2").data('zoom-image', clickedImage).ezPlus({
          zoomWindowFadeIn: 500,
          zoomWindowFadeOut: 500,
          lensFadeIn: 500,
          lensFadeOut: 500,
          scrollZoom: true
        });
        
      });

  }  
}
