import { Marca,marcas } from "./marca.class";
import { Categoria } from './categoria.class';

export class Producto{
    constructor(
        private codProducto:String,
        private nombreProducto:String,
        private mililitrosProducto:number,
        private descripcionProducto:String,
        private volalcoholProducto:number,
        private imagenProducto:String,
        private marcaProducto:Marca,
        private categoriaProducto:Categoria,
    ){
        
    }
    get getnombreproducto():String{
        return this.nombreProducto
    }
    get getimagenproducto():String{
        return this.imagenProducto
    }
    get getdescripcionproducto():String{
        return this.descripcionProducto
    }
    get getcodproducto():String{
        return this.codProducto
    }
    get getmililitrosproducto():number{
        return this.mililitrosProducto
    }
    get getvoalcoholProducto():number{
        return this.volalcoholProducto
    }
    get getmarcaproducto():Marca{
        return this.marcaProducto
    }
    get getcategoriaproducto():Categoria{
        return this.categoriaProducto
    }
}
const categoria1 =new Categoria(0,"a")
const producto01 =new Producto("P0001","Black",1000,"Ron cartabio Black",27,"../../../assets/img/licor1.jpg",marcas[0],categoria1)
const producto02=new Producto("P0002","Blanco",1000,"Ron blanco ",25,"../../../assets/img/licor2.jpg",marcas[4],categoria1)
const producto03=new Producto("P0003","Etiqueta Azul",1000,"Delicioso whisky",50,"../../../assets/img/licor3.jpg",marcas[1],categoria1)
const producto04=new Producto("P0004","Pera",1000,"Vodka sabor pera",25,"../../../assets/img/licor4.jpg",marcas[2],categoria1)
const producto05=new Producto("P0005","Malbec",1000,"El mejor vino",25,"../../../assets/img/licor5.jpg",marcas[4],categoria1)
const producto06=new Producto("P0006","Añejo",1000,"Delicioso anisado",50,"../../../assets/img/licor6.jpg",marcas[0],categoria1)
const producto07=new Producto("P0007","Artesanal",1000,"Cerveza tradicional",25,"../../../assets/img/licor7.jpg",marcas[0],categoria1)
const producto08=new Producto("P0008","hit",1000,"Bebida con Vodka",5,"../../../assets/img/licor11.jpg",marcas[0],categoria1)
const producto09=new Producto("P0009","Espumante ",1000,"Deliciosa champaña",15,"../../../assets/img/licor9.jpg",marcas[2],categoria1)


export const productos:Producto[]=[
    producto01,producto02,producto03,producto04,producto05,producto06,producto07,producto08,producto09
]

// const marca01=new Marca("M001","Cartabio");
// const marca02=new Marca("M002","Jack Daniels");
// const marca03=new Marca("M003","Absolut");
// const marca04=new Marca("M004","Johnnie Walker");
// const marca05=new Marca("M005","Bacardi");

// const ron =new Categoria("C001","Ron");
// const whisky =new Categoria("C002","Whisky");
// const vodka =new Categoria("C003","Vodka");
// const pisco =new Categoria("C004","Pisco");
// const espirituosas =new Categoria("C005","Espirituosas");
// const vino =new Categoria("C006","Vino");
// const brandy =new Categoria("C007","Brandy");
// const champaña =new Categoria("C008","Champaña");
// const ginebra =new Categoria("C009","Ginebra");
// const tequila =new Categoria("C010","Tequila");
// const aperitivos =new Categoria("C011","Aperitivos");
// const cerveza =new Categoria("C012","Cerveza");
// const anizados =new Categoria("C013","Anizados");
// const gin =new Categoria("C014","Gin");
// const coñac=new Categoria("C015","Coñac");
// const orujo=new Categoria("C016","Orujo");