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

const lstSchedule = [
  {
    label: "Đã diễn ra",
    value: "Outdated",
  },
  {
    label: "Hôm qua",
    value: "Yesterday",
  },
  {
    label: "Hôm nay",
    value: "Today",
  },
  {
    label: "Ngày mai",
    value: "Tomorrow",
  },
  {
    label: "Sẽ diễn ra",
    value: "Future",
  },
];

function ToDoList({toDoList, actGetToDoList}) {
  const [selectedList, setSelectedList] = useState("");
  const [isShowModalCreateList, setIsShowModalCreateList] = useState(false);

  const handleCreateNewList = listNameLabel => {
    const listNameValue = listNameLabel.toLowerCase().replace(" ", "_");
  };

  const refreshToDoList = useCallback(() => {
    actGetToDoList(
      toDoList => toDoList.length > 0 && setSelectedList(toDoList[0].value),
    );
  }, []);

  useEffect(() => {
    actGetToDoList(
      toDoList => toDoList.length > 0 && setSelectedList(toDoList[0].value),
    );
  }, []);

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
          {lstSchedule.map(
            schedule =>
              [].filter(
                toDo => getDayString(toDo.date + toDo.time) === schedule.value,
              ).length > 0 && (
                <View>
                  <CategoryTitle>{schedule.label}</CategoryTitle>
                  {toDos
                    .filter(
                      toDo =>
                        getDayString(toDo.date + toDo.time) === schedule.value,
                    )
                    .map(toDo => (
                      <TouchableOpacity
                        key={toDo.docPath}
                        activeOpacity={0.5}
                        onPress={() => {}}>
                        <ToDoListItem {...toDo} />
                      </TouchableOpacity>
                    ))}
                </View>
              ),
          )}
        </ScrollView>
      </Body>
    </Container>
  );
}

const mapStateToProps = state => ({
  toDoList: state.toDoList,
});

const mapDispatchToProps = {
  actGetToDoList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
