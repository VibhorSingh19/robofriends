import React,{Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import {Info} from './Info';

class App extends Component {
 constructor()
 {
   super()
   this.state={
    Info:Info,
    searchfield:''
   }
 }
 onSearchChange=(event)=>{
  this.setState({searchfield:event.target.value})
 }
 render()
 {
  const filteredRobots=this.state.Info.filter(Info=>{
    return Info.name.toLowerCase().includes(this.state.searchfield.toLowerCase());   
  })
  return (
    <div className="tc">
     <h1>Robofriends</h1>
     <SearchBox />
     <Cardlist Info={filteredRobots}/>
    </div>
  );
}
}
export default App;
