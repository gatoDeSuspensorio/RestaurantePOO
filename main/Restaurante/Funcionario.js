export class Funcionario {
    constructor(id, nome, cargo, turno) {
        this._id = id;
        this._nome = nome;
        this._cargo = cargo;
        this._turno = turno;
    }

    get id() {
        return this._id;
    }

    get nome() {
        return this._nome;
    }

    get cargo() {
        return this._cargo;
    }

    get turno() {
        return this._turno;
    }

    registrarEntrada() {
        console.log('${this._nome} registrou entrada. \n');
    }

    registrarSaida() {
        console.log('${this._nome} registrou saída. \n');
    }

    atualizarDadosPessoais(nome, telefone) {
        this._nome = nome;
        this._telefone = telefone;
        console.log('Dados pessoais atualizados para ${this._nome} - Telefone: ${this._telefone}. \n');
    }
}