import { inject, injectable } from "tsyringe";

import { PronounType } from "../../entities/PronounType";
import { IPronounsRepository } from "../../repositories/IPronounsRepository";
import { IPronounTypesRepository } from "../../repositories/IPronounTypesRepository";

@injectable()
class GetPronounTypesByCategoryIdUseCase {
  constructor(
    @inject("PronounTypesRepository")
    private repository: IPronounTypesRepository,
    @inject("PronounsRepository")
    private pronounsRepository: IPronounsRepository
  ) {}

  async execute(categoryId: number): Promise<Array<PronounType>> {
    const all = await this.repository.getByCategoryId(categoryId);

    const promises = all.map(async (type): Promise<PronounType> => {
      const pronouns = await this.pronounsRepository.getByTypeId(type.id);

      return { ...type, pronouns };
    });

    return Promise.all(promises);
  }
}

export { GetPronounTypesByCategoryIdUseCase };
