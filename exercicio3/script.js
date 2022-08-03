const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
};

// A)
const pokemon1Copia = {
    ...pokemon1,
    nome: 'Squirtle',
    tipo: 'Água'
};

// B)
pokemon1.ataques = [];

pokemon1.ataques.push({
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
});

// C)
pokemon1Copia.ataques = [...pokemon1.ataques];

// D)
pokemon1.ataques.push({
    nome: 'Folha de Navalha',
    dano: 45,
    tipo: 'Grama',
    precisao: 100
});

// E)
pokemon1Copia.ataques.push({
    nome: 'Jato de Água',
    dano: 40,
    tipo: 'Água',
    precisao: 100
});

// F)
console.log(pokemon1, "\n", pokemon1Copia);