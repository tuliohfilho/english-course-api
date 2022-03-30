"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pronoun = void 0;
class Pronoun {
    constructor({ id, typeId, subject, translations }) {
        this.id = id;
        this.typeId = typeId;
        this.subject = subject;
        this.translations = translations;
    }
}
exports.Pronoun = Pronoun;
