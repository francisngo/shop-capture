import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
	return (
		<>
			<Navigation />
			<Outlet />
			<Contact />
			<Footer />
		</>
	);
};

export default Layout;
