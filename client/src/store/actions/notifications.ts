export const getNotificationsData = (id: string) => {
    return {
        type: "GET_NOTIFICATIONS_DATA",
        payload: {
            id: id,
            path: '/notifications/get/',
            typed: "RECEIVED_NOTIFICATIONS_DATA"
        }
    }
};

export const deleteMessage = (id: string) => {
    return {
        type: "DELETE_MESSAGE",
        payload: {
            id: id,
        }
    }
};