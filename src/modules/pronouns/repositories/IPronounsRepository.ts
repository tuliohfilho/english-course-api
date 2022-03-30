import { Pronoun } from "../entities/Pronoun";

interface IPronounsRepository {
  getAll(): Promise<Array<Pronoun>>;
}

export { IPronounsRepository };
