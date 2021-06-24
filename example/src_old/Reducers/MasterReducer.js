import { createReducer } from 'reduxsauce';
import { Types } from './../Actions/Actions'

export const INITIAL_STATE = {};

const changeComponent = (state, action) => ({

})


const ACTION_HANDLERS = {
    [Types.CHANGE_ACTIVE_COMPONENT]: changeComponent
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
