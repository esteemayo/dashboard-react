import Add from '../../components/add/Add';
import DataTable from '../../components/dataTable/DataTable';

import { products, userColumns } from '../../data';
import { useAddStore } from '../../hooks/useAddStore';

import './products.scss';

const Products = () => {
  const isOpen = useAddStore((state) => state.isOpen);
  const onClose = useAddStore((state) => state.onClose);
  const onOpen = useAddStore((state) => state.onOpen);

  return (
    <div className='products'>
      <div className='info'>
        <h1>Products</h1>
        <button onClick={onOpen}>Add new product</button>
      </div>
      <DataTable slug='products' columns={userColumns} rows={products} />
      <Add
        slug='product'
        columns={userColumns}
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
};

export default Products;
