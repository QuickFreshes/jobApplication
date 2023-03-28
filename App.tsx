import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import Constants from "expo-constants";
import GeneralStatusBarColor from "./src/components/StatusBar/GeneralStatusBarColor";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <GeneralStatusBarColor
        backgroundColor="#F8FFEE"
        barStyle="dark-content"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
});
