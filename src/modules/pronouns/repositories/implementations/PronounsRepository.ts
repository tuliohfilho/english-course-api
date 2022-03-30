import { PronounsDatabase } from "../../../../database/pronouns";
import { Pronoun } from "../../entities/Pronoun";
import { IPronounsRepository } from "../IPronounsRepository";

class PronounsRepository implements IPronounsRepository {
  async getAll(): Promise<Array<Pronoun>> {
    const promise = await new Promise<Array<Pronoun>>((resolve) => {
      resolve(PronounsDatabase);
    });

    return promise;
  }
}

export { PronounsRepository };
