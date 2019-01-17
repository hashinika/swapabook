import { connect } from 'react-redux';
import {getCollection} from '../../thunks/book.details.thunk';
import CollectionComponent from "./CollectionComponent";
function mapStateToProps(state) {
  return {
    collection: state.books.collection
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getCollection: (payload) => {
      dispatch(getCollection(payload));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps) (CollectionComponent);