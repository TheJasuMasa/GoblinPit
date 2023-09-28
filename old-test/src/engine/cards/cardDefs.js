import * as affns from "./afflictionDefs";

export const cards = {
  bite: {
    name: "bite",
    afflictions: [affns.exsanguination],
    apply(self, target) {},
    sMsg(self, target) {
      return `${self} gnashes at ${target} opening up a bleeding wound! (+1 bleeding)`;
    },
    fMsg(self, target) {
      return `${self} gnashes at ${target}, but does not connect!`;
    },
  },
};
