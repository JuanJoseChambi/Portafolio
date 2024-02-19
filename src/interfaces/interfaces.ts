export interface Proyects {
    tecnologias: (string | arrayTecnologias)[];
    status?:string;
    titulo: string;
    fecha: string;
    github?: null | string;
    web?: null | string;
    image: string;
    gridArea: string;
    descripcion: string;
    short?: boolean;
    infoTec?: null | arrayTecnologias[]
  }
  
export interface arrayTecnologias {
    nombre:string;
    img:JSX.Element;
    
  }
