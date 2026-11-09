function ConceptsDataFlow() {
  return (
    <div>
      <p>
        <strong>Нисходящий поток данных (top-down):</strong> родительский компонент-контейнер{' '}
        <code>Products</code> хранит массив продуктов в стейте и передаёт свойства конкретного продукта в дочерний
        компонент <code>Product</code> через пропсы (<code>id</code>, <code>name</code>, <code>cost</code>,{' '}
        <code>amount</code>). В свою очередь <code>Product</code> передаёт отдельные значения в презентационные
        компоненты <code>ProductField</code> также через пропсы.
      </p>
      <p>
        <strong>Восходящий поток данных (bottom-up):</strong> пользовательский ввод в инпутах{' '}
        <code>ProductField</code> поднимается наверх к родителю <code>Products</code> путём вызова функции-колбэка (
        <code>changeField</code>), которая передаётся вниз через пропсы по цепочке{' '}
        <code>Products &rarr; Product &rarr; ProductField</code>. Вызов этой функции меняет исходный стейт в{' '}
        <code>Products</code>, вызывая повторный рендер всей структуры с обновлёнными данными.
      </p>
    </div>
  );
}

export default ConceptsDataFlow;
