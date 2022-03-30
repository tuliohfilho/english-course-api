"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllOnPronounciationsController = void 0;
const tsyringe_1 = require("tsyringe");
const UserCase_1 = require("./UserCase");
class GetAllOnPronounciationsController {
    handle(Request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = tsyringe_1.container.resolve(UserCase_1.GetAllOnPronounciationsUseCase);
            const OnPronounciations = yield service.execute();
            return response.status(200).json(OnPronounciations);
        });
    }
}
exports.GetAllOnPronounciationsController = GetAllOnPronounciationsController;
