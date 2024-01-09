import React from "react";
import { View, Text, Pressable } from "react-native";
import { useAuth } from "@realm/react";
export const LoginComponent = () => {
  // Calling `useAuth()` requires AppProvider to be a parent
  const { logInWithAnonymous, result } = useAuth();
  return (
    <View>
      <Pressable onPress={logInWithAnonymous}>
        <Text>Log In</Text>
      </Pressable>
      {result.error && <Text>{result.error.message}</Text>}
    </View>
  );
};
