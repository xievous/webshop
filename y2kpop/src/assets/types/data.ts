import { MenuItem } from "./types";
export const menuData: MenuItem[] = [
  {
    id: "1",
    label: "Products",
    sections: [
      {
        id: "1-1",
        title: "Product Category 1",
        items: [
          { id: "1-1-1", label: "Product 1", link: "/product1" },
          { id: "1-1-2", label: "Product 2", link: "/product2" },
        ],
      },
      {
        id: "1-2",
        title: "Product Category 2",
        items: [
          { id: "1-2-1", label: "Product 3", link: "/product3" },
          { id: "1-2-2", label: "Product 4", link: "/product4" },
        ],
      },
      {
        id: "1-3",
        title: "Product Category 3",
        items: [
          { id: "1-3-1", label: "Product 5", link: "/product5" },
          { id: "1-3-2", label: "Product 6", link: "/product6" },
        ],
      },
      {
        id: "1-4",
        title: "Product Category 4",
        items: [
          { id: "1-4-1", label: "Product 7", link: "/product7" },
          { id: "1-4-2", label: "Product 8", link: "/product8" },
        ],
      },
    ],
  },
];
