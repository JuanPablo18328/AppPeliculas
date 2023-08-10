import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";



const fetchPopulares = async (filtro = 'movie') => {
    const url = `https://api.themoviedb.org/3/${filtro}/popular?api_key=c93d8d057b8e369244f82429bc493fb9&language=es-MX&page=1&region=US`;

    try{
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        const resultados = datos.results;
        const generos = await fetchGeneros();

        resultados.forEach(resultado =>{
            resultado.genero = obtenerGenero(resultado.genre_ids[0], generos);
        });
       
        return resultados;
    }catch(error){
        console.log(error);
    }

}

export default fetchPopulares;

