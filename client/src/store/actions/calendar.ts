export const createCalendar = (change: string) => {
    return {
        type: "CREATE_CALENDAR",
        payload: {
            change: change,
        }
    }
};
