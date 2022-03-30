import { Pronoun } from "../entities/Pronoun";

interface IPronounsRepository {
  getByTypeId(typeId: number): Promise<Array<Pronoun>>;
}

export { IPronounsRepository };
