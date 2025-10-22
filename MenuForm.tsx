import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MenuItem } from "./HomeScreen";
import { Picker } from "@react-native-picker/picker";

interface Props {
  onAddItem: (item: MenuItem) => void;
}

const MenuForm: React.FC<Props> = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [course, setCourse] = useState("Starters");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !desc.trim() || !price.trim()) {
      Alert.alert("Missing fields", "Please fill in all details");
      return;
    }

    if (isNaN(Number(price))) {
      Alert.alert("Invalid input", "Price must be a number");
      return;
    }

    const newItem: MenuItem = {
      id: Date.now().toString(),
      name: name.trim(),
      description: desc.trim(),
      course,
      price: Number(price).toFixed(2),
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
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={course}
          onValueChange={(itemValue) => setCourse(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Starters" value="Starters" />
          <Picker.Item label="Mains" value="Mains" />
          <Picker.Item label="Dessert" value="Dessert" />
        </Picker>
      </View>

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
    backgroundColor: "#444",
    borderRadius: 8,
    marginBottom: 10,
  },
  picker: {
    color: "#fff",
    width: "100%",
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
