import React, { useState, useMemo } from "react";
import {
    FlatList,
    Pressable,
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { useNavigation } from "@react-navigation/native";

type NavProp = NativeStackNavigationProp<RootStackParamList, "Discovery">;


// 🎯 Sample Data
const communities = [
    {
        id: "1",
        name: "Smartphones Hub",
        category: "Electronics",
        members: "12,400",
        image: "https://images.unsplash.com/photo-1510552776732-03e61cf4b144?auto=format&fit=crop&w=600&q=60",
    },
    {
        id: "2",
        name: "Fashion Trends India",
        category: "Clothing & Style",
        members: "8,900",
        image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=600&q=60",
    },
    {
        id: "3",
        name: "Kitchen Essentials Guide",
        category: "Home & Appliances",
        members: "6,750",
        image: "https://images.unsplash.com/photo-1556912172-45b7abe8ba63?auto=format&fit=crop&w=600&q=60",
    },
    {
        id: "4",
        name: "Health & Wellness Zone",
        category: "Lifestyle",
        members: "5,300",
        image: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=600&q=60",
    },
];

// 🏷️ Available Categories
const categories = ["All", "Electronics", "Clothing & Style", "Home & Appliances", "Lifestyle"];

export default function DiscoveryScreen() {
    const navigation = useNavigation<NavProp>();

    const [searchText, setSearchText] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    // 🎛️ Filter Logic
    const filteredCommunities = useMemo(() => {
        return communities.filter((item) => {
            const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
            const matchesCategory = activeCategory === "All" || item.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchText, activeCategory]);

    // 📌 Card Item
    const renderCard = ({ item }: { item: any }) => (
        <Pressable
            onPress={() => navigation.navigate("Reviews", { community: item })}

            style={({ pressed }) => [
                styles.card,
                pressed && { transform: [{ scale: 0.96 }], opacity: 0.85 },
            ]}
        >
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.members}>{item.members} members</Text>
            </View>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Discover Communities</Text>

            {/* 🔍 Search Bar */}
            <TextInput
                placeholder="Search communities..."
                value={searchText}
                onChangeText={setSearchText}
                style={styles.searchInput}
            />

            {/* 🏷️ Category Filters */}
            <View style={styles.categoryContainer}>
                {categories.map((cat) => (
                    <TouchableOpacity
                        key={cat}
                        onPress={() => setActiveCategory(cat)}
                        style={[styles.categoryButton, activeCategory === cat && styles.activeCategory]}
                    >
                        <Text style={{ color: activeCategory === cat ? "#fff" : "#222" }}>{cat}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* 📋 List */}
            <FlatList
                data={filteredCommunities}
                keyExtractor={(item) => item.id}
                renderItem={renderCard}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 24, backgroundColor: "#E7EBF3" },
    heading: { fontSize: 30, fontWeight: "800", marginBottom: 10 },

    // 🔍 Search
    searchInput: {
        padding: 12,
        borderRadius: 12,
        backgroundColor: "#FFFFFF",
        marginVertical: 10,
        borderColor: "#ddd",
        borderWidth: 1,
    },

    // 🏷️ Categories
    categoryContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        marginBottom: 15,
    },
    categoryButton: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 20,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
    },
    activeCategory: {
        backgroundColor: "#000",
        borderColor: "#000",
    },

    // 📌 Cards
    card: {
        backgroundColor: "white",
        padding: 18,
        borderRadius: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 3,
        flexDirection: "row",
        gap: 16,
    },
    cardImage: { width: 70, height: 70, borderRadius: 14 },

    // 🖊️ Text
    title: { fontSize: 18, fontWeight: "700" },
    category: { fontSize: 14, marginTop: 2, color: "#555" },
    members: { fontSize: 12, marginTop: 4, color: "#777" },
});
