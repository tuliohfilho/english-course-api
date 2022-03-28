import { IrregularVerbDatabase } from "../../../../database/irregular-verbs";
import { IrregularVerb } from "../../entities/IrregularVerb";
import { IIrregularVerbsRepository } from "../IIrregularVerbsRepository";

class IrregularVerbsRepository implements IIrregularVerbsRepository {
  async getAll(): Promise<Array<IrregularVerb>> {
    const promise = await new Promise<Array<IrregularVerb>>((resolve) => {
      resolve(IrregularVerbDatabase);
    });

    return promise;
  }
}

export { IrregularVerbsRepository };
