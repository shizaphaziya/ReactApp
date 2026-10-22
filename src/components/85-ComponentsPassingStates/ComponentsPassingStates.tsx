import { useState } from 'react';
import User from './User';

const initUsers = [
  { id: crypto.randomUUID(), name: 'user1', surname: 'surn1', age: 30 },
  { id: crypto.randomUUID(), name: 'user2', surname: 'surn2', age: 31 },
  { id: crypto.randomUUID(), name: 'user3', surname: 'surn3', age: 32 },
];

function ComponentsPassingStates() {
  const [users] = useState(initUsers);

  const items = users.map((user) => <User key={user.id} name={user.name} surname={user.surname} age={user.age} />);

  return <div>{items}</div>;
}

export default ComponentsPassingStates;
