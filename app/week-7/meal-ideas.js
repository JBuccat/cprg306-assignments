"use client";

import { useEffect, useState } from "react";

function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [selectedMealId, setSelectedMealId] = useState(null);
    const [mealDetails, setMealDetails] = useState(null);

    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
            );
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error("Error fetching meal ideas:", error);
            return [];
        }
    };

    const fetchMealDetails = async (idMeal) => {
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
            );
            const data = await response.json();
            return data.meals[0] || null;
        } catch (error) {
            console.error("Error fetching meal details:", error);
            return null;
        }
    };

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    };

    const loadMealDetails = async (idMeal) => {
        const details = await fetchMealDetails(idMeal);
        setMealDetails(details);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    useEffect(() => {
        if (selectedMealId) {
            loadMealDetails(selectedMealId);
        }
    }, [selectedMealId]);

    return (
        <div>
            <h1 className="text-2xl font-bold text-white mb-6">Meal Ideas</h1>
            {meals.length === 0 ? (
                <h2 className="text-xl text-white">No meal ideas found for {ingredient}</h2>
            ) : (
                <div>
                    <h2 className="text-xl text-white">Meal ideas using {ingredient}:</h2>
                    <ul>
                        {meals.map((meal) => (
                            <li
                                className="p-4 bg-gray-800 rounded mb-2 text-white cursor-pointer hover:bg-gray-700 hover:shadow-lg transition duration-300"
                                key={meal.idMeal}
                                onClick={() => setSelectedMealId(meal.idMeal)}
                            >
                                <h3>{meal.strMeal}</h3>
                                {selectedMealId === meal.idMeal && mealDetails && (
                                    <div className="mt-4 p-4 bg-gray-700 rounded">
                                        <h4 className="text-lg font-bold">Ingredients:</h4>
                                        <ul className="list-disc list-inside">
                                            {Object.keys(mealDetails)
                                                .filter(
                                                    (key) =>
                                                        key.startsWith("strIngredient") &&
                                                        mealDetails[key]
                                                )
                                                .map((key) => (
                                                    <li key={key}>
                                                        {mealDetails[key]} -{" "}
                                                        {mealDetails[`strMeasure${key.slice(13)}`]}
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default MealIdeas;
