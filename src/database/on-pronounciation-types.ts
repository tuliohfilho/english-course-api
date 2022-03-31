import { OnPronounciationType } from "../modules/onPronounciations/entities/OnPronounciationType";

const OnPronounciationTypesDatabase: Array<OnPronounciationType> = [
  new OnPronounciationType({
    id: 1,
    title: "Simple Present Tense",
    description: "",
  }),
  new OnPronounciationType({
    id: 2,
    title: "Simple Past Tense",
    description: "",
  }),
];

export { OnPronounciationTypesDatabase };
