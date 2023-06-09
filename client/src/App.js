import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/Layout/Layout";
import Home from "./routes/Home/Home";
import Products from "./routes/Products/Products";
import Product from "./routes/Product/Product";
import Authentication from "./routes/Authentication/Authentication";
import Checkout from "./routes/Checkout/Checkout";
import Confirmation from "./routes/Confirmation/Confirmation";
import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { fetchCategories } from "./store/categories/categories.reducer";
import { setCurrentUser } from "./store/user/user.reducer";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			dispatch(setCurrentUser(user));
		});
		return unsubscribe;
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/auth",
					element: <Authentication />,
				},
				{
					path: "/checkout",
					element: <Checkout />,
				},
				{
					path: "/products/:category",
					element: <Products />,
				},
				{
					path: "/product/:id",
					element: <Product />,
				},
				{
					path: "/order-confirmation",
					element: <Confirmation />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
