import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UpdateScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Actualizaciones</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default UpdateScreen;
