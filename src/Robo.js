import React from 'react';
function Robo(props) {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
    <header>
     <img src={`https://robohash.org/${props.id}?200x200`} Alt="robo"></img>
     <h1>{props.name}</h1>
     <p>{props.email}</p>
    </header>
    </div>

    );
}

export default Robo;
