import { PresentPerfect } from "../entities/PresentPerfect";

interface IPresentPerfectsRepository {
  getAll(): Promise<Array<PresentPerfect>>;
}

export { IPresentPerfectsRepository };
