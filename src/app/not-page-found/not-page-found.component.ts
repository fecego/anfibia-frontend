import { Component, OnInit } from '@angular/core';
import { RouterLink, Router} from '@angular/router'

@Component({
  selector: 'app-not-page-found',
  templateUrl: './not-page-found.component.html',
  styleUrls: ['./not-page-found.component.css']
})
export class NotPageFoundComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  redirect(){
    this.router.navigate(['/anfibia-i']);
  }

}
