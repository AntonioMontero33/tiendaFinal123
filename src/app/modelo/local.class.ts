export class Local{
    constructor(
        private codLocal:String,
        private nombreLocal:String,
        private ubicacionLocal:String,
        private rucLocal:String,
        private contraseña:String
    ){
    }
    public get getcodLocal():String{
        return this.codLocal
    }
    public get getnombreLocal():String{
        return this.nombreLocal
    }
    public get getubicacionLocal():String{
        return this.ubicacionLocal
    }
    public get getrucLocal():String{
        return this.rucLocal
    }
    public get getcontraseña():String{
        return this.contraseña
    }
}
const local01=new Local("L0001","Borrachos","Urb. Magsiterio segunda etapa","15487236","159")
const local02=new Local("L0002","Roncito","Entel Peru C-8","89567214","753")
const local03=new Local("L0003","Secala","Urb. La Florida C-9","89778865","999")
const local04=new Local("L0004","Tomala","Av. La cultura Tercera etapa","99562311","998")
export const locales:Local[]=[
    local01,local02,local03,local04
]