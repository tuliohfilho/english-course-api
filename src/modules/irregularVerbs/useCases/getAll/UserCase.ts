import { inject, injectable } from "tsyringe";

import { IrregularVerb } from "../../entities/IrregularVerb";
import { IIrregularVerbsRepository } from "../../repositories/IIrregularVerbsRepository";

@injectable()
class GetAllIrregularVerbsUseCase {
  constructor(
    @inject("IrregularVerbsRepository")
    private repository: IIrregularVerbsRepository
  ) {}

  async execute(): Promise<Array<IrregularVerb>> {
    const all = await this.repository.getAll();

    return all;
  }
}

export { GetAllIrregularVerbsUseCase };
