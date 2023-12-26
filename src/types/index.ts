import { GridColDef } from '@mui/x-data-grid';

interface ListItem {
  id: number;
  title: string;
  url: string;
  icon: string;
}

export type MenuType = {
  id: number;
  title: string;
  listItems: ListItem[];
}[];

export type TopDealUser = {
  id: number;
  img: string;
  username: string;
  email: string;
  amount: number;
}[];

export interface ChartBoxUser {
  color: string;
  icon: string;
  title: string;
  number: string | string;
  dataKey: string;
  percentage: number;
  chartData: {
    name: string;
    users: number;
  }[];
}

export interface ChartBoxProduct {
  color: string;
  icon: string;
  title: string;
  number: string | string;
  dataKey: string;
  percentage: number;
  chartData: {
    name: string;
    products: number;
  }[];
}

export interface ChartBoxProps {
  color: string;
  icon: string;
  title: string;
  number: number | string;
  dataKey: string;
  percentage: number;
  chartData: object[];
}

export interface BarChatBoxProps {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
}

export interface DataTableProps {
  columns: GridColDef[];
  rows: object[];
  slug: string;
}

export interface AddProps {
  slug: string;
  columns: GridColDef[];
  isOpen: boolean;
  onClose(): void;
}

export interface SingleProps {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: {
      name: string;
      color: string;
    }[];
    data: object[];
  };
  activities?: {
    time: string;
    text: string;
  }[];
}
