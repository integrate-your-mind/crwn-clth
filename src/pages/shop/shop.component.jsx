import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { updateCollections } from "../../redux/shop/shop.actions";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview); 
const CollectionPageWithSpinner = WithSpinner(CollectionPage); 

class ShopPage extends React.Component {
  state = {
    loading:true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollections} = this.props; 
    const collectionsRef = firestore.collection("collections");

    /*Observable method*

    // collectionsRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   //Setting the loading state to false since the redux store has finished updating 
    //   this.setState({loading:false}); 
    // });

    /*Promise based*/
    //Using this currently
    collectionsRef.get().then(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      //Setting the loading state to false since the redux store has finished updating
      this.setState({ loading: false });
    });

    /*Fetch pattern*/
  
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-db-ce250/databases/(default)/documents/collections")
    //   .then(response =>response.json())
    //   .then(collections => console.log(collections)); 
  

  }

  render() {
    const { match } = this.props;
    const {loading } = this.state; 
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
