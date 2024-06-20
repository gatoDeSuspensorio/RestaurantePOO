import { Funcionario } from './Funcionario.js';
import { Mesa } from './Mesa.js';
import { Pedido } from './Pedido.js';

export class Garcom extends Funcionario {
    atenderMesa(mesa) {
        console.log('Garçom ${this._nome} está atendendo a mesa ${mesa.numero}. \n');
    }

    anotarPedido(pedido) {
        console.log('Garçom ${this._nome} anotou o pedido ${pedido.id}. \n');
    }
}