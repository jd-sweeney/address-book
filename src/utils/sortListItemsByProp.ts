const sortListItemsByProp = <T extends any[]>(
  list: T,
  prop: string,
  sortType: 'asc' | 'desc'
) =>
  list.sort((x, y) => {
    const direction = sortType === 'asc' ? 1 : -1;

    return (
      x[prop].localeCompare(y[prop], 'en', {
        numeric: true,
      }) * direction
    );
  });

export default sortListItemsByProp;
