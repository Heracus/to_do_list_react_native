/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import firestore from '@react-native-firebase/firestore';
import { actSetLoading } from "./loading";

export const actGetToDoList = (cb) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        let toDoList = (await firestore().collection("toDoList").get()).docs;
        const payload = [];

        for (let i = 0; i < toDoList.length; i++) {
            const tdList = toDoList[i].data();
            const toDos = [];

            for (let j = 0; j < tdList.toDos.length; j++) {
                let toDoData = await tdList.toDos[j].get();
                const docPath = `toDo/${toDoData.ref._documentPath._parts[1]}/`;

                toDoData = toDoData.data();
                toDoData.docPath = docPath;
                delete toDoData.toDoListId;

                toDos.push(toDoData);
            }

            delete tdList.toDos;
            tdList.toDos = toDos;
            payload.push(tdList);
        }

        dispatch({
            type: "SET_TO_DO_LIST",
            payload,
        });

        if (cb) cb(payload);
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
};

export const actCreateNewToDoList = (newToDoList) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const toDoList = await firestore().collection("toDoList");

        dispatch({
            type: "SET_TO_DO_LIST",
            payload: toDoList.docs.map(doc => doc.data()),
        });

    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
};