interface UserProps {
  name: string;
  surname: string;
  age: number;
}

function User({ name, surname, age }: UserProps) {
  return (
    <div>
      name: <span>{name}</span>, surname: <span>{surname}</span>, age: <span>{age}</span>
    </div>
  );
}

export default User;
