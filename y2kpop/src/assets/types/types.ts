// types.ts
export interface SubMenuItem {
  id: string;
  label: string;
  link: string;
}

export interface MenuSection {
  id: string;
  title: string;
  items: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  label: string;
  sections: MenuSection[];
}

export interface MegaMenuProps {
  items: MenuItem[];
}
