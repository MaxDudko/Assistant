export const currentMonthCheck = () => {
  return {
      type: "CURRENT_MONTH_CHECK",
      payload: {}
  }
};

export const createCalendar = (change: string) => {
    return {
        type: "CREATE_CALENDAR",
        payload: {
            change: change,
        }
    }
};
