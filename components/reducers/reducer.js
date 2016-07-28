const initialState = {
    users: [],
    filterString: ""
}

const UPDATE_FILTER = "UPDATE_FILTER";
const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";

let nextId = 0;

export default function patentDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_FILTER: {
            return Object.assign({}, state, {
                filterString: action.filterString
            })
        }
        case ADD_USER: {
            return Object.assign({}, state, {
                users: [
            ...state.users,
            {id: nextId++, name: action.user}
          ],
          filterString: action.filterString
            })
        }
        case REMOVE_USER: {
          let index = state.users.map( (el) => el.id ).indexOf(action.id);
            return Object.assign({}, state, {
                users: [
            ...state.users.slice(0, index),
            ...state.users.slice(index + 1)
            ]
            })
        }
        default: {
            return state;
        }
    }
}
