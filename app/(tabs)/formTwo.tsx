import { StyleSheet } from 'react-native';

import PageTwo from '@/components/shad/page-two';
import * as Haptics from "expo-haptics";
import { router } from "expo-router";

export default function FormTwo() {
  return (
    <PageTwo
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
        setTimeout(() => {
        }, 1);
      },
    }}
  />
  );
}
