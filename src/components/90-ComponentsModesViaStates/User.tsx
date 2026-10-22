import UserField from './UserField';
import type { UserFieldName } from './UserField';

interface UserProps {
  id: string;
  name: string;
  surname: string;
  age: string;
  changeField: (id: string, field: UserFieldName, value: string) => void;
}

function User({ id, name, surname, age, changeField }: UserProps) {
  return (
    <tr>
      <UserField id={id} text={name} type="name" changeField={changeField} />
      <UserField id={id} text={surname} type="surname" changeField={changeField} />
      <UserField id={id} text={age} type="age" changeField={changeField} />
    </tr>
  );
}

export default User;
