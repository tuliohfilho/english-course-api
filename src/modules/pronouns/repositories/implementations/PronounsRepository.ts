import { PronounsDatabase } from "../../../../database/pronouns";
import { Pronoun } from "../../entities/Pronoun";
import { IPronounsRepository } from "../IPronounsRepository";

class PronounsRepository implements IPronounsRepository {
  async getByTypeId(typeId: number): Promise<Array<Pronoun>> {
    const promise = await new Promise<Array<Pronoun>>((resolve) => {
      const arr = PronounsDatabase.filter((p) => p.typeId === typeId);

      resolve(arr);
    });

    return promise;
  }
}

export { PronounsRepository };
