import { connect } from 'react-redux';
import BookDetailComponent from './BookDetailComponent';
import {addToCollection} from '../../thunks/book.details.thunk';
function mapStateToProps(state) {
  return {
    volumeInfo: state.books.volumeInfo
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addToCollection: (payload) => {
      dispatch(addToCollection(payload));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (BookDetailComponent);