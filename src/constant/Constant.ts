// Hack to force minimum 2 lines
const TWO_LINE_CHAR_HACK = "\n\u00A0";

const INITIAL_INVENTORIES = [
  {
    id: 1,
    name: "Cartier ring",
    purchasePrice: 5780,
    type: "JEWELRY",
    description: "Gift from my grandfather",
    photo: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
  },
  {
    id: 2,
    name: "Guitar",
    purchasePrice: 850,
    type: "MUSIC_INSTRUMENT",
    photo: "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
  },
];

export const Constants = {
  TWO_LINE_CHAR_HACK,
  INITIAL_INVENTORIES,
};
