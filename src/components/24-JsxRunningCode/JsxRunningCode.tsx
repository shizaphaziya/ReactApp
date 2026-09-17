function JsxRunningCode() {
  const num1 = 3;
  const num2 = 2;
  const name = 'john';
  const surname = 'smit';
  const num = 4;

  return (
    <div>
      <p>{num1 ** num2}</p>
      <p>{name + ' ' + surname}</p>
      <p>{Math.sqrt(num)}</p>
    </div>
  );
}

export default JsxRunningCode;
