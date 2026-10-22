import UserField from './UserField';
import type { UserFieldName } from './UserField';

interface UserProps {
  id: string;
  name: string;
  surname: string;
  age: string;
  isEdit: boolean;
  toggleMode: (id: string) => void;
  editUser: (id: string, field: UserFieldName, value: string) => void;
}

function User({ id, name, surname, age, isEdit, toggleMode, editUser }: UserProps) {
  return (
    <div>
      name: <UserField id={id} text={name} type="name" isEdit={isEdit} editUser={editUser} />, surname:{' '}
      <UserField id={id} text={surname} type="surname" isEdit={isEdit} editUser={editUser} />, age:{' '}
      <UserField id={id} text={age} type="age" isEdit={isEdit} editUser={editUser} />
      <button onClick={() => toggleMode(id)}>{isEdit ? 'save' : 'edit'}</button>
    </div>
  );
}

export default User;
