export const sortField = profileField => {
  const sortedFields = profileField.sort((field1, field2) => {
    return field1.date - field2.date;
  });

  return sortedFields;
};
