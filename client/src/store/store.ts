import {
	compose,
	legacy_createStore as createStore,
	applyMiddleware,
	Middleware,
} from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./root-saga";
import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

// extend global window to add __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as an optional
// __REDUX_DEVTOOLS_EXTENSION_COMPOSE__  is a type of compose
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
	whitelist: (keyof RootState)[];
}

const persistConfig: ExtendedPersistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

// TODO - Cart should not persist when user logs out.
// TODO - Cart should be tied to logged in user
const persistedReducer = persistReducer(persistConfig, rootReducer);

// add logger in development environment
const middlewares = [
	process.env.NODE_ENV !== "production" && logger,
	sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancer =
	(process.env.NODE_ENV !== "production" &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
	persistedReducer,
	undefined,
	composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
