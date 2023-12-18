export interface Proyects {
    tecnologias: (string | arrayTecnologias)[];
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
  
  interface arrayTecnologias {
    nombre:string;
    img:JSX.Element;
  }