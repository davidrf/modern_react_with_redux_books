const selectedBookId = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_BOOK':
      return action.id;
    default:
      return state;
  }
};

export default selectedBookId;
