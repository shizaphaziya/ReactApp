export type UserFieldName = 'name' | 'surname' | 'age';

interface UserFieldProps {
  id: string;
  text: string;
  type: UserFieldName;
  isEdit: boolean;
  editUser: (id: string, field: UserFieldName, value: string) => void;
}

function UserField({ id, text, type, isEdit, editUser }: UserFieldProps) {
  return isEdit ? <input value={text} onChange={(event) => editUser(id, type, event.target.value)} /> : <span>{text}</span>;
}

export default UserField;
