import Employee from './Employee';

function ComponentsProps() {
  return (
    <div>
      <Employee surname="Иванов" name="Иван" patronymic="Иванович" salary={1000} />
      <Employee surname="Петров" name="Пётр" patronymic="Петрович" salary={2000} />
      <Employee surname="Сидоров" name="Сидор" patronymic="Сидорович" salary={3000} />
    </div>
  );
}

export default ComponentsProps;
