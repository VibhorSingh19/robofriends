import React from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import {Info} from './Info';

function App() {
  return (
    <div className="tc">
     <h1>Robofriends</h1>
     <SearchBox />
     <Cardlist Info={Info}/>
    </div>
  );
}

export default App;
