const gql = require("graphql-tag");

module.exports = gql`
	type CategoryItem {
		id: Int
		imageUrl: String
		altImg: String
		name: String
		price: Int
		priceId: String
	}

	type Category {
		title: String
		items: [CategoryItem]
	}

	type FeaturedProducts {
		id: Int
		imageUrl: String
		altImg: String
		name: String
		price: Int
		priceId: String
	}

	type Product {
		id: Int
		imageUrl: String
		altImg: String
		name: String
		price: Int
		priceId: String
	}

	type Query {
		category(title: String!): Category
		categories: [Category]
		featuredProducts: [FeaturedProducts]
		product(id: Int!): Product
	}
`;
