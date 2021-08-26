/*export interface producto{
    sku?: number, 
    idProducto?: number, 
    nombre?: string, 
    modelo?: string,
    clasificacion?: string, 
    cantidad?: number,
    categoria?: string,
    subcategoria1?: string,
    subcategoria2?: string,
    marca?: string,
    precio?: number,
    precio_antiguo?: number, 
    nuevo?: boolean,
    destacado?:boolean, 
    descripcion?: string,
    descuento?: number, 
    image?: Array<any>,
    imagenPrincipal?: string,
    checkedWish?: boolean,
    imagenCambio?:string
    totalIndividual?:number
}*/


export interface producto{
    _id: number,
    name: string,
    realName: string,
    url: string, 
    sku: string, 
    model: string, 
    price: number, 
    unit: string, 
    description: string,
    shortDescription: string, 
    categoryId: number, 
    filter1:number,
    filter2:number, 
    newProduct: boolean,
    featured: boolean,
    withVariants:boolean,
    showIndividual: boolean,
    canceled:boolean,
    created: string,
    updated: string 

}




/*Declaramos la clase producto la cual implementa la interace producto de forma corta*/
export class productoClass implements producto{
    constructor(public _id: number, public name: string, public realName: string, public url: string, public sku: string,  public model: string,  public price: number, 
        public unit: string,  public description: string, public shortDescription: string,  public categoryId: number, public filter1:number,
        public filter2:number, public newProduct: boolean, public featured: boolean, public withVariants:boolean, public showIndividual: boolean, public canceled:boolean,
        public created: string, public updated: string ){

    }
}

/*Declaramos la clase productos de forma larga*/
//export class productoClass implements producto{
    /*Propiedades de la clase producto*/
    /*public _id;
    public name;
    public realName;
    public url;
    public sku;
    public model;
    public price;
    public unit;
    public description;
    public shortDescription;
    public categoryId;
    public filter1;
    public filter2;
    public newProduct;
    public featured
    public withVariants;
    public showIndividual;
    public canceled;
    public created;
    public updated; */


    /*Al instanciar la clase de productos los valores serán pasados a las propiedades, Manera larga*/
    /*constructor(_id: number, name: string, realName: string, url: string, sku: string, model:string, price: number, unit: string,
        description: string, shortDescription: string, categoryId: number, filter1: number, filter2: number, newProduct: boolean, featured: boolean, 
        withVariants: boolean, showIndividual: boolean, canceled: string, created: string, updated: string ){
        this._id = _id;
        this.name = name;
        this.realName = realName;
        this.url = url;
        this.sku = sku;
        this.model = model;
        this.price = price;
        this.unit = unit;
        this.description = description;
        this.shortDescription = shortDescription;
        this.categoryId = categoryId;
        this.filter1 = filter1;
        this.filter2 = filter2;
        this.newProduct = newProduct;
        this.featured = featured;
        this.withVariants = withVariants;
        this.showIndividual = showIndividual;
        this.canceled = canceled;
        this.created = created;
        this.updated = updated;

    }
}*/


/*const c = new ProductoClass(1, 'dato', 'datoReal', 'urlstring', 'skustring', 
'modelostring', 83723823, 'ybudad', 'descripcionstring', 'descripcioncorta', 12, 2, 3, true, false, false, false, false,
 'stringdatecreated', 'stringupdated';*/
