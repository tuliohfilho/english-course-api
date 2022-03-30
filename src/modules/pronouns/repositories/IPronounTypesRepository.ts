import { PronounType } from "../entities/PronounType";

interface IPronounTypesRepository {
  getByCategoryId(categoryId: number): Promise<Array<PronounType>>;
}

export { IPronounTypesRepository };
