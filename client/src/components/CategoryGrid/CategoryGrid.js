import { Link } from "react-router-dom";
import "./CategoryGrid.scss";

const CategoryGrid = () => {
	return (
		<div className="category-grid">
			<div className="col">
				<div className="row">
					<img src="https://images.pexels.com/photos/16828894/pexels-photo-16828894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
					<button>
						<Link className="link" to="/products/cameras">
							Cameras
						</Link>
					</button>
				</div>
				<div className="row">
					<img src="https://images.pexels.com/photos/16828889/pexels-photo-16828889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
					<button>
						<Link className="link" to="/products/filters">
							Filters
						</Link>
					</button>
				</div>
			</div>
			<div className="col">
				<div className="row">
					<img src="https://images.pexels.com/photos/16828890/pexels-photo-16828890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
					<button>
						<Link className="link" to="/products/lenses">
							Lenses
						</Link>
					</button>
				</div>
			</div>
			<div className="col col-large">
				<div className="row">
					<div className="col">
						<div className="row">
							<img src="https://images.pexels.com/photos/16828888/pexels-photo-16828888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
							<button>
								<Link
									className="link"
									to="/products/microphones"
								>
									Microphones
								</Link>
							</button>
						</div>
					</div>
					<div className="col">
						<div className="row">
							<img src="https://images.pexels.com/photos/16828891/pexels-photo-16828891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
							<button>
								<Link className="link" to="/products/tripods">
									Tripods
								</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="row">
					<img src="https://images.pexels.com/photos/16828892/pexels-photo-16828892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
					<button>
						<Link className="link" to="/products/backpacks">
							Backpacks
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CategoryGrid;
