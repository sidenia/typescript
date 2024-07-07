// Tipos primitivos
let idade: number = 30;
let nome: string = "João";
let isAluno: boolean = true;


// Arrays
let numeros: number[] = [1, 2, 3, 4];
let nomes: string[] = ["Ana", "Maria", "Carlos"];


// Objetos
let pessoa: { nome: string, idade: number } = {
    nome: "Pedro",
    idade: 25
};


// Tipos personalizados (interfaces)
interface Animal {
    nome: string;
    tipo: string;
}

let cachorro: Animal = {
    nome: "Rex",
    tipo: "Cachorro"
};
