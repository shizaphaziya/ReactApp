import { useState } from 'react';
import User from './User';
import type { UserFieldName } from './UserField';

const initUsers = [
  { id: crypto.randomUUID(), name: 'user1', surname: 'surn1', age: '30', isEdit: false },
  { id: crypto.randomUUID(), name: 'user2', surname: 'surn2', age: '31', isEdit: false },
  { id: crypto.randomUUID(), name: 'user3', surname: 'surn3', age: '32', isEdit: false },
];

function ComponentsEditingGrandparentState() {
  const [users, setUsers] = useState(initUsers);

  function toggleMode(id: string) {
    setUsers(users.map((user) => (user.id === id ? { ...user, isEdit: !user.isEdit } : user)));
  }

  function editUser(id: string, field: UserFieldName, value: string) {
    setUsers(users.map((user) => (user.id === id ? { ...user, [field]: value } : user)));
  }

  const result = users.map((user) => (
    <User
      key={user.id}
      id={user.id}
      name={user.name}
      surname={user.surname}
      age={user.age}
      isEdit={user.isEdit}
      toggleMode={toggleMode}
      editUser={editUser}
    />
  ));

  return <div>{result}</div>;
}

export default ComponentsEditingGrandparentState;
