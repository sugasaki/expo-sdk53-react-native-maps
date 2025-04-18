import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === 'dark' ? '#fff' : '#000',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            zIndex: 1,
          },
          default: {
            zIndex: 1,
          },
        }),
      }}
      initialRouteName='index'
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Map',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name='map.fill' color={color} />,
        }}
      />
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name='house.fill' color={color} />,
        }}
      />
    </Tabs>
  );
}
