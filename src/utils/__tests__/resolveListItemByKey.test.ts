import resolveListItemByKey from '../resolveListItemByKey';

describe('filterListItemsByProp', () => {
  const data = [
    {
      id: '1',
    },
    {
      id: '2',
    },
  ];

  it('should resolve item with id 1', () => {
    expect(resolveListItemByKey(data, '1')).toBeTruthy();
  });

  it('should resolve item with id 2', () => {
    expect(resolveListItemByKey(data, '2')).toBeTruthy();
  });

  it('should resolve no item', () => {
    expect(resolveListItemByKey(data, '3')).toBeFalsy();
  });
});
