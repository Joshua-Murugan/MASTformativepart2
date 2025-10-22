import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { MenuItem } from "./HomeScreen";

interface Props {
  item: MenuItem;
}

const MenuList: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.course}>{item.course}</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <Text style={styles.price}>R {item.price}</Text>
    </View>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: { fontSize: 18, color: "#ffd700", fontWeight: "bold" },
  course: { fontSize: 14, color: "#aaa" },
  desc: { color: "#fff", marginVertical: 4 },
  price: {
    color: "#00ffcc",
    fontWeight: "bold",
    textAlign: "right",
  },
});
