const INITIAL_STATE = {
    brands: []
  };
  
  const applySetBrand = (state, action) => ({
    ...state,
    brands: action.brands
  });
  
  function brandReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      case 'DATA_SET' : {
        return applySetBrand(state, action);
      }
      default : return state;
    }
  }
  
  export default brandReducer;