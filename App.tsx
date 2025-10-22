import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Platform, StyleSheet, Dimensions } from "react-native";
import HomeScreen from "./HomeScreen";
import ErrorBoundary from "./ErrorBoundary";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  const isWeb = Platform.OS === "web";

  const content = isWeb ? (
    <View style={styles.webWrapper}>
      <HomeScreen />
    </View>
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Christoffel's Chef Menu",
            headerStyle: { backgroundColor: "#1a1a1a" },
            headerTintColor: "#ffd700",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  return <ErrorBoundary>{content}</ErrorBoundary>;
};

const styles = StyleSheet.create({
  webWrapper: {
    minHeight: Dimensions.get("window").height,
    backgroundColor: "#1a1a1a",
    width: "100%",
  },
});

export default App;
