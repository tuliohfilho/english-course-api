type OnPronounciationType = {
  id: number;
  typeId: number;
  subject: string;
  audioName: string;
  auxiliaryVerb: string;
  pronounciation: string;
};

class OnPronounciation {
  id: number;
  typeId: number;
  subject: string;
  audioName: string;
  auxiliaryVerb: string;
  pronounciation: string;

  constructor({
    id,
    typeId,
    subject,
    audioName,
    auxiliaryVerb,
    pronounciation,
  }: OnPronounciationType) {
    this.id = id;
    this.typeId = typeId;
    this.subject = subject;
    this.audioName = audioName;
    this.auxiliaryVerb = auxiliaryVerb;
    this.pronounciation = pronounciation;
  }
}

export { OnPronounciation };
