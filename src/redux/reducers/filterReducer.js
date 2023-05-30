import { CLEAR_FILTERS, TOGGLE_BRAND, TOGGLE_STOCK } from '../actionTypes/actionTypes';

const initialState = {
	filters: {
		brands: [],
		stock: false,
	},
	search: '',
};

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_BRAND:
			if (!state.filters.brands.includes(action.payload))
				return {
					...state,
					filters: {
						...state.filters,
						brands: [...state.filters.brands, action.payload],
					},
				};
			return {
				...state,
				filters: {
					...state.filters,
					brands: state.filters.brands.filter((brand) => brand !== action.payload),
				},
			};

		case TOGGLE_STOCK:
			return {
				...state,
				filters: {
					...state.filters,
					stock: !state.filters.stock,
				},
			};

		case CLEAR_FILTERS:
			return {
				...state,
				filters: {
					...state.filters,
					stock: false,
					brands: [],
				},
			};

		default:
			return state;
	}
};

export default filterReducer;
