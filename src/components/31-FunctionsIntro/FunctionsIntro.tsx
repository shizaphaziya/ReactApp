function FunctionsIntro() {
  function getDigitsSum(num: number): number {
    return String(Math.abs(num))
      .split('')
      .reduce((sum, d) => sum + Number(d), 0);
  }

  return <div>{getDigitsSum(123)}</div>;
}

export default FunctionsIntro;
