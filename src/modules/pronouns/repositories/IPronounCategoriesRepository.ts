import { PronounCategory } from "../entities/PronounCategory";

interface IPronounCategoriesRepository {
  getAll(): Promise<Array<PronounCategory>>;
}

export { IPronounCategoriesRepository };
