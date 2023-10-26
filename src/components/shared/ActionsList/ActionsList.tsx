import { FC, useMemo, useState } from 'react';

import List from '../List';
import Actions from '../Actions';

import filterListItemsByProp from '@/utils/filterListItemsByProp';
import sortListItemsByProp from '@/utils/sortListItemsByProp';

const ActionsList = <
  T extends X[],
  X extends {
    id: string;
  },
>({
  list,
  Component,
  onSelect,
  filterProp,
  sortProp,
}: {
  list: T;
  Component: FC<any>;
  onSelect?: (item: X) => void;
  filterProp?: string;
  sortProp?: string;
}) => {
  const [sortValue, setSortValue] = useState<'asc' | 'desc'>('asc');
  const [searchValue, setSearchValue] = useState('');

  const onSort = (sortType: 'asc' | 'desc') => setSortValue(sortType);
  const onSearch = (filter: string) => setSearchValue(filter);

  const filteredItems = useMemo(() => {
    if (!searchValue || !filterProp) {
      return list;
    }

    return filterListItemsByProp(list, filterProp, searchValue);
  }, [list, searchValue, sortValue]);

  const sortedItems = useMemo(() => {
    if (!sortProp) {
      return filteredItems;
    }

    return sortListItemsByProp(filteredItems, sortProp, sortValue);
  }, [filteredItems, searchValue, sortValue]);

  return (
    <>
      <Actions
        defaultSortValue={sortValue}
        onSort={onSort}
        onSearch={onSearch}
      />
      <List list={sortedItems} Component={Component} onSelect={onSelect} />
    </>
  );
};

export default ActionsList;
