const fetchItem = async(id) => {
    const tipo = document.querySelector('.main__filtros .btn--active').id;

    try{
        const url = `https://api.themoviedb.org/3/${tipo}/${id}?api_key=c93d8d057b8e369244f82429bc493fb9&language=es-MX`;

        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        return datos;
    }catch(e){
        console.log(e);
    }
}

export default fetchItem;