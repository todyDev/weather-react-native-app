import React from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#000000", "#434343"],
    statusBar: "light-content"
  },
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["#6190E8", "#A7BFE8"],
    statusBar: "light-content"
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#182848", "#4b6cb7"],
    statusBar: "light-content"
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#eef2f3", "#8e9eab"],
    statusBar: "dark-content"
  },
  Clear: {
    iconName: "weather-night",
    gradient: ["#B2FEFA", "#0ED2F7"],
    statusBar: "dark-content"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#525252", "#3d72b4"],
    statusBar: "light-content"
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#19547b", "#ffd89b"],
    statusBar: "light-content"
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#19547b", "#ffd89b"],
    statusBar: "light-content"
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#19547b", "#ffd89b"],
    statusBar: "light-content"
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#19547b", "#ffd89b"],
    statusBar: "light-content"
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#19547b", "#ffd89b"],
    statusBar: "light-content"
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#19547b", "#ffd89b"],
    statusBar: "light-content"
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#19547b", "#ffd89b"],
    statusBar: "light-content"
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#19547b", "#ffd89b"],
    statusBar: "light-content"
  },
  Squall: {
    iconName: "weather-windy",
    gradient: ["#19547b", "#ffd89b"],
    statusBar: "light-content"
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#19547b", "#ffd89b"],
    statusBar: "light-content"
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient colors={weatherOptions[condition.main].gradient} style={styles.container}>
      <StatusBar barStyle={weatherOptions[condition.main].statusBar} />
      <View style={styles.halfContainer}>
        <View style={styles.tempCodi}>
          <MaterialCommunityIcons style={styles.tempIcon} name={weatherOptions[condition.main].iconName} />
          <Text style={styles.tempDesc}>{condition.main}</Text>
        </View>
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.desc}>{condition.description}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
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
    fontSize: 105,
    fontWeight: "200",
    margin: 5
  },
  tempCodi: {
    flexDirection: "row"
  },
  tempIcon: {
    fontSize: 19,
    paddingRight: 3
  },
  tempDesc: {
    fontSize: 19
  },
  desc: {
    fontSize: 30
  }
});
