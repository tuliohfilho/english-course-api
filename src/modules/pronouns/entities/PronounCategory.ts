type PronounCategoryType = {
  id: number;
  title: string;
  description: string;
};

class PronounCategory {
  id: number;
  title: string;
  description: string;

  constructor({ id, title, description }: PronounCategoryType) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

export { PronounCategory };
