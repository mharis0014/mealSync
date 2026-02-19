import React, { createContext, useContext, useReducer } from 'react';
import mealsData from '../mock-data/meals.json';
import childrenData from '../mock-data/children.json';

const MealContext = createContext();

const initialState = {
    meals: mealsData,
    children: childrenData,
    selectedChildId: childrenData[0].id,
};

function mealReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_MEAL':
            return {
                ...state,
                meals: state.meals.map((meal) =>
                    meal.id === action.payload
                        ? { ...meal, isActive: !meal.isActive }
                        : meal
                ),
            };
        case 'SET_SELECTED_CHILD':
            return {
                ...state,
                selectedChildId: action.payload,
            };
        default:
            return state;
    }
}

export function MealProvider({ children }) {
    const [state, dispatch] = useReducer(mealReducer, initialState);

    return (
        <MealContext.Provider value={{ state, dispatch }}>
            {children}
        </MealContext.Provider>
    );
}

export function useMealContext() {
    const context = useContext(MealContext);
    if (!context) {
        throw new Error('useMealContext must be used within a MealProvider');
    }
    return context;
}