export default function specialAttacks(obj, id) {
  const result = [];

  obj.special.forEach((item) => {
    if (item.id === id) {
      const {
        // eslint-disable-next-line no-shadow
        id, name, icon, description = 'Описание недоступно',
      } = item;
      result.push({ id }, { name }, { icon }, { description });
    }
  });

  return result;
}
