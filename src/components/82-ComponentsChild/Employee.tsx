interface EmployeeProps {
  surname: string;
  name: string;
  patronymic: string;
  salary: number;
}

function Employee({ surname, name, patronymic, salary }: EmployeeProps) {
  return (
    <p>
      surname: <span>{surname}</span>, name: <span>{name}</span>, patronymic: <span>{patronymic}</span>, salary:{' '}
      <span>{salary}</span>
    </p>
  );
}

export default Employee;
