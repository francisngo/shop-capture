require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_API_KEY);

async function httpCreateCheckoutSession(req, res) {
	try {
		const { products = [] } = req.body;
		const session = await stripe.checkout.sessions.create({
			line_items: products,
			mode: "payment",
			success_url: `${process.env.CLIENT_URL}/order-confirmation`,
			cancel_url: `${process.env.CLIENT_URL}`,
			shipping_address_collection: { allowed_countries: ["US"] },
			payment_method_types: ["card"],
		});
		res.send(
			JSON.stringify({
				url: session.url,
			})
		);
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	httpCreateCheckoutSession,
};
