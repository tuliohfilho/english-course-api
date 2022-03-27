import { IrregularVerb } from "../entities/IrregularVerb";

interface IIrregularVerbsRepository {
  getAll(): Promise<Array<IrregularVerb>>;
}

export { IIrregularVerbsRepository };
