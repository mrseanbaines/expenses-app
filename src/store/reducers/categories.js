import actionTypes from '../action-types';

const initialState = {
  loading: false,
  success: false,
  error: false,
  categories: [],
  total: 0,
};

export default (state = initialState, { type, categories, category, total }) => {
  switch (type) {
    case actionTypes.categories.GET_CATEGORIES_REQUEST: {
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    }

    case actionTypes.categories.GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        categories,
        total,
      };
    }

    case actionTypes.categories.GET_CATEGORIES_FAILURE: {
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    }

    case actionTypes.categories.ADD_CATEGORY_REQUEST: {
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    }

    case actionTypes.categories.ADD_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        categories: [...state.categories, category],
        total,
      };
    }

    case actionTypes.categories.ADD_CATEGORY_FAILURE: {
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    }

    case actionTypes.categories.DELETE_CATEGORY_REQUEST: {
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    }

    case actionTypes.categories.DELETE_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        categories: state.categories.filter(cat => cat.id !== category.id),
        total,
      };
    }

    case actionTypes.categories.DELETE_CATEGORY_FAILURE: {
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
