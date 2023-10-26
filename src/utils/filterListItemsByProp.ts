const filterListItemsByProp = <T extends any[]>(
  list: T,
  prop: string,
  filter: string,
  ignoreCase = true
) => {
  const filterValue = (ignoreCase ? filter?.toLowerCase() : filter) || '';

  return list.filter((item) => {
    const propValue =
      (ignoreCase ? item?.[prop]?.toLowerCase() : item?.[prop]) || '';

    return propValue.includes(filterValue);
  });
};

export default filterListItemsByProp;
