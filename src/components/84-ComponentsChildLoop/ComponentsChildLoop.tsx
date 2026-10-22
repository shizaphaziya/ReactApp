import User from './User';

const users = [
  { id: crypto.randomUUID(), name: 'user1', surn: 'surn1', age: 30 },
  { id: crypto.randomUUID(), name: 'user2', surn: 'surn2', age: 31 },
  { id: crypto.randomUUID(), name: 'user3', surn: 'surn3', age: 32 },
];

function ComponentsChildLoop() {
  const result = users.map((user) => <User key={user.id} name={user.name} surn={user.surn} age={user.age} />);

  return (
    <table>
      <tbody>{result}</tbody>
    </table>
  );
}

export default ComponentsChildLoop;
