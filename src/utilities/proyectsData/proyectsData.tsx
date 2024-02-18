import MMarket from "../../assets/main/Proeyctos/MMarket.svg";
import RecipeFood from "../../assets/main/Proeyctos/RecipeFood.png";
import JCDV from "../../assets/main/Proeyctos/JCDV.svg";
import ProductoAPI from "../../assets/main/Proeyctos/ProductAPI.png";
import Tn from "../../assets/main/Proeyctos/Tn.png";
import { Proyects } from "../../interfaces/interfaces";

export const proyectsData : Proyects[] = [
    {
      tecnologias: [
        "HTML",
        "REACT",
        "JAVASCRIPT",
        "TAILWIND",
        "GITHUB",
      ],
      titulo: "Jesus Camino de Vida",
      fecha: "26 - Oct - 13 Nov - 2023",
      github: "https://github.com/JuanJoseChambi/IJCDV",
      web: null,
      image: JCDV,
      gridArea: "bigTopLeft",
      descripcion: "JCDV (Jesús Camino De Vida) es un proyecto que se centró en la aplicación práctica de nuevas tecnologías. Aunque, por el momento, solo se cuenta con la sección de inicio, esta etapa ha sido fundamental para consolidar y adquirir conocimientos y destrezas en el uso de la tecnología Tailwind, la cual he venido empleando desde ese momento.",
    },
    {
      tecnologias: [
        "HTML",
        "CSS",
        "REACT",
        "JAVASCRIPT",
        "REDUX",
        "NODE",
        "EXPRESS",
        "POSTGRESQL",
        "GITHUB",
      ],
      titulo: "Recipe Food",
      fecha: "03 Jul - 20 Jul - 2023",
      github: "https://github.com/JuanJoseChambi/Recipe-Food",
      web: null,
      image: RecipeFood,
      gridArea: "minTopCenter",
      short: true,
      descripcion: "Recipe Food fue un proyecto académico centrado en la creación de una plataforma web que ofrece información detallada sobre recetas, ingredientes y datos nutricionales. Este proyecto Fullstack fue desarrollado de manera individual, utilizando tecnologías clave como React, Node.js, Express y PostgreSQL. Además, incorporó un sistema API RESTful para mejorar la interacción y accesibilidad de los datos.",
    },
    {
      tecnologias: [
        "HTML",
        "REACT",
        "JAVASCRIPT",
        "TYPESCRIPT",
        "TAILWIND",
        "NODE",
        "EXPRESS",
        "MONGODB",
        "GITHUB",
      ],
      titulo: "Products ApI",
      fecha: "1 Nov - 14 Feb 2023/2024",
      github: "https://github.com/JuanJoseChambi/product-api",
      web: "https://product-api-mu-seven.vercel.app/",
      image: ProductoAPI,
      gridArea: "bigTopRight",
      short: true,
      descripcion: "Products API es una plataforma de desarrollo web que proporciona una API gratuita para proyectos E-commerce. Además de ofrecer datos esenciales, también se destaca como una herramienta de documentación para desarrolladores, brindando oportunidades de práctica en áreas como autenticación, billeteras virtuales y seguridad. En resumen, es una solución integral para quienes buscan acceder a una API de productos y mejorar sus habilidades de desarrollo.",
    },
    {
      tecnologias: [
        "HTML",
        "CSS",
        "REACT",
        "JAVASCRIPT",
        "TYPESCRIPT",
        "SASS",
        "REDUX",
        "GITHUB",
      ],
      titulo: "TN",
      fecha: "09 Oct - 24 Oct - 2023",
      github: "https://github.com/JuanJoseChambi/T-N",
      web: "https://t-n-chi.vercel.app/",
      image: Tn,
      gridArea: "bigBotCenter",
      short: true,
      descripcion: "TN es un proyecto que se materializa como un sitio web diseñado para gestionar tareas y notas. Este utiliza almacenamiento local, específicamente localstorage. El sitio proporciona funcionalidades clave, tales como la capacidad de crear, editar y eliminar tareas y notas. También cuenta con opciones para filtrar y buscar entre tus notas y tareas, asignar fechas y horarios, así como marcar y señalar las tareas y notas completadas. Además, destaca por su diseño responsive para adaptarse eficazmente a diferentes dispositivos.",
    },
    {
      tecnologias: [
        "HTML",
        "CSS",
        "REACT",
        "JAVASCRIPT",
        "REDUX",
        "NODE",
        "EXPRESS",
        "POSTGRESQL",
        "GIT",
        "GITHUB",
      ],
      titulo: "MMarket",
      fecha: "20 Jul - 30 Ago - 2023",
      github: "https://github.com/JuanJoseChambi/M-Market",
      web: "https://m-market-iota.vercel.app/home",
      image: MMarket,
      gridArea: "minBotRight",
      descripcion:`MMarket fue el resultado final de un proyecto académico grupal, una plataforma web diseñada para tiendas locales de barrios con un enfoque en E-commerce. La metodología SCRUM guió el desarrollo del proyecto, utilizando tecnologías clave como React, Node, Express y PostgreSQL. <br></br>Entre las características destacadas de MMarket se encuentran servicios integrales como Mercado Pago, Nodemailer para el envío de correos electrónicos, autenticación de terceros a través de Firebase y almacenamiento en la nube mediante Cloudinary. La plataforma también incorporó persistencia de usuarios y tablas relacionales entre usuarios, productos, carritos de compra, comentarios, entre otras funcionalidades esenciales. <br></br> Además, el panel de administración del sistema contaba con un dashboard que permitía un control total sobre todos los productos, posibilitando la implementación de un sistema API RESTful.`,
    },
  ]