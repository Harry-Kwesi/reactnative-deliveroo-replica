import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import {
  ArrowLongRightIcon,
  ArrowUpRightIcon,
} from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
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
        <RestaurantCard
          id="123"
          imgUrl="https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg?auto=compress&cs=tinysrgb&w=800"
          title="Enjoyable Jollof Rice"
          rating={4.5}
          genre="Ghanaian"
          address="123 Main Street"
          shortz_description="This is a title description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg?auto=compress&cs=tinysrgb&w=800"
          title="Enjoyable Jollof Rice"
          rating={4.5}
          genre="Ghanaian"
          address="123 Main Street"
          shortz_description="This is a title description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="123"
          imgUrl="https://images.pexels.com/photos/13915043/pexels-photo-13915043.jpeg?auto=compress&cs=tinysrgb&w=800"
          title="Enjoyable Jollof Rice"
          rating={4.5}
          genre="Ghanaian"
          address="123 Main Street"
          shortz_description="This is a title description"
          dishes={[]}
          long={20}
          lat={0}
        />
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
