import { Component, OnInit } from '@angular/core';
import * as mapboxgl  from 'mapbox-gl';
import {environment} from '../../environments/environment'

@Component({
  selector: 'app-localstore',
  templateUrl: './localstore.component.html',
  styleUrls: ['./localstore.component.css']
})
export class LocalstoreComponent implements OnInit {

  public mapbox = (mapboxgl as typeof mapboxgl);
  public map;
  public stores = {
    "type": "FeatureCollection",
    "features": [  {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
           -96.866909,
           20.188968
        ]
      },
      "properties": {
        "phoneFormatted": "(202) 234-7336",
        "phone": "+522323250877",
        "address": "Salvador Díaz Mirón 5, Centro, 93620 San Rafael, Ver.",
        "city": "San Rafael, Veracruz",
        "country": "México",
        "businessName": "Anfibia, Outdoor Experience, Suc. San Rafael, Veracruz",
        "postalCode": "93620",
        "state": "Veracruz",
        "image": "/assets/imagenes/ubicacion/tienda3.jpg"
      }
    },     {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -89.604944,
          21.028406
        ]
      },
      "properties": {
        "phoneFormatted": "(202) 234-7336",
        "phone": "2022347336",
        "address": "Andrés, Av. Andrés García Lavín 301, San Ramón Nte, 97117 Mérida, Yuc.",
        "city": "Merída",
        "country": "México",
        "businessName": "Anfibia, Outdoor Experience, Suc. Merida, Yucatan",
        "postalCode": "97117",
        "state": "Yucatan",
        "image": "/assets/imagenes/ubicacion/tienda.png"
      }
    }
    
    ]
  };

  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 19.177304;
  lng =  -96.138723;

  constructor() { 
    this.mapbox.accessToken = environment.mapbox.accessToken;
  }

  ngOnInit(): void {
    var map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 5,
      center: [ -96.158656, 19.155837,],




      
  });  
  this.map = map;
  
  this.stores.features.forEach((element, i) => {
    element.properties["id"] = i + 1;
    console.log(element.properties["id"]);
    console.log(element);
  });
  
  
  // Add map controls

  map.on('load', function (e) {
    /* Add the data to your map as a layer */
    map.addSource('locations', {
      type: 'geojson',
      data:{
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                 -96.866909,
                 20.188968
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 234-7336",
              "phone": "232 325 0877",
              "address": "San Rafael, Calle Salvador Díaz Mirón N°5",
              "city": "San Rafael, Veracruz",
              "country": "México",
              "businessName": "Anfibia, Outdoor Experience, Suc. San Rafael, Veracruz",
              "postalCode": "93620",
              "state": "Veracruz"
            }
          },     {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -89.604944,
                21.028406
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 234-7336",
              "phone": "999 912 7453",
              "address": " Andrés, Av. Andrés García Lavín 301, San Ramón Nte",
              "city": "Merída, Yucatan.",
              "country": "México",
              "businessName": "Anfibia, Outdoor Experience, Suc. Merida, Yucatan",
              "postalCode": "97117",
              "state": "Yucatan"  
            }
          }
         
        
         
      
      
        
         
       
       
     
     
        ]
      }
    });

   

    
  });
  
  this.buildLocationList(this.stores);
  this.addMarkers();
  

}

flyToStore(currentFeature) {
  this.map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15
  });
}


addMarkers() {
  /* For each feature in the GeoJSON object above: */
  this.stores.features.forEach((marker) => {
    /* Create a div element for the marker. */
    var el = document.createElement('div');
    
    console.log(el.id);
    /* Assign a unique `id` to the marker. */
    /* Assign the `marker` class to each marker for styling. */
    el.className = 'markers';
    el.style.backgroundImage = 'url(../assets/imagenes/logos/Logo-Ubicación-Anfibia.png)';
    el.style.backgroundSize = '100% 100%'
    el.style.width = '80px';
    el.style.height = '80px';
    el.style.cursor = 'pointer';

    el.addEventListener('click', () =>{

      this.flyToStore(marker);
      this.createPopUp(marker);
    })
    
    /**
     * Create a marker using the div element
     * defined above and add it to the map.
    **/
    new mapboxgl.Marker(el, { offset: [0, -23] })
      .setLngLat([marker.geometry.coordinates[0],marker.geometry.coordinates[1]])
      .addTo(this.map);
  });
}

 createPopUp(currentFeature) {
   console.log(currentFeature.properties)
  var popUps = document.getElementsByClassName('mapboxgl-popup');
  
  /** Check if there is already a popup on the map and if so, remove it */
  if (popUps[0]) popUps[0].remove();

  var popup = new mapboxgl.Popup({ closeOnClick: false})
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(
      '<div>'+
      '<h1 style="font-size: 15px; font-weight: bold;  color: #000; font-family: Arial Black;">' +currentFeature.properties.businessName + '</h1>' +
      "<img style='width: 100%; height: 100%' src='"+ currentFeature.properties.image+ "'> </img>"+ 
      '<p>' + currentFeature.properties.address + '</p>' +
      '</div>')
    .addTo(this.map);

  
   
    
}

buildLocationList(data) {
  var _this = this;
  data.features.forEach(function(store, i){
    /**
     * Create a shortcut for `store.properties`,
     * which will be used several times below.
    **/
    var prop = store.properties;

    /* Add a new listing section to the sidebar. */
    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    /* Assign a unique `id` to the listing. */
    listing.id = "listing-" + prop.id;
    /* Assign the `item` class to each listing for styling. */
    listing.className = 'item';

    /* Add the link to the individual listing created above. */
    var link = listing.appendChild(document.createElement('a'));
    
    link.className = 'title';
    
    link.id = "link-" + prop.id;
    link.addEventListener('click', (e) =>{
      console.log('Presionaste un enlace', store.geometry.coordinates);
      _this.flyToStore(store);
      _this.createPopUp(store);
      _this.addMarkers();
    });
    link.innerHTML = prop.businessName;
    link.style.color = '#000000';
    link.style.fontFamily = 'Julius Sans One';
    link.style.fontWeight = 'bolder'
    link.style.fontSize = '17px';
    link.style.color = '#000';
    link.style.cursor = 'pointer';
    link.style.textDecoration = 'none';
  

    /* Add details to the individual listing. */
    var details = listing.appendChild(document.createElement('div'));
    details.style.color = '#000000';
    details.style.borderBottom = '1px solid #000';
    details.style.marginBottom = '10px'
    details.innerHTML = prop.address;
    if (prop.phone) {
      details.innerHTML +=' <br> ' + prop.phone;
    }
  });
}






}
