"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const IrregularVerbsRepository_1 = require("../../modules/irregularVerbs/repositories/implementations/IrregularVerbsRepository");
const OnPronounciationsRepository_1 = require("../../modules/onPronounciations/repositories/implementations/OnPronounciationsRepository");
tsyringe_1.container.registerSingleton("IrregularVerbsRepository", IrregularVerbsRepository_1.IrregularVerbsRepository);
tsyringe_1.container.registerSingleton("OnPronounciationsRepository", OnPronounciationsRepository_1.OnPronounciationsRepository);
