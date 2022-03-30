type PresentPerfectType = {
  id: number;
  typeId: number;
  verb: string;
  subject: string;
  auxiliaryVerb: string;
};

class PresentPerfect {
  id: number;
  typeId: number;
  verb: string;
  subject: string;
  auxiliaryVerb: string;

  constructor({
    id,
    typeId,
    verb,
    subject,
    auxiliaryVerb,
  }: PresentPerfectType) {
    this.id = id;
    this.typeId = typeId;
    this.verb = verb;
    this.subject = subject;
    this.auxiliaryVerb = auxiliaryVerb;
  }
}

export { PresentPerfect };
