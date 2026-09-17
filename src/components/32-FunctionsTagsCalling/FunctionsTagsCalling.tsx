function FunctionsTagsCalling() {
  function getDigitsSum(num: number): number {
    return String(Math.abs(num))
      .split('')
      .reduce((sum, d) => sum + Number(d), 0);
  }

  return (
    <div>
      <p>{getDigitsSum(12345)}</p>
    </div>
  );
}

export default FunctionsTagsCalling;
