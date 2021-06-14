/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

import toDoList from "./toDoList";
import schedule from "./schedule";
import loading from "./loading";

const rootReducder = combineReducers({ toDoList, schedule, loading });

export default rootReducder;