import { PronounCategory } from "../modules/pronouns/entities/PronounCategory";

const PronounCategoriesDatabase: Array<PronounCategory> = [
  new PronounCategory({
    id: 1,
    title: "Personal Pronouns",
    description:
      "Os pronomes pessoais são termos que indicam pessoas, lugares e objetos",
  }),
  new PronounCategory({
    id: 2,
    title: "Possessive Pronouns",
    description:
      "Os pronomes possessivos indicam que algo pertence a alguém ou alguma coisa. São classificados em pronomes adjetivos e pronomes substantivos.",
  }),
  new PronounCategory({
    id: 3,
    title: "Reflexive Pronouns",
    description:
      "Os pronomes reflexivos são aqueles que aparecem após o verbo, concordando sempre com o sujeito da oração.",
  }),
  new PronounCategory({
    id: 4,
    title: "Demonstrative Pronouns",
    description:
      "Os pronomes demonstrativos são palavras que indicam algo (pessoa, lugar ou objeto).",
  }),
  new PronounCategory({
    id: 5,
    title: "Indefinite Pronouns",
    description:
      "Os pronomes indefinidos recebem esse nome uma vez que substituem ou acompanham o substantivo, de maneira imprecisa ou indeterminada.",
  }),
  new PronounCategory({
    id: 6,
    title: "Relative Pronouns",
    description:
      "Os pronomes relativos são palavras que exercem a função de sujeito ou objeto.",
  }),
  new PronounCategory({
    id: 7,
    title: "Interrogative Pronouns",
    description:
      "Os pronomes interrogativos, também chamados de “question words”, são aquelas palavras utilizadas para fazer perguntas.",
  }),
];

export { PronounCategoriesDatabase };
