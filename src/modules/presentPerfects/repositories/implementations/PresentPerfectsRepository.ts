import { PresentPerfectsDatabase } from "../../../../database/present-perfects";
import { PresentPerfect } from "../../entities/PresentPerfect";
import { IPresentPerfectsRepository } from "../IPresentPerfectsRepository";

class PresentPerfectsRepository implements IPresentPerfectsRepository {
  async getByTypeId(typeId: number): Promise<Array<PresentPerfect>> {
    const promise = await new Promise<Array<PresentPerfect>>((resolve) => {
      const arr = PresentPerfectsDatabase.filter((pp) => pp.typeId === typeId);

      resolve(arr);
    });

    return promise;
  }
}

export { PresentPerfectsRepository };
