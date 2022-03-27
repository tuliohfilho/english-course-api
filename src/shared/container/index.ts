import { container } from "tsyringe";

import { IIrregularVerbsRepository } from "../../modules/irregularVerbs/repositories/IIrregularVerbsRepository";
import { IrregularVerbsRepository } from "../../modules/irregularVerbs/repositories/implementations/IrregularVerbsRepository";

container.registerSingleton<IIrregularVerbsRepository>(
  "IrregularVerbsRepository",
  IrregularVerbsRepository
);
