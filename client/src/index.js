import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { UserProvider } from "./contexts/UserContext";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { CartProvider } from "./contexts/CartContext";
import App from "./App";
import "./index.css";

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<UserProvider>
				<CategoriesProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</CategoriesProvider>
			</UserProvider>
		</ApolloProvider>
	</React.StrictMode>
);
