function IdFunction() {
  function id(): string {
    return crypto.randomUUID();
  }

  return <div>{id()}</div>;
}

export default IdFunction;
