import React from 'react';
import { Link } from 'react-router-dom';

const ListaAvaliacoes = props => {
    const { listaEpisodios } = props.location.state
    return listaEpisodios.avaliados.map( ep => 
        <li key={ ep.id }>
            <Link to={{ pathname: `/episodio/${ ep.id }`, state: { episodio: ep } }}>
                { `${ ep.nome } - ${ ep.nota }` }
            </Link>
        </li>
    )
}

export default ListaAvaliacoes;