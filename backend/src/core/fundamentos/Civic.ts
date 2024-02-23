import Carro from "./Carro";

export class Civic implements Carro {
    constructor(readonly velocidadeMaxima: number = 208, private _velocidadeAtual: number = 0) { }

    acelerar(): void {
        this._velocidadeAtual = Math.min(this._velocidadeAtual + 10, this.velocidadeMaxima)
    }

    frear(): void {
        this._velocidadeAtual = Math.max(this._velocidadeAtual - 10, 0)
    }

    get velocidadeAtual() {
        return this._velocidadeAtual
    }
}