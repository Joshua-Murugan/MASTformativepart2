import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Platform } from "react-native";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  if (Platform.OS === "web") {
    return (
      <View style={{ flex: 1, backgroundColor: "#1a1a1a" }}>
        <HomeScreen />
      </View>
    );
  }

  return (
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
};

export default App;
