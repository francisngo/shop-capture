const gql = require("graphql-tag");

module.exports = gql`
	type CategoryItem {
		id: Int
		imageUrl: String
		altImg: String
		name: String
		price: Int
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
	}

	type Product {
		id: Int
		imageUrl: String
		altImg: String
		name: String
		price: Int
	}

	type Query {
		category(title: String!): Category
		categories: [Category]
		featuredProducts: [FeaturedProducts]
		product(id: Int!): Product
	}
`;
