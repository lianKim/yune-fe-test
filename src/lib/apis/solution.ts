import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { ProductListType } from '~lib/mocks/data/solution';

export const BASE_URL = 'http://localhost:3000';

export interface FilterConditionsType {
  product_code?: string;
  product_name?: string;
  min_price?: string;
  max_price?: string;
  net_price?: string;
  vat?: string;
  delivery_fee?: string;
  warehousing_location?: string;
  fulfillment_location?: string;
  quantity?: string;
  material?: string;
  country_of_origin?: string;
}

// 상품 목록 받아오는 Mock API
const fetchProductList = async (
  conditions: FilterConditionsType,
): Promise<ProductListType> => {
  // URLSearchParams 객체로 만들어진 값은 문자열화 필수
  const queryParams = new URLSearchParams([
    ...Object.entries(conditions),
  ]).toString();

  const res = await axios.get(`${BASE_URL}/solution?${queryParams}`);

  return res?.data;
};

/**
 * for Solution
 */
export const useProductList = (conditions: FilterConditionsType) => {
  return useQuery({
    queryKey: ['productList', conditions],
    queryFn: () => fetchProductList(conditions),
  });
};
