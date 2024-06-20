import { Funcionario } from './Funcionario.js';
import { Pedido } from './Pedido.js';

export class Gerente extends Funcionario {
    constructor(id, nome, cargo, turno) {
        super(id, nome, cargo, turno);
        this._pedidos = []; 
    }

    gerenciarFuncionarios() {
        console.log('Gerente ${this._nome} está gerenciando os funcionários. \n');
    }

    avaliarDesempenho(funcionario) {
        console.log('Gerente ${this._nome} está avaliando o desempenho do funcionário ${funcionario.nome}. \n');
    }

    adicionarPedido(pedido) {
        this._pedidos.push(pedido);
    }

    gerarRelatorioVendas() {
        let totalVendas = 0;
        this._pedidos.forEach(pedido => {
            totalVendas += parseFloat(pedido.calcularTotal());
        });
        const relatorio = 'Relatório de Vendas: Total de vendas = ${totalVendas.toFixed(2)} $ \n';
        console.log('Gerente ${this._nome} gerou o relatório de vendas. \n');
        return relatorio;
    }
}