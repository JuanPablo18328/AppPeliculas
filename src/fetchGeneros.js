const fetchGeneros = async (filtro = 'movie') => {
    const url = `https://api.themoviedb.org/3/genre/${filtro}/list?api_key=c93d8d057b8e369244f82429bc493fb9&language=es-MX`;

    try{
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos.genres;
    }catch(error){
        console.log(error);
    }
}

export default fetchGeneros;