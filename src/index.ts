import { serve } from 'bun';
import index from './index.html';
import { routes } from './routes';

const server = serve({
  routes: {
    '/*': index, // Wildcard must be inline or explicitly defined
    ...routes, // Spread the external routes here
  },
  development: process.env.NODE_ENV !== 'production' && {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
