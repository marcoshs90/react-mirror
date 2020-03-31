export default class Episodio {
    constructor( id, nome, duracao, temporada, ordemEpisodio, thumbUrl ) {
        this.id = id
        this.nome = nome
        this.duracao = duracao
        this.temporada = temporada
        this.ordem = ordemEpisodio
        this.url = thumbUrl
        this.qtdVezesAssistido = 0
    }

    validarNota( nota ){
        nota = parseInt( nota )
        return 1 <= nota && nota <= 5
    }

    marcarParaAssistido() {
        this.assistido = true
        this.qtdVezesAssistido += 1
    }

    avaliar( nota ) {
        this.nota = parseInt( nota )
        this.assistido = true
    }

    get duracaoEmMin(){
        return `${ this.duracao } min`
    }

    get temporadaEpisodio() {
        return `${ this.temporada.toString().padStart( 2, '0' ) }/${ this.ordem.toString().padStart( 2, '0' ) }`
    }
}