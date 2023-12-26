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

export type AreaChartType = {
  name: string;
  books: number;
  clothes: number;
  electronics: number;
}[];

export type UserType = {
  id: number;
  img: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  createdAt: string;
  verified?: boolean;
}[];

export type ProductType = {
  id: number;
  img: string;
  title: string;
  color: string;
  producer: string;
  price: string;
  createdAt: string;
  inStock?: boolean;
}[];

export interface DataTableProps {
  columns: GridColDef[];
  rows: UserType | ProductType;
  slug: string;
}

export interface SingleUserType {
  id: number;
  title: string;
  img: string;
  info: {
    username: string;
    fullname: string;
    email: string;
    phone: string;
    status: string;
  };
  chart: {
    dataKeys: {
      name: string;
      color: string;
    }[];
    data: {
      name: string;
      visits: number;
      clicks: number;
    }[];
  };
  activities: {
    text: string;
    time: string;
  }[];
}

export interface SingleProductType {
  id: number;
  title: string;
  img: string;
  info: {
    productId: string;
    color: string;
    price: string;
    producer: string;
    export: string;
  };
  chart: {
    dataKeys: {
      name: string;
      color: string;
    }[];
    data: {
      name: string;
      visits: number;
      orders: number;
    }[];
  };
  activities: {
    text: string;
    time: string;
  }[];
}

export interface AddProps {
  slug: string;
  columns: GridColDef[];
  isOpen: boolean;
  onClose(): void;
}

export type SingleProps = SingleUserType | SingleProductType;
