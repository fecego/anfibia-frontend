export class productosCarrito{
    public idproducto:number;
    public skuproducto:number;


    /*Se creo el arreglo productos carrito, pero así no va a ser, este objeto será mandado al serivicio para ser insertado en la base de datos de forma 
    directa, esto es temporal,
    Cuando presionemos addCarrito se deberá pasar al servicio el objeto para insertarlo.*/
    public productosCarrito:Array<any> = [];

    constructor(id: number, sku:number){
        this.idproducto = id;
        this.skuproducto = sku;
    }

    addCarrito(productoCreado){
        console.log(productoCreado);
        this.productosCarrito.push(productoCreado);
        console.log(this.productosCarrito);
    
    }

}