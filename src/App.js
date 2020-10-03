import React,{Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import {info} from './info';
import './App.css';
class App extends Component {
 constructor()
 {
   super()
   this.state={
    info: info,
    searchfield: ''
   }
 }
 onSearchChange = (event)=>{
  //console.log(event);
  this.setState({searchfield:event.target.value})
 }
 render()
 {
  const filteredRobots=this.state.info.filter(info=>{
    return info.name.toLowerCase().includes(this.state.searchfield.toLowerCase());   
  })
  return (
    <div className="tc">
     <h1>Robofriends</h1>
     <SearchBox searchChange={this.onSearchChange}/>
     <Cardlist info={filteredRobots}/>
    </div>
  );
}
}
export default App;
