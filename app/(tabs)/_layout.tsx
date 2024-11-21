import { Tabs } from 'expo-router';

import { Platform, Text, View } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FormProvider } from '@/hooks/useFormProvider';



export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <FormProvider>
      <View style={{flex: 1, backgroundColor:'lightblue', padding: 10, paddingInline: 40, maxHeight: '5rem'}}>
        <h1> Add Child </h1>
      </View>

        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            tabBarLabelStyle: { color: 'black' },
            
            headerShown: false,
            tabBarButton: HapticTab,
            tabBarBackground: TabBarBackground,
            tabBarPosition: 'left',
            sceneStyle: { padding: 20 },
            tabBarStyle: Platform.select({
              ios: {
                // Use a transparent background on iOS to show the blur effect
                position: 'absolute',
              },
              default: {},
            }),
          }}>
          <Tabs.Screen
            name="index"
            options={{
              title: '1. Personal Info',
            }}
          />
          <Tabs.Screen
            name="formTwo"
            options={{
              title: '2. Care History',
            }}
          />
          <Tabs.Screen
            name="formThree"
            options={{
              title: '3. Contact Details',
            }}
          />
        </Tabs>

    </FormProvider>
  );
}
