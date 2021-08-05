import DataHora from "./DataHora.js";
import Operacao from "./Operacao.js";
import Tela from './Tela.js';

export default class CalculadoraControle {

    constructor(
        private tela = new Tela(),
        private operacao = new Operacao({
            onCalculado: (resultado: string) => this.tela.conteudo = resultado
        })
    ) {

        new DataHora();

        this.eventosBotoes();

    }

    eventosBotoes(): void {

        document.querySelectorAll("#teclado button").forEach(elemento => {

            elemento.addEventListener("click", (evento: Event) => {

                const target = evento.target as HTMLButtonElement;

                switch (target.id) {

                    case "zero":
                    case "um":
                    case "dois":
                    case "tres":
                    case "quatro":
                    case "cinco":
                    case "seis":
                    case "sete":
                    case "oito":
                    case "nove":
                        this.adicionarNumero(Number(target.dataset.valor));
                    break;

                    case "adicao":
                    case "subtracao":
                    case "divisao":
                    case "multiplicacao":
                        this.adicionarOperador(<string>target.dataset.valor);
                    break;

                    case "ponto":

                    break;

                    case "limpar":

                    break;

                    case "desfazer":

                    break;

                    case "porcentagem":

                    break;

                    case "igual":
                        this.calcular();
                    break;
                }

            });

        });

    }

    calcular(): void {

        this.operacao.calcular();

    }

    adicionarOperacao(valor: string): void {

        this.operacao.adicionar(valor);

        console.log(this.operacao.length);

    }

    adicionarNumero(numero: number): void {

        if (isNaN(Number(this.operacao.ultimaPosicao))) {

            this.adicionarOperacao(numero.toString());

        } else {

            numero = Number(this.operacao.ultimaPosicao.toString() + numero.toString());

            this.operacao.ultimaPosicao = numero.toString();

        }

        this.tela.conteudo = numero.toString();

    }

    adicionarOperador(operador: string): void {

        if (isNaN(Number(this.operacao.ultimaPosicao))) {

            this.operacao.ultimaPosicao = operador;

        } else {

            if (this.operacao.length === 0) {
                this.adicionarOperacao("0");
            }

            this.adicionarOperacao(operador);

        }        

    }

}