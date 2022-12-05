export const GET_ROLES = 'GET_ROLES'
export const POST_ROLE = 'POST_ROLE'
export const DELETE_ROLE = 'DELETE_ROLE'
export const UPDATE_ROLE = 'UPDATE_ROLE'

export const getRoles = (role) => {
    return {
        type: GET_ROLES,
        role
    }
}

export const addRole = (role) => {
    return {
        type: POST_ROLE,
        role
    }
}

export const deleteRole = (id) => {
    return {
        type: DELETE_ROLE,
        id
    }
}

export const updateRole = (id, role) => {
    return {
        type: UPDATE_ROLE,
        id,
        role
    }
}