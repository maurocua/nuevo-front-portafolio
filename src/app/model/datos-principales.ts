export class DatosPrincipales {
        nombre_completo:string;
        edad:number;
        ruta_foto:string;
        acerca_de:string;
        descripcion:string;
        ubicacion:string;

        constructor(
            nombre_completo: string,
            edad: number,
            ruta_foto: string,
            acerca_de: string,
            descripcion: string,
            ubicacion: string
        ) {
            this.nombre_completo = nombre_completo;
            this.edad = edad;
            this.ruta_foto = ruta_foto;
            this.acerca_de = acerca_de;
            this.descripcion = descripcion;
            this.ubicacion = ubicacion;
        }
}
