import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, View, Dimensions, Button, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByName } from "../redux/actionCreators";
import SafeAndroidView from "../SafeAndroidView";
import { FontAwesome } from "@expo/vector-icons";

const CountryScreen = ({ route }) => {
  const { country, isLoading, isError, message } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { name } = route.params;

  useEffect(() => {
    dispatch(getCountryByName(name));
  }, [dispatch, name]);

  if (isLoading) {
    return (
      <ActivityIndicator
        size="large"
        style={{ alignItems: "center", justifyContent: "center", position: "absolute", left: 0, bottom: 0, right: 0, top: 0 }}
        animating
      />
    );
  }

  if (isError) {
    return <Text>{message}</Text>;
  }

  return (
    <SafeAreaView style={[SafeAndroidView.AndroidSafeArea, styles.container]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome color="#2196F3" name="chevron-left" size={20} style={{ marginBottom: 20 }} />
      </TouchableOpacity>
      <Text style={styles.text}>{country?.name.official}</Text>
      <View style={{ alignItems: "center" }}>
        <Image source={{ uri: country?.flags.png }} style={{ width: 300, resizeMode: "contain", height: 160, marginTop: 20 }} />
        <Image source={{ uri: country?.coatOfArms.png }} style={{ width: 300, resizeMode: "contain", height: 160, marginTop: 25 }} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}>
        <Text style={{ fontSize: 22 }}>Continent: </Text>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>{country?.continents[0]}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 22 }}>Capital: </Text>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>{country?.capital[0]}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 22 }}>Status: </Text>
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>{country?.status.charAt(0).toUpperCase() + country?.status.slice(1)}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}>
        {country?.borders?.length > 0 && <Text style={{ fontSize: 22 }}>Borders: </Text>}
        {country?.borders?.length > 0 &&
          country?.borders?.map((border, index) => (
            <Text style={{ fontWeight: "bold", fontSize: 22 }} key={index}>
              {index === country.borders.indexOf(country.borders[country.borders.length - 1]) ? (
                border
              ) : (
                <Text>
                  {border} <Text style={{ color: "#2196F3" }}>| </Text>
                </Text>
              )}
            </Text>
          ))}
      </View>
    </SafeAreaView>
  );
};

export default CountryScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    paddingTop: 60,
    paddingHorizontal: 25,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
