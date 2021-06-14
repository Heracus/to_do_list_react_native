/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import firestore from '@react-native-firebase/firestore';
import { actSetLoading } from "./loading";

export const actGetToDoList = (cb) => async dispatch => {
    dispatch(actSetLoading(true));
    try {
        const toDoList = await firestore().collection("toDoList").get();

        dispatch({
            type: "SET_TO_DO_LIST",
            payload: toDoList.docs.map(doc => doc.data()),
        });

        if (cb) cb(toDoList.docs.map(doc => doc.data()));
    } catch (e) {
        console.log(e);
    }
    dispatch(actSetLoading(false));
};
