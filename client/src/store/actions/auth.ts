export const setID = (id: string) => {
    return {
        type: "SET_ID",
        payload: {
            id: id
        }
    }
};
