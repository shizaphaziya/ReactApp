import { useState } from 'react';
import User from './User';
import type { UserFieldName } from './UserField';

const initUsers = [
  { id: crypto.randomUUID(), name: 'user1', surname: 'surn1', age: '30' },
  { id: crypto.randomUUID(), name: 'user2', surname: 'surn2', age: '31' },
  { id: crypto.randomUUID(), name: 'user3', surname: 'surn3', age: '32' },
];

function ComponentsModesViaStates() {
  const [users, setUsers] = useState(initUsers);

  function changeField(id: string, field: UserFieldName, value: string) {
    setUsers(users.map((user) => (user.id === id ? { ...user, [field]: value } : user)));
  }

  const rows = users.map((user) => (
    <User
      key={user.id}
      id={user.id}
      name={user.name}
      surname={user.surname}
      age={user.age}
      changeField={changeField}
    />
  ));

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ComponentsModesViaStates;
