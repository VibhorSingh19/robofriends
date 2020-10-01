import React from 'react';
import Robo from './Robo';
function Cardlist({Info}) {
    const cardComponent=Info.map((user,i)=>{

        return <Robo id={Info[i].id} name={Info[i].name} email={Info[i].email}/>
    })
  return (
    <div>
     {cardComponent}
     </div>
    );
}

export default Cardlist;
