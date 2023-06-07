import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { store } from "./store/store";
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
			<ApolloProvider client={client}>
				<CategoriesProvider>
					<App />
				</CategoriesProvider>
			</ApolloProvider>
		</Provider>
	</React.StrictMode>
);
