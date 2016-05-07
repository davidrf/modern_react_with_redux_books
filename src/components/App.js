import React from 'react';
import BookListContainer from '../containers/BookListContainer';
import BookDetailContainer from '../containers/BookDetailContainer';

const App = props => {
  return (
    <div>
      <BookListContainer />
      <BookDetailContainer />
    </div>
  );
};

export default App;
