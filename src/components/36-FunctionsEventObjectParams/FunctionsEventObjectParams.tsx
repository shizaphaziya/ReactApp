import React from 'react';

function FunctionsEventObjectParams() {
  function func(p1: string, p2: string, event: React.MouseEvent) {
    console.log(p1, p2, event);
  }

  function funcFirst(event: React.MouseEvent, p1: string, p2: string) {
    console.log(event, p1, p2);
  }

  function funcMiddle(p1: string, event: React.MouseEvent, p3: string) {
    console.log(p1, event, p3);
  }

  return (
    <div>
      <button onClick={(event) => func('param1', 'param2', event)}>act1</button>
      <button onClick={(event) => funcFirst(event, 'param1', 'param2')}>act2</button>
      <button onClick={(event) => funcMiddle('param1', event, 'param3')}>act3</button>
    </div>
  );
}

export default FunctionsEventObjectParams;
