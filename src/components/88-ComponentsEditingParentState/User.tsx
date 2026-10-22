export type UserFieldName = 'name' | 'surname' | 'age';

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
      name: {isEdit ? <input value={name} onChange={(event) => editUser(id, 'name', event.target.value)} /> : <span>{name}</span>}
      surname:{' '}
      {isEdit ? <input value={surname} onChange={(event) => editUser(id, 'surname', event.target.value)} /> : <span>{surname}</span>}
      age: {isEdit ? <input value={age} onChange={(event) => editUser(id, 'age', event.target.value)} /> : <span>{age}</span>}
      <button onClick={() => toggleMode(id)}>{isEdit ? 'save' : 'edit'}</button>
    </div>
  );
}

export default User;
