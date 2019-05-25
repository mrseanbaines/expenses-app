import actionTypes from '../action-types';

const initialState = {
  loading: false,
  success: false,
  error: false,
  expenses: [],
  total: 0,
};

export default (state = initialState, { type, expenses, updatedExpense, category, total }) => {
  switch (type) {
    case actionTypes.expenses.GET_EXPENSES_REQUEST: {
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    }

    case actionTypes.expenses.GET_EXPENSES_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        expenses: expenses.expenses,
        total: expenses.total,
      };
    }

    case actionTypes.expenses.GET_EXPENSES_FAILURE: {
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    }

    case actionTypes.expenses.UPDATE_EXPENSE_SUCCESS: {
      return {
        ...state,
        expenses: state.expenses.map(expense => {
          if (expense.id !== updatedExpense.id) {
            return expense;
          }

          return updatedExpense;
        }),
      };
    }

    case actionTypes.categories.DELETE_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        expenses: state.expenses.map(expense => {
          if (expense.category && expense.category.id === category.id) {
            return {
              ...expense,
              category: null,
            };
          }

          return expense;
        }),
        total,
      };
    }

    default: {
      return state;
    }
  }
};
