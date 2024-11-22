import { MenuItem } from "./types";
export const menuData: MenuItem[] = [
  {
    id: "1",
    label: "SHOP",
    sections: [
      {
        id: "1-1",
        title: "ALBUMS",
        items: [
          { id: "1-1-1", label: "NEW ARRIVALS", link: "/product1" },
          { id: "1-1-2", label: "BEST SELLERS", link: "/product2" },
          { id: "1-1-3", label: "UPCOMING ALBUMS", link: "/product3" },
        ],
      },
      {
        id: "1-2",
        title: "MERCH",
        items: [
          { id: "1-2-1", label: "LIGHT STICKS", link: "/product4" },
          { id: "1-2-2", label: "MAGAZINES", link: "/product5" },
          { id: "1-2-3", label: "PHOTOBOOKS", link: "/product6" },
        ],
      },
      {
        id: "1-3",
        title: "ACCESSORIES",
        items: [
          { id: "1-3-1", label: "PHOTOCARDS", link: "/product7" },
          { id: "1-3-2", label: "PHOTOCARD BOOKS", link: "/product8" },
          { id: "1-3-3", label: "MAGAZINES", link: "/product9" },
        ],
      },
      {
        id: "1-4",
        title: "CLOTHING",
        items: [
          { id: "1-4-1", label: "COLLABS", link: "/product10" },
          { id: "1-4-2", label: "HOODIES", link: "/product11" },
          { id: "1-4-3", label: "HATS", link: "/product12" },
        ],
      },
    ],
  },
];
