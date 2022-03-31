import { OnPronounciation } from "../entities/OnPronounciation";

interface IOnPronounciationsRepository {
  getByTypeId(typeId: number): Promise<Array<OnPronounciation>>;
}

export { IOnPronounciationsRepository };
