import { Pronoun } from "./Pronoun";

type PronounTypeType = {
  id: number;
  categoryId: number;
  title: string;
  description: string;
  pronouns?: Array<Pronoun>;
};

class PronounType {
  id: number;
  categoryId: number;
  title: string;
  description: string;
  pronouns?: Array<Pronoun>;

  constructor({
    id,
    categoryId,
    title,
    description,
    pronouns,
  }: PronounTypeType) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.description = description;
    this.pronouns = pronouns;
  }
}

export { PronounType };
