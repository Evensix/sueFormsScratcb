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
      <View style={{ backgroundColor:'white', padding: 10, paddingInline: 40, maxHeight: '5rem', borderBottomColor: 'black', borderBottomWidth: 1}}>
        <Text> Add Child </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}> Chole Alster </Text>
      </View>

        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            tabBarLabelStyle: { color: 'black' },
            tabBarIcon: () => null,
            headerShown: false,
            tabBarButton: HapticTab,
            tabBarBackground: TabBarBackground,
            tabBarPosition: 'left',
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
