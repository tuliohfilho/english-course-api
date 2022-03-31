import { OnPronounciationTypesDatabase } from "../../../../database/on-pronounciation-types";
import { OnPronounciationType } from "../../entities/OnPronounciationType";
import { IOnPronounciationTypesRepository } from "../IOnPronounciationTypesRepository";

class OnPronounciationTypesRepository
  implements IOnPronounciationTypesRepository
{
  async getAll(): Promise<Array<OnPronounciationType>> {
    const promise = await new Promise<Array<OnPronounciationType>>(
      (resolve) => {
        resolve(OnPronounciationTypesDatabase);
      }
    );

    return promise;
  }
}

export { OnPronounciationTypesRepository };
