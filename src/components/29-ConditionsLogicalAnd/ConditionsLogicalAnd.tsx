function ConditionsLogicalAnd() {
  const isAuth = true;

  return <div>{isAuth && <p>вы авторизованы</p>}</div>;
}

export default ConditionsLogicalAnd;
