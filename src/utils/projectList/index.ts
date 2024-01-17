interface IProject {
  name: string;
  type?: string;
  skills: string[];
}

const projectList: IProject[] = [
  {
    name: "Soma Store",
    type: "Grupo Soma",
    skills: ["Typescript", "CSS-in-JS", "React", "Redux", "Figma"],
  },
  {
    name: "+Vendas",
    type: "Grupo Soma",
    skills: ["Javascript", "Material UI", "React", "Redux", "Figma"],
  },
  {
    name: "Sim Resolvemos",
    skills: ["Javascript", "CSS-in-JS", "React", "Figma"],
  },
];

export { projectList };
