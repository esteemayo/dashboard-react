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
  info: string;
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
  };
}
