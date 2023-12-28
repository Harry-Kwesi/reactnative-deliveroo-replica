import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* categorycard */}
      <CategoryCard
        imgUrl={
          "https://images.pexels.com/photos/19532105/pexels-photo-19532105/free-photo-of-meat-rice-and-vegetables.jpeg?auto=compress&cs=tinysrgb&w=800 "
        }
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/19532105/pexels-photo-19532105/free-photo-of-meat-rice-and-vegetables.jpeg?auto=compress&cs=tinysrgb&w=800"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/19532105/pexels-photo-19532105/free-photo-of-meat-rice-and-vegetables.jpeg?auto=compress&cs=tinysrgb&w=800"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/19532105/pexels-photo-19532105/free-photo-of-meat-rice-and-vegetables.jpeg?auto=compress&cs=tinysrgb&w=800"
        title="Testing1"
      />
      <CategoryCard
        imgUrl="https://images.pexels.com/photos/19532105/pexels-photo-19532105/free-photo-of-meat-rice-and-vegetables.jpeg?auto=compress&cs=tinysrgb&w=800"
        title="Testing1"
      />
    </ScrollView>
  );
}
