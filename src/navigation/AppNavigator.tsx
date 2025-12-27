import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DiscoveryScreen from "../screens/DiscoveryScreen";
import ProductReviewsScreen from "../screens/ProductReviewsScreen";

import CommunityDetail from "../screens/CommunityDetail";

export interface Community {
    id: string;
    name: string;
    category: string;
    members: string;
    image: string;
}

export type RootStackParamList = {
    Discovery: undefined;
    Community: { community: Community };
    Reviews: { community: Community };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Discovery">
            <Stack.Screen name="Discovery" component={DiscoveryScreen} />
            <Stack.Screen name="Community" component={CommunityDetail} />
            <Stack.Screen name="Reviews" component={ProductReviewsScreen} />
        </Stack.Navigator>
    );
}
