/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

import toDoList from "./toDoList";
import schedule from "./schedule";
import toDos from "./toDos";
import loading from "./loading";

const rootReducder = combineReducers({ toDoList, schedule, loading, toDos });

export default rootReducder;