import React from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    StatusBar,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import LinearGradient from "react-native-linear-gradient";

type ReviewsRouteProp = RouteProp<RootStackParamList, "Reviews">;

export default function ProductReviewsScreen({ route }: { route: ReviewsRouteProp }) {
    const { community } = route.params;

    interface Review {
        id: string;
        title: string;
        rating: number;
        reviewer: string;
        summary: string;
        category: string;
        image: string;
    }

    /** 🔥 Extended Review Data - 10 Items Total */
    const reviews: Review[] = [
        {
            id: "1",
            title: "Samsung Galaxy S23 Ultra",
            rating: 5,
            reviewer: "Amit Sharma",
            summary: "Amazing zoom camera and battery life. Great for gaming and photography.",
            category: "Smartphones",
            image: "https://images.unsplash.com/photo-1603899122585-4cc8c9835f06?auto=format&fit=crop&w=600&q=60",
        },
        {
            id: "2",
            title: "iPhone 14 Pro",
            rating: 4,
            reviewer: "Sneha Kapoor",
            summary: "Dynamic Island is cool. Camera is sharp. Battery could be better.",
            category: "Smartphones",
            image: "https://images.unsplash.com/photo-1592899677977-9c1f1d5d2959?auto=format&fit=crop&w=600&q=60",
        },
        {
            id: "3",
            title: "OnePlus 11",
            rating: 4,
            reviewer: "Rahul Verma",
            summary: "Fast performance & clean UI. Best value flagship right now.",
            category: "Smartphones",
            image: "https://images.unsplash.com/photo-1610434893587-8c3ba6cae584?auto=format&fit=crop&w=600&q=60",
        },
        {
            id: "4",
            title: "MacBook Air M2",
            rating: 5,
            reviewer: "Priya Desai",
            summary: "Lightweight, powerful, and the battery life feels endless.",
            category: "Laptops",
            image: "https://images.unsplash.com/photo-1587614295999-fc178b3f5abe?auto=format&fit=crop&w=600&q=60",
        },
        {
            id: "5",
            title: "Dell XPS 13",
            rating: 4,
            reviewer: "Kiran Patel",
            summary: "Premium design and great performance, but runs a little warm.",
            category: "Laptops",
            image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8ee?auto=format&fit=crop&w=600&q=60",
        },
        {
            id: "6",
            title: "Nike Air Max 270",
            rating: 5,
            reviewer: "Rohit Singh",
            summary: "Super comfortable and stylish. Perfect for daily wear.",
            category: "Fashion",
            image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=60",
        },
        {
            id: "7",
            title: "Adidas Ultraboost 22",
            rating: 4,
            reviewer: "Sanya Malhotra",
            summary: "Insanely soft cushioning, slightly pricey but worth it.",
            category: "Fashion",
            image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=60",
        },
        {
            id: "8",
            title: "Philips Air Fryer XXL",
            rating: 5,
            reviewer: "Geeta Yadav",
            summary: "Healthy cooking alternative. Crispy fries without oil. ❤️",
            category: "Kitchen",
            image: "https://images.unsplash.com/photo-1601042876540-b95d0b7d4aeb?auto=format&fit=crop&w=600&q=60",
        },
        {
            id: "9",
            title: "Bose QuietComfort 45",
            rating: 5,
            reviewer: "Jatin Mehta",
            summary: "Noise cancellation is unmatched. Great for travel & work.",
            category: "Audio",
            image: "https://images.unsplash.com/photo-1518444801739-79d71c36db3d?auto=format&fit=crop&w=600&q=60",
        },
        {
            id: "10",
            title: "Fitbit Charge 6",
            rating: 4,
            reviewer: "Ritika Sharma",
            summary: "Great for fitness tracking but display could be brighter.",
            category: "Fitness",
            image: "https://images.unsplash.com/photo-1589308078055-50cdaa2d9a15?auto=format&fit=crop&w=600&q=60",
        },
    ];

    /** ⭐ Stars Component */
    const Stars = ({ count }: { count: number }) => (
        <Text style={{ color: "#f5b932", fontSize: 16 }}>
            {"⭐".repeat(count)}{" "}
            {"☆".repeat(5 - count)}
        </Text>
    );

    return (
        <LinearGradient colors={["#E4EBF5", "#CCD7E0"]} style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" />

            <View style={{ padding: 20, flex: 1 }}>
                <Image source={{ uri: community?.image }} style={styles.banner} />
                <Text style={styles.title}>{community?.name}</Text>
                <Text style={styles.info}>Category: {community?.category}</Text>
                <Text style={styles.info}>{community?.members} members</Text>

                <FlatList<Review>
                    data={reviews}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.reviewCard}>
                            <Image source={{ uri: item.image }} style={styles.productImg} />
                            <View style={{ flex: 1 }}>
                                <Text style={styles.reviewTitle}>{item.title}</Text>
                                <Stars count={item.rating} />
                                <Text style={styles.reviewer}>by {item.reviewer}</Text>
                                <Text style={styles.summary}>{item.summary}</Text>
                                <Text style={styles.tag}>#{item.category}</Text>
                            </View>
                        </View>
                    )}
                    contentContainerStyle={{ paddingTop: 20 }}
                />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    banner: {
        width: "100%",
        height: 200,
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: "#1a1d21",
        marginBottom: 4,
    },
    info: { fontSize: 16, color: "#555", marginBottom: 4 },
    reviewCard: {
        flexDirection: "row",
        backgroundColor: "#E4EBF5",
        padding: 16,
        borderRadius: 20,
        marginBottom: 18,
        elevation: 5,
        borderWidth: 1,
        borderColor: "#fff",
        gap: 12,
    },
    productImg: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    reviewTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#2C2F33",
    },
    reviewer: { fontSize: 14, color: "#555", marginTop: 4 },
    summary: { marginTop: 6, fontSize: 14, color: "#444", lineHeight: 18 },
    tag: {
        marginTop: 4,
        fontSize: 12,
        backgroundColor: "#d9e3f0",
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 8,
        width: "auto",
        alignSelf: "flex-start",
        color: "#333",
        fontWeight: "600",
    },
});
