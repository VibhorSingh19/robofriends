import React from 'react';
import Robo from './Robo';
function Cardlist({Info}) {
  return (
    <div>
     {Info.map((user,i)=>{

        return <Robo 
        key='i' 
        id={Info[i].id} 
        name={Info[i].name} 
        email={Info[i].email}/>
    })}
     </div>
    );
}

export default Cardlist;
