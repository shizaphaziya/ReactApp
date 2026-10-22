function ConceptsComponentsTypes() {
  return (
    <ul>
      <li>
        <code>Products</code> — компонент-контейнер: хранит стейт с данными
      </li>
      <li>
        <code>Product</code> — презентационный компонент: получает данные через пропсы
      </li>
      <li>
        <code>ProductField</code> — презентационный компонент со стейтом режима работы (показ или редактирование)
      </li>
      <li>
        Презентационный компонент может содержать стейт только для регулирования своего режима работы, как{' '}
        <code>ProductField</code> в уроке «Режимы работы через стейты».
      </li>
    </ul>
  );
}

export default ConceptsComponentsTypes;
