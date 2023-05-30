import { CLEAR_FILTERS, TOGGLE_BRAND, TOGGLE_STOCK } from '../actionTypes/actionTypes';

export const toggleBrand = (data) => {
	return {
		type: TOGGLE_BRAND,
		payload: data,
	};
};

export const toggleStock = () => {
	return {
		type: TOGGLE_STOCK,
	};
};

export const clearFilters = () => {
	return {
		type: CLEAR_FILTERS,
	};
};
