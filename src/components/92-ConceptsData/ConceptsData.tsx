function ConceptsData() {
  return (
    <ul>
      <li>
        <code>isEdit</code> — стейт (или пропс, если режим задаёт родитель)
      </li>
      <li>
        <code>elem</code> — переменная, значение вычисляется при каждом рендере
      </li>
      <li>
        <code>data</code> — пропс (или стейт, если данные меняются внутри компонента)
      </li>
    </ul>
  );
}

export default ConceptsData;
