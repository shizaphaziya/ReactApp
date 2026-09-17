function ConditionsTernary() {
  const age = 19;

  return <div>{age > 18 ? <p>больше 18</p> : <p>меньше 18</p>}</div>;
}

export default ConditionsTernary;
