interface UserProps {
  name: string;
  surn: string;
  age: number;
}

function User({ name, surn, age }: UserProps) {
  return (
    <tr>
      <td>{name}</td>
      <td>{surn}</td>
      <td>{age}</td>
    </tr>
  );
}

export default User;
