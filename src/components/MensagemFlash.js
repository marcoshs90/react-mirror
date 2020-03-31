import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MensagemFlash extends Component {
    constructor( props ) {
        super( props )
        this.idsTimeouts = []
        this.animacao = ''
    }

    fechar = () => {
        this.props.atualizarMensagem( false )
    }

    limparTimeouts() {
        this.idsTimeouts.forEach( clearTimeout )
    }

    componentWillUnmount() {
        this.limparTimeouts()
    }

    componentDidUpdate( prevPros ){
        const { deveExibirMensagem, segundos } = this.props
        if( prevPros.deveExibirMensagem !== deveExibirMensagem ) {
            const novoIdTimeout = setTimeout( () => {
                this.fechar()
            }, segundos * 1000 )
            this.idsTimeouts.push( novoIdTimeout )
        }
    }

    render(){
        const { deveExibirMensagem, mensagem, cor } = this.props
        
        if( this.animacao || deveExibirMensagem ){
            this.animacao = deveExibirMensagem ? 'fade-in' : 'fade-out'
        }
        
        return (
            <span onClick={ this.fechar } className={ `flash ${ cor } ${ this.animacao }` }>{ mensagem }</span>
        )
    }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html
MensagemFlash.propTypes = {
    mensagem: PropTypes.string.isRequired,
    deveExibirMensagem: PropTypes.bool.isRequired,
    atualizarMensagem: PropTypes.func.isRequired,
    cor: PropTypes.oneOf([ 'verde', 'vermelho' ])
}

MensagemFlash.defaultProps = {
    cor: 'verde',
    segundos: 3
}