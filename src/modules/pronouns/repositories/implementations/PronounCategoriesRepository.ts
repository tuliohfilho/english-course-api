import { PronounCategoriesDatabase } from "../../../../database/pronoun-categories";
import { PronounCategory } from "../../entities/PronounCategory";
import { IPronounCategoriesRepository } from "../IPronounCategoriesRepository";

class PronounCategoriesRepository implements IPronounCategoriesRepository {
  async getAll(): Promise<Array<PronounCategory>> {
    const promise = await new Promise<Array<PronounCategory>>((resolve) => {
      resolve(PronounCategoriesDatabase);
    });

    return promise;
  }
}

export { PronounCategoriesRepository };
