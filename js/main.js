document.addEventListener('DOMContentLoaded', ()=> {
    //1.- Variables

    //Capturar elementos del DOM
    const caja = document.querySelector('#caja');
       //const arraybotones = ['playa','mar','arena','Cancún','cabaña','Seychelles','ciudad','Europa','Monumento','Munich','Amsterdam','London',"plaza", "sevilla","arquitectura","Costa","Asturias", "montaña","Cazorla","Jaén", "Castillo"];
    const contenedorBotones = document.querySelector('#botones'); 

       const fragment= document.createDocumentFragment();
    const arrayFotos = [
    {
        id:1,
        src:"assets/viajes-1.jpg",
        alt:"Cancún playa",
        titulo:"playazonas costeras",
        descripcion:"playa de arena blanca Cancún",
        title:"Cancún playa",
        tag:["playa"],
    },

    {
        id:2,
        src:"assets/viajes-2.jpg",
        alt:"Cabaña playa",
        titulo:"Cabañas en la playa",
        descripcion:"Cabañas en la playa",
        title:"Cabaña playa",
        tag:["playa"],
    },
  
    {
        id:3,
        src:"assets/viajes-3.jpg",
        alt:"Destinos europeos",
        titulo:"ciudades europeas",
        descripcion:"principales ciudades de Europa",
        title:"iudades europeas",
        tag:["ciudad"],
    },
    
    {
        id:4,
        src:"assets/viajes-4.jpg",
        alt:"Plaza España",
        titulo:"Plaza España de Sevilla",
        descripcion:"Plaza España",
        title:"Plaza España",
        tag:["ciudad"],
    },

    {
        id:5,
        src:"assets/viajes-5.jpg",
        alt:"Plaza Sevilla",
        titulo:"plaza arquitectura antigua",
        descripcion:"Plaza Sevilla",
        title:"Plaza Sevilla",
        tag:["ciudad"],
    },

    {
        id:6,
        src:"assets/viajes-6.jpg",
        alt:"Paseo costero Asturias",
        titulo:"Paseo costero ",
        descripcion:"Carretera costa Asturias",
        title:"Paseo costero Asturias",
        tag:["montaña"],
    },

    {
        id:7,
        src:"assets/viajes-7.jpg",
        alt:"Castillo Cazorla",
        titulo:"Castillo Jaén ",
        descripcion:"Castillo en montaña",
        title:"Castillo Cazorla",
        tag:["montaña"]
    }
    ];

    const arrayEncontradas = [
    {
        src:"assets/viajes-1.jpg",
        alt:"Cancún playa",
        titulo:"playazonas costeras",
        descripcion:"playa de arena blanca Cancún",
        title:"Cancún playa",
        tag:["playa"]
    },

    {
        src:"assets/viajes-2.jpg",
        alt:"Cabaña playa",
        titulo:"Cabañas en la playa",
        descripcion:"Cabañas en la playa",
        title:"Cabaña playa",
        tag:["playa"]
    },
  
    {
        src:"assets/viajes-3.jpg",
        alt:"Destinos europeos",
        titulo:"ciudades europeas",
        descripcion:"principales ciudades de Europa",
        title:"iudades europeas",
        tag:["ciudad"]
    },
    
    {
        src:"assets/viajes-5.jpg",
        alt:"Plaza España",
        titulo:"Plaza España de Sevilla",
        descripcion:"Plaza España",
        title:"Plaza España",
        tag:["ciudad"]
    },

    {
        src:"assets/viajes-5.jpg",
        alt:"Plaza Sevilla",
        titulo:"plaza arquitectura antigua",
        descripcion:"Plaza Sevilla",
        title:"Plaza Sevilla",
        tag:["ciudad"]
    },

    {
        src:"assets/viajes-6.jpg",
        alt:"Paseo costero Asturias",
        titulo:"Paseo costero ",
        descripcion:"Carretera costa Asturias",
        title:"Paseo costero Asturias",
        tag:["playa","montaña"]
    },

    {
        src:"assets/viajes-7.jpg",
        alt:"Castillo Cazorla",
        titulo:"Castillo Jaén ",
        descripcion:"Castillo en montaña",
        title:"Castillo Cazorla",
        tag:["montaña"]
    }
    ];


    //2.- Eventos

    /*Delegación de eventos*/
 
       
    //3.-Funciones
    /*recorrer el array para pintar botones*/
        /*1.-contar los tags repetidos y obtener un nuevo array con tags que se repitan más de una vez*/

const pintarBotones = () => {
    const todosLosTags = arrayFotos.flatMap(objeto => objeto.tag);
    const tagsUnicos = [...new Set(todosLosTags)];
    tagsUnicos.forEach(tag => {
    const boton = document.createElement('button');
    boton.textContent = tag;   
    contenedorBotones.append(boton);
  });
  boton.addEventListener('click', () => {
      const filtradas = filtrarImagenes(tag);
      pintarImagen(filtradas);
    });  
};
const filtImagenes = (tagBuscado) => {
  return arrayFotos.filter(objeto =>
    objeto.tag.includes(tagBuscado)
  );
};

    /*filter*/
    

    const pintarImagen = () =>{
        
        arrayFotos.forEach((elemento)=>{
            const card = document.createElement('article');
            const tituloImg = document.createElement('h2');
            tituloImg.textContent = elemento.titulo;
            const cajaFoto = document.createElement('div');
            const imagen = document.createElement ('img');
            imagen.src = elemento.src;
            imagen.alt = elemento.alt;
            const desc = document.createElement('p');
            desc.textContent = elemento.descripcion;
            const boton = document.createElement ('button');
            boton.textcontent = "Leer más";
            boton.id = elemento.id;

            cajaFoto.append(imagen);

            card.append(tituloImg,cajaFoto,desc,boton);
            fragment.append(card);
        });

      caja.append(fragment);

    };
    const filtrarImagenes=(tagBuscado) =>{
        return arrayEncontradas.filter(objeto => 
            objeto.tag.includes (tagBuscado)
        );
    };

    //4.-Invocaciones

    pintarBotones()
    pintarImagen()
});