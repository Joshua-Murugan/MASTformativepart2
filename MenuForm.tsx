import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MenuItem } from "./HomeScreen";

interface Props {
  onAddItem: (item: MenuItem) => void;
}

const MenuForm: React.FC<Props> = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [course, setCourse] = useState("Starters");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    if (!name || !desc || !price) {
      Alert.alert("Missing fields", "Please fill in all details");
      return;
    }

    if (isNaN(Number(price))) {
      Alert.alert("Invalid input", "Price must be a number");
      return;
    }

    const newItem: MenuItem = {
      id: Date.now().toString(),
      name,
      description: desc,
      course,
      price,
    };

    onAddItem(newItem);
    setName("");
    setDesc("");
    setCourse("Starters");
    setPrice("");
  };

  return (
    <View style={styles.form}>
      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter dish name"
        placeholderTextColor="#ccc"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        placeholderTextColor="#ccc"
        value={desc}
        onChangeText={setDesc}
      />

      <Text style={styles.label}>Select Course</Text>
      {Platform.OS === "web" ? (
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.dropdown}
            selectedValue={course}
            onValueChange={(value: string) => setCourse(value)}
          >
            <Picker.Item label="Starters" value="Starters" />
            <Picker.Item label="Mains" value="Mains" />
            <Picker.Item label="Dessert" value="Dessert" />
          </Picker>
        </View>
      ) : (
        <TextInput
          style={styles.input}
          placeholder="Starters / Mains / Dessert"
          placeholderTextColor="#ccc"
          value={course}
          onChangeText={setCourse}
        />
      )}

      <Text style={styles.label}>Price (R)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Menu Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuForm;

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#2c2c2c",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  label: { color: "#ffd700", marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#555",
    padding: 8,
    color: "#fff",
    borderRadius: 8,
    marginBottom: 10,
  },
  pickerContainer: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#444",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#555",
  },
  dropdown: {
    width: "100%",
    color: "#fff",
  },
  button: {
    backgroundColor: "#ffd700",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#1a1a1a",
    fontWeight: "bold",
  },
});
