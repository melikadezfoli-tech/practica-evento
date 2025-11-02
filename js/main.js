document.addEventListener('DOMContentLoaded', ()=> {
    //1.- Variables

    //Capturar elementos del DOM
    const imgEncontradas = document.querySelector('#Imagenes encontradas img');
    const imgRelacionadas = document.querySelector('#IMAGENES RELACIONADAS .flexContainer');
    const urlBase = "assets";


    const arraybotones = ['playa','mar','arena','Cancún','cabaña','Seychelles','ciudad','Europa','Monumento','Munich','Amsterdam','London',"plaza", "sevilla","arquitectura","Costa","Asturias", "montaña","Cazorla","Jaén", "Castillo"];

    const arrayFotos = [
    {
        id:1,
        src:"assets/viajes-1.jpg",
        alt:"Cancún playa",
        titulo:"playazonas costeras",
        descripcion:"playa de arena blanca Cancún",
        title:"Cancún playa",
        tag:["playa", "mar","arena", "Cancún",],
    },

    {
        id:2,
        src:"assets/viajes-2.jpg",
        alt:"Cabaña playa",
        titulo:"Cabañas en la playa",
        descripcion:"Cabañas en la playa",
        title:"Cabaña playa",
        tag:["playa", "mar","arena","cabaña", "Seychelles",],
    },
  
    {
        id:3,
        src:"assets/viajes-3.jpg",
        alt:"Destinos europeos",
        titulo:"ciudades europeas",
        descripcion:"principales ciudades de Europa",
        title:"iudades europeas",
        tag:["ciudad", "Europa","Monumento","Munich","Amsterdam","London"],
    },
    
    {
        id:4,
        src:"assets/viajes-4.jpg",
        alt:"Plaza España",
        titulo:"Plaza España de Sevilla",
        descripcion:"Plaza España",
        title:"Plaza España",
        tag:["plaza", "sevilla","arquitectura", "ciudad"],
    },

    {
        id:5,
        src:"assets/viajes-5.jpg",
        alt:"Plaza Sevilla",
        titulo:"plaza arquitectura antigua",
        descripcion:"Plaza Sevilla",
        title:"Plaza Sevilla",
        tag:["plaza", "sevilla","arquitectura", "ciudad"],
    },

    {
        id:6,
        src:"assets/viajes-6.jpg",
        alt:"Paseo costero Asturias",
        titulo:"Paseo costero ",
        descripcion:"Carretera costa Asturias",
        title:"Paseo costero Asturias",
        tag:["Costa", "playa","Asturias", "montaña"],
    },

    {
        id:7,
        src:"assets/viajes-7.jpg",
        alt:"Castillo Cazorla",
        titulo:"Castillo Jaén ",
        descripcion:"Castillo en montaña",
        title:"Castillo Cazorla",
        tag:["montaña", "Cazorla","Jaén", "Castillo"]
    }
    ];

    const arrayEncontradas = [
    {
        src:"assets/viajes-1.jpg",
        alt:"Cancún playa",
        titulo:"playazonas costeras",
        descripcion:"playa de arena blanca Cancún",
        title:"Cancún playa",
        tag:["playa", "mar","arena", "Cancún",]
    },

    {
        src:"assets/viajes-2.jpg",
        alt:"Cabaña playa",
        titulo:"Cabañas en la playa",
        descripcion:"Cabañas en la playa",
        title:"Cabaña playa",
        tag:["playa", "mar","arena","cabaña", "Seychelles",]
    },
  
    {
        src:"assets/viajes-3.jpg",
        alt:"Destinos europeos",
        titulo:"ciudades europeas",
        descripcion:"principales ciudades de Europa",
        title:"iudades europeas",
        tag:["ciudad", "Europa","Monumento","Munich","Amsterdam","London"]
    },
    
    {
        src:"assets/viajes-5.jpg",
        alt:"Plaza España",
        titulo:"Plaza España de Sevilla",
        descripcion:"Plaza España",
        title:"Plaza España",
        tag:["plaza", "sevilla","arquitectura", "ciudad"]
    },

    {
        src:"assets/viajes-5.jpg",
        alt:"Plaza Sevilla",
        titulo:"plaza arquitectura antigua",
        descripcion:"Plaza Sevilla",
        title:"Plaza Sevilla",
        tag:["plaza", "sevilla","arquitectura", "ciudad"]
    },

    {
        src:"assets/viajes-6.jpg",
        alt:"Paseo costero Asturias",
        titulo:"Paseo costero ",
        descripcion:"Carretera costa Asturias",
        title:"Paseo costero Asturias",
        tag:["Costa", "playa","Asturias", "montaña"]
    },

    {
        src:"assets/viajes-7.jpg",
        alt:"Castillo Cazorla",
        titulo:"Castillo Jaén ",
        descripcion:"Castillo en montaña",
        title:"Castillo Cazorla",
        tag:["montaña", "Cazorla","Jaén", "Castillo"]
    }
    ];


    //2.- Eventos

    /*Delegación de eventos*/

    //3.-Funciones

    const pintarBotones = () => {

    }

    const pintarImagen = () =>{

    }

    //4.-Invocaciones

    pintarBotones()

})