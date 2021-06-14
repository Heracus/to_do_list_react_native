/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const initialState = [
    {
        label: 'Drink water',
        value: 'drink_water',
        toDos: [
            {
                title: '',
                date: '',
                time: '',
                repeat: ''
            }
        ]
    },
    {
        label: 'Take medicines',
        value: 'take_medicines',
        toDos: []
    },
    {
        label: 'Fuck off',
        value: 'fuck_off',
        toDos: []
    }
];

const toDoList = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_NEW_TO_DO":
            return state;

        case "DONE_TO_DO":
            return state;

        default:
            return state;
    }
};

export default toDoList;