import { itemEstoque } from './itemEstoque.js';

export class Estoque {
    constructor() {
        this._itens = [];  
        this._proximoId = 1;
    }

    get itens() {
        return this._itens;
    }

    adicionarItem(nome, quantidade, unidadeMedida, dataValidade) {
        const item = new ItemEstoque(this._proximoId++, nome, quantidade, unidadeMedida, dataValidade);
        this._itens.push(item);
        console.log('Item ${nome} adicionado ao estoque. \n');
    }

    removerItem(nome, quantidade) {
        const item = this._itens.find(item => item.nome === nome);
        if (item) {
            if (item.quantidade >= quantidade) {
                item.quantidade -= quantidade;
                console.log('Quantidade de ${quantidade} de ${nome} removida do estoque. \n');
                if (item.quantidade === 0) {
                    this._itens = this._itens.filter(i => i !== item);
                    console.log('Item ${nome} removido do estoque. \n');
                }
            } else {
                console.log('Não há quantidade suficiente de ${nome} no estoque para remover. \n');
            }
        } else {
            console.log('Item ${nome} não encontrado no estoque. \n');
        }
    }

    verificarDisponibilidade(nome) {
        const item = this._itens.find(item => item.nome === nome);
        return item ? item.quantidade : 0;
    }

    listarItens() {
        return this._itens;
    }

    verificarValidade() {
        const hoje = new Date();
        return this._itens.filter(item => item.dataValidade <= hoje);
    }
}