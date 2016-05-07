const selectBook = id => {
  return {
    type: 'SELECT_BOOK',
    id
  };
};

export default selectBook;
