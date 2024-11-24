export interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const items: Item[] = [
  {
    id: 1,
    title: "Lovely Weather",
    description: "dog sitting in a field of autumn leaves",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ugzuoa5H0Qgu9NrJIFVO9A.jpeg",
  },
  {
    id: 2,
    title: "Sunny Weather",
    description:
      "Four people sitting on a sidewalk bench, most wearing sunglasses and heels and one with a big brown dog, in a city on a sunny day.",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*tTPd5DxCIq9aPJ-d",
  },
  {
    id: 3,
    title: "Maldives",
    description: "Beautiful nature scene in Maldives",
    image:
      "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Adventure",
    description: "An adventurous trip to the mountains",
    image:
      "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
