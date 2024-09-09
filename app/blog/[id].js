import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter, useLocalSearchParams, Stack } from "expo-router";

const Page = () => {
  const router = useRouter();
  const { id, auther } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerTitle: `Article ${id}` }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20 }}>Blog Post details {id}</Text>
        <Text style={{ fontSize: 18, color: "green" }}>
          Blog written by {auther}
        </Text>
        <Button onPress={() => router.back()} title="Go back Home Page" />
      </View>
    </>
  );
};

export default Page;
