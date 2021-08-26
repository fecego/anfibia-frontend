import { Component, OnInit, Input, AfterViewInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfilService, } from '../../servicios/perfil.service';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap} from 'rxjs/operators';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['./address-modal.component.css']
})
export class AddressModalComponent implements OnInit {
  @Input() fromParent;
 
  public usuario;
  public usuarios;
  @ViewChildren('referButtonSelectedAddress') selectedButton: QueryList<ElementRef>

  constructor(private activaModal:NgbActiveModal, private perfilS: PerfilService) { }
 

  ngOnInit(): void {
    this.usuario = this.fromParent;
    this.usuarios = this.perfilS.getAddresses();


    console.log(this.usuario);

  }


  ngAfterViewInit(){
    setTimeout(() => {
      this.selectedButton.forEach(elemento => {
        fromEvent(elemento.nativeElement, 'click').pipe(exhaustMap(x => 
          this.selectAddress(x['target']['value'])
          
          )).subscribe(console.log)
      })
    }, 4000)
    
  }

  closeModal() {
    this.activaModal.close();
  }


  selectAddress(dato){
   console.log(dato);
   const datosDireccion = {
    sequential: dato,
    default: true
   }


    this.closeModal();
    return this.perfilS.modifyAddress(datosDireccion);
    

  }


}
