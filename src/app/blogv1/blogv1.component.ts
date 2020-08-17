import { Component, OnInit } from '@angular/core';
import * as Granim from 'granim';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-blogv1',
  templateUrl: './blogv1.component.html',
  styleUrls: ['./blogv1.component.css']
})
export class Blogv1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    /*var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    size: '100%',
    isPausedWhenNotInView: true,
    image : {
        source: '/assets/imagenes/blogv1/nicetrip9.jpg',
        blendingMode: 'multiply'
    },
    states : {
        "default-state": {
            gradients: [
                ['#F5A9F2', '#F5A9E1'],
                ['#F7819F', '#F7819F'],
                ['#F7D358', '#F7D358'],
                ['#F78181', '#F78181'],
                ['#F5A9F2', '#F5A9F2'],
                ['#fff', '#fff']
            ],
            transitionSpeed: 4000
        }
    }
});*/

}


}





