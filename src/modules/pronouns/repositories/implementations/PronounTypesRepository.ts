import { PronounTypesDatabase } from "../../../../database/pronoun-types";
import { PronounType } from "../../entities/PronounType";
import { IPronounTypesRepository } from "../IPronounTypesRepository";

class PronounTypesRepository implements IPronounTypesRepository {
  async getByCategoryId(categoryId: number): Promise<Array<PronounType>> {
    const promise = await new Promise<Array<PronounType>>((resolve) => {
      const arr = PronounTypesDatabase.filter(
        (pt) => pt.categoryId === categoryId
      );

      resolve(arr);
    });

    return promise;
  }
}

export { PronounTypesRepository };
