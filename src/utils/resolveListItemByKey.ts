const resolveListItemByKey = <T extends any[]>(list: T, key: string) =>
  list.find((item) => item.id === key);

export default resolveListItemByKey;
