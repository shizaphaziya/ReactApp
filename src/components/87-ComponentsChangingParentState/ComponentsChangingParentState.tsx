import { useState } from 'react';
import User from './User';

const initUsers = [
  { id: crypto.randomUUID(), name: 'user1', surname: 'surn1', age: 30, isBanned: false },
  { id: crypto.randomUUID(), name: 'user2', surname: 'surn2', age: 31, isBanned: false },
  { id: crypto.randomUUID(), name: 'user3', surname: 'surn3', age: 32, isBanned: false },
];

function ComponentsChangingParentState() {
  const [users, setUsers] = useState(initUsers);

  function banUser(id: string) {
    setUsers(users.map((user) => (user.id === id ? { ...user, isBanned: true } : user)));
  }

  const items = users.map((user) => (
    <User
      key={user.id}
      id={user.id}
      name={user.name}
      surname={user.surname}
      age={user.age}
      isBanned={user.isBanned}
      banUser={banUser}
    />
  ));

  return <div>{items}</div>;
}

export default ComponentsChangingParentState;
