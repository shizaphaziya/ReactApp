function ConditionsInverting() {
  const isAuth = false;

  return <div>{!isAuth && <p>пожалуйста, авторизуйтесь</p>}</div>;
}

export default ConditionsInverting;
