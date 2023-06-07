import { configureStore, Middleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

export type RootState = ReturnType<typeof rootReducer>;

// // use logging in development env
const middlewares = [
    process.env.NODE_ENV !== 'production' && logger,
  ].filter((middleware): middleware is Middleware => Boolean(middleware));

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
});

