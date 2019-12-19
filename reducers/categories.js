const INITIAL_STATE = {
    categories: []
  };
  
  const applySetCategories = (state, action) => ({
    ...state,
    categories: action.categories
  });
  
  function categoriesReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      case 'CAT_SET' : {
        return applySetCategories(state, action);
      }
      default : return state;
    }
  }
  
  export default categoriesReducer;