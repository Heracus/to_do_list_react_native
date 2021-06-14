/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const initialState = [];

const toDos = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_TO_DOS":
            state = payload;
            return state;

        default:
            return state;
    }
};

export default toDos;