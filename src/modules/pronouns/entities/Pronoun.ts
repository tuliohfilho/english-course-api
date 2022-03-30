type PronounType = {
  id: number;
  typeId: number;
  subject: string;
  translations: Array<string>;
};

class Pronoun {
  id: number;
  typeId: number;
  subject: string;
  translations: Array<string>;

  constructor({ id, typeId, subject, translations }: PronounType) {
    this.id = id;
    this.typeId = typeId;
    this.subject = subject;
    this.translations = translations;
  }
}

export { Pronoun };
