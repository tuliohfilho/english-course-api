import { inject, injectable } from "tsyringe";

import { OnPronounciation } from "../../entities/OnPronounciation";
import { IOnPronounciationsRepository } from "../../repositories/IOnPronounciationsRepository";

@injectable()
class GetAllOnPronounciationsUseCase {
  constructor(
    @inject("OnPronounciationsRepository")
    private repository: IOnPronounciationsRepository
  ) {}

  async execute(): Promise<Array<OnPronounciation>> {
    const all = await this.repository.getAll();

    return all;
  }
}

export { GetAllOnPronounciationsUseCase };
