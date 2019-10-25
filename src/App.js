import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

// import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions";

// converting to redux hooks
import { shallowEqual, useSelector, useDispatch } from "react-redux";

const App = props => {
  const hookStateObj = useSelector(
    state => ({
      additionalPrice: state.additionalPrice,
      car: state.car,
      additionalFeatures: state.additionalFeatures
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const removeFeatureF = feature => {
    // dispatch an action here to remove a feature
    // props.removeFeature(feature);
    dispatch(removeFeature(feature));
    console.log("removeFeature");
  };

  const addFeatureF = feature => {
    // dispatch an action here to add a feature
    // props.addFeature(feature);
    dispatch(addFeature(feature));
    console.log("addFeature");
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={hookStateObj.car} />
        <AddedFeatures car={hookStateObj.car} removeFeature={removeFeatureF} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={hookStateObj.additionalFeatures}
          addFeature={addFeatureF}
        />
        <Total car={hookStateObj.car} additionalPrice={hookStateObj.additionalPrice} />
      </div>
    </div>
  );
};

/*
// redux HOC method
const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(
  mapStateToProps,
  { addFeature, removeFeature }
)(App);
*/

export default App;
