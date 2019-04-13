const Menu = (state = { menulist: [], err: null }, action) => {

    switch (action.type) {
      case "REQUEST_MENU_START":
        return{
            ...state
        }
      case "REQUEST_MENU_SUCCESS":
        return {
             ...state, 
             menulist: action.data,
             err: null
            };
      case "REQUEST_MENU_FAIL":
            return {
                ...state,
                err:action.err
            }
      default:
        return state;
    }
  };

export default Menu;
