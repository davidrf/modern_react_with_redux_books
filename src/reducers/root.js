import books from './books';
import selectedBookId from './selectedBookId';
import { combineReducers } from 'redux';

const root = combineReducers({
  books,
  selectedBookId
});

export default root;
