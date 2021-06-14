/* eslint-disable no-alert */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Entypo from 'react-native-vector-icons/Entypo';
import CreateListModal from '../components/CreateListModal';
import ToDoListItem from '../components/ToDoListItem';

function ToDoList({ }) {
    const [selectedList, setSelectedList] = useState();
    const [isShowModalCreateList, setIsShowModalCreateList] = useState(false);
    const [toDoList, setToDoList] = useState()

    const handleCreateNewList = (listName) => {
        const value = listName.toLowerCase().replace(' ', '_');

        const isExist = toDoList.find(item => item.value === value);
        if (isExist) {
            alert('List name exist!\nPlease choose another name!');
            return;
        }

        setToDoList([...toDoList, { label: listName, value, toDos: [] }]);
        setIsShowModalCreateList(false);
    }

    return <View style={styles.container} >
        <View style={styles.header}>
            <View style={styles.headerBottom}>
                <Picker
                    style={styles.picker}
                    dropdownIconColor="#FFFFFF"
                    mode="dropdown"
                    selectedValue={selectedList}
                    onValueChange={(value, index) => {
                        setSelectedList(value)
                    }}
                >
                    {toDoList.map(({ label, value }, index) => <Picker.Item
                        key={index}
                        label={label}
                        value={value}
                    />)}
                </Picker>
                <Entypo
                    name="add-to-list"
                    style={styles.addToListIcon}
                    onPress={() => setIsShowModalCreateList(!isShowModalCreateList)}
                />
                <Entypo
                    name="list"
                    style={styles.listIcon}
                    onPress={() => { }}
                />
                <CreateListModal
                    isVisible={isShowModalCreateList}
                    setVisible={setIsShowModalCreateList}
                    handleCreateNewList={handleCreateNewList}
                />
            </View>
        </View>

        <View style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.category}>
                    <Text style={styles.categoryTitle}>
                        Today
                    </Text>
                    {[1, 2, 3, 4].map((toDoListItem, index) =>
                        <TouchableOpacity key={index} activeOpacity={0.5} onPress={() => alert("xxxx")}>
                            <ToDoListItem />
                        </TouchableOpacity>
                    )
                    }
                </View>
                <View style={styles.category}>
                    <Text style={styles.categoryTitle}>
                        Tomorrow
                    </Text>
                    {[1, 2, 3, 4].map((toDoListItem, index) => <ToDoListItem key={index} />)}
                </View>
            </ScrollView>
        </View>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#F3F5F8'
    },
    // Header
    header: {
        height: 100,
        backgroundColor: '#4462FF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    headerBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3
    },
    picker: {
        flex: 5,
        color: '#fff',
    },
    listIcon: {
        flex: 1,
        color: '#fff',
        fontSize: 25,
        textAlign: 'center'
    },
    addToListIcon: {
        flex: 1,
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        marginRight: 8
    },
    // Body
    body: {
        flex: 1,
        marginTop: 10,
    },
    category: {

    },
    categoryTitle: {
        fontSize: 24,
        color: '#4462FF',
        marginBottom: 10
    }

});

export default ToDoList;