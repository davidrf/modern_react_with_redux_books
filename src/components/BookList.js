import React from 'react';

const BookList = props => {
  const { books, selectBook, selectedBookId } = props;
  let bookElements = books.map(book => {
    const { id, title } = book;
    let onClick = () => { selectBook(id) };
    let className = id === selectedBookId ? 'selected' : null;

    return (
      <li key={id} onClick={onClick} className={className}>{title}</li>
    );
  });

  return (
    <ul>
      {bookElements}
    </ul>
  );
};

export default BookList;
