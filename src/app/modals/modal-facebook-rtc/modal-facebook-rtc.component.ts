import { UsuariosService } from '../../servicios/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap} from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";

import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-facebook-rtc',
  templateUrl: './modal-facebook-rtc.component.html',
  styleUrls: ['./modal-facebook-rtc.component.css']
})
export class ModalFacebookRTCComponent implements OnInit {

  constructor(private authService: SocialAuthService, private users_u: UsuariosService, private modal: NgbActiveModal) { }

  ngOnInit(): void {
  }


  socialloginWithFB(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.modal.close();
  }

}
