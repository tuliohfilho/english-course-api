import { container } from "tsyringe";

import { IIrregularVerbsRepository } from "../../modules/irregularVerbs/repositories/IIrregularVerbsRepository";
import { IrregularVerbsRepository } from "../../modules/irregularVerbs/repositories/implementations/IrregularVerbsRepository";
import { OnPronounciationsRepository } from "../../modules/onPronounciations/repositories/implementations/OnPronounciationsRepository";
import { IOnPronounciationsRepository } from "../../modules/onPronounciations/repositories/IOnPronounciationsRepository";

container.registerSingleton<IIrregularVerbsRepository>(
  "IrregularVerbsRepository",
  IrregularVerbsRepository
);

container.registerSingleton<IOnPronounciationsRepository>(
  "OnPronounciationsRepository",
  OnPronounciationsRepository
);
