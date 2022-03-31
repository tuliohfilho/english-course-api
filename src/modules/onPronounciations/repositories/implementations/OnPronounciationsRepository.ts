import { OnPronounciationsDatabase } from "../../../../database/on-pronounciations";
import { OnPronounciation } from "../../entities/OnPronounciation";
import { IOnPronounciationsRepository } from "../IOnPronounciationsRepository";

class OnPronounciationsRepository implements IOnPronounciationsRepository {
  async getByTypeId(typeId: number): Promise<Array<OnPronounciation>> {
    const promise = await new Promise<Array<OnPronounciation>>((resolve) => {
      const arr = OnPronounciationsDatabase.filter(
        (op) => op.typeId === typeId
      );

      resolve(arr);
    });

    return promise;
  }
}

export { OnPronounciationsRepository };
