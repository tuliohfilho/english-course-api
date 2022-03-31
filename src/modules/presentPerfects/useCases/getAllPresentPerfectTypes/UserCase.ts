import { inject, injectable } from "tsyringe";

import { PresentPerfectType } from "../../entities/PresentPerfectType";
import { IPresentPerfectsRepository } from "../../repositories/IPresentPerfectsRepository";
import { IPresentPerfectTypesRepository } from "../../repositories/IPresentPerfectTypesRepository";

@injectable()
class GetAllPresentPerfectTypesUseCase {
  constructor(
    @inject("PresentPerfectTypesRepository")
    private repository: IPresentPerfectTypesRepository,
    @inject("PresentPerfectsRepository")
    private presentPerfectsRepository: IPresentPerfectsRepository
  ) {}

  async execute(): Promise<Array<PresentPerfectType>> {
    const all = await this.repository.getAll();

    const promises = all.map(async (ppType): Promise<PresentPerfectType> => {
      const presentPerfects = await this.presentPerfectsRepository.getByTypeId(
        ppType.id
      );

      return { ...ppType, presentPerfects };
    });

    return Promise.all(promises);
  }
}

export { GetAllPresentPerfectTypesUseCase };
