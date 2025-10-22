import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Animated,
  ImageBackground,
  Platform,
  Dimensions,
} from "react-native";
import MenuForm from "./MenuForm";
import MenuList from "./MenuList";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: string;
  price: string;
}

const HomeScreen: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const addMenuItem = (item: MenuItem) => {
    setMenuItems((prev) => [...prev, item]);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(() => fadeAnim.setValue(0));
  };

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1600891964091-0b4f1f7d0eaa" }}
      style={styles.bg}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>🍴 Chef Christoffel’s Menu</Text>

        <MenuForm onAddItem={addMenuItem} />

        <Animated.Text style={[styles.counter, { opacity: fadeAnim }]}>
          Total Menu Items: {menuItems.length}
        </Animated.Text>

        <FlatList
          data={menuItems}
          renderItem={({ item }) => <MenuList item={item} />}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 10 }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bg: { 
    flex: 1, 
    resizeMode: "cover",
    minHeight: Platform.OS === 'web' ? Dimensions.get('window').height : '100%',
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 20,
    maxWidth: Platform.OS === 'web' ? 800 : undefined,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffd700",
    textAlign: "center",
    marginVertical: 10,
  },
  counter: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
});
