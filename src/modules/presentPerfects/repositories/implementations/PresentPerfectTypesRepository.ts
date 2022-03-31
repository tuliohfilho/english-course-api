import { PresentPerfectTypeDatabase } from "../../../../database/present-perfect-types";
import { PresentPerfectType } from "../../entities/PresentPerfectType";
import { IPresentPerfectTypesRepository } from "../IPresentPerfectTypesRepository";

class PresentPerfectTypesRepository implements IPresentPerfectTypesRepository {
  async getAll(): Promise<Array<PresentPerfectType>> {
    const promise = await new Promise<Array<PresentPerfectType>>((resolve) => {
      resolve(PresentPerfectTypeDatabase);
    });

    return promise;
  }
}

export { PresentPerfectTypesRepository };
