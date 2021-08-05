export default class Tela {

    constructor(
        private elemento: HTMLDivElement | null = document.querySelector("#values");
    ) {
        this.conteudo = "0";
    }

    set conteudo(valor: string): void {
        
    }
}