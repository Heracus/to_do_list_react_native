/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

export const getDateStringAndTime = milliseconds => {
    const date = new Date(milliseconds);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.toLocaleTimeString()}`;
};

export const getDayString = milliseconds => {
    const now = new Date(Date.now());
    const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDay() - 1);
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDay());
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDay() + 1);

    const dateTime = new Date(milliseconds);
    const dateTimeToChecked = new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDay());

    if (dateTimeToChecked.getTime() < yesterday.getTime()) {
        return "Outdated";
    }
    if (dateTimeToChecked.getTime() === yesterday.getTime()) {
        return "Yesterday";
    } else if (dateTimeToChecked.getTime() === today.getTime()) {
        return "Today";
    } else if (dateTimeToChecked.getTime() === tomorrow.getTime()) {
        return "Tomorrow";
    } else {
        return "Future";
    }
};