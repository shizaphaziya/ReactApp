interface UserProps {
  id: string;
  name: string;
  surname: string;
  age: number;
}

function User({ id, name, surname, age }: UserProps) {
  return (
    <p>
      id: <span>{id}</span>, name: <span>{name}</span>, surname: <span>{surname}</span>, age: <span>{age}</span>
    </p>
  );
}

export default User;
