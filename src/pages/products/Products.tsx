import Add from '../../components/add/Add';
import DataTable from '../../components/dataTable/DataTable';

import { productColumns, products } from '../../data';
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
      <DataTable slug='products' columns={productColumns} rows={products} />
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
