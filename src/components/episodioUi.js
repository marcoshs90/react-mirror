import React, { Component } from 'react';

export default class EpisodioUi extends Component {
    //https://reactjs.org/docs/components-and-props.html
    render() {
        const { episodio } = this.props
        return (
            <React.Fragment>
                <h2>{ episodio.nome }</h2>
                <img src={ episodio.url } alt={ episodio.nome }></img>
                <span>Assistido? { episodio.assistido ? 'Sim' : 'Não' }, { episodio.qtdVezesAssistido } vez(es) </span>
                <span>Duração: { episodio.duracaoEmMin }</span>
                <span>Nota: { episodio.nota }</span>
                <span>Temporada / Episódio: { episodio.temporadaEpisodio }</span>
            </React.Fragment>
        )
    }
}