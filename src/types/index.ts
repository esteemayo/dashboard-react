import { GridColDef } from '@mui/x-data-grid';

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
