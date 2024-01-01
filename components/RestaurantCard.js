import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../client";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingContent}>
            <StarIcon color="green" opacity={0.5} size={22} />
            <Text style={styles.ratingText}>
              <Text style={styles.greenText}>{rating}</Text>.{genre}
            </Text>
          </View>
        </View>
        <View style={styles.addressContainer}>
          <View style={styles.addressContent}>
            <MapPinIcon color="gray" opacity={0.4} size={22} />
            <Text style={styles.addressText}>Nearby.{address}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    marginRight: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 84,
    width: "100%",
    borderRadius: 4,
  },
  contentContainer: {
    paddingHorizontal: 3,
    paddingBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 4,
    paddingHorizontal: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ratingContent: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 2,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  ratingText: {
    fontSize: 12,
    color: "gray",
    paddingHorizontal: 5,
  },
  greenText: {
    color: "green",
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addressContent: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 1,
    paddingHorizontal: 5,
  },
  addressText: {
    fontSize: 12,
    color: "gray",
    paddingHorizontal: 5,
  },
});

export default RestaurantCard;
