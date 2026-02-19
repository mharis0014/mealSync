import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MealCard({ meal }) {
    return (
        <View style={styles.card}>
            <View style={styles.topRow}>
                <Text style={styles.name}>{meal.name}</Text>
                <Text style={styles.price}>${meal.price.toFixed(2)} CAD</Text>
            </View>
            <Text style={styles.cuisine}>{meal.cuisineTag}</Text>
            <View style={styles.badgeRow}>
                {meal.allergens.length > 0 ? (
                    meal.allergens.map((allergen) => (
                        <View key={allergen} style={styles.badge}>
                            <Text style={styles.badgeText}>{allergen}</Text>
                        </View>
                    ))
                ) : (
                    <View style={styles.safeBadge}>
                        <Text style={styles.safeBadgeText}>No Allergens</Text>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 10,
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
    },
    price: {
        fontSize: 15,
        fontWeight: '600',
        color: '#2e7d32',
    },
    cuisine: {
        fontSize: 13,
        color: '#666',
        marginTop: 4,
    },
    badgeRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
        gap: 6,
    },
    badge: {
        backgroundColor: '#ffebee',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    badgeText: {
        fontSize: 11,
        color: '#c62828',
        fontWeight: '600',
    },
    safeBadge: {
        backgroundColor: '#e8f5e9',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    safeBadgeText: {
        fontSize: 11,
        color: '#2e7d32',
        fontWeight: '600',
    },
});