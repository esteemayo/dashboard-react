import { singleProduct } from '../../data';
import Single from '../../components/single/Single';

import './product.scss';

const Product = () => {
  return (
    <section>
      <Single {...singleProduct} />
    </section>
  );
};

export default Product;
