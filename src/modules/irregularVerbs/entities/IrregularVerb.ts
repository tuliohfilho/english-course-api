type IrregularVerbType = {
  id: number;
  translation: string;
  infinitve: string;
  past: string;
  pastParticiple: string;
  audioName: string;
};

class IrregularVerb {
  id: number;
  translation: string;
  infinitve: string;
  past: string;
  pastParticiple: string;
  audioName: string;

  constructor({
    id,
    past,
    audioName,
    infinitve,
    translation,
    pastParticiple,
  }: IrregularVerbType) {
    this.id = id;
    this.past = past;
    this.audioName = audioName;
    this.infinitve = infinitve;
    this.translation = translation;
    this.pastParticiple = pastParticiple;
  }
}

export { IrregularVerb };
