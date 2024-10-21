export type Post = {
  id: string;
  title: string;
  body: string;
};

export const mockedPosts: Post[] = [
  {
    id: "1",
    title: "Night of the Living Dead",
    body: "A group of people hide from bloodthirsty zombies in a farmhouse.",
  },
  {
    id: "2",
    title: "Dawn of the Dead",
    body: "Survivors of a zombie outbreak barricade themselves inside a shopping mall.",
  },
  {
    id: "3",
    title: "The Crazies",
    body: "A small town is infected by a biological weapon that turns people into violent killers.",
  },
  {
    id: "4",
    title: "Zombie",
    body: "A woman investigates her father's disappearance on a Caribbean island plagued by the undead.",
  },
  {
    id: "5",
    title: "The Living Dead at Manchester Morgue",
    body: "Two travelers are accused of murder when corpses begin to rise from their graves.",
  },
];
