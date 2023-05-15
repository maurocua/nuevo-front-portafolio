export class PortafolioModel {
    id:number;
    nombre_completo:string;
    edad:number;
    ruta_foto:string;
    acerca_de:string;
    descripcion:string;
    ubicacion:string;
    lista_estudios:
        {
            id_estudio:number;
            nombre_estudio:string;
            nivel:string;
        }[];
    lista_habilidades:
        {
            id_habilidad:number;
            habilidad:string;
            nivel_hab:string;
        }[];
    lista_idiomas:
        {
            id_idioma:number;
            nivel_idioma:string;
            idioma:string;
        }[];
    lista_proyectos:
        {
            id_proyecto:number;
            proyecto:string;
            link_proyecto:string;
        }[];
    lista_redes:
        {
            id_contacto:number;
            red_social:string;
            link_contacto:string;
        }[];

        constructor(
            id: number,
            nombre_completo: string,
            edad: number,
            ruta_foto: string,
            acerca_de: string,
            descripcion: string,
            ubicacion: string,
            lista_estudios: { id_estudio: number, nombre_estudio: string, nivel: string }[],
            lista_habilidades: { id_habilidad: number, habilidad: string, nivel_hab: string }[],
            lista_idiomas: { id_idioma: number, nivel_idioma: string, idioma: string }[],
            lista_proyectos: { id_proyecto: number, proyecto: string, link_proyecto: string }[],
            lista_redes: { id_contacto: number, red_social: string, link_contacto: string }[]
        ) {
            this.id = id;
            this.nombre_completo = nombre_completo;
            this.edad = edad;
            this.ruta_foto = ruta_foto;
            this.acerca_de = acerca_de;
            this.descripcion = descripcion;
            this.ubicacion = ubicacion;
            this.lista_estudios = lista_estudios;
            this.lista_habilidades = lista_habilidades;
            this.lista_idiomas = lista_idiomas;
            this.lista_proyectos = lista_proyectos;
            this.lista_redes = lista_redes;
        }
}
