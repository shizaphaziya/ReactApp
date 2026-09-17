function FormingTagsArray() {
  const arr = [
    <li key={1}>1</li>,
    <li key={2}>2</li>,
    <li key={3}>3</li>,
    <li key={4}>4</li>,
    <li key={5}>5</li>,
  ];

  return <ul>{arr}</ul>;
}

export default FormingTagsArray;
