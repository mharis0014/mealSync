import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useMealContext } from '../context/MealContext';

export default function ChildSelector() {
    const { state, dispatch } = useMealContext();

    const handleSelect = (childId) => {
        dispatch({ type: 'SET_SELECTED_CHILD', payload: childId });
    };

    return (
        <View style={styles.container}>
            {state.children.map((child) => (
                <TouchableOpacity
                    key={child.id}
                    style={[
                        styles.button,
                        state.selectedChildId === child.id && styles.activeButton,
                    ]}
                    onPress={() => handleSelect(child.id)}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            state.selectedChildId === child.id && styles.activeButtonText,
                        ]}
                    >
                        {child.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 10,
    },
    button: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
    },
    activeButton: {
        backgroundColor: '#1976d2',
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333',
    },
    activeButtonText: {
        color: '#fff',
    },
});