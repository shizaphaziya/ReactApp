import User from './User';

const users = [
  { id: crypto.randomUUID(), name: 'user1', surn: 'surn1', age: 30 },
  { id: crypto.randomUUID(), name: 'user2', surn: 'surn2', age: 31 },
  { id: crypto.randomUUID(), name: 'user3', surn: 'surn3', age: 32 },
] as const;

function ComponentsChildArray() {
  return (
    <table>
      <tbody>
        <User name={users[0].name} surn={users[0].surn} age={users[0].age} />
        <User name={users[1].name} surn={users[1].surn} age={users[1].age} />
        <User name={users[2].name} surn={users[2].surn} age={users[2].age} />
      </tbody>
    </table>
  );
}

export default ComponentsChildArray;
