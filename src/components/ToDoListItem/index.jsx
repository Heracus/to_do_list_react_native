/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import CheckBox from "@react-native-community/checkbox";
import React, {useEffect, useState} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {getDayString, getDateStringAndTime} from "../../utils/common";

function ToDoListItem({date, time, title}) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(false);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.toDoTitle}>{title}</Text>
        </View>
        <View style={styles.contentBody}>
          <Text style={styles.toDoDescription}>
            {getDayString(date + time) === "Future"
              ? getDateStringAndTime(date + time)
              : getDayString(date + time)}
          </Text>
        </View>
      </View>
      <View style={styles.checkboxWrapper}>
        <CheckBox
          style={styles.checkbox}
          tintColors={{true: "#54A2FF", false: "#54A2FF"}}
          value={isChecked}
          onValueChange={newValue => setIsChecked(newValue)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  content: {
    flex: 9,
  },
  contentHeader: {
    flex: 1,
    justifyContent: "center",
  },
  contentBody: {
    flex: 1,
  },
  checkboxWrapper: {
    flex: 1,
    alignItems: "flex-end",
  },
  checkbox: {
    transform: [{scaleX: 1.2}, {scaleY: 1.2}],
  },
  toDoTitle: {
    fontSize: 16,
  },
  toDoDescription: {
    fontSize: 14,
    color: "#ccb",
  },
});

export default ToDoListItem;
