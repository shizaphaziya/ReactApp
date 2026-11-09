import type { ComponentType } from 'react';
import { lessonUrls } from './lessonUrls';

interface LessonModule {
  default: ComponentType;
}

export type Book = 'prime' | 'supreme';

export interface Lesson {
  id: string;
  book: Book;
  num: number;
  slug: string;
  section: string;
  path: string;
  url: string;
  aliases: readonly string[];
  load: () => Promise<LessonModule>;
}

const primePattern = /^\.\/components\/(\d+)-([^/]+)\/\2\.tsx$/;
const supremePattern = /^\.\/components\/supreme-(\d+)-([^/]+)\/\2\.tsx$/;

function parsePath(path: string): { book: Book; num: number; slug: string; path: string; aliases: string[] } | undefined {
  const supremeMatch = supremePattern.exec(path);
  if (supremeMatch?.[1] !== undefined && supremeMatch[2] !== undefined) {
    const rawNum = supremeMatch[1];
    const num = Number(rawNum);
    const slug = supremeMatch[2];
    return {
      book: 'supreme',
      num,
      slug,
      path: `supreme/${num}`,
      aliases: [`supreme-${num}`, `supreme/${rawNum}`, `supreme-${rawNum}`],
    };
  }

  const primeMatch = primePattern.exec(path);
  if (primeMatch?.[1] !== undefined && primeMatch[2] !== undefined) {
    const rawNum = primeMatch[1];
    const num = Number(rawNum);
    const slug = primeMatch[2];
    return {
      book: 'prime',
      num,
      slug,
      path: String(num),
      aliases: [rawNum],
    };
  }

  return undefined;
}

function getSection(slug: string): string {
  return /^[A-Z][a-z]*/.exec(slug)?.[0] ?? slug;
}

export function humanize(slug: string): string {
  return slug.replace(/([a-z])([A-Z])/g, '$1 $2');
}

const modules = import.meta.glob<LessonModule>('./components/*/*.tsx');

export const lessons: readonly Lesson[] = Object.entries(modules)
  .flatMap(([path, load]) => {
    const parsed = parsePath(path);
    if (!parsed) return [];
    const urlKey = `${parsed.book}-${parsed.num}`;
    const url = lessonUrls[urlKey] ?? `https://code.mu/ru/javascript/framework/react/book/${parsed.book}/`;

    return [
      {
        id: parsed.book === 'supreme' ? `supreme-${parsed.num}` : String(parsed.num),
        book: parsed.book,
        num: parsed.num,
        slug: parsed.slug,
        section: getSection(parsed.slug),
        path: parsed.path,
        url,
        aliases: parsed.aliases,
        load,
      },
    ];
  })
  .sort((a, b) => {
    if (a.book !== b.book) {
      return a.book === 'prime' ? -1 : 1;
    }
    return a.num - b.num;
  });
