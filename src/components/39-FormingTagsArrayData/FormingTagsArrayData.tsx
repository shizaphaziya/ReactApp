function FormingTagsArrayData() {
  const arr = ['a', 'b', 'c', 'd', 'e'];

  return (
    <ul>
      {arr.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default FormingTagsArrayData;
