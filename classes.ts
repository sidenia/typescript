// Definição de classe com construtor e métodos
class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    imprimirDados(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}


// Uso da classe
let pessoa1: Pessoa = new Pessoa("Ana", 20);
pessoa1.imprimirDados();
