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
    info: [],
    searchfield: ''
   }
 }
 componentDidMount(){
  fetch('http://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users => this.setState({info:users}))
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
  if(this.state.info.length===0)
  {
    return <h1 className="tc">Loading....</h1>
  }
  else{
     return (
      <div className="tc">
      <h1 className="f1">Robofriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Cardlist info={filteredRobots}/>
      </div>
       );
      }
}
}
export default App;
