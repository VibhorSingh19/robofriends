import React from 'react';
function Robo({name,email,id}) {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    <header>
    
     <img src={`https://robohash.org/${id}?200x200`} Alt="robo"></img>
     <h2>{name}</h2>
     <p>{email}</p>
    </header>
    </div>

    );
}

export default Robo;
