import { Component, OnInit, OnDestroy } from '@angular/core';
import { PerfilService } from '../servicios/perfil.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditPerfilComponent } from '../modals/edit-perfil/edit-perfil.component';
import { NuevaDireccionComponent } from '../modals/nueva-direccion/nueva-direccion.component';
import  {scrollToTop} from '../modulosAnfibia/prueba';
import { Observable, Observer, Subscription, fromEvent, of, from, interval, concat, throwError} from 'rxjs';
import { concatMap, filter, map, shareReplay, switchMap, tap, take, delay, mergeMap, mapTo, merge, catchError, finalize} from 'rxjs/operators';
import { userPerfil} from '../modelos/userPerfil';
import { UsuariosService } from '../servicios/usuarios.service';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  constructor(private perfilService: PerfilService, private modalEditar: NgbModal, private userStatus:UsuariosService) { }

  public userPerfil;
  public userAddress:any;
  public nuevaDir:any = {};
  public usuario:any = {};
  public usuarioCreado:any = {};
  public userName;
  public lastName;
  public birthday;
  public email;
  public name;
  public isAutheticated = false;
  private userSub:Subscription;
  public mensajeError:string;

  ngOnInit() {
    scrollToTop();

    
    /*Debemos recuperar el usuario Id a travez del localStorage, verificar esta información.*/




      this.perfilService.behaviorS.subscribe(() => {
        this.getInfoUser();
      })


      this.userSub = this.userStatus.isLoggedIn.subscribe(user => {
        this.isAutheticated = !!user
        console.log(this.isAutheticated)
      });

  

      
      //const pruebaUser = cuserPerfil.pipe(map(x => x['addresses'])).subscribe(x => {
        //this.userAddress = x
        //console.log(this.userAddress)
      //});


      /*this.name = cuserPerfil.pipe(map(x => x['nombre']));
      this.lastName = cuserPerfil.pipe(map(x => x['lastName']));
      this.birthday = cuserPerfil.pipe(map(x => x['birthday']));
      this.email = cuserPerfil.pipe(map(x => x['email']));
      this.userName = cuserPerfil.pipe(map(x => x['username']));*/

   /*const c = this.perfilService.behaviorS.subscribe(() => {
     this.getDirecciones(id);
   })

   this.userAddress = this.getDirecciones(id);*/
   if(this.isAutheticated){
    this.getInfoUser();
   }else{
     //this.spinner.hide();
     console.log('No te encuentras loggeado')
   }



  }




  getInfoUser(){
    /*const data =  this.perfilService.getUserInfo(id).pipe(map(
      x => x['json_build_object']),
      shareReplay()


      );

      this.name = data.pipe(map(x => x['nombre']));
      this.userAddress = data.pipe(map(x => x['addresses']));
      this.lastName = data.pipe(map(x => x['lastName']));
      this.birthday = data.pipe(map(x => x['birthday']));
      this.email = data.pipe(map(x => x['email']));
      this.userName = data.pipe(map(x => x['username']));


      return [this.name, this.userAddress, this.lastName, this.birthday, this.birthday, this.userName];*/
      /*return this.perfilService.getUserInfo().pipe(map(
        x => x['json_build_object']),
        shareReplay(),
        
  
  
        ).subscribe(x => {
          this.name = x['nombre']
          this.userAddress = x['addresses'];
          this.lastName = x['lastName'];
          this.birthday = x['birthday'];
          this.email = x['email'];
          this.userName = x['userName'];
          console.log(this.name, this.userAddress, this.lastName, this.birthday, this.email, this.userName);

        });*/


        const f = this.perfilService.getUserInfo().pipe(map(x => x['json_build_object'])).subscribe(x => {
          console.log(x);
          this.name = x['nombre']
          this.userAddress = x['addresses'];
          this.lastName = x['lastName'];
          this.birthday = x['birthday'];
          this.email = x['email'];
          this.userName = x['userName'];
          console.log(this.name, this.userAddress, this.lastName, this.birthday, this.email, this.userName);

        }, error => {
          this.mensajeError = error.error.message;
          //this.spiner.hide();
        })
  
        //this.name = data.pipe(map(x => x['nombre']));
        //this.userAddress = data.pipe(map(x => x['addresses']));
        //this.lastName = data.pipe(map(x => x['lastName']));
        //this.birthday = data.pipe(map(x => x['birthday']));
        //this.email = data.pipe(map(x => x['email']));
        //this.userName = data.pipe(map(x => x['username']));




  }

  deleteAddress(dato){
    dato.isDeleting = true;
    
      const c = this.perfilService.deleteAddress(dato.sequential).pipe(
        take(1),
        tap(x => console.log(x))
      ).subscribe(x => {
        dato.isDeleting = false;
        console.log(x);
      }, error => {
        dato.isDeleting = false;
        console.log(error);
      });


  }


  getDirecciones(){
    return this.perfilService.getAddresses().subscribe(x => {
        this.userAddress = x
        console.log(this.userAddress);
    })

  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }


  openModal(dato){
    
    console.log('Presioanste openModal, vamos a editar una dirección');
    console.log('This is the info we get when we open the edit Modal', dato);
    const modalRef = this.modalEditar.open(EditPerfilComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'lg'
        // keyboard: false,
        // backdrop: 'static'
      });
    
    this.usuarioCreado = {
      sequential: dato.sequential,
      street: dato.street,
      neighborhood: dato.neighborhood,
      number: dato.number,
      postalCode: dato.cp,
      country: dato.country,
      state: dato.nombre_estado,
      stateSeq: dato.stateSeq,
      municipality: dato.municipality,
      direccionPrincipal: dato.default,
      reference: dato.reference,
      phone: dato.phone
    }

    console.log('Este es el usuario que enviaremos al modal', this.usuarioCreado);
    
    let perfilModal = this.usuarioCreado;
    
  
 
    modalRef.componentInstance.fromParent = perfilModal;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }

  openModalNuevaDireccion(id){
    /*Recupero el id, supongo del localStorage, al abrir el modal, debe desplegar el nombre y el apellido*/
    id = 1
    const modalRef = this.modalEditar.open(NuevaDireccionComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'lg'
        // keyboard: false,
        // backdrop: 'static'
      });
  
      
      /*this.nuevaDir = {
        nombre: nombre,
        apellidos: apellidos
      }*/

      let identificador = id;



      modalRef.componentInstance.fromParent = identificador;
      modalRef.result.then((result) => {
        console.log(result);
      }, (reason) => {
      });
      

  }


  

  eliminarDireccion(dato1, dato2, dato3){
    console.log(this.usuario.direccion);
    this.usuario.direccion.splice(dato3,1);
    console.log(this.usuario);
  }

}

