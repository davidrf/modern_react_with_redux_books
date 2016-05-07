import { connect } from 'react-redux';
import BookDetail from '../components/BookDetail';

const mapStateToProps = state => {
  if (!state.selectedBookId) {
    return {};
  }

  let book = state.books.find(book => book.id === state.selectedBookId);
  return { book };
};

const BookDetailContainer = connect(mapStateToProps)(BookDetail);

export default BookDetailContainer;
