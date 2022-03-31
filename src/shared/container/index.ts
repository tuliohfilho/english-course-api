import { container } from "tsyringe";

import { IIrregularVerbsRepository } from "../../modules/irregularVerbs/repositories/IIrregularVerbsRepository";
import { IrregularVerbsRepository } from "../../modules/irregularVerbs/repositories/implementations/IrregularVerbsRepository";
import { OnPronounciationsRepository } from "../../modules/onPronounciations/repositories/implementations/OnPronounciationsRepository";
import { OnPronounciationTypesRepository } from "../../modules/onPronounciations/repositories/implementations/OnPronounciationTypesRepository";
import { IOnPronounciationsRepository } from "../../modules/onPronounciations/repositories/IOnPronounciationsRepository";
import { IOnPronounciationTypesRepository } from "../../modules/onPronounciations/repositories/IOnPronounciationTypesRepository";
import { PresentPerfectsRepository } from "../../modules/presentPerfects/repositories/implementations/PresentPerfectsRepository";
import { PresentPerfectTypesRepository } from "../../modules/presentPerfects/repositories/implementations/PresentPerfectTypesRepository";
import { IPresentPerfectsRepository } from "../../modules/presentPerfects/repositories/IPresentPerfectsRepository";
import { IPresentPerfectTypesRepository } from "../../modules/presentPerfects/repositories/IPresentPerfectTypesRepository";
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

container.registerSingleton<IOnPronounciationTypesRepository>(
  "OnPronounciationTypesRepository",
  OnPronounciationTypesRepository
);

container.registerSingleton<IPresentPerfectsRepository>(
  "PresentPerfectsRepository",
  PresentPerfectsRepository
);

container.registerSingleton<IPresentPerfectTypesRepository>(
  "PresentPerfectTypesRepository",
  PresentPerfectTypesRepository
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
