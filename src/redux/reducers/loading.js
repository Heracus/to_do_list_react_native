/* eslint-disable prettier/prettier */
const initialState = {
    isShowLoading: false,
};

function loading(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'LOADING':
            return { ...state, isShowLoading: payload };

        default:
            return state;
    }
}

export default loading;
