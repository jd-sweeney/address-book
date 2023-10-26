import { ChangeEvent, useState } from 'react';

import { Select, SelectItem } from '@nextui-org/react';

const SortAction = ({
  defaultSort = 'asc',
  onSort,
}: {
  defaultSort?: 'asc' | 'desc';
  onSort?: (value: 'asc' | 'desc') => void;
}) => {
  const [selectedValues, setSelectedValues] = useState([defaultSort]);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value as 'asc' | 'desc';

    setSelectedValues([selectedValue]);
    onSort?.(selectedValue);
  };

  return (
    <Select
      aria-label="Sort List"
      label="Sort By"
      size="sm"
      selectedKeys={selectedValues}
      onChange={onChange}
    >
      <SelectItem role="option" key="asc">
        Asc
      </SelectItem>
      <SelectItem role="option" key="desc">
        Desc
      </SelectItem>
    </Select>
  );
};

export default SortAction;
