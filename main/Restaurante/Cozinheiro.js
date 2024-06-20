import { Funcionario } from './Funcionario.js';
import { Prato } from './Prato.js';

export class Cozinheiro extends Funcionario {
    prepararPrato(prato) {
        console.log('Cozinheiro ${this._nome} está preparando o prato ${prato.nome}. \n');
    }

    verificarIngredientes(prato) {
        const ingredientesDisponiveis = true; 
        console.log('Ingredientes para o prato ${prato.nome} ${ingredientesDisponiveis ? "estão disponíveis" : "não estão disponíveis"}. \n');
        return ingredientesDisponiveis;
    }
}