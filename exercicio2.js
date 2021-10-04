// 1) Criar uma função para receber dois parâmetros: numero e percentual.
// a) Calcular a porcentagem de um número  usando a fórmula:
// b) Chamar a função e exibir o resultado no console.

const percent = (numero, percentual) => {
    const total = (numero / 100) * percentual;
    return total;
};

console.log(percent(20, 5));

// 2) Criar uma função que recebe dois arrays como parâmetro e juntar os arrays:
// a) Converter o array para string e retornar o resultado.
// b) Chamar a função e exibir o resultado no console.

const array = (arr1, arr2) => {
    const arrayJoin = [...arr1, ...arr2];
    return arrayJoin.toString();
};

console.log(array([4, 5], [1, 2, 3]));
