import { useEffect } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CountryItem from "../components/CountryItem";
import SearchCountry from "../components/SearchCountry";
import { getCountries } from "../redux/actionCreators";
import SafeAndroidView from "../SafeAndroidView";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { countries, country, isLoading, isError, message } = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  if (isLoading) {
    return (
      <ActivityIndicator
        size="large"
        style={{ alignItems: "center", justifyContent: "center", position: "absolute", left: 0, bottom: 0, right: 0, top: 0 }}
        animating
      />
    );
  }

  return (
    <>
      {isError && !country ? (
        <SafeAreaView style={SafeAndroidView.AndroidSafeArea}>
          <SearchCountry />
          <View style={styles.errorContainer}>
            <FontAwesome name="exclamation-triangle" size={45} color="white" style={{ paddingLeft: 20 }} />
            <Text style={styles.text}>Not found...</Text>
          </View>
        </SafeAreaView>
      ) : (
        countries && (
          <SafeAreaView style={SafeAndroidView.AndroidSafeArea}>
            <SearchCountry />
            <FlatList data={countries.slice(0, 30)} keyExtractor={(item) => item.cca2} renderItem={({ item }) => <CountryItem item={item} />} />
          </SafeAreaView>
        )
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 10,
    backgroundColor: "red",
    padding: 15,
    borderRadius: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 20,
  },
});
