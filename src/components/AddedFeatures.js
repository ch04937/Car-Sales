import React, { Component } from 'react';

import AddedFeature from './AddedFeature';

class AddedFeatures extends React.Component{

  render(){
    return (
      <div></div>
  //     <div className="content">
  //       <h6>Added features:</h6>
  //       {props.car.features.length ? (
  //         <ol type="1">
  //           {props.car.features.map(item => (
  //             <AddedFeature key={item.id} feature={item} />
  //           ))}
  //         </ol>
  //       ) : (
  //         <p>You can purchase items from the store.</p>
  //       )}
  //     </div>
    );
}
}
export default AddedFeatures;
