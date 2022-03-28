import { OnPronounciationsDatabase } from "../../../../database/on-pronounciations";
import { OnPronounciation } from "../../entities/OnPronounciation";
import { IOnPronounciationsRepository } from "../IOnPronounciationsRepository";

class OnPronounciationsRepository implements IOnPronounciationsRepository {
  async getAll(): Promise<Array<OnPronounciation>> {
    const promise = await new Promise<Array<OnPronounciation>>((resolve) => {
      resolve(OnPronounciationsDatabase);
    });

    return promise;
  }
}

export { OnPronounciationsRepository };
