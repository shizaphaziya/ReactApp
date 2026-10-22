import { useState } from 'react';

const letters: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh', з: 'z', и: 'i', й: 'y',
  к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f',
  х: 'kh', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'shch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya',
};

function translit(text: string): string {
  return text.replace(/./gsu, (char) => {
    const lower = char.toLowerCase();
    const latin = letters[lower];
    if (latin === undefined) {
      return char;
    }
    return char === lower ? latin : latin.charAt(0).toUpperCase() + latin.slice(1);
  });
}

function getSum(text: string): number {
  return text.split('\n').reduce((sum, line) => sum + (Number(line) || 0), 0);
}

function FormsTextarea() {
  const [text, setText] = useState('');
  const [numbers, setNumbers] = useState('');

  return (
    <div>
      <div>
        <textarea value={text} onChange={(event) => setText(event.target.value)} />
        <p>{translit(text)}</p>
      </div>
      <div>
        <textarea value={numbers} onChange={(event) => setNumbers(event.target.value)} />
        <p>{getSum(numbers)}</p>
      </div>
    </div>
  );
}

export default FormsTextarea;
