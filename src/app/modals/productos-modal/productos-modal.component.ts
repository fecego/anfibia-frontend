import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
//import * as $ from 'jquery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ProductosService } from '../../servicios/productos.service';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize, exhaustMap} from 'rxjs/operators';
import { UsuariosService } from '../../servicios/usuarios.service';
import { ModalInicioSesionComponent } from '../../modals/modal-inicio-sesion/modal-inicio-sesion.component';

@Component({
  selector: 'app-productos-modal',
  templateUrl: './productos-modal.component.html',
  styleUrls: ['./productos-modal.component.css']
})
export class ProductosModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private _productosS: ProductosService,  private userStatus: UsuariosService, private modalInicio: NgbModal) {

   }



  public productoModal = [];
  public isAutheticated = false;
  private userSubs:Subscription;


  @Input() fromParent;
  @ViewChild('referButton') buttonWish: ElementRef;
  @ViewChild('referButtonCart') buttonCart: ElementRef;
  ngOnInit(): void {
 
    this.productoModal = this.fromParent;
    console.log('Esta es la información que recibo', this.productoModal);


    
    this.userSubs = this.userStatus.isLoggedIn.subscribe(user => {
      console.log(user)
      this.isAutheticated = !!user,
      console.log('This is the value of this.isAu', this.isAutheticated);
     
  })

   
    /* Output:
     {prop1: "Some Data", prop2: "From Parent Component", prop3: "This Can be anything"}
    */
  }

  ngAfterViewInit(){

      /*fromEvent(this.buttonWish.nativeElement, 'click').pipe(exhaustMap(x => 
        this.addWishList(x['target']['parentElement']['value'])
      )).subscribe(console.log)
    
    


    fromEvent(this.buttonCart.nativeElement, 'click').pipe(exhaustMap(x => 
        this.addCartElement(x['target']['value'])
      )).subscribe(x => console.log(x),
                    error => console.log(error))*/

  }
  

  closeModal() {
    this.activeModal.close();
  }


  changeImage(dato){
    console.log('Presionaste changeImage', dato);
    var valorImagen = $("#imagen-principal").attr("src")
    console.log("this is dato", dato, "This is imagenPrincipal", valorImagen);
    var cambio = $("#imagen-principal").attr("src", dato);
  }


   /*addWishList(dato){
    console.log('Hey Im in addWishList, you are going to send', dato);
    const usuarioIdentificador = 1;
    console.log('Este es el identificador del dato', dato.id);
    this._productosS.postProducto_wishList(dato, usuarioIdentificador).subscribe(resultado => console.log(resultado));
    this.closeModal();
    
  }

  addCartElement(dato){
    console.log('This is the dato that I want to add to the cart', dato);
    const usuarioIdentificador = 1;
    this._productosS.postProducto_cartList(dato, usuarioIdentificador).subscribe(data => {
      console.log(data);
    });
    this.closeModal();

  }*/
  public addWishList(dato, e){
    
    if(this.isAutheticated){
      dato.isLoading = true;
      console.log('Hey Im in addWishList, you are going to send', dato, e.target);
      const usuarioIdentificador = 1;
      console.log('Este es el identificador del dato', dato);
      setTimeout(() => {
        Observable.create(observer => {
          observer.next(e.target)
        }).pipe(exhaustMap(x => 
            this._productosS.postProducto_wishList(dato, usuarioIdentificador)
          )).subscribe(x => {
            dato.fullHeart = true;
            dato.isLoading = false;
          }, error => {
            console.log(error);
            dato.fullHeart = false;
            dato.isLoading = false;
          })
      }, 5000)
      //return this._productosLista.postProducto_wishList(dato, usuarioIdentificador);
    }else{
      dato.fullHeart = false;
      dato.isLoading = false;
      this.closeModal();
      console.log('Se desplegara el modal de Inicio de Sesión');
      const modalRef = this.modalInicio.open(ModalInicioSesionComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'md'
        // keyboard: false,
        // backdrop: 'static'
      });
    }
    
  }
  
  addCartElement(dato, event){
    console.log('This is the dato that I want to add to the cart', dato, event.target);
    if(this.isAutheticated){
      dato.isLoadingCart = true;
      setTimeout(() => {
        
        const usuarioIdentificador = 1;
        Observable.create(observer => {
          observer.next(event.target)
        }).pipe(exhaustMap(x => 
          this._productosS.postProducto_cartList(dato, usuarioIdentificador) 
        )).subscribe(x =>{
          console.log(x);
          dato.isLoadingCart = false;
        }, error => {
          console.log(error);
          dato.isLoadingCart = false;
        });
      }, 5000);

    }else{
      this.closeModal();
      console.log('Se desplegara el modal de Inicio de Sesión');
      const modalRef = this.modalInicio.open(ModalInicioSesionComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'md'
        // keyboard: false,
        // backdrop: 'static'
      });
   
    }
  
    //return this._productosLista.postProducto_cartList(dato, usuarioIdentificador);
    //this.openModalCarrito(usuarioIdentificador);
  }



}
