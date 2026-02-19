import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useMealContext } from '../context/MealContext';
import { getSuggestedMeals } from '../utils/mealSuggestions';
import MealCard from './MealCard';

export default function SuggestionStrip() {
    const { state } = useMealContext();

    const selectedChild = state.children.find(
        (child) => child.id === state.selectedChildId
    );

    const suggestions = useMemo(
        () => getSuggestedMeals(state.meals, selectedChild),
        [state.meals, selectedChild]
    );

    if (suggestions.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>
                    No suggestions available for {selectedChild?.name}
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Suggested for You</Text>
            {suggestions.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 8,
        paddingBottom: 12,
        backgroundColor: '#e3f2fd',
        marginBottom: 8,
    },
    header: {
        fontSize: 18,
        fontWeight: '700',
        paddingHorizontal: 16,
        marginBottom: 8,
        color: '#1565c0',
    },
    emptyContainer: {
        padding: 16,
        backgroundColor: '#e3f2fd',
        marginBottom: 8,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 14,
        color: '#666',
    },
});