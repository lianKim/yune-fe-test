import { ProductListType } from '~mocks/data/solution';
import * as styles from './ProductTable.module.css';

interface ProductListProps {
  data: ProductListType;
}

export default function ProductTable({ data }: ProductListProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>상품 코드</td>
              <td>상품명</td>
              <td>가격</td>
              <td>공급가</td>
              <td>VAT</td>
              <td>배송비</td>
              <td>입고지</td>
              <td>출고지</td>
              <td>재고수량</td>
              <td>소재</td>
              <td>제조국</td>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.product_code}>
                <td>{product.product_code}</td>
                <td>{product.product_name}</td>
                <td>{product.price}</td>
                <td>{product.net_price}</td>
                <td>{product.vat}</td>
                <td>{product.delivery_fee}</td>
                <td>{product.warehousing_location}</td>
                <td>{product.fulfillment_location}</td>
                <td>{product.quantity}</td>
                <td>{product.material}</td>
                <td>{product.country_of_origin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
