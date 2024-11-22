import * as Notifications from "expo-notifications";
import { StyleSheet, View } from "react-native";

import PageTwo from "@/components/shad/page-two";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import PageThree from "@/components/shad/page-three";
import { Button } from "@react-navigation/elements";
export default function FormThree() {
  return (
    <>
      <Button
        onPress={async () => {
          console.log("Requesting permissions...");
          await Notifications.requestPermissionsAsync();
        }}
        title="Notify"
      >
        Notify
      </Button>
      <PageThree
        notify={notify}
        onButtonClick={async (size: number) => {
          if (process.env.EXPO_OS !== "web") {
            Haptics.impactAsync(
              [
                Haptics.ImpactFeedbackStyle.Light,
                Haptics.ImpactFeedbackStyle.Medium,
                Haptics.ImpactFeedbackStyle.Heavy,
              ][size]
            );
          }
        }}
        navigate={router.navigate}
        dom={{
          contentInsetAdjustmentBehavior: "automatic",
          automaticallyAdjustsScrollIndicatorInsets: true,
          onLoadEnd(event) {
            // Keep the splash screen open until the DOM content has loaded.
            setTimeout(() => {}, 1);
          },
        }}
      />
    </>
  );
}
async function notify() {
  if (process.env.EXPO_OS === "web") {
    alert("New Order (from a DOM component 🚀)");
    return;
  }

  await Notifications.requestPermissionsAsync();

  await Notifications.scheduleNotificationAsync({
    identifier: "hello",
    content: {
      title: "New Order",
      body: "(from a DOM component 🚀)",
    },
    trigger: null,
  });
}
