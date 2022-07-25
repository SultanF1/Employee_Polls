export const RECEIVE_USERS = 'RECEIVE_USERS'
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER'
export function receiveUsers(users){
    return {
        type:RECEIVE_USERS,
        users,
    }
}

export function authenticateUser(authedUser){
    return {
        type:AUTHENTICATE_USER,
        authedUser,
    }
}