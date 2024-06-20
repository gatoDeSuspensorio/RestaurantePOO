import { Prato } from "./Prato";

export class Pedido {
    constructor(id, data, status) {
        this._id = id;
        this._data = data;
        this._status = status;
        this._pratos = [];  
    }

    get id() {
        return this._id;
    }

    get data() {
        return this._data;
    }

    get status() {
        return this._status;
    }

    get pratos() {
        return this._pratos;
    }

    adicionarPrato(prato) {
        this._pratos.push(prato);
        console.log('Prato ${prato.nome} adicionado ao pedido. \n');
    }

    removerPrato(pratoNome) {
        const index = this._pratos.findIndex(prato => prato.nome === pratoNome);
        if (index !== -1) {
            this._pratos.splice(index, 1);
            console.log('Prato ${pratoNome} removido do pedido. \n');
        } else {
            console.log('Prato ${pratoNome} não encontrado no pedido. \n');
        }
    }

    calcularTotal(imposto = 0.10, desconto = 0.0, taxaServico = 0.0) {
        let total = 0;
        this._pratos.forEach(prato => {
            total += parseFloat(prato.calcularPreco(imposto, desconto, taxaServico));
        });
        return total.toFixed(2);
    }

    fecharPedido() {
        if (this._pratos.length === 0) {
            console.log("Pedido não pode ser fechado, nenhum prato adicionado. \n");
            return;
        }
        this._status = "Fechado";
        console.log('Pedido ${this._id} fechado. \n');
    }
}