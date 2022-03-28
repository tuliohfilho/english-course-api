import { OnPronounciation } from "../entities/OnPronounciation";

interface IOnPronounciationsRepository {
  getAll(): Promise<Array<OnPronounciation>>;
}

export { IOnPronounciationsRepository };
