export const playerReducer = (user = "", action) => {
    switch (action.type) {
        case 'REGISTER_PLAYER':
            return action.payload;
        default:
            return user;
    }
}