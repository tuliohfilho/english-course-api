import { OnPronounciation } from "./OnPronounciation";

type OnPronounciationTypeType = {
  id: number;
  title: string;
  description: string;
  onPronounciations?: Array<OnPronounciation>;
};

class OnPronounciationType {
  id: number;
  title: string;
  description: string;
  onPronounciations?: Array<OnPronounciation>;

  constructor({
    id,
    title,
    description,
    onPronounciations,
  }: OnPronounciationTypeType) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.onPronounciations = onPronounciations;
  }
}

export { OnPronounciationType };
