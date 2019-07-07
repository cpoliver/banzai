import { generate as id } from "shortid";

// @ts-ignore
export const labels = {
  dev: {
    id: id(),
    title: "Development",
    color: "#0019FF",
  },
  design: {
    id: id(),
    title: "Design",
    color: "#DB00FF",
  },
  planning: {
    id: id(),
    title: "Planning",
    color: "#00E168",
  },
};
