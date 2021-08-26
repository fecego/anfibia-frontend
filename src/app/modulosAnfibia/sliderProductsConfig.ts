import { OwlOptions } from 'ngx-owl-carousel-o';

class sliderProduct{
      public customOptions;

     

      valuesCustomOptions(item: number, autoplay: boolean,  autoplayTimeout: number, autoplayHoverPause:boolean, loop: true,
        mouseDrag: boolean, touchDrag: boolean, pullDrag: boolean, dots: boolean, margin: number, navSpeed: number, navText: Array<string>, responsive: any, nav: boolean){
          return this.customOptions = {
            item: item,
            autoplay: autoplay, 
            autoplayTimeout: autoplayTimeout,
            autoplayHoverPause: autoplayHoverPause, 
            loop: loop, 
            mouseDrag: mouseDrag, 
            touchDrag: touchDrag, 
            pullDrag: pullDrag, 
            dots: dots, 
            margin: margin,
            navSpeed: navSpeed, 
            navText: navText, 
            responsive: responsive, 
            nav: nav
          }


      }

     
        
 }

const slideP = new sliderProduct();
export default slideP;






