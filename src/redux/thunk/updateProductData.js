import { updateProduct } from '../actions/productAction';

const updateProductData = (product,_id) => {
	return async (dispatch, getState) => {
		const res = await fetch(`http://localhost:5000/product/${_id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(product),
		});
		const data = await res.json();

		if (data.acknowledged) {
			dispatch(updateProduct(product));
		}
	};
};

export default updateProductData;
