import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

const Page = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18 }}>Blog Page</Text>
      <Button onPress={() => router.push("/blog/1")} title="Go back Block 1" />
      <Button onPress={() => router.push("/blog/2")} title="Go back Block 2" />
      <Button
        onPress={() => router.push("/blog/3?auther=Sneha")}
        title="Go back Block 3"
      />
      <Button onPress={() => router.back()} title="Go back Home Page" />
    </View>
  );
};

export default Page;
