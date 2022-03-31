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

    const promises = all.map(async (type): Promise<PresentPerfectType> => {
      const presentPerfects = await this.presentPerfectsRepository.getByTypeId(
        type.id
      );

      return { ...type, presentPerfects };
    });

    return Promise.all(promises);
  }
}

export { GetAllPresentPerfectTypesUseCase };
