export class Registro{
    public codigo:string;
    public nombre:string;
    public tipo:string;
    public marca:string;
    public precio:string;
    public proveedor:string;
    public text:string;

    constructor(text:string){
        this.text=text;
        this.asignarValores();
    }

    asignarValores(){
        //extraer primeros cuatro carcteres
        const items=this.text.split(";",6);
        this.codigo=items[0];
        this.nombre=items[1];
        this.tipo=items[2];
        this.marca=items[3];
        this.precio=items[4];
        this.proveedor=items[5];
    }
}