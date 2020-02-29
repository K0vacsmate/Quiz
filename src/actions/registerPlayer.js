export const registerPlayer = (name) => {
    return {
        type: "REGISTER_PLAYER",
        payload: name
    }
}