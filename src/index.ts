import { serve } from 'bun';
import index from './index.html';
import cvHandler from '../api/cv';

const server = serve({
  routes: {
    '/api/cv': cvHandler,
    '/*': index,
  },
  development: process.env.NODE_ENV !== 'production' && {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
