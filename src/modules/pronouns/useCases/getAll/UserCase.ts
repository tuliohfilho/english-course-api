import { inject, injectable } from "tsyringe";

import { Pronoun } from "../../entities/Pronoun";
import { IPronounsRepository } from "../../repositories/IPronounsRepository";

@injectable()
class GetAllPronounsUseCase {
  constructor(
    @inject("PronounsRepository")
    private repository: IPronounsRepository
  ) {}

  async execute(): Promise<Array<Pronoun>> {
    const all = await this.repository.getAll();

    return all;
  }
}

export { GetAllPronounsUseCase };
