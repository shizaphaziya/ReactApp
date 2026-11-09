import type { ChangeEvent } from 'react';

interface TempInpProps {
  temp: number | string;
  setTemp: (temp: string) => void;
}

function TempInp({ temp, setTemp }: TempInpProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTemp(event.target.value);
  }

  return (
    <div>
      <label>
        Температура воды (°C): <input type="number" value={temp} onChange={handleChange} />
      </label>
    </div>
  );
}

export default TempInp;
