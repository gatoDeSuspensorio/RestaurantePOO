import { Pedido } from './Pedido.js';

export class Mesa {
    constructor(id, numero, status) {
        this._id = id;
        this._numero = numero;
        this._status = status; 
        this._pedidos = [];
    }

    get id() {
        return this._id;
    }

    get numero() {
        return this._numero;
    }

    get status() {
        return this._status;
    }

    get pedidos() {
        return this._pedidos;
    }

    reservar() {
        if (this._status === "Disponível \n") {
            this._status = "Reservada";
            console.log('Mesa ${this._numero} reservada. \n');
        } else {
            console.log('Mesa ${this._numero} não está disponível para reserva. \n');
        }
    }

    liberar() {
        if (this._status !== "Disponível \n") {
            this._status = "Disponível";
            console.log('Mesa ${this._numero} liberada. \n');
        } else {
            console.log('Mesa ${this._numero} já está disponível. \n');
        }
    }
}