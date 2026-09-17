import { useState } from 'react';

function StatesBooleanValue() {
  const [isBanned, setIsBanned] = useState(false);

  return (
    <div>
      <p>{isBanned ? 'banned' : 'not banned'}</p>
      {isBanned ? (
        <button onClick={() => setIsBanned(false)}>unban</button>
      ) : (
        <button onClick={() => setIsBanned(true)}>ban</button>
      )}
    </div>
  );
}

export default StatesBooleanValue;
