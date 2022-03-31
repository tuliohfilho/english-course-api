import { OnPronounciationType } from "../entities/OnPronounciationType";

interface IOnPronounciationTypesRepository {
  getAll(): Promise<Array<OnPronounciationType>>;
}

export { IOnPronounciationTypesRepository };
