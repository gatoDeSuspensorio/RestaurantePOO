//main:


import { Prato } from './Prato.js';
import { Menu } from './Menu.js';
import { Pedido } from './Pedido.js';
import { Mesa } from './Mesa.js';
import { Cliente } from './Cliente.js';
import { Garcom } from './Garcom.js';
import { Cozinheiro } from './Cozinheiro.js';
import { Gerente } from './Gerente.js';
import { Estoque } from './Estoque.js';

// Exemplo de uso
const prato1 = new Prato(1, "Spaghetti Carbonara", "Massa com molho carbonara \n", 12.50);
const prato2 = new Prato(2, "Salada Caesar", "Salada com frango, alface e molho Caesar \n", 9.00);

const menu = new Menu(1, "Menu Principal", "Menu do restaurante \n");
menu.adicionarPrato(prato1);
menu.adicionarPrato(prato2);
menu.listarPratos();

const pedido = new Pedido(1, new Date(), "Aberto \n");
pedido.adicionarPrato(prato1);
pedido.adicionarPrato(prato2);
console.log('Total do pedido: ${pedido.calcularTotal(0.10, 0.05)} $ \n');
pedido.fecharPedido();

const mesa = new Mesa(1, 5, "Disponível \n");
mesa.reservar();
mesa.liberar();

const cliente = new Cliente(1, "João Silva", "123456789 \n");
cliente.fazerPedido(pedido);
cliente.cancelarPedido(1);

const garcom = new Garcom(1, "Carlos", "Garçom", "Noite \n");
garcom.registrarEntrada();
garcom.atenderMesa(mesa);
garcom.anotarPedido(pedido);
garcom.registrarSaida();

//chama calcularTotal com diferentes parâmetros (sobrecarga)
console.log('Total do pedido: ${pedido.calcularTotal()}); // Usa os valores padrão: imposto = 0.10, desconto = 0.0, taxaServico = 0.0\n');
console.log('Total do pedido: ${pedido.calcularTotal(0.15)}); // Usa um imposto de 0.15, desconto = 0.0, taxaServico = 0.0\n');
console.log('Total do pedido: ${pedido.calcularTotal(0.10, 0.05)}); // Usa imposto de 0.10 e desconto de 0.05, taxaServico = 0.0\n');
console.log('Total do pedido: ${pedido.calcularTotal(0.10, 0.05, 0.1)}); // Usa imposto de 0.10, desconto de 0.05, taxaServico de 0.1\n');
pedido.fecharPedido();

const cozinheiro = new Cozinheiro(2, "Ana", "Cozinheiro", "Manhã \n");
cozinheiro.registrarEntrada();
cozinheiro.prepararPrato(prato1);
cozinheiro.verificarIngredientes(prato1);
cozinheiro.registrarSaida();

const gerente = new Gerente(3, "Mariana", "Gerente", "Integral \n");
gerente.registrarEntrada();
gerente.gerenciarFuncionarios();
gerente.avaliarDesempenho(garcom);
console.log(gerente.gerarRelatorioVendas());
gerente.registrarSaida();

const estoque = new Estoque();
estoque.adicionarItem("Arroz", 50, "kg", new Date("2023-12-31\n"));
estoque.adicionarItem("Feijão", 30, "kg", new Date("2023-11-30\n"));
console.log("Itens no estoque: \n");
estoque.listarItens().forEach(item => {
    console.log('${item.nome}: ${item.quantidade} ${item.unidadeMedida}, validade: ${item.dataValidade}\n');
});
estoque.removerItem("Arroz", 20);
console.log("Itens próximos ou fora da validade: \n");
estoque.verificarValidade().forEach(item => {
    console.log('${item.nome}: validade: ${item.dataValidade}\n');
});