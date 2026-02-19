import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useMealContext } from '../context/MealContext';
import ChildSelector from '../components/ChildSelector';
import SuggestionStrip from '../components/SuggestionStrip';
import MealCard from '../components/MealCard';

export default function MealMenuScreen() {
    const { state } = useMealContext();

    const activeMeals = state.meals.filter((meal) => meal.isActive);

    const ListHeader = () => (
        <View>
            <ChildSelector />
            <SuggestionStrip />
            <Text style={styles.sectionTitle}>All Meals</Text>
        </View>
    );

    const ListEmpty = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No active meals available</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={activeMeals}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MealCard meal={item} />}
                ListHeaderComponent={ListHeader}
                ListEmptyComponent={ListEmpty}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 10,
    },
    emptyContainer: {
        padding: 32,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 14,
        color: '#888',
    },
});