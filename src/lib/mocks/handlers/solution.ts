import { http, HttpResponse } from 'msw';
import { BASE_URL } from '~lib/apis/solution';
import { productList, ProductType } from '~lib/mocks/data/solution';

const filterProduct = (
  product: ProductType,
  conditions: [string, string][],
) => {
  for (let i = 0; i < conditions.length; i++) {
    const [conditionName, conditionValue] = conditions[i];

    if (
      conditionName === 'min_price' &&
      product.price < Number(conditionValue)
    ) {
      return false;
    }

    if (
      conditionName === 'max_price' &&
      product.price > Number(conditionValue)
    ) {
      return false;
    }

    if (
      conditionName === 'min_quantity' &&
      product.quantity < Number(conditionValue)
    ) {
      return false;
    }

    if (
      conditionName === 'max_quantity' &&
      product.quantity > Number(conditionValue)
    ) {
      return false;
    }

    if (!(conditionName in product)) {
      continue;
    }

    const value = product[conditionName as keyof ProductType].toString();

    if (value !== conditionValue) {
      return false;
    }
  }

  return true;
};

const solutionResolver = ({ request }: any) => {
  const url = new URL(request.url);
  const queryParams = [...url.searchParams.entries()];

  const filteredProductList = productList.filter((product) =>
    filterProduct(product, queryParams),
  );

  return HttpResponse.json(filteredProductList);
};

export const solutionHandlers = [
  http.get(`${BASE_URL}/solution`, solutionResolver),
];
