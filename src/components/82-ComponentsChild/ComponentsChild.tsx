import Employee from './Employee';

function ComponentsChild() {
  const surname1 = 'Иванов';
  const name1 = 'Иван';
  const patronymic1 = 'Иванович';
  const salary1 = 1000;
  const surname2 = 'Петров';
  const name2 = 'Пётр';
  const patronymic2 = 'Петрович';
  const salary2 = 2000;

  return (
    <div>
      <Employee surname={surname1} name={name1} patronymic={patronymic1} salary={salary1} />
      <Employee surname={surname2} name={name2} patronymic={patronymic2} salary={salary2} />
    </div>
  );
}

export default ComponentsChild;
