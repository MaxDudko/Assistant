export function getProfileData(id: string) {
     return {
        type: 'GET_PROFILE_DATA',
        payload: {
            id,
            path: '/profile/get/',
            typed: "RECEIVED_PROFILE_DATA"
        }
    }
}

export function setProfileData(data: any, id: string) {
    return {
        type: 'SET_PROFILE_DATA',
        payload: {
            data: data,
            id: id,
            path: "/profile/update/",
            typed: "UPDATE_PROFILE_DATA"
        }
    }
}