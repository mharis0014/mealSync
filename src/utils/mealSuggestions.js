export function getSuggestedMeals(meals, child) {
    if (!meals || !child) {
        return [];
    }

    // Step 1: Only active meals
    const activeMeals = meals.filter((meal) => meal.isActive);

    // Step 2: Remove meals that contain any of the child's allergens
    const safeMeals = activeMeals.filter((meal) =>
        !meal.allergens.some((allergen) => child.allergens.includes(allergen))
    );

    // Step 3: Rank by dietary preference match
    const ranked = safeMeals.sort((a, b) => {
        const aMatch = a.dietaryTags.includes(child.dietaryPreference) ? 1 : 0;
        const bMatch = b.dietaryTags.includes(child.dietaryPreference) ? 1 : 0;
        return bMatch - aMatch;
    });

    // Step 4: Return top 3
    return ranked.slice(0, 3);
}