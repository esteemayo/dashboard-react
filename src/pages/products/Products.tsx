import { useQuery } from '@tanstack/react-query';

import Add from '../../components/add/Add';
import DataTable from '../../components/dataTable/DataTable';

import { productColumns } from '../../data';
import { useAddStore } from '../../hooks/useAddStore';

import './products.scss';

const Products = () => {
  const isOpen = useAddStore((state) => state.isOpen);
  const onClose = useAddStore((state) => state.onClose);
  const onOpen = useAddStore((state) => state.onOpen);

  const { isLoading, data } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch('http://localhost:8800/api/v1/products').then((res) => res.json()),
  });

  return (
    <div className='products'>
      <div className='info'>
        <h1>Products</h1>
        <button onClick={onOpen}>Add new product</button>
      </div>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <DataTable slug='products' columns={productColumns} rows={data} />
      )}
      <Add
        slug='product'
        columns={productColumns}
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
};

export default Products;
