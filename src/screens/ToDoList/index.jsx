/* eslint-disable no-alert */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CreateListModal from "../../components/CreateListModal";
import ToDoListItem from "../../components/ToDoListItem";
import {useCallback} from "react";
import {connect} from "react-redux";
import {actGetToDoList} from "../../redux/actions/toDoList";
import {actGetToDosByToDoListId} from "../../redux/actions/toDo";
import {getDayString} from "../../utils/common";
import {
  AddToListIcon,
  Container,
  Header,
  HeaderBottom,
  PickerCustom,
  Body,
  CategoryTitle,
  ListIcon,
} from "./styled";

function ToDoList({toDoList, toDos, actGetToDoList, actGetToDosByToDoListId}) {
  const [selectedList, setSelectedList] = useState("");
  const [isShowModalCreateList, setIsShowModalCreateList] = useState(false);

  const handleCreateNewList = listNameLabel => {
    const listNameValue = listNameLabel.toLowerCase().replace(" ", "_");
  };

  const refreshToDoList = useCallback(() => {
    actGetToDoList(
      toDoList => toDoList.length > 0 && setSelectedList(toDoList[0].value),
    );
    actGetToDosByToDoListId(selectedList);
  }, []);

  useEffect(() => {
    actGetToDoList(
      toDoList => toDoList.length > 0 && setSelectedList(toDoList[0].value),
    );
  }, []);

  useEffect(() => {
    actGetToDosByToDoListId(selectedList);
  }, [selectedList]);

  return (
    <Container>
      <Header>
        <HeaderBottom>
          <PickerCustom
            dropdownIconColor="#FFFFFF"
            mode="dropdown"
            selectedValue={selectedList}
            onValueChange={value => setSelectedList(value)}>
            {toDoList.map(({label, value}, index) => (
              <PickerCustom.Item key={index} label={label} value={value} />
            ))}
          </PickerCustom>
          <AddToListIcon
            name="add-to-list"
            onPress={() => setIsShowModalCreateList(!isShowModalCreateList)}
          />
          <ListIcon name="list" onPress={() => {}} />
          <CreateListModal
            isVisible={isShowModalCreateList}
            setVisible={setIsShowModalCreateList}
            handleCreateNewList={handleCreateNewList}
          />
        </HeaderBottom>
      </Header>

      <Body>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={refreshToDoList} />
          }>
          {toDos.filter(
            toDo => getDayString(toDo.date + toDo.time) === "Outdated",
          ).length > 0 && (
            <View>
              <CategoryTitle>Đã diễn ra</CategoryTitle>
              {toDos
                .filter(
                  toDo => getDayString(toDo.date + toDo.time) === "Outdated",
                )
                .map((toDo, index) => (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.5}
                    onPress={() => alert("xxxx")}>
                    <ToDoListItem {...toDo} />
                  </TouchableOpacity>
                ))}
            </View>
          )}

          {toDos.filter(
            toDo => getDayString(toDo.date + toDo.time) === "Yesterday",
          ).length > 0 && (
            <View>
              <CategoryTitle>Hôm qua</CategoryTitle>
              {toDos
                .filter(
                  toDo => getDayString(toDo.date + toDo.time) === "Yesterday",
                )
                .map((toDo, index) => (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.5}
                    onPress={() => alert("xxxx")}>
                    <ToDoListItem {...toDo} />
                  </TouchableOpacity>
                ))}
            </View>
          )}

          {toDos.filter(toDo => getDayString(toDo.date + toDo.time) === "Today")
            .length > 0 && (
            <View>
              <CategoryTitle>Hôm nay</CategoryTitle>
              {toDos
                .filter(toDo => getDayString(toDo.date + toDo.time) === "Today")
                .map((toDo, index) => (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.5}
                    onPress={() => alert("xxxx")}>
                    <ToDoListItem {...toDo} />
                  </TouchableOpacity>
                ))}
            </View>
          )}

          {toDos.filter(
            toDo => getDayString(toDo.date + toDo.time) === "Tomorrow",
          ).length > 0 && (
            <View>
              <CategoryTitle>Ngày mai</CategoryTitle>
              {toDos
                .filter(
                  toDo => getDayString(toDo.date + toDo.time) === "Tomorrow",
                )
                .map((toDo, index) => (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.5}
                    onPress={() => alert("xxxx")}>
                    <ToDoListItem {...toDo} />
                  </TouchableOpacity>
                ))}
            </View>
          )}

          {toDos.filter(
            toDo =>
              !["Outdated", "Yesterday", "Today", "Tomorrow"].includes(
                getDayString(toDo.date + toDo.time),
              ),
          ).length > 0 && (
            <View>
              <CategoryTitle>Sắp diễn ra</CategoryTitle>
              {toDos
                .filter(
                  toDo =>
                    !["Outdated", "Yesterday", "Today", "Tomorrow"].includes(
                      getDayString(toDo.date + toDo.time),
                    ),
                )
                .map((toDo, index) => (
                  <TouchableOpacity
                    key={index}
                    activeOpacity={0.5}
                    onPress={() => alert("xxxx")}>
                    <ToDoListItem {...toDo} />
                  </TouchableOpacity>
                ))}
            </View>
          )}
        </ScrollView>
      </Body>
    </Container>
  );
}

const mapStateToProps = state => ({
  toDoList: state.toDoList,
  toDos: state.toDos,
});

const mapDispatchToProps = {
  actGetToDoList,
  actGetToDosByToDoListId,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
