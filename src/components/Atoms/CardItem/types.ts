export type TCardItem = {
  image?: string;
  author?: string[] | string;
  name: string;
  id: string;
  type: "artist" | "album";
};
