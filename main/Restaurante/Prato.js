export class Prato {
    constructor(id, nome, descricao, precoBase) {
        this._id = id;
        this._nome = nome;
        this._descricao = descricao;
        this._precoBase = precoBase;
    }

    get id() {
        return this._id;
    }

    get nome() {
        return this._nome;
    }

    get descricao() {
        return this._descricao;
    }

    get precoBase() {
        return this._precoBase;
    }

    calcularPreco(imposto = 0.10, desconto = 0.0) {
        let precoComImposto = this._precoBase + (this._precoBase * imposto);
        let precoFinal = precoComImposto - (precoComImposto * desconto);
        return precoFinal.toFixed(2);
    }
}