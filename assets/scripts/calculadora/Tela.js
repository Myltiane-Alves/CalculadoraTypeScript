export default class Tela {
    constructor(elemento = document.querySelector("#values")) {
        this.elemento = elemento;
        this.conteudo = "0";
    }
    set conteudo(valor) {
        if (valor.toString().length > 12) {
            valor = "ERRO";
        }
        if (this.elemento) {
            this.elemento.innerHTML = valor.toString().replace(".", ",");
        }
    }
    get conteudo() {
        return this.elemento ? this.elemento.innerHTML : "0";
    }
}
//# sourceMappingURL=Tela.js.map