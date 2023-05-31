import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import { clearFilters, toggleBrand, toggleStock } from '../../redux/actions/filterActions';
import fetchProductData from '../../redux/thunk/fetchProductData';

const Home = () => {
	const dispatch = useDispatch();

	const products = useSelector((state) => state.product.products);
	const filters = useSelector((state) => state.filter.filters);
	const search = useSelector((state) => state.filter.search);

	const { brands, stock } = filters;

	useEffect(() => {
		dispatch(fetchProductData());
	}, [dispatch, search]);

	const activeClass = 'text-white  bg-indigo-500 border-white';

	let content;

	if (products.length) {
		content = products.map((product) => <ProductCard key={product.model} product={product} />);
	}

	if ((products.length && stock) || brands.length) {
		content = products
			.filter((product) => {
				if (stock) {
					return product.status === true;
				}
				return product;
			})
			.filter((product) => {
				if (brands.length) {
					return brands.includes(product.brand);
				}
				return product;
			})
			.map((product) => <ProductCard key={product.model} product={product} />);
	}

	return (
		<div className="max-w-7xl gap-14 mx-auto my-10">
			<div className="flex justify-between items-center mb-10">
				<button
					title="Clear Filters"
					onClick={() => dispatch(clearFilters())}
					className={`border w-9 h-9 rounded-full font-semibold bg-red-700 text-white  `}>
					X
				</button>
				<div className="flex justify-end gap-5">
					<button
						onClick={() => dispatch(toggleStock())}
						className={`border px-3 py-2 rounded-full font-semibold ${stock ? activeClass : ''} `}>
						In Stock
					</button>
					<button
						onClick={() => dispatch(toggleBrand('amd'))}
						className={`${
							brands.includes('amd') ? activeClass : ''
						} border px-3 py-2 rounded-full font-semibold`}>
						AMD
					</button>
					<button
						onClick={() => dispatch(toggleBrand('intel'))}
						className={`${
							brands.includes('intel') ? activeClass : ''
						} border px-3 py-2 rounded-full font-semibold`}>
						Intel
					</button>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">{content}</div>
		</div>
	);
};

export default Home;
