function ConditionsShow() {
  const isAdult = true;

  if (isAdult) {
    return <p>вам есть 18 лет</p>;
  } else {
    return <p>вам еще нет 18 лет</p>;
  }
}

export default ConditionsShow;
