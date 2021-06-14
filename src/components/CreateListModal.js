/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import { Modal, StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, KeyboardAvoidingView } from "react-native";

function CreateListModal({ isVisible, setVisible, handleCreateNewList }) {
    const [listName, setListName] = useState('');

    const handleCancel = () => {
        setListName('');
        setVisible(false);
    }
    return <Modal
        visible={isVisible}
        transparent
        statusBarTranslucent
    >
        <View style={styles.overlay}>
            <KeyboardAvoidingView behavior="padding">
                <View style={styles.icon} />
                <View style={styles.wrapper} >
                    <View style={styles.header}>
                        <Text style={styles.modalTitle}>Create new list</Text>
                        <AntDesign name="closecircleo" style={styles.antDesignIcon} onPress={handleCancel} />
                    </View>

                    <View style={styles.divide} />

                    <View style={styles.body}>
                        <TextInput
                            style={styles.input}
                            value={listName}
                            placeholder="Type new list name"
                            onChangeText={setListName}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            handleCreateNewList(listName);
                            setListName('');
                        }}
                    >
                        <Text style={styles.buttonText}>Create</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    icon: {
        height: 5,
        width: 50,
        backgroundColor: '#fff',
        marginBottom: 6,
        borderRadius: 5,
        alignSelf: 'center'
    },
    wrapper: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
        minHeight: 200,
        paddingBottom: 20
    },
    header: {
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 10
    },
    antDesignIcon: {
        position: 'absolute',
        right: 10,
        fontSize: 25
    },
    modalTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    divide: {
        height: 1.5,
        width: 150,
        backgroundColor: '#ccc',
        alignSelf: 'center'
    },
    body: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#4462FF',
        padding: 12,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 15
    }
});

export default CreateListModal;