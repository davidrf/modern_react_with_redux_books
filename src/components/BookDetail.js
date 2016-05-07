import React from 'react';

const BookDetail = props => {
  if (!props.book) {
    return <div />;
  }

  return (
    <div>
      {props.book.title}
    </div>
  );
};

export default BookDetail;
