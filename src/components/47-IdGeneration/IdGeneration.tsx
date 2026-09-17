function IdGeneration() {
  const id = crypto.randomUUID();

  return <div>{id}</div>;
}

export default IdGeneration;
