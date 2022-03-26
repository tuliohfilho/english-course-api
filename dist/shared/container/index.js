"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const IrregularVerbsRepository_1 = require("../../modules/irregularVerbs/repositories/implementations/IrregularVerbsRepository");
tsyringe_1.container.registerSingleton("IrregularVerbsRepository", IrregularVerbsRepository_1.IrregularVerbsRepository);
