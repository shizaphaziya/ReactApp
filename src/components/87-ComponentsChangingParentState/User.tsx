interface UserProps {
  id: string;
  name: string;
  surname: string;
  age: number;
  isBanned: boolean;
  banUser: (id: string) => void;
}

function User({ id, name, surname, age, isBanned, banUser }: UserProps) {
  return (
    <p>
      name: <span>{name}</span>, surname: <span>{surname}</span>, age: <span>{age}</span>,{' '}
      <span>{isBanned ? 'banned' : 'not banned'}</span> <button onClick={() => banUser(id)}>ban</button>
    </p>
  );
}

export default User;
