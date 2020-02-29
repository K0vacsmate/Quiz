export const playerReducer = (user = "", action) => {
    switch (action.type) {
        case 'REGISTER_PLAYER':
            return [...user, action.payload];
        default:
            return user;
    }
}