export function addChanProperty(dato: any){
    dato.forEach(elemento => {
        elemento.imagenPrincipal = elemento.image[0].url;
        if(elemento.image[1]){
            elemento.imagenCambio = elemento.image[1].url;
        }else{
            elemento.image[1] = elemento.imagenPrincipal;
            elemento.imagenCambio = elemento.image[1];
        }
    });

}




