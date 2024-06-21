import React from 'react';
import Home from './componets/Home';
import {Provider} from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <div>

    <Provider store={appStore}>
    <Home/>
   </Provider>

   </div>
  );
}

export default App;
