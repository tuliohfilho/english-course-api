import { container } from "tsyringe";

import { IIrregularVerbsRepository } from "../../modules/irregularVerbs/repositories/IIrregularVerbsRepository";
import { IrregularVerbsRepository } from "../../modules/irregularVerbs/repositories/implementations/IrregularVerbsRepository";
import { OnPronounciationsRepository } from "../../modules/onPronounciations/repositories/implementations/OnPronounciationsRepository";
import { IOnPronounciationsRepository } from "../../modules/onPronounciations/repositories/IOnPronounciationsRepository";
import { PresentPerfectsRepository } from "../../modules/presentPerfects/repositories/implementations/PresentPerfectsRepository";
import { IPresentPerfectsRepository } from "../../modules/presentPerfects/repositories/IPresentPerfectsRepository";
import { PronounCategoriesRepository } from "../../modules/pronouns/repositories/implementations/PronounCategoriesRepository";
import { PronounsRepository } from "../../modules/pronouns/repositories/implementations/PronounsRepository";
import { PronounTypesRepository } from "../../modules/pronouns/repositories/implementations/PronounTypesRepository";
import { IPronounCategoriesRepository } from "../../modules/pronouns/repositories/IPronounCategoriesRepository";
import { IPronounsRepository } from "../../modules/pronouns/repositories/IPronounsRepository";
import { IPronounTypesRepository } from "../../modules/pronouns/repositories/IPronounTypesRepository";

container.registerSingleton<IIrregularVerbsRepository>(
  "IrregularVerbsRepository",
  IrregularVerbsRepository
);

container.registerSingleton<IOnPronounciationsRepository>(
  "OnPronounciationsRepository",
  OnPronounciationsRepository
);

container.registerSingleton<IPresentPerfectsRepository>(
  "PresentPerfectsRepository",
  PresentPerfectsRepository
);

container.registerSingleton<IPronounsRepository>(
  "PronounsRepository",
  PronounsRepository
);

container.registerSingleton<IPronounTypesRepository>(
  "PronounTypesRepository",
  PronounTypesRepository
);

container.registerSingleton<IPronounCategoriesRepository>(
  "PronounCategoriesRepository",
  PronounCategoriesRepository
);
