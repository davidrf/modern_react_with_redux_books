const defaultBooks = [
  { id: 1, title: 'meow' },
  { id: 2, title: 'hi' }
];

const books = (state = defaultBooks, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default books;
