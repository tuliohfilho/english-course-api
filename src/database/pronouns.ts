import { Pronoun } from "../modules/pronouns/entities/Pronoun";

const PronounsDatabase: Array<Pronoun> = [
  new Pronoun({
    id: 1,
    typeId: 1,
    subject: "I",
    translations: ["Eu"],
  }),
  new Pronoun({
    id: 2,
    typeId: 1,
    subject: "You",
    translations: ["Você", "Tu"],
  }),
  new Pronoun({
    id: 3,
    typeId: 1,
    subject: "He",
    translations: ["Ele"],
  }),
  new Pronoun({
    id: 4,
    typeId: 1,
    subject: "She",
    translations: ["Ela"],
  }),
  new Pronoun({
    id: 5,
    typeId: 1,
    subject: "It",
    translations: ["Ela", "Ela"],
  }),
  new Pronoun({
    id: 6,
    typeId: 1,
    subject: "We",
    translations: ["Nós"],
  }),
  new Pronoun({
    id: 7,
    typeId: 1,
    subject: "You",
    translations: ["Vocês", "Vós"],
  }),
  new Pronoun({
    id: 8,
    typeId: 1,
    subject: "They",
    translations: ["Eles", "Elas"],
  }),
  new Pronoun({
    id: 9,
    typeId: 2,
    subject: "Me",
    translations: ["Me", "Mim"],
  }),
  new Pronoun({
    id: 10,
    typeId: 2,
    subject: "You",
    translations: ["Lhe", "o", "a", "Te", "Ti", "A Você"],
  }),
  new Pronoun({
    id: 11,
    typeId: 2,
    subject: "Him",
    translations: ["Lhe", "o", "A Ele"],
  }),
  new Pronoun({
    id: 12,
    typeId: 2,
    subject: "Her",
    translations: ["Lhe", "a", "A Ela"],
  }),
  new Pronoun({
    id: 13,
    typeId: 2,
    subject: "It",
    translations: ["Lhe", "o", "a"],
  }),
  new Pronoun({
    id: 14,
    typeId: 2,
    subject: "Us",
    translations: ["Nos"],
  }),
  new Pronoun({
    id: 15,
    typeId: 2,
    subject: "You",
    translations: ["Vos", "Lhes", "A Vocês"],
  }),
  new Pronoun({
    id: 16,
    typeId: 2,
    subject: "Them",
    translations: ["Lhes", "Os", "As"],
  }),
  new Pronoun({
    id: 17,
    typeId: 3,
    subject: "My",
    translations: ["Meu", "Minha", "Meus", "Minhas"],
  }),
  new Pronoun({
    id: 18,
    typeId: 3,
    subject: "Your",
    translations: ["Teu", "Tua", "Seu", "Sua", "Teus", "Tuas", "Seus", "Suas"],
  }),
  new Pronoun({
    id: 19,
    typeId: 3,
    subject: "His",
    translations: ["Dele", "Deles"],
  }),
  new Pronoun({
    id: 20,
    typeId: 3,
    subject: "Her",
    translations: ["Dela", "Delas"],
  }),
  new Pronoun({
    id: 21,
    typeId: 3,
    subject: "Its",
    translations: ["Dele", "Dela", "Deles", "Delas"],
  }),
  new Pronoun({
    id: 22,
    typeId: 3,
    subject: "Our",
    translations: ["Nosso", "Nossa", "Nossos", "Nossas"],
  }),
  new Pronoun({
    id: 23,
    typeId: 3,
    subject: "Your",
    translations: [
      "Vosso",
      "Vossa",
      "Seu",
      "Sua",
      "Vossos",
      "Vossas",
      "Seus",
      "Suas",
      "De Vocês",
    ],
  }),
  new Pronoun({
    id: 24,
    typeId: 3,
    subject: "Their",
    translations: ["Deles", "Delas"],
  }),
  new Pronoun({
    id: 25,
    typeId: 4,
    subject: "Mine",
    translations: ["Meu", "Minha", "Meus", "Minhas"],
  }),
  new Pronoun({
    id: 26,
    typeId: 4,
    subject: "Yours",
    translations: ["Teu", "Tua", "Seu", "Sua", "Teus", "Tuas", "Seus", "Suas"],
  }),
  new Pronoun({
    id: 27,
    typeId: 4,
    subject: "His",
    translations: ["Dele", "Deles"],
  }),
  new Pronoun({
    id: 28,
    typeId: 4,
    subject: "Hers",
    translations: ["Dela", "Delas"],
  }),
  new Pronoun({
    id: 29,
    typeId: 4,
    subject: "Its",
    translations: ["Dele", "Dela", "Deles", "Delas"],
  }),
  new Pronoun({
    id: 30,
    typeId: 4,
    subject: "Ours",
    translations: ["Nosso", "Nossa", "Nossos", "Nossas"],
  }),
  new Pronoun({
    id: 31,
    typeId: 4,
    subject: "Yours",
    translations: [
      "Vosso",
      "Vossa",
      "Seu",
      "Sua",
      "De Vocês",
      "Vossos",
      "Vossas",
      "Seus",
      "Suas",
    ],
  }),
  new Pronoun({
    id: 32,
    typeId: 4,
    subject: "Theirs",
    translations: ["Deles", "Delas"],
  }),
  new Pronoun({
    id: 33,
    typeId: 5,
    subject: "Myself",
    translations: ["A Mim Mesmo", "-me"],
  }),
  new Pronoun({
    id: 34,
    typeId: 5,
    subject: "Yourself",
    translations: ["A Ti", "A Você Mesmo(a)", "-te", "-se"],
  }),
  new Pronoun({
    id: 35,
    typeId: 5,
    subject: "Himself",
    translations: ["A Si", "A Ele Mesmo", "-se"],
  }),
  new Pronoun({
    id: 36,
    typeId: 5,
    subject: "Herself",
    translations: ["A Si", "A Ela Mesma", "-se"],
  }),
  new Pronoun({
    id: 37,
    typeId: 5,
    subject: "Itself",
    translations: ["A Si Mesmo(a)", "-se"],
  }),
  new Pronoun({
    id: 38,
    typeId: 5,
    subject: "Ourselves",
    translations: ["A Nós Mesmo(as)", "-nos"],
  }),
  new Pronoun({
    id: 39,
    typeId: 5,
    subject: "Yourselves",
    translations: ["A Vós", "A Vocês Mesmos(as)", "-vos", "-se"],
  }),
  new Pronoun({
    id: 40,
    typeId: 5,
    subject: "Themselves",
    translations: ["A Si", "A Eles Mesmos", "A Elas Mesmas", "-se"],
  }),
  new Pronoun({
    id: 41,
    typeId: 6,
    subject: "This",
    translations: ["Este", "Esta", "Isto"],
  }),
  new Pronoun({
    id: 42,
    typeId: 6,
    subject: "These",
    translations: ["Estes", "Estas"],
  }),
  new Pronoun({
    id: 43,
    typeId: 6,
    subject: "That",
    translations: ["Esse", "Essa", "Isso", "Aquele", "Aquela", "Aquilo"],
  }),
  new Pronoun({
    id: 44,
    typeId: 6,
    subject: "Those",
    translations: ["Esses", "Essas", "Aqueles", "Aquelas"],
  }),
  new Pronoun({
    id: 46,
    typeId: 7,
    subject: "Any",
    translations: [
      "Qualquer",
      "Quaisquer",
      "Algum",
      "Alguns",
      "Alguma(s)",
      "Nenhum",
    ],
  }),
  new Pronoun({
    id: 47,
    typeId: 7,
    subject: "Anybody, Anyone",
    translations: ["Alguém", "Ninguém", "Qualquer um"],
  }),
  new Pronoun({
    id: 48,
    typeId: 7,
    subject: "Anything",
    translations: ["Qualquer Coisa", "Alguma coisa", "Nada"],
  }),
  new Pronoun({
    id: 49,
    typeId: 7,
    subject: "Anywhere",
    translations: ["Nenhum lugar", "Qualquer Lugar"],
  }),
  new Pronoun({
    id: 50,
    typeId: 7,
    subject: "Some",
    translations: ["Algum", "Alguns", "Alguma(s)"],
  }),
  new Pronoun({
    id: 51,
    typeId: 7,
    subject: "Somebody, Someone",
    translations: ["Alguém"],
  }),
  new Pronoun({
    id: 52,
    typeId: 7,
    subject: "Something",
    translations: ["Alguma Coisa"],
  }),
  new Pronoun({
    id: 53,
    typeId: 7,
    subject: "No (pronome adjetivo), none (pronome substantivo)",
    translations: ["Nenhum", "Nenhuma"],
  }),
  new Pronoun({
    id: 54,
    typeId: 7,
    subject: "Nobody, No One",
    translations: ["Ninguém"],
  }),
  new Pronoun({
    id: 55,
    typeId: 7,
    subject: "Nowhere",
    translations: ["Nenhum Lugar"],
  }),
  new Pronoun({
    id: 56,
    typeId: 7,
    subject: "Nothing",
    translations: ["Nada"],
  }),
  new Pronoun({
    id: 57,
    typeId: 7,
    subject: "Much",
    translations: ["Muito", "Muita"],
  }),
  new Pronoun({
    id: 58,
    typeId: 7,
    subject: "Many",
    translations: ["Muitos, Muitas"],
  }),
  new Pronoun({
    id: 59,
    typeId: 7,
    subject: "Little",
    translations: ["Pouco", "Pouca"],
  }),
  new Pronoun({
    id: 60,
    typeId: 7,
    subject: "Few",
    translations: ["Poucos", "Poucas"],
  }),
  new Pronoun({
    id: 61,
    typeId: 7,
    subject: "All",
    translations: ["Todo(s)", "Toda(s)", "Tudo"],
  }),
  new Pronoun({
    id: 62,
    typeId: 7,
    subject: "One",
    translations: [
      "Usado para fazer referência a pessoas em geral",
      "A uma pessoa ou coisa mencionada anteriormente",
      "A uma pessoa de um tipo específico",
    ],
  }),
  new Pronoun({
    id: 63,
    typeId: 7,
    subject: "Each",
    translations: ["Cada"],
  }),
  new Pronoun({
    id: 64,
    typeId: 7,
    subject: "Other",
    translations: ["Outro(s)", "Outra(s)"],
  }),
  new Pronoun({
    id: 65,
    typeId: 7,
    subject: "Another",
    translations: ["Outro", "Outra"],
  }),
  new Pronoun({
    id: 66,
    typeId: 7,
    subject: "Either",
    translations: ["Ambos", "Um ou outro"],
  }),
  new Pronoun({
    id: 67,
    typeId: 7,
    subject: "Neither",
    translations: ["Nenhum (nem um nem o outro de duas pessoas ou coisas)"],
  }),
  new Pronoun({
    id: 68,
    typeId: 7,
    subject: "Both",
    translations: ["Ambos", "Ambas"],
  }),
  new Pronoun({
    id: 69,
    typeId: 7,
    subject: "Enough",
    translations: ["Bastante"],
  }),
  new Pronoun({
    id: 70,
    typeId: 7,
    subject: "Several",
    translations: ["Vários", "Várias"],
  }),
  new Pronoun({
    id: 71,
    typeId: 7,
    subject: "Everyone",
    translations: ["Todos, todo mundo"],
  }),
  new Pronoun({
    id: 72,
    typeId: 7,
    subject: "Everything",
    translations: ["Tudo"],
  }),
  new Pronoun({
    id: 73,
    typeId: 8,
    subject: "Who",
    translations: ["Quem", "O Qual", "Que"],
  }),
  new Pronoun({
    id: 74,
    typeId: 8,
    subject: "Whose",
    translations: ["Cujo", "Cuja", "Cujos", "Cujas"],
  }),
  new Pronoun({
    id: 75,
    typeId: 8,
    subject: "Which",
    translations: ["Que", "O Qual", "O Que"],
  }),
  new Pronoun({
    id: 76,
    typeId: 8,
    subject: "Where",
    translations: [
      "Onde",
      "Em Que",
      "No Que",
      "No Qual",
      "Na Qual",
      "Nos Quais",
      "Nas Quais",
    ],
  }),
  new Pronoun({
    id: 77,
    typeId: 8,
    subject: "When",
    translations: [
      "Quando",
      "Em Que",
      "No Qual",
      "Na Qual",
      "Nos Quais",
      "Nas Quais",
    ],
  }),
  new Pronoun({
    id: 78,
    typeId: 8,
    subject: "Taht",
    translations: ["Que"],
  }),
  new Pronoun({
    id: 79,
    typeId: 8,
    subject: "What",
    translations: ["O Que"],
  }),
  new Pronoun({
    id: 80,
    typeId: 9,
    subject: "Who",
    translations: ["Quem (Função de Sujeito)"],
  }),
  new Pronoun({
    id: 81,
    typeId: 9,
    subject: "Whom",
    translations: ["Quem (Função de Objeto)"],
  }),
  new Pronoun({
    id: 82,
    typeId: 9,
    subject: "Whose",
    translations: ["De Quem"],
  }),
  new Pronoun({
    id: 83,
    typeId: 9,
    subject: "Which",
    translations: ["Qual", "Quais"],
  }),
  new Pronoun({
    id: 84,
    typeId: 9,
    subject: "What",
    translations: ["O Que", "Que"],
  }),
];

export { PronounsDatabase };
