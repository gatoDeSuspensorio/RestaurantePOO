export class ItemEstoque {
    constructor(id, nome, quantidade, unidadeMedida, dataValidade) {
        this._id = id;
        this._nome = nome;
        this._quantidade = quantidade;
        this._unidadeMedida = unidadeMedida;
        this._dataValidade = dataValidade;
    }

    get id() {
        return this._id;
    }

    get nome() {
        return this._nome;
    }

    get quantidade() {
        return this._quantidade;
    }

    get unidadeMedida() {
        return this._unidadeMedida;
    }

    get dataValidade() {
        return this._dataValidade;
    }
}