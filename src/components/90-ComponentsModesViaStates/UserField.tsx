import { useState } from 'react';

export type UserFieldName = 'name' | 'surname' | 'age';

interface UserFieldProps {
  id: string;
  text: string;
  type: UserFieldName;
  changeField: (id: string, field: UserFieldName, value: string) => void;
}

function UserField({ id, text, type, changeField }: UserFieldProps) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <td>
      {isEdit ? (
        <input
          value={text}
          onChange={(event) => changeField(id, type, event.target.value)}
          onBlur={() => setIsEdit(false)}
        />
      ) : (
        <span onClick={() => setIsEdit(true)}>{text}</span>
      )}
    </td>
  );
}

export default UserField;
