import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navigation from "./components/Navigation/Navigation";
// import Footer from "./components/Footer/Footer";
import CategoriesPreview from "./routes/CategoriesPreview/CategoriesPreview";
import Category from "./routes/Category/Category";
import Authentication from "./routes/Authentication/Authentication";
import Cart from "./routes/Cart/Cart";

const Layout = () => {
	return (
		<>
			<Navigation />
			<Outlet />
			{/* <Footer /> */}
		</>
	);
};

function App() {
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
					path: "/shop",
					element: <CategoriesPreview />,
				},
				{
					path: "/shop/:category",
					element: <Category />,
				},
				{
					path: "/cart",
					element: <Cart />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
