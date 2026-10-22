import type { ComponentType } from 'react';

interface LessonModule {
  default: ComponentType;
}

export interface Lesson {
  num: number;
  slug: string;
  section: string;
  load: () => Promise<LessonModule>;
}

const pathPattern = /^\.\/components\/(\d+)-([^/]+)\/\2\.tsx$/;

function parsePath(path: string): { num: number; slug: string } | undefined {
  const match = pathPattern.exec(path);
  const num = match?.[1];
  const slug = match?.[2];
  return num === undefined || slug === undefined ? undefined : { num: Number(num), slug };
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
    return parsed ? [{ ...parsed, section: getSection(parsed.slug), load }] : [];
  })
  .sort((a, b) => a.num - b.num);
