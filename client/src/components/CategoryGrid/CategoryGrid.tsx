import { FC } from 'react';
import { Link } from "react-router-dom";
import {
	CategoryGridContainer,
	Column,
	ColumnLarge,
	Row,
	Button,
	Image,
} from "./CategoryGrid.styles";

const CategoryGrid: FC = () => {
	return (
		<CategoryGridContainer>
			<Column>
				<Row>
					<Image
						src="https://images.pexels.com/photos/16828894/pexels-photo-16828894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="cameras"
					/>
					<Button>
						<Link to="/products/cameras">Cameras</Link>
					</Button>
				</Row>
				<Row>
					<Image
						src="https://images.pexels.com/photos/16828889/pexels-photo-16828889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="filters"
					/>
					<Button>
						<Link to="/products/filters">Filters</Link>
					</Button>
				</Row>
			</Column>
			<Column>
				<Row>
					<Image
						src="https://images.pexels.com/photos/16828890/pexels-photo-16828890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="lenses"
					/>
					<Button>
						<Link to="/products/lenses">Lenses</Link>
					</Button>
				</Row>
			</Column>
			<ColumnLarge>
				<Row>
					<Column>
						<Row>
							<Image
								src="https://images.pexels.com/photos/16828888/pexels-photo-16828888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="microphones"
							/>
							<Button>
								<Link to="/products/microphones">
									Microphones
								</Link>
							</Button>
						</Row>
					</Column>
					<Column>
						<Row>
							<Image
								src="https://images.pexels.com/photos/16828891/pexels-photo-16828891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
								alt="tripods"
							/>
							<Button>
								<Link to="/products/tripods">Tripods</Link>
							</Button>
						</Row>
					</Column>
				</Row>
				<Row>
					<Image
						src="https://images.pexels.com/photos/16828892/pexels-photo-16828892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="backpacks"
					/>
					<Button>
						<Link to="/products/backpacks">Backpacks</Link>
					</Button>
				</Row>
			</ColumnLarge>
		</CategoryGridContainer>
	);
};

export default CategoryGrid;
