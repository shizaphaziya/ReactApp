function ConditionsReturn() {
  const isAdmin = true;

  if (isAdmin) {
    return (
      <div>
        <p>admin 1</p>
        <p>admin 2</p>
      </div>
    );
  }

  return null;
}

export default ConditionsReturn;
