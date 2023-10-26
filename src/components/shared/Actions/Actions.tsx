import SearchAction from '../SearchAction';
import SortAction from '../SortAction';

const Actions = ({
  defaultSortValue = 'asc',
  onSort,
  onSearch,
}: {
  defaultSortValue?: 'asc' | 'desc';
  onSort?: (value: 'asc' | 'desc') => void;
  onSearch?: (value: string) => void;
}) => {
  return (
    <div className="mb-5 flex space-x-4 > * + *">
      <div className="w-2/3">
        <SearchAction onSearch={onSearch} />
      </div>
      <div className="w-1/3">
        <SortAction onSort={onSort} defaultSort={defaultSortValue} />
      </div>
    </div>
  );
};

export default Actions;
