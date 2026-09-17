import React from 'react';

function FunctionsEventObject() {
  function handleClick(event: React.MouseEvent) {
    console.log(event);
    console.log(event.target);
  }

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default FunctionsEventObject;
