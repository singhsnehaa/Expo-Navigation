import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

const Page = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18 }}>Feed Page</Text>
      {/* <Button onPress={() => router.back()} title="Go back Home Page" /> */}
    </View>
  );
};

export default Page;
