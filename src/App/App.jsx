/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar, StyleSheet, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {connect} from "react-redux";

import Schedule from "../screens/Schedule";
import ToDoList from "../screens/ToDoList";
import Loading from "../components/Loading";

import {Container} from "./styled";

const Tab = createBottomTabNavigator();

function App({loading: {isShowLoading}}) {
  return (
    <Container>
      {isShowLoading && <Loading />}
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "#4563FF",
            inactiveTintColor: "#DFDFDF",
            labelStyle: {fontSize: 11},
            style: {height: 55},
          }}>
          <Tab.Screen
            name="To Do List"
            component={ToDoList}
            options={{
              tabBarIcon: ({color, size}) => (
                <FontAwesome name="list-ul" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Schedule"
            component={Schedule}
            options={{
              tabBarIcon: ({color, size}) => (
                <FontAwesome name="calendar-check-o" color={color} size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(App);
