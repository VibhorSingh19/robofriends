import React from 'react';
import Robo from './Robo';
function Cardlist({info}) {
  return (
    <div>
     {
        info.map((user,i)=>{

        return <Robo 
        key='i' 
        id={info[i].id} 
        name={info[i].name} 
        email={info[i].email}/>
     })
    }
     </div>
    );
}

export default Cardlist;
