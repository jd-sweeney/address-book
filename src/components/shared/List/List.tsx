import { FC, useState } from 'react';

import { Listbox, ListboxItem } from '@nextui-org/react';

import resolveListItemByKey from '@/utils/resolveListItemByKey';

const List = <
  T extends X[],
  X extends {
    id?: string;
  },
>({
  list,
  Component,
  onSelect,
}: {
  list: T;
  Component: FC<any>;
  onSelect?: (item: X) => void;
}) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <Listbox
      role="listbox"
      aria-label="list"
      onAction={(key) => {
        setSelectedValue(key.toString());

        onSelect?.(resolveListItemByKey(list, key.toString()));
      }}
    >
      {list.map((item) => (
        <ListboxItem
          role="listitem"
          aria-label="listitem"
          key={item.id as string}
          className={item.id === selectedValue ? 'bg-default' : ''}
        >
          <Component {...item} />
        </ListboxItem>
      ))}
    </Listbox>
  );
};

export default List;
