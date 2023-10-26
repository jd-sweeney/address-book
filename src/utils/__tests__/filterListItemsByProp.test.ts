import filterListItemsByProp from '../filterListItemsByProp';

describe('filterListItemsByProp', () => {
  const data = [
    {
      value: 'Testing',
    },
    {
      value: 'testing',
    },
  ];

  it('should return filtered list with length of 1', () => {
    expect(filterListItemsByProp(data, 'value', 'testing', false)).toHaveLength(
      1
    );
  });

  it('should return filtered list with length of 1', () => {
    expect(filterListItemsByProp(data, 'value', 'Testing', false)).toHaveLength(
      1
    );
  });

  it('should return filtered list with length of 2', () => {
    expect(filterListItemsByProp(data, 'value', 'testing', true)).toHaveLength(
      2
    );
  });
});
