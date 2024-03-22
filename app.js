 window.addEventListener('load',obtenerDatos);

 function obtenerDatos(){
   const key = 'CHOkMe19xZFK9Y9buRbjPfmaiKTuwwx1NDUM8BRh';
   const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;

   fetch(url)
   .then(respuesta => respuesta.json())
   .then(resultado => mostrarDatos(resultado))

 }

 function mostrarDatos({ title, date, explanation, media_type, url   }){
    const titulo = document.querySelector('#titulo');
    titulo.innerHTML = title;
    const fecha = document.querySelector('#fecha');
    fecha.innerHTML = date;
    const descripcion = document.querySelector('#descripcion');
    descripcion.innerHTML = explanation;
    const multimedia = document.querySelector('#media');
    if (media_type == 'image'){
        multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${title}"> `
    }else{
        multimedia.innerHTML = ` <iframe class="embed-responsive-item" src="${url}"></iframe>`
    }

 }
