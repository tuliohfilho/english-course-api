import { PresentPerfectsDatabase } from "../../../../database/present-perfects";
import { PresentPerfect } from "../../entities/PresentPerfect";
import { IPresentPerfectsRepository } from "../IPresentPerfectsRepository";

class PresentPerfectsRepository implements IPresentPerfectsRepository {
  async getAll(): Promise<Array<PresentPerfect>> {
    const promise = await new Promise<Array<PresentPerfect>>((resolve) => {
      resolve(PresentPerfectsDatabase);
    });

    return promise;
  }
}

export { PresentPerfectsRepository };
