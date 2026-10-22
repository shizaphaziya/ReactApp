import { useState } from 'react';

function FormsCheckboxConditionalRendering() {
  const [isAdult, setIsAdult] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  let message;
  if (isAdult) {
    message = (
      <div>
        <h2>Ура, вам уже есть 18</h2>
        <p>здесь расположен контент только для взрослых</p>
      </div>
    );
  } else {
    message = (
      <div>
        <p>увы, вам еще нет 18 лет:(</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <input type="checkbox" checked={isAdult} onChange={() => setIsAdult(!isAdult)} />
        {message}
      </div>
      <div>
        <input type="checkbox" checked={isVisible} onChange={() => setIsVisible(!isVisible)} />
        {isVisible && <p>text</p>}
      </div>
    </div>
  );
}

export default FormsCheckboxConditionalRendering;
