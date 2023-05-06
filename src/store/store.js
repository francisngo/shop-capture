import {
	compose,
	legacy_createStore as createStore,
	applyMiddleware,
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],
};

// TODO - Cart should not persist when user logs out.
// TODO - Cart should be tied to logged in user
const persistedReducer = persistReducer(persistConfig, rootReducer);

// only log in development
const middlewares = [process.env.NODE_ENV !== "production" && logger].filter(
	Boolean
);

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

export const persistor = persistStore(store);
