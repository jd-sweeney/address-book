import sortListItemsByProp from '../sortListItemsByProp';

describe('sortListItemsByProp', () => {
  const data = [
    {
      value: '2',
    },
    {
      value: '3',
    },
    {
      value: '1',
    },
  ];

  it('should sort by asc', () => {
    const list = sortListItemsByProp(data, 'value', 'asc');

    expect(list[0].value).toStrictEqual('1');
    expect(list[1].value).toStrictEqual('2');
    expect(list[2].value).toStrictEqual('3');
  });

  it('should sort by asc', () => {
    const list = sortListItemsByProp(data, 'value', 'desc');

    expect(list[0].value).toStrictEqual('3');
    expect(list[1].value).toStrictEqual('2');
    expect(list[2].value).toStrictEqual('1');
  });
});
