interface VerdictProps {
  temp: number | string;
}

function Verdict({ temp }: VerdictProps) {
  const value = Number(temp);

  let text = 'вода жидкая';
  if (value <= 0) {
    text = 'вода твердая';
  } else if (value >= 100) {
    text = 'вода газообразная';
  }

  return <p>Вердикт: {text}</p>;
}

export default Verdict;
