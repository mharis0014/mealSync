import React from 'react';
import { View, Text, FlatList, Switch, StyleSheet } from 'react-native';
import { useMealContext } from '../context/MealContext';

export default function AdminScreen() {
    const { state, dispatch } = useMealContext();

    const handleToggle = (mealId) => {
        dispatch({ type: 'TOGGLE_MEAL', payload: mealId });
    };

    const renderMealItem = ({ item }) => (
        <View style={styles.mealRow}>
            <View style={styles.mealInfo}>
                <Text style={styles.mealName}>{item.name}</Text>
                <Text style={styles.mealStatus}>
                    {item.isActive ? 'Active' : 'Inactive'}
                </Text>
            </View>
            <Switch
                value={item.isActive}
                onValueChange={() => handleToggle(item.id)}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Manage Meals</Text>
            <FlatList
                data={state.meals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingTop: 16,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    mealRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 8,
        borderRadius: 8,
    },
    mealInfo: {
        flex: 1,
    },
    mealName: {
        fontSize: 16,
        fontWeight: '600',
    },
    mealStatus: {
        fontSize: 13,
        color: '#888',
        marginTop: 4,
    },
});