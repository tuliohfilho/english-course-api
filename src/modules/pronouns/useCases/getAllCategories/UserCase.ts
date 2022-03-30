import { inject, injectable } from "tsyringe";

import { PronounCategory } from "../../entities/PronounCategory";
import { IPronounCategoriesRepository } from "../../repositories/IPronounCategoriesRepository";

@injectable()
class GetAllPronounCategoriesUseCase {
  constructor(
    @inject("PronounCategoriesRepository")
    private repository: IPronounCategoriesRepository
  ) {}

  async execute(): Promise<Array<PronounCategory>> {
    const all = await this.repository.getAll();

    return all;
  }
}

export { GetAllPronounCategoriesUseCase };
