import { GridColDef } from '@mui/x-data-grid';

import {
  AreaChartType,
  BarChartType,
  ChartBoxType,
  MenuType,
  PieChartType,
  ProductType,
  SingleProductType,
  SingleUserType,
  TopDealUser,
  UserType,
} from '../types';

export const menu: MenuType = [
  {
    id: 1,
    title: 'main',
    listItems: [
      {
        id: 1,
        title: 'Home',
        url: '/',
        icon: '/home.svg',
      },
      {
        id: 2,
        title: 'Profile',
        url: '/users/1',
        icon: '/user.svg',
      },
    ],
  },
  {
    id: 2,
    title: 'lists',
    listItems: [
      {
        id: 1,
        title: 'Users',
        url: '/users',
        icon: '/user.svg',
      },
      {
        id: 2,
        title: 'Products',
        url: '/products',
        icon: '/product.svg',
      },
      {
        id: 3,
        title: 'Orders',
        url: '/orders',
        icon: '/order.svg',
      },
      {
        id: 4,
        title: 'Posts',
        url: '/posts',
        icon: '/post.svg',
      },
    ],
  },
  {
    id: 3,
    title: 'general',
    listItems: [
      {
        id: 1,
        title: 'Elements',
        url: '/',
        icon: '/element.svg',
      },
      {
        id: 2,
        title: 'Notes',
        url: '/',
        icon: '/note.svg',
      },
      {
        id: 3,
        title: 'Forms',
        url: '/',
        icon: '/form.svg',
      },
      {
        id: 4,
        title: 'Calendar',
        url: '/',
        icon: '/calendar.svg',
      },
    ],
  },
  {
    id: 4,
    title: 'Maintenance',
    listItems: [
      {
        id: 1,
        title: 'Settings',
        url: '/',
        icon: '/setting.svg',
      },
      {
        id: 2,
        title: 'Backups',
        url: '/',
        icon: '/backup.svg',
      },
    ],
  },
  {
    id: 5,
    title: 'analytics',
    listItems: [
      {
        id: 1,
        title: 'Charts',
        url: '/',
        icon: '/chart.svg',
      },
      {
        id: 2,
        title: 'Logs',
        url: '/',
        icon: '/log.svg',
      },
    ],
  },
];

export const topDealUsers: TopDealUser = [
  {
    id: 1,
    img: '/user-1.jpeg',
    username: 'Elva McDonald',
    email: 'elva@gmail.com',
    amount: 3.668,
  },
  {
    id: 2,
    img: '/user-2.webp',
    username: 'Linnie Nelson',
    email: 'linnie@gmail.com',
    amount: 3.256,
  },
  {
    id: 3,
    img: '/user-3.jpeg',
    username: 'Brent Reeves',
    email: 'brent@gmail.com',
    amount: 2.998,
  },
  {
    id: 4,
    img: '/user-4.webp',
    username: 'Adeline Watson',
    email: 'adeline@gmail.com',
    amount: 2.512,
  },
  {
    id: 5,
    img: '/user-5.webp',
    username: 'Juan Harrington',
    email: 'juan@gmail.com',
    amount: 2.134,
  },
  {
    id: 6,
    img: '/user-6.jpeg',
    username: 'Augusta McGee',
    email: 'augusta@gmail.com',
    amount: 1.932,
  },
  {
    id: 7,
    img: '/user-7.webp',
    username: 'Angel Thomas',
    email: 'angel@gmail.com',
    amount: 1.56,
  },
];

export const chartBoxUser: ChartBoxType = {
  color: '#8884d8',
  icon: '/userIcon.svg',
  title: 'Total Users',
  number: '11.238',
  dataKey: 'users',
  percentage: 45,
  chartData: [
    { name: 'Sun', users: 400 },
    { name: 'Mon', users: 600 },
    { name: 'Tue', users: 500 },
    { name: 'Wed', users: 700 },
    { name: 'Thu', users: 400 },
    { name: 'Fri', users: 500 },
    { name: 'Sat', users: 450 },
  ],
};

export const chartBoxProduct: ChartBoxType = {
  color: 'skyblue',
  icon: '/productIcon.svg',
  title: 'Total Products',
  number: '238',
  dataKey: 'products',
  percentage: 21,
  chartData: [
    { name: 'Sun', products: 400 },
    { name: 'Mon', products: 600 },
    { name: 'Tue', products: 500 },
    { name: 'Wed', products: 700 },
    { name: 'Thu', products: 400 },
    { name: 'Fri', products: 500 },
    { name: 'Sat', products: 450 },
  ],
};

export const chartBoxRevenue: ChartBoxType = {
  color: 'teal',
  icon: '/revenueIcon.svg',
  title: 'Total Revenue',
  number: '$56.432',
  dataKey: 'revenue',
  percentage: -12,
  chartData: [
    { name: 'Sun', revenue: 400 },
    { name: 'Mon', revenue: 600 },
    { name: 'Tue', revenue: 500 },
    { name: 'Wed', revenue: 700 },
    { name: 'Thu', revenue: 400 },
    { name: 'Fri', revenue: 500 },
    { name: 'Sat', revenue: 450 },
  ],
};

export const chartBoxConversion: ChartBoxType = {
  color: 'gold',
  icon: '/conversionIcon.svg',
  title: 'Total Ratio',
  number: '2.6',
  dataKey: 'ratio',
  percentage: 12,
  chartData: [
    { name: 'Sun', ratio: 400 },
    { name: 'Mon', ratio: 600 },
    { name: 'Tue', ratio: 500 },
    { name: 'Wed', ratio: 700 },
    { name: 'Thu', ratio: 400 },
    { name: 'Fri', ratio: 500 },
    { name: 'Sat', ratio: 450 },
  ],
};

export const barChartBoxRevenue: BarChartType = {
  title: 'Profit Earned',
  color: '#8884d8',
  dataKey: 'profit',
  chartData: [
    {
      name: 'Sun',
      profit: 4000,
    },
    {
      name: 'Mon',
      profit: 3000,
    },
    {
      name: 'Tue',
      profit: 2000,
    },
    {
      name: 'Wed',
      profit: 2780,
    },
    {
      name: 'Thu',
      profit: 1890,
    },
    {
      name: 'Fri',
      profit: 2390,
    },
    {
      name: 'Sat',
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit: BarChartType = {
  title: 'Total Visit',
  color: '#FF8042',
  dataKey: 'visit',
  chartData: [
    {
      name: 'Sun',
      visit: 4000,
    },
    {
      name: 'Mon',
      visit: 3000,
    },
    {
      name: 'Tue',
      visit: 2000,
    },
    {
      name: 'Wed',
      visit: 2780,
    },
    {
      name: 'Thu',
      visit: 1890,
    },
    {
      name: 'Fri',
      visit: 2390,
    },
    {
      name: 'Sat',
      visit: 3490,
    },
  ],
};

export const pieChartData: PieChartType = [
  {
    name: 'Mobile',
    value: 400,
    color: '#0088FE',
  },
  {
    name: 'Desktop',
    value: 300,
    color: '#00C49F',
  },
  {
    name: 'Laptop',
    value: 300,
    color: '#FFBB28',
  },
  {
    name: 'Tablet',
    value: 200,
    color: '#FF8042',
  },
];

export const areaChartData: AreaChartType = [
  {
    name: 'Sun',
    books: 4000,
    clothes: 2400,
    electronics: 2400,
  },
  {
    name: 'Mon',
    books: 3000,
    clothes: 1398,
    electronics: 2210,
  },
  {
    name: 'Tue',
    books: 2000,
    clothes: 9800,
    electronics: 2290,
  },
  {
    name: 'Wed',
    books: 2780,
    clothes: 3908,
    electronics: 2000,
  },
  {
    name: 'Thu',
    books: 1890,
    clothes: 4800,
    electronics: 2181,
  },
  {
    name: 'Fri',
    books: 2390,
    clothes: 3800,
    electronics: 2500,
  },
  {
    name: 'Sat',
    books: 3490,
    clothes: 4300,
    electronics: 2100,
  },
];

export const userRows: UserType = [
  {
    id: 1,
    img: '/user-1.jpeg',
    lastName: 'Hubbard',
    firstName: 'Eula',
    email: 'kewez@@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
    verified: true,
  },
  {
    id: 2,
    img: '/user-8.jpeg',
    lastName: 'Manning',
    firstName: 'Stella',
    email: 'comhuhmit@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
    verified: true,
  },
  {
    id: 3,
    img: '/user-9.jpeg',
    lastName: 'Greer',
    firstName: 'Mary',
    email: 'ujudokon@hottmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
    verified: true,
  },
  {
    id: 4,
    img: '/user-10.jpeg',
    lastName: 'Williamson',
    firstName: 'Mildred',
    email: 'tinhavabe@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
    verified: true,
  },
  {
    id: 5,
    img: '/user-11.jpeg',
    lastName: 'Gross',
    firstName: 'Jose',
    email: 'gobtagbes@yahoo.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
  },
  {
    id: 6,
    img: '/user-12.webp',
    lastName: 'Sharp',
    firstName: 'Jeremy',
    email: 'vulca.eder@mail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
    verified: true,
  },
  {
    id: 7,
    img: '/user-13.jpeg',
    lastName: 'Lowe',
    firstName: 'Christina',
    email: 'reso.bilic@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
  },
  {
    id: 8,
    img: '/user-14.jpeg',
    lastName: 'Dean',
    firstName: 'Garrett',
    email: 'codaic@mail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
    verified: true,
  },
  {
    id: 9,
    img: '/user-15.webp',
    lastName: 'Parsons',
    firstName: 'Leah',
    email: 'uzozor@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
  },
  {
    id: 10,
    img: '/user-16.webp',
    lastName: 'Reid',
    firstName: 'Elnora',
    email: 'tuhkabapu@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
    verified: true,
  },
  {
    id: 11,
    img: '/user-17.jpeg',
    lastName: 'Dunn',
    firstName: 'Gertrude',
    email: 'gibo@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
    verified: true,
  },
  {
    id: 12,
    img: '/user-18.webp',
    lastName: 'Williams',
    firstName: 'Mark',
    email: 'tic.harvey@hotmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
  },
  {
    id: 13,
    img: '/user-19.webp',
    lastName: 'Cruz',
    firstName: 'Charlotte',
    email: 'ceuc@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
  },
  {
    id: 14,
    img: '/user-13.webp',
    lastName: 'Harper',
    firstName: 'Sara',
    email: 'bafuv@hotmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
  },
  {
    id: 15,
    img: '/user-1.jpeg',
    lastName: 'Griffin',
    firstName: 'Eric',
    email: 'ubi@gmail.com',
    phone: '123 456 789',
    createdAt: '01.02.2023',
  },
];

export const userColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 90,
    renderCell: (params) => {
      return (
        <img
          src={params.row.img ?? '/noavatar.png'}
          alt={params.row.firstName}
        />
      );
    },
  },
  {
    field: 'firstName',
    type: 'string',
    headerName: 'First name',
    width: 130,
    editable: true,
  },
  {
    field: 'lastName',
    type: 'string',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    type: 'string',
    headerName: 'Email',
    width: 200,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: 'verified',
    headerName: 'Verified',
    type: 'boolean',
    width: 70,
    editable: true,
  },
];

export const products: ProductType = [
  {
    id: 1,
    img: '/product-1.webp',
    title: 'Playstation 5 Digital Edition',
    color: 'white',
    producer: 'Sony',
    price: '$250.99',
    createdAt: '01.02.2023',
    inStock: true,
  },
  {
    id: 2,
    img: '/product-2.png',
    title: 'Dell Laptop KR211822',
    color: 'black',
    producer: 'Dell',
    price: '$499.99',
    createdAt: '01.02.2023',
    inStock: true,
  },
  {
    id: 3,
    img: '/product-3.webp',
    title: 'Samsung TV 4K SmartTV',
    color: 'gray',
    producer: 'Samsung',
    price: '$999.49',
    createdAt: '01.02.2023',
    inStock: true,
  },
  {
    id: 4,
    img: '/product-4.avif',
    title: 'Apple Iphone 14 Pro Max',
    color: 'white',
    producer: 'Apple',
    price: '$799.49',
    createdAt: '01.02.2023',
    inStock: true,
  },
  {
    id: 5,
    img: '/product-5.png',
    title: 'Philips Hue Play Gradient',
    color: 'rainbow',
    producer: 'Philips',
    price: '$39.99',
    createdAt: '01.02.2023',
  },
  {
    id: 6,
    img: '/product-6.avif.crdownload',
    title: 'Logitech MX Master 3',
    color: 'black',
    producer: 'Logitech',
    price: '$59.49',
    createdAt: '01.02.2023',
    inStock: true,
  },
  {
    id: 7,
    img: '/product-7.png',
    title: 'Rode Podcast Microphone',
    color: 'gray',
    producer: 'Rode',
    price: '$119.49',
    createdAt: '01.02.2023',
  },
  {
    id: 8,
    img: '/product-8.webp',
    title: 'Toshiba Split AC 2',
    color: 'white',
    producer: 'Toshiba',
    price: '$899.99',
    createdAt: '01.02.2023',
    inStock: true,
  },
  {
    id: 9,
    img: '/product-9.webp',
    title: 'Sony Bravia KDL-47W805A',
    color: 'black',
    producer: 'Sony',
    price: '$970.49',
    createdAt: '01.02.2023',
  },
  {
    id: 10,
    img: '/product-10.webp',
    title: 'Acer Laptop 16 KL-4804',
    color: 'black',
    producer: 'Acer',
    price: '$599.99',
    createdAt: '01.02.2023',
    inStock: true,
  },
];

export const productColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Image',
    width: 90,
    renderCell: (params) => {
      return (
        <img src={params.row.img ?? '/noavatar.png'} alt={params.row.title} />
      );
    },
  },
  {
    field: 'title',
    type: 'string',
    headerName: 'Title',
    width: 250,
  },
  {
    field: 'color',
    type: 'string',
    headerName: 'Color',
    width: 90,
  },
  {
    field: 'price',
    type: 'string',
    headerName: 'Price',
    width: 150,
  },
  {
    field: 'producer',
    headerName: 'Producer',
    type: 'string',
    width: 150,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 150,
    type: 'string',
  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    width: 70,
    type: 'boolean',
  },
];

export const singleUser: SingleUserType = {
  id: 1,
  title: 'John Doe',
  img: 'https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
  info: {
    username: 'Johndoe99',
    fullname: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '123 456 789',
    status: 'verified',
  },
  chart: {
    dataKeys: [
      { name: 'visits', color: '#82ca9d' },
      { name: 'clicks', color: '#8884d8' },
    ],
    data: [
      {
        name: 'Sun',
        visits: 4000,
        clicks: 2400,
      },
      {
        name: 'Mon',
        visits: 3000,
        clicks: 1398,
      },
      {
        name: 'Tue',
        visits: 2000,
        clicks: 3800,
      },
      {
        name: 'Wed',
        visits: 2780,
        clicks: 3908,
      },
      {
        name: 'Thu',
        visits: 1890,
        clicks: 4800,
      },
      {
        name: 'Fri',
        visits: 2390,
        clicks: 3800,
      },
      {
        name: 'Sat',
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: 'John Doe purchased Playstation 5 Digital Edition',
      time: '3 day ago',
    },
    {
      text: 'John Doe added 3 items into their wishlist',
      time: '1 week ago',
    },
    {
      text: 'John Doe purchased Sony Bravia KD-32w800',
      time: '2 weeks ago',
    },
    {
      text: 'John Doe reviewed a product',
      time: '1 month ago',
    },
    {
      text: 'John Doe added 1 items into their wishlist',
      time: '1 month ago',
    },
    {
      text: 'John Doe reviewed a product',
      time: '2 months ago',
    },
  ],
};
export const singleProduct: SingleProductType = {
  id: 1,
  title: 'Playstation 5 Digital Edition',
  img: 'https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png',
  info: {
    productId: 'Ps5SDF1156d',
    color: 'white',
    price: '$250.99',
    producer: 'Sony',
    export: 'Japan',
  },
  chart: {
    dataKeys: [
      { name: 'visits', color: '#82ca9d' },
      { name: 'orders', color: '#8884d8' },
    ],
    data: [
      {
        name: 'Sun',
        visits: 4000,
        orders: 2400,
      },
      {
        name: 'Mon',
        visits: 3000,
        orders: 1398,
      },
      {
        name: 'Tue',
        visits: 2000,
        orders: 3800,
      },
      {
        name: 'Wed',
        visits: 2780,
        orders: 3908,
      },
      {
        name: 'Thu',
        visits: 1890,
        orders: 4800,
      },
      {
        name: 'Fri',
        visits: 2390,
        orders: 3800,
      },
      {
        name: 'Sat',
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: 'John Doe purchased Playstation 5 Digital Edition',
      time: '3 day ago',
    },
    {
      text: 'Jane Doe added Playstation 5 Digital Edition into their wishlist',
      time: '1 week ago',
    },
    {
      text: 'Mike Doe purchased Playstation 5 Digital Edition',
      time: '2 weeks ago',
    },
    {
      text: 'Anna Doe reviewed the product',
      time: '1 month ago',
    },
    {
      text: 'Michael Doe added Playstation 5 Digital Edition into their wishlist',
      time: '1 month ago',
    },
    {
      text: 'Helen Doe reviewed the product',
      time: '2 months ago',
    },
  ],
};
