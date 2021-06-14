/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const initialState = [];

const schedule = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_NEW_SCHEDULE":
            return state;

        case "DONE_SCHEDULE":
            return state;

        default:
            return state;
    }
};

export default schedule;