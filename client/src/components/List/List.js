import ProductPreview from "../ProductPreview/ProductPreview";
import "./List.scss";

const List = () => {
	const data = [
		{
			id: 1,
			imageUrl:
				"https://images.pexels.com/photos/16827633/pexels-photo-16827633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			altImg: "https://images.pexels.com/photos/16827632/pexels-photo-16827632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			name: "Fujifilm X-T5",
			oldPrice: 1799,
			price: 1649,
		},
		{
			id: 1,
			imageUrl:
				"https://images.pexels.com/photos/16827633/pexels-photo-16827633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			altImg: "https://images.pexels.com/photos/16827632/pexels-photo-16827632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			name: "Fujifilm X-T5",
			oldPrice: 1799,
			price: 1649,
		},
		{
			id: 1,
			imageUrl:
				"https://images.pexels.com/photos/16827633/pexels-photo-16827633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			altImg: "https://images.pexels.com/photos/16827632/pexels-photo-16827632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			name: "Fujifilm X-T5",
			oldPrice: 1799,
			price: 1649,
		},
		{
			id: 1,
			imageUrl:
				"https://images.pexels.com/photos/16827633/pexels-photo-16827633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			altImg: "https://images.pexels.com/photos/16827632/pexels-photo-16827632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			name: "Fujifilm X-T5",
			oldPrice: 1799,
			price: 1649,
		},
	];
	return (
		<div className="list-container">
			{data.map((item) => (
				<ProductPreview key={item.id} {...item} />
			))}
		</div>
	);
};

export default List;
