export class tipedoc{
    id : number
    nombre :string;
    codigo : string ;
    constructor(codigo:string,nombre:string,id : number){
        this.nombre = nombre;
        this.codigo = codigo;
        this.id = id;


    }
}

export class busqueda{

busqueda :string

    constructor(busqueda:string){
        this.busqueda = busqueda

    }
}