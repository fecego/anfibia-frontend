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
    var granimInstance = new Granim({
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
                ['#B404AE', '#B404AE'],
                ['#FF0040', '#FA5882'],
                ['#FF8000', '#FF8000'],
                ['#FF0000', '#FF0000'],
                ['#5F04B4', '#5F04B4'],
                ['#fff', '#fff']
            ],
            transitionSpeed: 4000
        }
    }
});

}


}
$(function() {  
    $('.btn-6')
      .on('mouseenter', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top:relY, left:relX})
      });
    $('[href=#]').click(function(){return false});
  });





