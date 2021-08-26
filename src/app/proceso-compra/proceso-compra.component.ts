import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuariosService } from '../servicios/usuarios.service';
import { PerfilService } from '../servicios/perfil.service';
import { ProductosService } from '../servicios/productos.service';
import { CarritoInfoService } from '../servicios/carrito-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import  {scrollToTop} from '../modulosAnfibia/prueba';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, delay, mergeMap, mapTo, merge, catchError, finalize} from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressModalComponent } from '../modals/address-modal/address-modal.component';
import { NuevaDireccionComponent } from '../modals/nueva-direccion/nueva-direccion.component';
import { EditPerfilComponent } from '../modals/edit-perfil/edit-perfil.component';
import { SHA256, HmacSHA256} from 'crypto-js'

/*Pruebas*/
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, AbstractControl  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


//import crypto from 'crypto'
type dataRara = number | string

@Component({
  selector: 'app-proceso-compra',
  templateUrl: './proceso-compra.component.html',
  styleUrls: ['./proceso-compra.component.css']
})
export class ProcesoCompraComponent implements OnInit {

  constructor(private fb: FormBuilder, private perfilS: PerfilService, private usuarioDir: UsuariosService, private carrito: CarritoInfoService, private route: ActivatedRoute, private router: Router, private addressModal: NgbModal, private productosS: ProductosService) { }
  public usuario:any = {}
  public carritoUsuario:any = {};
  public gastosEnvio:number;
  public totalParcial:number = 0;
  public total:number = 0;
  public cartIdentificador:number;

  public prodPedido;
  public userInfoAddresses;
  
  public timetransaction;
  public addressesData;
  public cartData;
  public nameData;
  public lastNameData;
  public productosData;
  public idUsuarioData;
  public addressFullData;
  public customerId;
  public isAutheticated = false;
  private userSubs:Subscription
  private mensajeError;

  public hashCrypto;
  public totalCarrito;
  public pagoProcess:boolean;

  ngOnInit() {

    
    scrollToTop();
    this.productosS.behSubCompraCompletada.next(true);
    //const id = 1;
    /*let idCart;
    this.route.firstChild.params.subscribe(params => {
      console.log(params);
      console.log('This is the params cartID', params);
      idCart = params
      console.log(typeof(idCart));
      console.log(idCart)

    });

    
    




    this.userSubs = this.usuarioDir.isLoggedIn.subscribe(user =>{
      this.isAutheticated = !!user;
      if(this.isAutheticated){
        console.log('This is the idCart', idCart.cartId);
        if(idCart != undefined){
          console.log('Entraste al if')
          this.getInformacionUserExpress(idCart.cartId);
    
          const f = this.perfilS.behaviorS.subscribe(() => {
            this.getInformacionUserExpress(idCart.cartId);
    
          })
          return;
          }else{
            console.log('Entraste al else');
            const c = this.getInformacionUser();
    
            const f = this.perfilS.behaviorS.subscribe(() => {
              this.getInformacionUser();
    
            })
          }

      }else{
        console.log('Not logged');
      }
    })*/



    this.userSubs = this.usuarioDir.isLoggedIn.subscribe(user => {
      this.isAutheticated = !!user;

    },error => {
      this.isAutheticated = false;
      console.log(error);
    });

    
    /*Verificamos si el usuario esta autenticado para poder proseguir, no solo eso, deberemos verificar un valor el valor del 
    
    */
    if(this.isAutheticated){
      if(this.router.url == '/compra'){


        this.perfilS.behaviorS.subscribe(() => {
          this.getInformacionUser();
    
        })
    
         this.userSubs = this.getInformacionUser();
       }else{
    
        /*this.perfilS.behaviorS.subscribe(() => {
          this.getInformacionUserExpress(idCart.cartId);
    
        })*/
        
         this.route.firstChild.params.subscribe(params => {
           this.perfilS.behaviorS.subscribe(() => {
            this.getInformacionUserExpress(params.cartId);
           })
           this.getInformacionUserExpress(params.cartId);
    
         })
       }

    }else{
      console.log('No te encuentras loggeado');


    }



   
    


   var today = new Date();

   var year = today.getFullYear();
   var month = today.getMonth() + 1;
   var day = today.getDate();

   var c = month.toString();
   if(c.length == 1){
     c = '0' + c
     var meses:dataRara = c
   }else{
    var meses:dataRara = today.getMonth() + 1
   }

   //console.log('this is the month', meses)
   var dias = day.toString();
   //console.log(d);
   if(dias.length == 1){
     var d:dataRara = '0' + dias;
    
    }else{
      var d:dataRara = today.getDate();
    }


    const fecha = year + ':' + meses + ':' + d;
    

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var horas = today.getHours();

    var h = horas.toString();
    if(h.length == 1){
      var hrs:dataRara = '0' + h;
    }else{
      var hrs:dataRara = today.getHours();
    }

    var minutos = today.getMinutes();
    var m = minutos.toString();
    if(m.length == 1){
      var minutes:dataRara = '0' + m;
    }else{
      var minutes: dataRara = today.getMinutes();
    }

    var seconds = today.getSeconds();
    var s = seconds.toString();
    if(s.length == 1){
      var segundos:dataRara = '0' + s; 
    }else{
      var segundos:dataRara = today.getSeconds();
    }

    const timeHMS = hrs + ':' + minutes+ ':' + segundos

    const fechaExacta = fecha + '-' + timeHMS;
    this.timetransaction = fechaExacta;

    
 
   
    /*var date = today.getFullYear()+':'+(today.getMonth()+1)+':'+today.getDate();
    
    
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+'-'+time;
    this.timetransaction = dateTime;
    console.log(this.timetransaction);*/
    
    
    
    
   
  
    
    
   
  

    

    /*if(this.route.params){
      
      console.log('Estas en el if, si no tienes rutas, sal de aquí, maldito');
      const cartId = this.route.params.pipe(mergeMap(params =>
            
            this.getInformacionUserExpress(id, params.cartId).pipe(map(x => x[0]['json_build_object']))
          )).subscribe(x => {
            this.addressesData = x['addresses'].filter(x => x.default == true);
            this.addressFullData = x['addresses'];
            this.cartData = x['cart'];
            this.productosData = x['productos'];
            this.nameData = x['nombre'];
            this.lastNameData = x['lastName'];
            console.log(this.addressesData, this.addressFullData, this.cartData, this.productosData, this.nameData, this.lastNameData );
            
          }
          );
    }else{
      const c = this.getInformacionUser(id);

      const f = this.perfilS.behaviorS.subscribe(() => {
        this.getInformacionUser(id);
      })
    }*/

    /*this.gastosEnvio = 200;
    this.usuario = this.usuarioDir.getUsuario();
    this.usuario = this.usuario[0];
    this.carritoUsuario = this.carrito.getInfoCarrito();
    this.carritoUsuario = this.carritoUsuario[0];
    console.log("Esta es la info del carrio", this.carritoUsuario.productos);
    this.carritoUsuario.productos.forEach(producto => {
        console.log(producto.cantidad, producto.precio);
        producto.totalProductoIndividual = this.totalProductoporCantidad(producto.cantidad,producto.precio);
        console.log(producto.totalProductoIndividual);
        this.totalParcial = this.totalParcial + producto.totalProductoIndividual;
        
    });
    this.total = this.totalParcial + this.gastosEnvio;*/
    

  
  
 

   
    /*const c = this.usuarioDir.getInformacionUser(id).pipe(map(x => x['rows']));
    const d = c.pipe(map(x => x[0]));
    const f = d.pipe(map(x => Object.values(x)));



    const x = d.pipe(map(x => Object.values(x)))
    const z = this.productosM.pipe(map(x => x[0].productos));
    this.productosM = x.pipe(map(x => x));
    */

    /*const usuariosReport = this.usuarioDir.getInformacionUser(id).pipe(map(x => x['rows'][0]));
    const usuariosReport2 = usuariosReport.pipe(map(x => 
        Object.values(x), 
        shareReplay()
      
     ));
    


    this.prodPedido = usuariosReport2.pipe(map(x => x[0]['productos']));
    this.userInfoAddresses = usuariosReport2.pipe(map(x  => x[0]['addresses']));
    this.infoCart = usuariosReport2.pipe(map(x => x[0]['cart']));
   
   
    this.infoName = usuariosReport2.pipe(map(x => x[0]['nombre']));
    

    this.infoLastName = usuariosReport2.pipe(map(x => x[0]['lastName']));*/
    

   
   
    //this.prodPedido = products.pipe(map(x => x[5]));
   
 
   




      

  }




  ngOnDestroy(){
    console.log('Me voy a EJECUTAR COMIENZA LA DESTRUCCIóN COMIENZA EL CAOS');
    this.productosS.BehaviorsubjectRefresCarritoCompras.next(null);
    localStorage.removeItem('purchaseP');
  }

  modifyValue(dato){

    
    console.log('This is the dato we are looking', dato);

    /*===================================VALORES QUE YA MANEJAMOS============================================================================== */
    const checkoutoption = 'simpleForm';
    const txntype = 'sale';
    const timezone = 'America/Mexico_City';
    const tnxdatetime = '';
    const hash_algorithm = 'SHA256';
    const hash = '';
    const storename = 3910046;
    const currency = 484;
    const chargetotal = 135.04;
    /*const responseSuccessURL = 'http://localhost:4200/compra-completada';
    const responseFailURL = 'http://localhost:4200/compra-completada';*/
    const transactionNotificationURL = 'http://localhost:4000/pagoRecibido'
    const hostURI = '/compra';


    const sharedsecret = 'pruebas123'

 





    /*===================================CALCULO DE FECHA ACTUAL====================================================== */
    var today = new Date();

   var year = today.getFullYear();
   var month = today.getMonth() + 1;
   var day = today.getDate();

   var c = month.toString();
   if(c.length == 1){
     c = '0' + c
     var meses:dataRara = c
   }else{
    var meses:dataRara = today.getMonth() + 1
   }

   //console.log('this is the month', meses)
   var dias = day.toString();
   //console.log(d);
   if(dias.length == 1){
     var d:dataRara = '0' + dias;
    
    }else{
      var d:dataRara = today.getDate();
    }


    const fecha = year + ':' + meses + ':' + d;
    

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var horas = today.getHours();

    var h = horas.toString();
    if(h.length == 1){
      var hrs:dataRara = '0' + h;
    }else{
      var hrs:dataRara = today.getHours();
    }

    var minutos = today.getMinutes();
    var m = minutos.toString();
    if(m.length == 1){
      var minutes:dataRara = '0' + m;
    }else{
      var minutes: dataRara = today.getMinutes();
    }

    var seconds = today.getSeconds();
    var s = seconds.toString();
    if(s.length == 1){
      var segundos:dataRara = '0' + s; 
    }else{
      var segundos:dataRara = today.getSeconds();
    }

    const timeHMS = hrs + ':' + minutes+ ':' + segundos

    const fechaExacta = fecha + '-' + timeHMS;
    this.timetransaction = fechaExacta;


    /*======================CONCATENIZACIÓN DE VALORES =======================================================================================*/

    /*storename, txtdatetime, chargetotal, currency y sharedsecret. 
    
    39100462021:03:01-11:45:49135.04484pruebas123
    
    */
    const hashConcat = storename + this.timetransaction + this.totalCarrito + currency + sharedsecret;

    console.log(hashConcat);

    


    /*===========================CALCULO DEL HEX====================================================================*/

    var arrayR = []
    for(const letter of hashConcat){
      const s = letter.charCodeAt(0).toString(16);
      arrayR.push(s);
    }

    const sup = arrayR.join('');
    console.log(sup);
    /*const hashCr = crypto.createHash('sha256')
                   .update(sup)
                   .digest('base64');*/

    //console.log(hashCr);
    /*======================================CALCULO  A SHA256=====================================================================*/
      
    const hashCr = SHA256(sup).toString();


    

    this.hashCrypto = hashCr;
    console.log(this.hashCrypto);
    /*============================================================================================================================*/
    this.pagoProcess = true;
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });

    const valueCompra = true;
    localStorage.setItem('valorCompra', 'true');

    //this.perfilS.communicateApiPayment(dato).subscribe(x => console.log(x));
    





  }





 

  totalProductoporCantidad(dato1:number, dato2:number){
    console.log(dato1 * dato2);
    return dato1 * dato2;
  }





  getInformacionUser(){
   return this.perfilS.getInformacionUser().pipe(map(x => x['json_build_object'])).subscribe(
    x => {
      this.addressesData = x['addresses'].filter(x => x.default == true);
      this.addressFullData = x['addresses'];
      this.cartData = x['cart'];
      this.totalCarrito = x['cart'][0]['total'];
      this.cartIdentificador = x['cart'][0]['id'];
      this.productosData = x['productos'];
      this.nameData = x['nombre'];
      this.customerId = x['idUsuario'];
      this.lastNameData = x['lastName'];
      console.log('this is the cartData', x);

    },error => {
      console.log(error);
      this.mensajeError = error.error.message

    })
/*.subscribe(
      x => {
        this.addressesData = x['addresses'].filter(x => x.default == true);
        this.addressFullData = x['addresses'];
        this.cartData = x['cart'];
        this.productosData = x['productos'];
        this.nameData = x['nombre'];
        this.lastNameData = x['lastName'];
        console.log('this is the cartData', this.cartData );
 
      }
    );*/



    
    /*const data2 = data1.pipe(map(x => x[0]));
    const data3 = data2.pipe(map(x => x['json_build_object']));*/


    /*public addressesData;
    public cartData;
    public nameData;
    public lastNameData;
    public productosData;
    public idUsuarioData;*/

    /*this.addressesData = data1.pipe(map(x => x['addresses'].filter(x => x.default == true)));
    this.addressFullData = data1.pipe(map(x => x['addresses']));
    this.cartData = data1.pipe(map(x => x['cart']));
    this.productosData = data1.pipe(map(x => x['productos']));
    this.nameData = data1.pipe(map(x => x['nombre']));
    this.lastNameData = data1.pipe(map(x => x['lastName']));*/


    /*this.addressesData = data3.pipe(map(x => x['addresses']));
    this.cartData = data3.pipe(map(x => x['cart']));
    this.nameData = data3.pipe(map(x => x['nombre']));
    this.lastNameData = data3.pipe(map(x => x['lastName']));
    this.productosData = data3.pipe(map(x => x['productos']));
    this.idUsuarioData = data3.pipe(map(x => x['idUsuario']));


    return [this.addressesData, this.cartData, this.nameData, this.productosData, this.idUsuarioData];*/

  }





  getInformacionUserExpress(dato){
    return this.perfilS.getInfoUserExpress(dato).pipe(map(x => x[0]['json_build_object'])).subscribe(
      x => {
        this.addressesData = x['addresses'].filter(x => x.default == true);
        this.addressFullData = x['addresses'];
        this.cartData = x['cart'];
        this.totalCarrito = x['cart'][0]['total'];
        this.cartIdentificador = x['cart'][0]['id'];
        this.customerId = x['idUsuario']
        this.productosData = x['productos'];
        this.nameData = x['nombre'];
        this.lastNameData = x['lastName'];
        console.log(this.addressesData, this.addressFullData, this.cartData, this.productosData, this.nameData, this.lastNameData );
        

      }, error => {
        console.log('Entramos al error en gerInformacionUserExpress',error);
        this.mensajeError = error.error.message;
      })
    /*.subscribe(
      x => {
        this.addressesData = x['addresses'].filter(x => x.default == true);
        this.addressFullData = x['addresses'];
        this.cartData = x['cart'];
        this.productosData = x['productos'];
        this.nameData = x['nombre'];
        this.lastNameData = x['lastName'];
        console.log(this.addressesData, this.addressFullData, this.cartData, this.productosData, this.nameData, this.lastNameData );
        

      }, error => {
        console.log('Entramos al error en gerInformacionUserExpress',error);
        this.mensajeError = error.error.message;
      }
    )*/

  }
  


  public openModal() {
    console.log('Seleccionar una direccioón');
    const modalRef = this.addressModal.open(AddressModalComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'lg'
        // keyboard: false,
        // backdrop: 'static'
      });
      /*Va a recibir el id de la sesión(El usuario) */
    //const id = 1;
    
    
  
 
    //modalRef.componentInstance.fromParent = id;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }



  add_Address_modal(){
    console.log('Vamos a añadir una nueva dirección');
    const modalRef = this.addressModal.open(NuevaDireccionComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'lg'
        // keyboard: false,
        // backdrop: 'static'
      });
      /*Va a recibir el id de la sesión(El usuario) */
    const id = 1;
    
    
  
 
    modalRef.componentInstance.fromParent = id;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });

  }


  editar_newAddress(){
    const modalRef = this.addressModal.open(NuevaDireccionComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'lg'
        // keyboard: false,
        // backdrop: 'static'
      });
      /*Va a recibir el id de la sesión(El usuario) */
    const id = 1;
    
    
  
 
    modalRef.componentInstance.fromParent = id;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });

  }


  editar_selected_address(dato){
    console.log('Presionaste para editar la dirección seleccionada', dato);
    const modalRef = this.addressModal.open(EditPerfilComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'lg'
        // keyboard: false,
        // backdrop: 'static'
      });
      /*Va a recibir el id de la sesión(El usuario) */

     //Got the id of user cuando se vea lo de las sesiones. 
    

    const usuarioCreado = {
      sequential: dato.sequential,//
      street: dato.street,
      neighborhood: dato.neighborhood,
      number: dato.number,
      postalCode: dato.cp,
      country: dato.country,//
      state: dato.nombre_estado,//
      stateSeq: dato.stateSeq,//
      municipality: dato.municipality,
      direccionPrincipal: dato.default,
      reference: dato.reference,
      phone: dato.phone
    }
    
    
  
 
    modalRef.componentInstance.fromParent = usuarioCreado;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });

  }


  sendData(){
    console.log('You push something')
  }

  send_Request_to_Bank_api(){
    console.log('Presionaste enviar información a la api, debería abrir el iframe')
    
    /*console.log('Va a recibir toda la información del usuario para pasarlo a la API del banco', dato[0]['total']);
    const storename = 3910046;
    const currentDate = new Date();
    var timeDate = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
    var timeHour = currentDate.getHours() + ':'+ currentDate.getMinutes() + ':' + currentDate.getSeconds();
    var tnxdatetime = timeDate + timeHour;
    const chargetotal = dato[0]['total'];
    const currency = 484;
    const sharedsecret = 'pruebas123';*/
  
  
    
    //const hash = this.createHash(dato);
    //const hash = storename + tnxdatetime + chargetotal + currency + sharedsecret;

    //this.getAsciiHex(hash);

   
   
    /*const apiRequest = {
      txntype:'sale',
      timezone: 'GMT',
      tnxdatetime: tnxdatetime,
      hash_algorithm: '',
      hash: '',
      storename: storename, 
      mode: 'payonly',
      chargeTotal: chargetotal,
      currency: currency,
      paymentMethod: 'M',
      responseSuccessURL: 'http://localhost:4200/compra-completada',
      responseFailURL: 'http://localhost:4200/compra-completada',
      mobileMode: true,
      language: 'es_Es'
    
    }

    this.perfilS.communicateApiPayment(apiRequest).subscribe(console.log)*/
    
  }


  

  getAsciiHex(value){
    let array = [];
    console.log(value.charCodeAt(0))
    for(var i = 0; i < value.length; i++){
      console.log('Im gonna iterate',value[i]);
      console.log('This is the value ASCII', value.charCodeAt([i]));
      
      const c = value[i].charCodeAt(0).toString(16);
     
      array.push(c);
    }
    const dato = array.join('');
    
    
   
  }





  getAsciiCode(){
    const storename = 3910046;
    const tnxdatetime = '2021:02:23-03:56:29';
    const chargetotal = 135.04;
    const currency = 484;
    const sharedsecret = 'pruebas123'

    const ascii = storename + tnxdatetime + chargetotal + currency + sharedsecret;
    console.log(ascii)
    const c = ascii.charCodeAt(0);
    var array = []
    for(const e of ascii){
      var f = e.charCodeAt(0);
      array.push(f);

    }
    console.log(array);
    

    
  }


  


   /*createHash(dato){
    const storename = 3910046;
    
    
    const currentDate = new Date();
    var timeDate = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
    var timeHour = currentDate.getHours() + ':'+ currentDate.getMinutes() + ':' + currentDate.getSeconds();
    var formattedDate = timeDate + timeHour;
    const chargetotal = dato[0]['total'];
    const currency = 484;
    const sharedsecret = 'pruebas123';

    var stringToHash = storename + formattedDate + chargetotal + currency + sharedsecret;
    console.log('This is the stringToHash', stringToHash);
    var ascii = this.getHexFromChars(stringToHash);

    var hash = calcSHA1(ascii);

    return hash
  }*/


   /*getHexFromChars(value) {
    var char_str = value;
    var hex_str = "";
    var i, n;
      for(i=0; i < char_str.length; i++) {
          n = (char_str.charAt(i)).toByte();
          if(n != 0) {
            hex_str += byteToHex(n);
          }
      }
    return hex_str.toLowerCase();
    }*/



}
