import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: imgUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginRight: 2,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 8, // Adjust the borderRadius as needed
  },
  title: {
    position: "absolute",
    bottom: 1,
    left: 1,
    color: "white",
    fontWeight: "bold",
  },
});

export default CategoryCard;
