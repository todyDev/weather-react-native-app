import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({ temp, condition }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <Image style={styles.weatherImg} source={{ uri: `http://openweathermap.org/img/wn/${condition.icon}@4x.png` }}></Image>
        <Text style={styles.temp}>
          {temp}
          <MaterialCommunityIcons size={30} name="temperature-celsius" />
        </Text>
        <Text>{condition.main}</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.desc}>{condition.description}</Text>
      </View>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.object.isRequired,
  condition: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 30
  },
  weatherImg: {
    width: 180,
    height: 180
  },
  desc: {
    fontSize: 30
  }
});
