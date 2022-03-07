import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";
//agregamos ImageBackground, StatusBar, SafeAreaView
//Agregar MapView, Marker de 'react-native-maps'
import MapView, { Marker } from "react-native-maps";
import axios from "axios";

const LocationScreen = (props) => {
  let [location, setLocation] = useState({});

  useEffect(() => {
    axios
      .get("https://api.wheretheiss.at/v1/satellites/25544")
      .then((response) => {
        setLocation(response.data);
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  }, []);
  if (Object.keys(location).length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Cargando</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require("../assets/bg.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Localizacion de la EEI</Text>
          </View>
          {/* agrega un view y un map view */}
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              region={{
                latitude: location.latitude,
                longitude: location.longitude,
                longitudeDelta: 100,
                longitudeDelta: 100,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
              >
                {/* colocando la imagen de un satelite */}
                <Image
                  source={require("../assets/iss_icon.png")}
                  style={{ height: 50, width: 50 }}
                />
              </Marker>
            </MapView>
          </View>
          {/* Info para mostrar en la pantalla  */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Latitud: {location.latitude}</Text>
            <Text style={styles.infoText}>Longitud: {location.longitude}</Text>
            <Text style={styles.infoText}>
              Altitud (KM): {location.altitude}
            </Text>
            <Text style={styles.infoText}>
              Velocidad (KM/H): {location.velocity}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  titleContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  mapContainer: {
    flex: 0.7,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    flex: 0.2,
    backgroundColor: "white",
    marginTop: -10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  infoText: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
});
export default LocationScreen;
