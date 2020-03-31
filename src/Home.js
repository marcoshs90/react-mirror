import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import ListaEpisodios from './models/listaEpisodios';
import EpisodioUi from './components/episodioUi';
import MensagemFlash from './components/MensagemFlash';
import MeuInputNumero from './components/MeuInputNumero';

class Home extends Component {
  constructor( props ) {
    super( props );
    this.listaEpisodios = new ListaEpisodios();
    this.state = {
      episodio: this.listaEpisodios.episodiosAleatorios,
      exibirMensagem: false,
      deveExibirErro: false
    }
  }

  sortear() {
    const episodio = this.listaEpisodios.episodiosAleatorios
    this.setState( {
      episodio
    } )
  }

  assistido() {
    const { episodio } = this.state
    episodio.marcarParaAssistido()
    this.setState({
      episodio
    })
  }

  registrarNota( { nota, erro } ){
    this.setState({
      deveExibirErro: erro
    })
    if (erro){
      return;
    }

    let cor, mensagem;
    const { episodio } = this.state
    if( episodio.validarNota( nota ) ) {
      episodio.avaliar( nota )
      cor = 'verde'
      mensagem = 'Registramos sua nota!'
    }else{
      cor = 'vermelho'
      mensagem = 'Informar uma nota válida entre 1 e 5!'
    }
    
    this.exibirMensagem( { cor, mensagem } )
  }

  exibirMensagem = ({ cor, mensagem }) => {
    this.setState({
      cor,
      mensagem,
      exibirMensagem: true
    })
  }

  atualizarMensagem = devoExibir => {
    this.setState({
      exibirMensagem: devoExibir
    })
  }

  render() {
    const { episodio, exibirMensagem, cor, mensagem, deveExibirErro } = this.state
    
    return (
      <div className="App">
         <MensagemFlash atualizarMensagem={ this.atualizarMensagem }
                        deveExibirMensagem={ exibirMensagem } 
                        mensagem={ mensagem }
                        cor={ cor }
                        segundos={ 5 } />
         <header className='App-header'>
          <EpisodioUi episodio={ episodio } />
          <div className="botoes">
            <button className="btn verde" onClick={ this.sortear.bind( this ) }>Próximo</button>
            <button className="btn azul" onClick={ this.assistido.bind( this ) }>Já Assisti</button>
          </div>
          <MeuInputNumero placeholder="1 a 5"
                          mensagemCampo="Qual sua nota para esse episódio?"
                          visivel={ episodio.assistido || false }
                          obrigatorio={ true }
                          atualizarValor={ this.registrarNota.bind( this ) }
                          deveExibirErro={ deveExibirErro }
          />
        </header>
      </div>
    );
  }
}

export default Home;
