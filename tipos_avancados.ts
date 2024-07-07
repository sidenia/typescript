// Union types (permite vários tipos para uma variável)
let nota: number | string;
nota = 10;
nota = "Aprovado";


// Type Aliases (criação de tipos personalizados)
type Cor = "Vermelho" | "Verde" | "Azul";
let corFavorita: Cor = "Azul";


// Generics (reutilização de código com tipos dinâmicos)
function retornaArray<T>(item: T): T[] {
    return [item];
}


let arrayString: string[] = retornaArray<string>("teste");
let arrayNumero: number[] = retornaArray<number>(1);
