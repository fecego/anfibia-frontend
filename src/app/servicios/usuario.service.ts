import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  public api = "https://localhost:4000";

  getUsuario(){
    return [{
      nombre: 'Pablo',
      apellidos: 'Escobar Gaviria',
      correo: 'pabloescobar@gmail.com', 
      birthday: '31/Agosto/1997',
      direccion: [
        {
          calle: 'Calle cerrada san Luis',
          numero: 19,
          fraccionamiento: 'el Roble',
          telefono: 2321387665,
          municipio: "Martinez de la Torre",
          estado: 'Tamaulipas', 
          pais: 'México',
          codigoPostal: 91848
        },
        {
          calle: 'Orizaba entre 2 de abril y negrete',
          numero: 17,
          fraccionamiento: 'Zaragoza',
          telefono: 2321387665,
          municipio: "Veracruz",
          estado: 'Veracruz de Ignacio de la Llave', 
          pais: 'México',
          codigoPostal: 91868
        },
        {
          calle: 'Boulevard de los Patos ',
          numero: 1389,
          fraccionamiento: 'Geo Los Pinos',
          telefono: 2321387665,
          municipio: "Veracruz",
          estado: 'Baja California', 
          pais: 'México',
          codigoPostal: 91878
        }
      ]
    }]
  }


  postUSer(dato){
    return this.http.post(`${this.api}/user/posteo`, {'clientId': 1, '_id': dato._id});
  }

}
