import { connect } from 'react-redux';
import BookDetailComponent from './BookDetailComponent';

function mapStateToProps(state) {
  return {
    volumeInfo: state.books.volumeInfo
  };
}

const mapDispatchToProps = dispatch => {
  return {
  
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (BookDetailComponent);