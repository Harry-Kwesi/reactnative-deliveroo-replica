import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import {
  ArrowLongRightIcon,
  ArrowUpRightIcon,
} from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import { getFeatured } from "../client";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurantdata, setRestaurantdata] = useState([]);

  useEffect(() => {
    getFeatured(id).then((data) => setRestaurantdata(data?.restaurants));
  }, [id]);

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
        <ArrowLongRightIcon color="#00CCBB" />
      </View>

      <Text style={styles.descriptionText}>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollViewContent}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {/* RestaurantCard */}
        {restaurantdata?.length > 0 &&
          restaurantdata?.map((restaurant) => (
            <RestaurantCard
              key={restaurant._id} // Make sure to set a unique key for each item in the array
              id={restaurant._id}
              imgUrl={restaurant.image}
              address="123 main street"
              title={restaurant.title}
              dishes={restaurant.dishes}
              rating={restaurant.rating}
              short_description={restaurant.short_description}
              genre={restaurant.type?.name}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  descriptionText: {
    fontSize: 12,
    color: "#888",
    paddingHorizontal: 14,
  },
  scrollView: {
    paddingTop: 4,
  },
  scrollViewContent: {
    paddingHorizontal: 15,
  },
});

export default FeaturedRow;
