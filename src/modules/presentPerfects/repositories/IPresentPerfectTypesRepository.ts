import { PresentPerfectType } from "../entities/PresentPerfectType";

interface IPresentPerfectTypesRepository {
  getAll(): Promise<Array<PresentPerfectType>>;
}

export { IPresentPerfectTypesRepository };
