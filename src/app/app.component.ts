import { Component } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anfibiaFecego';

  ngOnInit(){
    AOS.init();
  }  
}
