import { createBrowserRouter } from 'react-router';
import Layout from './Layout';
import Home from './Home';
import NotFound from './NotFound';
import { lessons } from './lessons';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Layout,
      HydrateFallback: () => null,
      children: [
        { index: true, Component: Home },
        ...lessons.map((lesson) => ({
          path: String(lesson.num),
          lazy: async () => ({ Component: (await lesson.load()).default }),
        })),
        { path: '*', Component: NotFound },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
