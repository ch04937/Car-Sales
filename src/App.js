import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { removeFeature, buyFeature} from './actions';
import { connect } from 'react-redux';

const App = (props) => {
  const { state, buyFeature, removeFeature } = props;
  return (
    <div className="boxes" >
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} buyFeature={buyFeature} />
        <Total  car= {state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
  }

  const mapStateToProps =(state) => {
    return{
      state: state
    };
  };
export default connect(mapStateToProps, { buyFeature, removeFeature })(App);
