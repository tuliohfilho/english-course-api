import { inject, injectable } from "tsyringe";

import { OnPronounciationType } from "../../entities/OnPronounciationType";
import { IOnPronounciationsRepository } from "../../repositories/IOnPronounciationsRepository";
import { IOnPronounciationTypesRepository } from "../../repositories/IOnPronounciationTypesRepository";

@injectable()
class GetAllOnPronounciationTypesUseCase {
  constructor(
    @inject("OnPronounciationTypesRepository")
    private repository: IOnPronounciationTypesRepository,
    @inject("OnPronounciationsRepository")
    private onPronounciationsRepository: IOnPronounciationsRepository
  ) {}

  async execute(): Promise<Array<OnPronounciationType>> {
    const all = await this.repository.getAll();

    const promises = all.map(async (type): Promise<OnPronounciationType> => {
      const onPronounciations =
        await this.onPronounciationsRepository.getByTypeId(type.id);

      return { ...type, onPronounciations };
    });

    return Promise.all(promises);
  }
}

export { GetAllOnPronounciationTypesUseCase };
