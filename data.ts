export type Post = {
  id: string;
  title: string;
  body: string;
  userId: string;
};

export type PostCreate = Omit<Post, "id" | "userId">;

export type User = {
  uid: string;
  name: string;
};

export const mockedUsers: User[] = [
  {
    uid: "1",
    name: "George A. Romero",
  },
  {
    uid: "2",
    name: "Lucio Fulci",
  },
  {
    uid: "3",
    name: "Dan O'Bannon",
  },
  {
    uid: "4",
    name: "David Cronenberg",
  },
  {
    uid: "5",
    name: "Wes Craven",
  },
];

export const mockedPosts: Post[] = [
  {
    id: "1",
    title: "Night of the Living Dead",
    body: "A group of people hide from bloodthirsty zombies in a farmhouse.",
    userId: "2",
  },
  {
    id: "2",
    title: "Dawn of the Dead",
    body: "Survivors of a zombie outbreak barricade themselves inside a shopping mall.",
    userId: "1",
  },
  {
    id: "3",
    title: "The Crazies",
    body: "A small town is infected by a biological weapon that turns people into violent killers.",
    userId: "3",
  },
  {
    id: "4",
    title: "Zombie",
    body: "A woman investigates her father's disappearance on a Caribbean island plagued by the undead.",
    userId: "1",
  },
  {
    id: "5",
    title: "The Living Dead at Manchester Morgue",
    body: "Two travelers are accused of murder when corpses begin to rise from their graves.",
    userId: "2",
  },
];
