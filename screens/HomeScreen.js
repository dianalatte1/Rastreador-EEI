import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea} />
      <ImageBackground
        source={require("../assets/bg.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Localizacion de la EEI</Text>
        </View>
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => props.navigation.navigate("LocationScreen")}
        >
          <Text style={styles.routeText}>Ubicación de la EEI</Text>
          <Text style={styles.knowMore}>{"Know More --->"}</Text>
          <Text style={styles.bgDigit}>1</Text>
          <Image
            source={require("../assets/iss_icon.png")}
            style={styles.iconImage}
          ></Image>

          <Text style={styles.routeText}>Ubicacion de la EEI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => props.navigation.navigate("MeteorScreen")}
        >
          <Text style={styles.routeText}>Meteoros</Text>
          <Text style={styles.knowMore}>{"Know More --->"}</Text>
          <Text style={styles.bgDigit}>2</Text>
          <Image
            source={require("../assets/meteor_icon.png")}
            style={styles.iconImage}
          ></Image>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  routeCard: {
    flex: 0.2,
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 30,
    backgroundColor: "white",
  },
  routeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 75,
    paddingLeft: 30,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  knowMore: {
    paddingLeft: 30,
    color: "red",
    fontSize: 15,
  },
  bgDigit: {
    position: "absolute",
    color: "rgba(183,183,183,0.5)",
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1,
  },
  iconImage: {
    position: "absolute",
    height: 200,
    width: 200,
    resizeMode: "contain",
    right: 20,
    top: -80,
  },
});
export default HomeScreen;
