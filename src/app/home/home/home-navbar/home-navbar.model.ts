export interface MenuNode {
  name: string;
  route: string;
  children?: MenuNode[];
}

export interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  route: string;
}
