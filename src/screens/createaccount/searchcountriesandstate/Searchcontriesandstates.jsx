import { ScrollView, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import styles from "./Searchcontriesandstates.module";
import Createaccountheader from "../header/CreatePageHeader";
import { SearchBar } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import axios from "axios";

const Searchcontriesandstates = ({ navigation, route }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchcat = route.params.category;
  const selectedCountry = route.params.selectedCountry;

  const handleSearch = (text) => {
    setSearchText(text);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://countriesnow.space/api/v0.1/countries/states");
        const data = response.data.data;
        setAllCountries(data);
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, [searchcat]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (selectedCountry) {
          const response = await axios.post(
            "https://countriesnow.space/api/v0.1/countries/states",
            {
              country: selectedCountry,
            }
          );
          const statesData = response.data.data.states;
          setSearchResults(statesData);
        }
      } catch (error) {
        console.error("Error fetching states data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCountry]);

  useEffect(() => {
    if (searchText.length > 0) {
      const filteredResults = allCountries.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults(allCountries);
    }
  }, [searchText, allCountries]);

  const handleSeatchItemClick = (selecteditem) => {
    navigation.navigate("Educationaldetails", { selecteditem });
  };

  const handleSeatchStateItemClick = (selectedstateitem) => {
    navigation.navigate("Educationaldetails", { selectedstateitem });
  };

  return (
    <View style={styles.container}>
      <Createaccountheader navigation={navigation} name={`Search ${searchcat}`} />

      <View style={styles.searchbar}>
        <View style={{ alignItems: "center" }}>
          <SearchBar
            placeholder="Search"
            onChangeText={handleSearch}
            value={searchText}
            placeholderTextColor="blue"
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.inputContainer}
            platform="default"
            searchIcon={<FontAwesome name="search" color="blue" size={16} />}
          />
        </View>
      </View>

      <View>
        <ScrollView>
          <View style={styles.resultContainer}>
            {isLoading ? (
              <ActivityIndicator size="large" color="blue" />
            ) : (
              searchResults.map((item, i) => (
                <TouchableOpacity
                  key={i}
                  style={{ alignItems: "center" }}
                  onPress={() =>
                    searchcat === "countries"
                      ? handleSeatchItemClick(item)
                      : handleSeatchStateItemClick(item)
                  }
                >
                  <View style={styles.resultItem}>
                    <Text style={styles.countryName}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Searchcontriesandstates;
