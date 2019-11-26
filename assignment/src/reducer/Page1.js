import { PAGE1 } from '../action/_ActionTypes';

const defaultState = {
  loading: true,
  page1: []
}

export const reducer =  (state = defaultState, action) => {
  switch (action.type) {
    case PAGE1.LOADING:
      return {
        ...state,
        loading: true,
      };
    case PAGE1.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        page1: action.page1
      };
    default:
      return state;
  }
}


