import { FormEvent, useCallback, useState } from 'react';
import { FilterConditionsType, useProductList } from '~apis/solution';
import ProductTable from '~components/ProductTable';
import SearchForm from '~components/SearchForm';

export default function Solution() {
  const [filterConditions, setFilterConditions] =
    useState<FilterConditionsType>({});
  const { data } = useProductList(filterConditions);

  const handleFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const filteredFormData = [...formData].filter(([_, value]) => value !== '');
    const nextFilterConditions = Object.fromEntries(filteredFormData);
    setFilterConditions(nextFilterConditions);
  }, []);

  return (
    <>
      <SearchForm onSubmitForm={handleFormSubmit} />
      {data && <ProductTable data={data} />}
    </>
  );
}
