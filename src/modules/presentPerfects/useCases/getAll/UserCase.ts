import { inject, injectable } from "tsyringe";

import { PresentPerfect } from "../../entities/PresentPerfect";
import { IPresentPerfectsRepository } from "../../repositories/IPresentPerfectsRepository";

@injectable()
class GetAllPresentPerfectsUseCase {
  constructor(
    @inject("PresentPerfectsRepository")
    private repository: IPresentPerfectsRepository
  ) {}

  async execute(): Promise<Array<PresentPerfect>> {
    const all = await this.repository.getAll();

    return all;
  }
}

export { GetAllPresentPerfectsUseCase };
