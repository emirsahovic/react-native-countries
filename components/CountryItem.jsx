import { Button, Image, Linking, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CountryItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <Text style={[styles.text, styles.heading]}>{item.name.common}</Text>
      <Text style={[styles.text, styles.subheading]}>{item.region}</Text>
      <View style={styles.image}>
        <Image source={{ uri: item.flags.png }} style={{ width: 200, height: 120, resizeMode: "contain" }} />
      </View>
      <Text style={[styles.text, styles.pop]}>Population: {item.population}</Text>
      <Text style={{ color: "blue", fontSize: 18, marginTop: 10, textAlign: "center" }} onPress={() => Linking.openURL(`${item.maps.googleMaps}`)}>
        Google Maps
      </Text>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Button title="Read More" onPress={() => navigation.navigate("Country", { name: item.name.common })} />
      </View>
    </View>
  );
};

export default CountryItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#eee",
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 20,
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 20,
    fontWeight: "semibold",
  },
  pop: {
    fontSize: 18,
    color: "green",
  },
  image: {
    alignItems: "center",
    marginVertical: 10,
  },
});
