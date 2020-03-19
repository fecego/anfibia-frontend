import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asuntos-legales',
  templateUrl: './asuntos-legales.component.html',
  styleUrls: ['./asuntos-legales.component.css']
})
export class AsuntosLegalesComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }



  showPrivacidad(){
    console.log('Presionaste showPrivacidad')
    this.router.navigate(['politicas-privacidad'], {relativeTo: this.route});
  }

  showEnvio(){
    console.log('Presionaste showEnvios');
    this.router.navigate(['politicas-envios'], {relativeTo: this.route});
  }

  showDevoluciones(){
    console.log("Presionaste showDevoluciones");
    this.router.navigate(['politicas-devoluciones'], {relativeTo: this.route});
  }

  showCompras(){
    console.log('Presioanste showCompras');
    this.router.navigate(['politicas-compras'], {relativeTo: this.route});
  }



}
