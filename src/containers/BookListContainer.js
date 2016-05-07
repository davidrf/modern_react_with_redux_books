import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BookList from '../components/BookList';
import selectBook from '../actions/selectBook';

const mapStateToProps = state => {
  return {
    books: state.books,
    selectedBookId: state.selectedBookId
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    selectBook
  }, dispatch);
};
const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookListContainer;
