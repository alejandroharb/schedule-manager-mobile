import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: 'Monday'
};

export default ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};//not an array, but is key interpolation
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
