type OnPronounciationType = {
  id: number;
  subject: string;
  audioName: string;
  auxiliaryVerb: string;
  pronounciation: string;
};

class OnPronounciation {
  id: number;
  subject: string;
  audioName: string;
  auxiliaryVerb: string;
  pronounciation: string;

  constructor({
    id,
    subject,
    audioName,
    auxiliaryVerb,
    pronounciation,
  }: OnPronounciationType) {
    this.id = id;
    this.subject = subject;
    this.audioName = audioName;
    this.auxiliaryVerb = auxiliaryVerb;
    this.pronounciation = pronounciation;
  }
}

export { OnPronounciation };
