import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries, getCountryBySearch } from "../redux/actionCreators";

const SearchCountry = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name === "") {
      dispatch(getCountries());
    } else {
      dispatch(getCountryBySearch(name));
    }
  };

  return (
    <View style={styles.inputContainer}>
      <FontAwesome style={{ marginRight: 7 }} name="search" size={25} color="green" />
      <TextInput value={name} onChangeText={(newName) => setName(newName)} onEndEditing={handleSubmit} style={styles.input} placeholder="Search..." />
    </View>
  );
};

export default SearchCountry;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#eee",
    padding: 8,
    marginVertical: 15,
    marginHorizontal: 30,
  },
  input: {
    borderRadius: 50,
    width: "80%",
  },
});
