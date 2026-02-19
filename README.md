# MealSync

A React Native (Expo) app that helps parents choose safe, personalized meals for their children based on allergen profiles and dietary preferences.

## Features

- **Meal Menu Screen** — Browse active meals with allergen badges and cuisine tags
- **Suggested for You** — Top 3 personalized meal suggestions based on the selected child's allergens and dietary preferences
- **Child Profiles** — Switch between children to see tailored suggestions instantly
- **Admin Screen** — Toggle meals active/inactive, changes reflect in real-time across the app

## Tech Stack

- React Native with Expo
- React Navigation (Bottom Tabs)
- Context API + useReducer for state management

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Expo CLI (`npm install -g expo-cli`)

### Installation
```bash
git clone https://github.com/YOUR_USERNAME/MealSync.git
cd MealSync
npm install
npx expo start
```

Scan the QR code with Expo Go (Android) or Camera app (iOS) to run on your device, or press `w` for web.

## Project Structure
```
src/
├── mock-data/        # Static JSON data (meals, children)
├── context/          # MealContext with useReducer
├── utils/            # Suggestion logic (pure JS)
├── screens/          # MealMenuScreen, AdminScreen
└── components/       # MealCard, ChildSelector, SuggestionStrip
```

## Suggestion Algorithm

Located in `src/utils/mealSuggestions.js`:

1. Filter out inactive meals
2. Remove meals containing any of the child's allergens
3. Rank remaining meals by dietary preference match
4. Return top 3 results

Wrapped in `useMemo` to avoid unnecessary recalculations.

## What I Would Improve With More Time

- **Search & Filter** — Add the ability to filter meals by cuisine tag or search by name, making it easier to find specific meals in a larger dataset
- **Animations** — Add subtle transitions when switching between child profiles and when the suggestion strip updates
- **Accessibility** — Add proper accessibility labels, roles, and screen reader support across all components