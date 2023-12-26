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

type ChartDataUser = {
  name: string;
  users: number;
}[];

type ChartDataProduct = {
  name: string;
  products: number;
}[];

type ChartDataRevenue = {
  name: string;
  revenue: number;
}[];

type ChartDataConversion = {
  name: string;
  ratio: number;
}[];

export interface ChartBoxType {
  color: string;
  icon: string;
  title: string;
  number: string | string;
  dataKey: string;
  percentage: number;
  chartData:
    | ChartDataUser
    | ChartDataProduct
    | ChartDataRevenue
    | ChartDataConversion;
}

export type ChartBoxProps = ChartBoxType;

type RevenueChartData = {
  name: string;
  profit: number;
}[];

type VisitChartData = {
  name: string;
  visit: number;
}[];

export interface BarChartType {
  title: string;
  color: string;
  dataKey: string;
  chartData: RevenueChartData | VisitChartData;
}

export type BarChartBoxProps = BarChartType;

export type PieChartType = {
  name: string;
  value: number;
  color: string;
}[];

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
