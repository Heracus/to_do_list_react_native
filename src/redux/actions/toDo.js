/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import firestore from '@react-native-firebase/firestore';
import { actSetLoading } from "./loading";

export const actGetToDosByToDoListId = (toDoListKey) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const toDos = (await firestore().collection("toDo").get()).docs;

        let payload = [];

        for (let i = 0; i < toDos.length; i++) {
            let toDo = toDos[i].data();
            const toDoList = (await toDo.toDoListId.get()).data();

            delete toDo.toDoListId;
            delete toDoList.toDos;

            toDoList.value === toDoListKey && payload.push({
                ...toDo,
                toDoList,
            });
        }

        dispatch({
            type: "SET_TO_DOS",
            payload,
        });

    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
};
