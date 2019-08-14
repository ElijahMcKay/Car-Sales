import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

export const App = () => { 
  
  return (
    <div className="boxes">
      <div className="box">
        <Header /> {/*car={car} */}
        <AddedFeatures /> {/*car={car}*/} 
      </div>
      <div className="box">
        <AdditionalFeatures />{/*store={store} */}
        <Total /> {/*car={car} additionalPrice={additionalPrice}*/} 
      </div>
    </div>
  );
};

export default App;
