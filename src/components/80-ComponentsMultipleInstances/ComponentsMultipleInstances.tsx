import User from './User';

function ComponentsMultipleInstances() {
  return (
    <div>
      <User />
      <User />
      <User />
    </div>
  );
}

export default ComponentsMultipleInstances;
