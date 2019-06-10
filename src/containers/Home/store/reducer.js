import { CHANGE_LIST } from './contants'

const defaultState = {
    name: 'tengwei',
    newLists: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_LIST:
            return {
                ...state,
                newLists: action.list
            }
        default:
         return state
    }
}