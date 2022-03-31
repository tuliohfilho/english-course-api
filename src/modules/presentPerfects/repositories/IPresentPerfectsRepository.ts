import { PresentPerfect } from "../entities/PresentPerfect";

interface IPresentPerfectsRepository {
  getByTypeId(typeId: number): Promise<Array<PresentPerfect>>;
}

export { IPresentPerfectsRepository };
