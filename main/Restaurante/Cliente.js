import { Pedido } from './Pedido.js';

export class Cliente {
    constructor(id, nome, telefone) {
        this._id = id;
        this._nome = nome;
        this._telefone = telefone;
        this._pedidos = [];  
    }

    get id() {
        return this._id;
    }

    get nome() {
        return this._nome;
    }

    get telefone() {
        return this._telefone;
    }

    get pedidos() {
        return this._pedidos;
    }

    fazerPedido(pedido) {
        this._pedidos.push(pedido);
        console.log('Pedido ${pedido.id} feito pelo cliente ${this._nome}. \n');
    }

    cancelarPedido(pedidoId) {
        const index = this._pedidos.findIndex(pedido => pedido.id === pedidoId);
        if (index !== -1) {
            this._pedidos.splice(index, 1);
            console.log('Pedido ${pedidoId} cancelado pelo cliente ${this._nome}. \n');
        } else {
            console.log('Pedido ${pedidoId} não encontrado. \n');
        }
    }
}