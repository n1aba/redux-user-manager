export function filter(query) {
    const action = {
        type: 'UPDATE_FILTER',
        filterString: query,
    };
    return action;
}

export function addNewUser(user) {
    const action = {
        type: 'ADD_USER',
        user: user,
        filterString: "",
    };
    return action;
}

export function deleteUser(id) {
    const action = {
        type: 'REMOVE_USER',
        id: id,
    };
    return action;
}
