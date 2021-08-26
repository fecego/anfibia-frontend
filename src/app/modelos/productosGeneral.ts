
 
  interface image{
     idProducto: number,
     secuencial: number,
     url: string
 }
 
 
  interface productoGeneral{
    sku?:number,
    id?: number,
    nombre?: string,
    categoria?: string,
    clasificacion?: string, 
    subcategoria1?: string, 
    subcategoria2?: string, 
    marca?: string, 
    precio?: number, 
    precio_antiguo?: number,
    image?: image[], 
    descuento?: number, 
    nuevo?:boolean,
    destacado?:boolean, 
    descripcion?: string,
    existencia?: number,
    cantidad?: number,
    modelo?:string
 

}


 class productoG implements productoGeneral{
    public imagePrincipal?;
    constructor(public readonly sku:number, public readonly id:number, public readonly nombre:string, public readonly categoria:string, public readonly clasificacion:string,
        public readonly subcategoria1:string, public readonly subcategoria2: string, public readonly marca:string, public readonly precio:number,
        public readonly precio_antiguo:number, public readonly image:image[], public readonly descuento:number, public readonly nuevo:boolean, public readonly destacado:boolean,
        public readonly descripcion: string, public readonly existencia: number, public readonly cantidad:number, public readonly modelo:string
        ){
           

    }




}

export { productoGeneral, productoG, image}


