import { PronounType } from "../modules/pronouns/entities/PronounType";

const PronounTypesDatabase: Array<PronounType> = [
  new PronounType({
    id: 1,
    categoryId: 1,
    title: "Subject Pronouns",
    description:
      "Pronomes pessoais do caso reto (subject pronouns): funcionam como sujeitos, por exemplo: She is beautiful (Ela é linda).",
  }),
  new PronounType({
    id: 2,
    categoryId: 1,
    title: "Object Pronouns",
    description:
      "Pronomes pessoais do caso oblíquo (object pronouns): funcionam como objetos. Veja: Juan wants to meet her (Juan quer conhecê-la).",
  }),
  new PronounType({
    id: 3,
    categoryId: 2,
    title: "Possessive Adjectives",
    description:
      "Os pronomes adjetivos (possessive adjectives): embora na língua portuguesa eles sejam classificados como pronomes possessivos, na língua inglesa, eles são tidos como adjetivos, por atribuírem a determinada palavra a qualidade de ser de algo ou alguém. Diferentemente do que acontece na língua portuguesa, os pronomes adjetivos não são flexionados em grau (singular e plural). Eles sempre são acompanhados por substantivos, modificando-os.",
  }),
  new PronounType({
    id: 4,
    categoryId: 2,
    title: "Possessive Pronouns",
    description:
      "Os pronomes substantivos (possessive pronouns): os pronomes possessivos substantivos têm a função de substituir o substantivo, diferentemente dos pronomes adjetivos, que sempre estão ligados a ele. Eles não sofrem flexão de grau (singular e plural), como ocorre na língua portuguesa. Veja: These bikes are mine. (Estas bicicletas são minhas.)",
  }),
  new PronounType({
    id: 5,
    categoryId: 3,
    title: "Reflexive Pronouns",
    description:
      "Os pronomes reflexivos são aqueles que aparecem após o verbo, concordando sempre com o sujeito da oração. Eles são utilizados quando o sujeito da ação é também o objeto da ação, ou seja, ele pratica e recebe a ação da frase. São palavras construídas com os sufixos “-self” (no singular) e “-selves” (no plural).",
  }),
  new PronounType({
    id: 6,
    categoryId: 4,
    title: "Demonstrative Pronouns",
    description: "",
  }),
  new PronounType({
    id: 7,
    categoryId: 5,
    title: "Indefinite Pronouns",
    description: "",
  }),
  new PronounType({
    id: 8,
    categoryId: 6,
    title: "Relative Pronouns",
    description: "",
  }),
  new PronounType({
    id: 9,
    categoryId: 7,
    title: "Interrogative Pronouns",
    description: "",
  }),
];

export { PronounTypesDatabase };
