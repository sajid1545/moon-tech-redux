import { loadProduct } from '../actions/productAction';

const fetchProductData = () => {
	return async (dispatch, getState) => {
		const search = getState().filter.search;

		const res = await fetch(`http://localhost:5000/products?text=${search}`);
		const data = await res.json();

		if (data.data.length) {
			dispatch(loadProduct(data.data));
		}
	};
};

export default fetchProductData;
