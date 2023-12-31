import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { getFeatured, getRestaurants } from "../client";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [featuredData, setFeaturedData] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    getFeatured().then((data) => setFeaturedData(data));
  }, []);

  return (
    <SafeAreaView className="bg-white ">
      {/* Header */}
      <View className="flex-row pb-2 items-center mx-4 space-x-2 ">
        <Image
          source={{
            uri: "https://shorturl.at/dnwIO",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row  items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2  bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        className=" bg-gray-200"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured Rows*/}
        {featuredData?.map((category) => {
          return (
            <FeaturedRow
              key={category.id}
              id={category.id}
              title={category.name}
              description={category.short_description}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
