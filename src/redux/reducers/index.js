/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

import toDoList from "./toDoList";
import schedule from "./schedule";

const rootReducder = combineReducers({ toDoList, schedule });

export default rootReducder;