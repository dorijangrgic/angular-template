export interface NavigationItem {
  id?: string;
  title?: string;
  icon?: string;
  type?: string;
  link?: string;
  children?: NavigationItem[];
};
