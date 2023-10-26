import { useState } from 'react';

import { Input } from '@nextui-org/react';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchAction = ({ onSearch }: { onSearch?: (value: string) => void }) => {
  const [searchValue, setSearchValue] = useState('');

  const onValueChange = (value: string) => {
    setSearchValue(value);
    onSearch?.(value);
  };

  return (
    <Input
      label="Search"
      placeholder="Search Address Book..."
      isClearable
      startContent={<MagnifyingGlassIcon className="h-full max-h-[1em]" />}
      size="sm"
      value={searchValue}
      onValueChange={onValueChange}
    />
  );
};

export default SearchAction;
