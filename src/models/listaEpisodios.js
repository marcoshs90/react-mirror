import Episodio from './episodio';

function _sortear(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * ( max - min )) + min;
}

export default class ListaEpisodios {
    constructor() {
        this.todos = [
            { id: 1, nome: 'Arkangel', duracao: 52, temporada: 4, ordemEpisodio: 2, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/9aeb1/6f3ebb055fe062f85dc3f84871bdafaee6a9aeb1.jpg' },
            { id: 2, nome: 'Be Right Back', duracao: 49, temporada: 2, ordemEpisodio: 1, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/c4d52/ba1d86466a8785d4ba73c76cbcebe2e6384c4d52.jpg' },
            { id: 3, nome: 'Black Museum', duracao: 69, temporada: 4, ordemEpisodio: 6, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/8b126/81549c8f021fc16cc4b8af1586ddc3b42d88b126.jpg' },
            { id: 4, nome: 'Crocodile', duracao: 59, temporada: 4, ordemEpisodio: 3, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/557ff/558fcde2fe704bf3eaa2ef3b26aad3d38e6557ff.jpg' },
            { id: 5, nome: 'The Entire History of You', duracao: 49, temporada: 1, ordemEpisodio: 3, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/400a9/57eb44a76c31274fef233131d583ab7bc97400a9.jpg' },
            { id: 6, nome: 'Fifteen Million Merits', duracao: 62, temporada: 1, ordemEpisodio: 2, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/7f50e/422928a1b9fa31b8a6c209b5df4d0915f557f50e.jpg' },
            { id: 7, nome: 'Hang the DJ', duracao: 52, temporada: 4, ordemEpisodio: 4, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/61a3e/02aa15ddad05aa972d53bcad460aa9d527f61a3e.jpg' },
            { id: 8, nome: 'Hated in the Nation', duracao: 90, temporada: 3, ordemEpisodio: 6, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/6a32d/88bf30eae1ae98b82b2e8081813e731ab0c6a32d.jpg' },
            { id: 9, nome: 'Men Against Fire', duracao: 60, temporada: 3, ordemEpisodio: 5, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/3940b/4c0badc82119dc19439e181f19234c074a83940b.jpg' },
            { id: 10, nome: 'Metalhead', duracao: 41, temporada: 4, ordemEpisodio: 5, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/ab4ae/08cf3abd7ddbef2acf82350fad6ee9ebfedab4ae.jpg' },
            { id: 11, nome: 'The National Anthem', duracao: 44, temporada: 1, ordemEpisodio: 1, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/68242/db5699eda3c612123fed50166ef9598b14068242.jpg' },
            { id: 12, nome: 'Nosedive', duracao: 63, temporada: 3, ordemEpisodio: 1, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/424df/608de21c697b612e00ef851052ccba447c7424df.jpg' },
            { id: 13, nome: 'Playtest', duracao: 57, temporada: 3, ordemEpisodio: 2, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/75542/cc3e412d8e66f8f4de0476eb37a23a63b0875542.jpg' },
            { id: 14, nome: 'San Junipero', duracao: 61, temporada: 3, ordemEpisodio: 4, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/69c24/ecfc0c072506955c45aa259293f1a2f5c9869c24.jpg' },
            { id: 15, nome: 'Shut Up and Dance', duracao: 53, temporada: 3, ordemEpisodio: 3, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/89271/5e8b75f4582aac66f780664a86025992b4a89271.jpg' },
            { id: 16, nome: 'USS Callister', duracao: 77, temporada: 4, ordemEpisodio: 1, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/8e8ef/c08aaf2ae6c9daa52320b41bef71a26921d8e8ef.jpg' },
            { id: 17, nome: 'The Waldo Moment', duracao: 44, temporada: 2, ordemEpisodio: 3, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/f5694/edcafaec5cd271131b245254c3106f7cd92f5694.jpg' },
            { id: 18, nome: 'White Bear', duracao: 42, temporada: 2, ordemEpisodio: 2, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/abf16/6090599058bb80cae847951d5273f00e874abf16.jpg' },
            { id: 19, nome: 'White Christmas', duracao: 74, temporada: 2, ordemEpisodio: 4, thumbUrl: 'https://occ-0-678-559.1.nflxso.net/art/0b465/db9e48d9e27a99396cb9202601159454f6e0b465.jpg' }
        ].map( objEpisodio => new Episodio( objEpisodio.id, objEpisodio.nome, objEpisodio.duracao, objEpisodio.temporada, objEpisodio.ordemEpisodio, objEpisodio.thumbUrl ) )
    }

    get episodiosAleatorios() {
        const indice = _sortear( 0, this.todos.length - 1 )
        return this.todos[ indice ]
    }

    get avaliados() {
        return this.todos.filter( ep => ep.nota ).sort( (a,b) => a.temporada - b.temporada || a.ordem - b.ordem )
    }

    /* marcarComoAssistido( episodio ) {
        const episodioParaMarcar = this.todos.find( linha => linha.nome === episodio.nome )
        episodioParaMarcar.assistido = true
    } */
}