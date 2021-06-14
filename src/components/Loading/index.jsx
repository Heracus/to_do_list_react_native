import React from "react";
import {ActivityIndicator, Text, View} from "react-native";
import {Container} from "./styled";

function Loading() {
  return (
    <Container>
      <ActivityIndicator size={80} color="#fff" />
    </Container>
  );
}

export default Loading;
