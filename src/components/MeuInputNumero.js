import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MeuInputNumero extends Component {

    perderFoco = evt => {
        const { obrigatorio, atualizarValor } = this.props
        const nota = evt.target.value
        const erro = obrigatorio && !nota
        atualizarValor( { nota, erro } )
    }

    render(){
        const { placeholder, visivel, mensagemCampo, deveExibirErro } = this.props
        return visivel ? (
            <React.Fragment>
                {
                    mensagemCampo && <span>{ mensagemCampo }</span>
                }
                {
                    <input type="number" className={ deveExibirErro ? 'erro' : '' } onBlur={ this.perderFoco } placeholder={ placeholder } />
                }
                {
                    deveExibirErro && <span className="mensagem-erro">* Obrigatório</span>
                }
            </React.Fragment>
        ) : null
    }

}

MeuInputNumero.propTypes = {
    visivel: PropTypes.bool.isRequired,
    deveExibirErro: PropTypes.bool.isRequired,
    placeholder: PropTypes.string,
    mensagemCampo: PropTypes.string,
    obrigatorio: PropTypes.bool
}

MeuInputNumero.defaultProps = {
    obrigatorio: false
}