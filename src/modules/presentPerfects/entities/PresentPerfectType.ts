import { PresentPerfect } from "./PresentPerfect";

type PresentPerfectTypeType = {
  id: number;
  title: string;
  description: string;
  presentPerfects?: Array<PresentPerfect>;
};

class PresentPerfectType {
  id: number;
  title: string;
  description: string;
  presentPerfects?: Array<PresentPerfect>;

  constructor({
    id,
    title,
    description,
    presentPerfects,
  }: PresentPerfectTypeType) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.presentPerfects = presentPerfects;
  }
}

export { PresentPerfectType };
