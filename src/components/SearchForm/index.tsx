import { FormEvent } from 'react';
import { InputField } from './InputField';
import * as styles from './SearchForm.module.css';

interface SearchFormProps {
  onSubmitForm: (e: FormEvent<HTMLFormElement>) => void;
}

export default function SearchForm({ onSubmitForm }: SearchFormProps) {
  return (
    <form onSubmit={onSubmitForm} className={styles.form}>
      <div className={styles.fields}>
        <div className={styles.fieldBundle}>
          <InputField
            labelText="상품코드"
            placeholder="Product code"
            inputName="product_code"
            inputMode="numeric"
          />
          <InputField
            labelText="상품명"
            placeholder="Product name"
            inputName="product_name"
          />
          <div className={styles.fieldContainer}>
            <label>가격</label>
            <span className={styles.range}>
              <input
                type="text"
                id="min_price"
                name="min_price"
                placeholder="Min price"
                inputMode="numeric"
              />
              <input
                type="text"
                id="max_price"
                name="max_price"
                placeholder="Max price"
                inputMode="numeric"
              />
            </span>
          </div>
          <InputField
            labelText="공급가"
            placeholder="Net price"
            inputName="net_price"
            inputMode="numeric"
          />
          <InputField
            labelText="VAT"
            placeholder="VAT"
            inputName="vat"
            inputMode="numeric"
          />
          <InputField
            labelText="배송비"
            placeholder="Delivery fee"
            inputName="delivery_fee"
            inputMode="numeric"
          />
        </div>
        <div className={styles.fieldBundle}>
          <InputField
            labelText="입고지"
            placeholder="Warehousing location"
            inputName="warehousing_location"
          />
          <InputField
            labelText="출고지"
            placeholder="Fulfillment location"
            inputName="fulfillment_location"
          />
          <div className={styles.fieldContainer}>
            <label>재고수량</label>
            <span className={styles.range}>
              <input
                type="text"
                id="min_quantity"
                name="min_quantity"
                placeholder="Min quantity"
                inputMode="numeric"
              />
              <span> - </span>
              <input
                type="text"
                id="max_quantity"
                name="max_quantity"
                placeholder="Max quantity"
                inputMode="numeric"
              />
            </span>
          </div>
          <InputField
            labelText="소재"
            placeholder="Material"
            inputName="material"
          />
          <InputField
            labelText="제조국"
            placeholder="Country of origin"
            inputName="country_of_origin"
          />
        </div>
      </div>
      <button type="submit" className={styles.searchBtn}>
        검색
      </button>
    </form>
  );
}
