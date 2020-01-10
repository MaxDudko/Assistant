export const getProfileData = (id: string) => {
    return {
        type: "GET_PROFILE_DATA",
        payload: {
            id: id,
            path: '/profile/get/',
            typed: "RECEIVED_PROFILE_DATA"
        }
    }
};
