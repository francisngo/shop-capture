import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { store, persistor } from "./store/store";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import App from "./App";
import "./index.css";

const client = new ApolloClient({
	uri: `${process.env.REACT_APP_SERVER_URL}/graphql`,
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ApolloProvider client={client}>
					<CategoriesProvider>
						<App />
					</CategoriesProvider>
				</ApolloProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
