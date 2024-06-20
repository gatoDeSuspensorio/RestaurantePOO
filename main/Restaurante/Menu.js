import { Prato } from './Prato.js';

export class Menu {
    constructor(id, nome, descricao) {
        this._id = id;
        this._nome = nome;
        this._descricao = descricao;
        this._pratos = [];  
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

    get pratos() {
        return this._pratos;
    }

    adicionarPrato(prato) {
        this._pratos.push(prato);
        console.log('Prato ${prato.nome} adicionado ao menu. \n');
    }

    removerPrato(pratoNome) {
        const index = this._pratos.findIndex(prato => prato.nome === pratoNome);
        if (index !== -1) {
            this._pratos.splice(index, 1);
            console.log('Prato ${pratoNome} removido do menu. \n');
        } else {
            console.log('Prato, ${pratoNome} não encontrado no menu. \n');
        }
    }

    listarPratos() {
        console.log("Pratos no menu: \n");
        this._pratos.forEach(prato => {
            console.log('- ${prato.nome}: ${prato.descricao} (${prato.precoBase} $) \n');
        });
    }
}