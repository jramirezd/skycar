const INITIAL_STATE = {
    provinces: []
  };
  
  const applySetProvinces = (state, action) => ({
    ...state,
    provinces: action.provinces
  });
  
  function provincesReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      case 'PROV_SET' : {
        return applySetProvinces(state, action);
      }
      default : return state;
    }
  }
  
  export default provincesReducer;