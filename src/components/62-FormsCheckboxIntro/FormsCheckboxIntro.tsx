import { useState } from 'react';

function FormsCheckboxIntro() {
  const [checked, setChecked] = useState(true);
  const [message, setMessage] = useState('');

  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [js, setJs] = useState(false);

  return (
    <div>
      <div>
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        <button onClick={() => setMessage(checked ? 'hello, user' : 'goodbye, user')}>btn</button>
        <p>{message}</p>
      </div>
      <div>
        <input type="checkbox" checked={html} onChange={() => setHtml(!html)} /> html
        <input type="checkbox" checked={css} onChange={() => setCss(!css)} /> css
        <input type="checkbox" checked={js} onChange={() => setJs(!js)} /> js
        <p>html: {html ? 'know' : 'do not know'}</p>
        <p>css: {css ? 'know' : 'do not know'}</p>
        <p>js: {js ? 'know' : 'do not know'}</p>
      </div>
    </div>
  );
}

export default FormsCheckboxIntro;
