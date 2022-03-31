import { PresentPerfectType } from "../modules/presentPerfects/entities/PresentPerfectType";

const PresentPerfectTypeDatabase: Array<PresentPerfectType> = [
  new PresentPerfectType({
    id: 1,
    title: "Long Form",
    description: "",
  }),
  new PresentPerfectType({
    id: 2,
    title: "Short Form",
    description: "",
  }),
];

export { PresentPerfectTypeDatabase };
